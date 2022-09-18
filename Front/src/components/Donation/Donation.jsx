import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Donation.css';
import DonationImage from '../assets/images/donate.png'
import { Button, Modal, Input } from 'react-bootstrap';

const Donation = () => {

    const [donation,setDonation]=useState(
        {
            description:'',
            date:'',
            time:'',
            location:''
        });
        const param=useParams();

useEffect(()=>{
    console.log();
})


    return (

        <div className='donationContainer'>
            <div class="wrapper rounded d-flex align-items">
                <div class="bg-yellow">
                    <img src={DonationImage} id='donationImage' alt="donation" />

                    {/* <div class="text-white"> <span class="far fa-envelope"></span> </div>
        <div class="pt-5 cursive"> Please describe your product idea in a nutshell </div>
        <div class="pt-sm-5 pt-5 cursive mt-sm-5"> We need your email to reach you back </div> */}
                </div>
                <div class="contact-form">
                    <div class="h3">Donation Form</div>
                    <form>
                        <div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">others</label> <textarea name="voluntering type" class="form-control" required></textarea> </div>
                        <div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">Date</label> <input type='date' class="form-control" required></input> </div>
                        <div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">time</label> <input type='time' class="form-control" required></input> </div>
                        <div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">location</label> <input type='text' class="form-control" required></input> </div>
                        <div className='controls'>
                            <Button onClick={()=>alert('thank you for your donation')} variant="secondary" style={{ "backgroundColor": "rgb(239 239 239)", "borderRadius": "5px", "color": " #117a8b", "marginRight": "10px", "padding": "2px" }} >
                                create
                            </Button>
                            <Button  variant="secondary" style={{ "backgroundColor": "#bf2727", "color": "white", "padding": "2px" }} >
                                Close
                            </Button>
                        </div>

                        {/* <div class="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5 ButtonsContainer">
                <button class="btn btn-default"> Cancel </button>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"> Submit </button>
            </div> */}
                    </form>
                </div>
            </div>
            {/* <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">Thank You <span class="fas fa-heart"></span> </h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="ps-2">Thank You for sharing your views with us. We will get back to you as soon as possible.</div>
            </div>
        </div>
    </div>
</div> */}
        </div>
    )
}
export default Donation;