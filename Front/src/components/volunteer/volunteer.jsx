import './volunteer.scss';
import VolunteerImage from '../assets/images/volunteer.jpg'
import { Button } from 'react-bootstrap';

const Volunteer=()=>{
    return(
        <>
          <div className='donationContainer'>
       <div className="wrapper rounded d-flex align-items">
    <div className="bg-yellow">
    <img src={VolunteerImage} id='donationImage' alt="donation" />


    </div>
    <div className="contact-form">
        <div className="h3">volunteering Form</div>
        <form>
			<div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">Date From</label> <input type='date'  className="form-control" required></input> </div>
            <div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">Date to</label> <input type='date'  className="form-control" required></input> </div>
            <div class="form-group pt-3"> <label className='modalLabel' htmlFor="message">Hours</label> <input type='number'  className="form-control" required></input> </div>
           <div className='controls'>
            <Button onClick={()=>alert('thank you ')} variant="secondary" style={{ "backgroundColor": "rgb(239 239 239)", "borderRadius": "5px", "color": " #117a8b", "marginRight": "10px", "padding": "2px" }} >
            create
          </Button>
          <Button variant="secondary" variant="secondary" style={{ "backgroundColor": "#bf2727", "color": "white", "padding": "2px" }} >
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

        </div>
        </>
    )
}
export default Volunteer;