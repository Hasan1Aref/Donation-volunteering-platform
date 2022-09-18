import React, { useState, useEffect } from 'react';
import SessionContext from './SessionContext';
import { setCookie, getCookie, removeCookie } from '../../cookies';
import { toast } from 'react-toastify';

export default function SessionProvider({ children }) {

    const [session, setValue] = useState({
        user: {
            access_token: getCookie('access_token'),
            role: getCookie('role'),
            id:getCookie('id')
        }
    });
    function updateSession(nextSession) {
        let value = typeof nextSession === "function" ?
            nextSession : prevSession => ({ ...prevSession, ...nextSession });
        setValue(value);
    }

    useEffect(() => {
        function initializeSession () {
            let id = getCookie('id');
            let role = getCookie('role');
            let access_token = getCookie('access_token');
            if (access_token) fetch(`http://localhost:8000/users/${id}`, {
                headers: {
                    'access_token': access_token
                }
            }).then(res => res.json()).then(res => {
                let user = { ...res.data, access_token };
                updateSession({ user });
            });
        }
        // console.log(session);
        initializeSession();
        console.log(session);
    }, []);

   

    async function login({ userName, password }) {

        // try to login
        let { error,data,access_token,message } = await fetch('http://localhost:8000/login', {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        }).then(res => res.json());
        // return from the function if you have an error
        if (error )  toast.error(error);
        let user = {...data, access_token };
        if(password==='' || userName==='' || !access_token){
            toast.info(message)
            // toast(message)
           }else{
       
        setCookie('id', data.id);
        setCookie('access_token', access_token);
        setCookie('role',data.role)
        updateSession({ user });
        toast(`Welcome ${data.userName}!`);
        console.log(session)
           }
          
 
    }



    function logout() {
        updateSession({ user: { access_token: null } });
        removeCookie('id');
        removeCookie('access_token');
        removeCookie('role');
    }
    // async function updateUser({ userName, password }) {

    //     // try to login
    //     let { error,data,access_token } = await fetch('http://localhost:8000/login', {
    //         method: "post",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ userName, password })
    //     }).then(res => res.json());

    //     // return from the function if you have an error
    //     if (error || !access_token) return toast.error(error);

    //     // get the data of the loggedin user
    //     // let result = await fetch(`https://reqres.in/api/users/${id}`, {
    //     //     headers: {
    //     //         'access_token': access_token
    //     //     }
    //     // }).then(res => res.json());

    //     let user = {...data, access_token };

    //     setCookie('id', data.id);
    //     setCookie('access_token', access_token);
    //     setCookie('role',data.role)
    //     updateSession({ user });
    //     toast(`Welcome ${data.userName}!`);
    //     console.log(session)
    // }

    const context = {
        session,
        actions: {
            login,
            logout
        }
    }

    return (
        <SessionContext.Provider value={context}>
            {children}
        </SessionContext.Provider>
    )
}