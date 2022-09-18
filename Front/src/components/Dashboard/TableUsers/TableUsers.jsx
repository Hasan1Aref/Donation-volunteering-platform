import { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import './TableUsers.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const TableUsers = () => {
    const [user, setUser] = useState({
        Users: [],
        oneUser: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phoneNumber:'',
            userName:''
        }
    });

    // const [oneDonation, setOneDonation] = useState({})
    function setState(nextState) {
        setUser(prevState => ({
            ...prevState,
            ...nextState
        }))
    }
    const request = async () => {
        await axios.get(`http://localhost:8000/users`).then((response) => {
            console.log(response.data);
            const result = response.data;
            setState({ Users: result });
            console.log('these are the users', result)
            // console.log(donation.Donations)
            // if (response.data) {
            //     if (typeof response[1] === 'object') { setState(response.data); }
            //     else { setState([response.data]); }
            //     console.log(response.data);
            // }
        });
    };

    const UserInfo = async (id) => {
        await axios.get(`http://localhost:8000/users/${id}`).then((response) => {
            // console.log(response.data);
            // if (response) {
            // 	if (typeof response[1] === 'object') { setOneDonation(response.data); console.log(oneDonation) }
            // 	else { setOneDonation([response.data]); }
            // }
            // setOneUser(response);
            // console.log(response.data);
            const result = response.data
            setState({ oneUser: result })
            console.log('this is the result', result)
            // setOneDonation(response)
            // console.log(oneDonation)
            // console.log(oneDonation.firstName)	

        })
    }

    useEffect(() => {
        request()
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async (userId) => {
        setShow(true);
       await UserInfo(userId);
        console.log(userId)

    }
    const handledelete = (userId) => {
        axios.delete(`http://localhost:8000/users/${userId}`).then(response => {
            request()
            console.log(response)
            toast.success(response.data.message)
        })
        
    }


    const tableRow = user.Users.map(user => {
        return (
            <>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.middleName}</td>
                    <td>{user.email}</td>
                    <td>{user.userName}</td>
                    <td>
                        <a onClick={() => handleShow(user.id)} href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></a>
                        {/* <a  href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a> */}
                        <a onClick={() => handledelete(user.id)} href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons">&#xE872;</i></a>

                    </td>
                </tr>
            </>
        )
    })
    return (

        <div class="container ">
            <div className="crud shadow-lg  mb-5 mt-5 bg-body rounded">
                <div class="Row ">

                    <div class="tableTitleUsers">
                        <h2 id='donationstitle' ><b>Users </b></h2>
                        <input id='search' type="search" placeholder="Search Student" aria-label="Search" />

                    </div>


                </div>
                <div class="Row">
                    <div class="table-responsive " >
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>first name </th>
                                    <th>middle name</th>
                                    <th>email </th>
                                    <th>username </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRow}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>user details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >first name :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{user.oneUser.firstName}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >middle name :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{user.oneUser.middleName}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >last name:</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{user.oneUser.lastName}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >email :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{user.oneUser.email}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >username :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{user.oneUser.userName}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >phone:</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{user.oneUser.phoneNumber}</h5>
                                </div>


                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" style={{ "margin-left": "34em", "backgroundColor": "#c13b3b" }} onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    {/* Model Box Finsihs */}
                </div>
            </div>
        </div>)
}
export default TableUsers;
