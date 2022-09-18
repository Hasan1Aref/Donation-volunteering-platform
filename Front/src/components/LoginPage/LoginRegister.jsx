import React, { useContext, useState, useEffect } from 'react';
import {Link,Redirect} from 'react-router-dom'
import SessionContext from '../session/SessionContext';
import './LoginRegister.css';
import { toast } from 'react-toastify';
import axios from 'axios';
export default function LoginPage() {
  const {
    actions: { login }
  } = useContext(SessionContext);

  const [state, setValue] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    userName: '',
    password: '',
    email: ''

  });

  const { firstName, middleName, lastName, phoneNumber, userName, password, email } = state;

  function setState(nextState) {
    setValue(prevState => ({
      ...prevState,
      ...nextState
    }))
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setState({ [name]: value });
  }

  async function handleSubmit(e) {
    console.log(state)
    e.nativeEvent.preventDefault();
    login(state);
  }


  const register = async () => {


    let { error, data, message } = await fetch('http://localhost:8000/register', {
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ firstName, middleName, lastName, phoneNumber, email, userName, password })
    }).then(res => res.json());
    if (error) {
      return toast.error(error)
    }
    if (firstName === '' || middleName === '' || lastName === '' || phoneNumber === '' || userName === '') {
      return toast.error(message)
    }
    toast.success(message);
    console.log(data);
    console.log(message);
  }



  const [addclass, setaddclass] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setaddclass("sign-in")
    }, 200);
    return () =>(
       clearTimeout(timer));
      //  <Redirect to='/login'></Redirect>

  }, []);
  const {
    session: { user: { access_token, role } },
    actions: { logout }
  } = useContext(SessionContext);
  return (
    <div className='loginRegister'>

      <div id="LRcontainer" className={`LRcontainer ${addclass}`}>
        <div class="row">
          <div class="col align-items-center flex-col sign-up">
            <div class="form-wrapper align-items-center">
              <div class="form sign-up">
                {/* <div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" placeholder="first name"/>
						</div>
                        <div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" placeholder="middle name"/>
						</div>
                        <div class="input-group">
							<i class='bx bxs-user'></i>
							<input type="text" placeholder="last name"/>
						</div> */}
                <div class="input-group">
                  <i class='bx bx-mail-send'></i>
                  <input type="firstName" value={state.firstName} name="firstName" onChange={handleChange} placeholder="firstName" />
                </div>
                <div class="input-group">
                  <i class='bx bx-mail-send'></i>
                  <input type="middleName" value={state.middleName} name="middleName" onChange={handleChange} placeholder="middleName" />
                </div>
                <div class="input-group">
                  <i class='bx bx-mail-send'></i>
                  <input type="lastName" value={state.lastName} name="lastName" onChange={handleChange} placeholder="lastName" />
                </div>
                <div class="input-group">
                  <i class='bx bx-mail-send'></i>
                  <input type="phoneNumber" value={state.phoneNumber} name="phoneNumber" onChange={handleChange} placeholder="phoneNumber" />
                </div>
                <div class="input-group">
                  <i class='bx bx-mail-send'></i>
                  <input type="email" value={state.email} name="email" onChange={handleChange} placeholder="Email" />
                </div>
                <div class="input-group">
                  <i class='bx bxs-lock-alt'></i>
                  <input type="text" value={state.userName} name="userName" onChange={handleChange} placeholder="username" />
                </div>
                <div class="input-group">
                  <i class='bx bxs-lock-alt'></i>
                  <input type="password" value={state.password} name="password" onChange={handleChange} placeholder=" password" />
                </div>
                {/* <div class="input-group">
							<i class='bx bxs-lock-alt'></i>
							<input type="password" placeholder=" phone number"/>
						</div> */}
                <button onClick={register}>
                  Sign up
                </button>
                <p>
                  <span>
                    Already have an account?
                  </span>
                  <b onClick={() => setaddclass("sign-in")} class="pointer">
                   <Link to='/login'  style={{"color":"#185a55"}}> Sign in here</Link>
                  </b>
                </p>
              </div>
            </div>

          </div>

          <div class="col align-items-center flex-col sign-in">
            <div class="form-wrapper align-items-center">
              <div class="form sign-in">
                <div class="input-group">
                  <i class='bx bxs-user'></i>
                  <input type="text" name="userName" value={state.userName} onChange={handleChange} placeholder="Username" />
                </div>
                <div class="input-group">
                  <i class='bx bxs-lock-alt'></i>
                  <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" />
                </div>
                <button onClick={handleSubmit}>
                  Sign in
                </button>
                <p>
                  <b>
                    Forgot password?
                  </b>
                </p>
                <p>
                  <span>
                    Don't have an account?
                  </span>
                  <b onClick={() => setaddclass("sign-up")} class="pointer">
                  <Link to='/register' style={{"color":"#185a55"}}> Sign up here</Link>
                  </b>
                </p>
              </div>
            </div>
            <div class="form-wrapper">

            </div>
          </div>
        </div>

        <div class="row content-row">
          <div class="col align-items-center flex-col">
            <div class="text sign-in">
              <h2>
                Welcome
              </h2>

            </div>
            <div class="img sign-in">

            </div>
          </div>

          <div class="col align-items-center flex-col">
            <div class="img sign-up">

            </div>
            <div class="text sign-up">
              <h2>
                Join with us
              </h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}