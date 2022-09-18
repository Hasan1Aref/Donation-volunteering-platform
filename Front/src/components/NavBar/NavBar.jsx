import React, { useContext } from 'react';
import './NavBar.css';
import Profileimage from '../assets/images/myPic.jpg'
import SessionContext from '../session/SessionContext';
import { Link } from 'react-router-dom';
// import $ from "jquery";

const NavBar = () => {
	const {
		session: { user: { access_token, role,userName } },
		actions: { logout }
	  } = useContext(SessionContext);
    return (
        <>
				{access_token&&

<nav class="navbar navbar-expand-xl navbar-dark bg-dark">
{(role=='default')&&<Link to='volunteer'><a><h4 className='comments'>volunteer know</h4></a></Link>}
{(role!='default')&&<a><h4 >Welcome</h4></a>}

	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	{/* <!-- Collection of nav links, forms, and other content for toggling --> */}
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">		
		<form class="navbar-form form-inline">
			<div class="input-group search-box">								
				<input type="text" id="search" class="form-control" placeholder="Search here..."/>
				<span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
			</div>
		</form>
		<div class="navbar-nav ml-auto">
			<a  class="nav-item nav-link active"><i class="fa fa-home"></i><Link to ="/HomeAdmin"><span>Home</span></Link></a>
			{/* <a href="#" class="nav-item nav-link"><i class="fa fa-gears"></i><span>Projects</span></a> */}
			{/* <a href="#" class="nav-item nav-link"><i class="fa fa-users"></i><span>Team</span></a> */}
			{/* <a href="#" class="nav-item nav-link"><i class="fa fa-pie-chart"></i><span>Reports</span></a> */}
			{/* <a href="#" class="nav-item nav-link"><i class="fa fa-briefcase"></i><span>Careers</span></a> */}
			<a href="#" class="nav-item nav-link"><i class="fa fa-envelope"></i><span>Messages</span></a>		
			<a href="#" class="nav-item nav-link"><i class="fa fa-bell"></i><span>Notifications</span></a>
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action"><img src={Profileimage} class="avatar" alt="Avatar"/>{userName} <b class="caret"></b></a>
				<div class="dropdown-menu">
					<a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
					<a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a>
					<a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a>
					<div class="divider dropdown-divider"></div>
					<a href="" class="dropdown-item" onClick={logout}><i class="material-icons">&#xE8AC;</i> Logout</a>
				</div>
			</div>
		</div>

		
	</div>
</nav>
		}
        </>
    )
}
export default NavBar;