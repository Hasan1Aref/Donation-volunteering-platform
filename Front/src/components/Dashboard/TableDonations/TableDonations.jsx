import { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import './TableDonations.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const TableDonations = () => {
    const [donation, setDonation] = useState({
        Donations:[],
        oneDonation:{
            description:'',
            date:'',
            time:'',
            location:''
        }
    });

    // const [oneDonation, setOneDonation] = useState({})
    function setState(nextState) {
        setDonation(prevState => ({
            ...prevState,
            ...nextState
        }))
    }
    const request =async () => {
      await  axios.get(`http://localhost:8000/donations`).then((response) => {
            console.log(response.data);
            const result=response.data;
            setState({Donations:result});
            console.log('these are the donations',result)
            // console.log(donation.Donations)
            // if (response.data) {
            //     if (typeof response[1] === 'object') { setState(response.data); }
            //     else { setState([response.data]); }
            //     console.log(response.data);
            // }
        });
    };

    const donationInfo =async (id) => {
      await  axios.get(`http://localhost:8000/donations/${id}`).then((response) => {
            // console.log(response.data);
            // if (response) {
            // 	if (typeof response[1] === 'object') { setOneDonation(response.data); console.log(oneDonation) }
            // 	else { setOneDonation([response.data]); }
            // }
            // setOneUser(response);
            // console.log(response.data);
                        const result=response.data
                        setState({oneDonation:result})
                        console.log('this is the result',result)
            // setOneDonation(response)
            // console.log(oneDonation)
            // console.log(oneDonation.firstName)	

        })
    }

    useEffect(() => {
        request()
    }, [donation])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (donationId) => {
        setShow(true);
        donationInfo(donationId);
        console.log(donationId)

    }
    const handledelete = (donationId) => {
        axios.delete(`http://localhost:8000/donations/${donationId}`).then(response => {
            request()
            console.log(response)
            toast.success(response.data.message)    
            })
    }


    const tableRow = donation.Donations.map(donation => {
        return (
            <>
                <tr>
                    <td>{donation.id}</td>
                    <td>{donation.description}</td>
                    <td>{donation.date}</td>
                    <td>{donation.time}</td>
                    <td>{donation.location}</td>
                    <td>
                        <a onClick={() => handleShow(donation.id)} href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></a>
                        {/* <a  href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a> */}
                        <a onClick={() => handledelete(donation.id)} href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons">&#xE872;</i></a>

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
                        <h2 id='donationstitle' ><b>Donations </b></h2>
                        <input id='search' type="search" placeholder="Search Student" aria-label="Search" />

                    </div>


                </div>
                <div class="Row">
                    <div class="table-responsive " >
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>description </th>
                                    <th>date</th>
                                    <th>time </th>
                                    <th>location </th>
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
                            <Modal.Title>Donation details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >description :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{donation.oneDonation.description}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >date :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{donation.oneDonation.date}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >time:</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{donation.oneDonation.time}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >PostId :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{donation.oneDonation.PostId}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >UserId :</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{donation.oneDonation.UserId}</h5>
                                </div>
                                <div class="userInfo">
                                    <h5><label style={{ "color": "#c1a44e" }} >created at:</label></h5>
                                    <h5 type="text" style={{ "margin-left": "5px" }} aria-describedby="emailHelp" placeholder="Enter Name">{donation.oneDonation.createdAt}</h5>
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
export default TableDonations;
