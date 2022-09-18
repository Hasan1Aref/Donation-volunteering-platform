import react from 'react';
import './HomeAdmin.css';
import { Link } from 'react-router-dom';


const HomeAdmin=()=>{
    return(
        <div className='HomeAdminContainer'>
       <Link to='donations'>    
        <div className='b1'>
            <h2 className='sections'>Donation</h2>
        </div>
        </Link> 
        <Link to='users'>
        <div className='b2'>
            <h2 className='sections'>Users</h2>
        </div>
        </Link>
        <Link to='posts'>
        <div className='b3'>
            <h2 className='sections'>Posts</h2>
        </div>
        </Link>
        </div>
    )
}
export default HomeAdmin ;