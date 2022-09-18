import React, { useContext } from 'react';
import SessionContext from './session/SessionContext';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import LoginRegister from './LoginPage/LoginRegister'
import LoginRegister2 from './LoginPage/LoginRegister'
import HomeAdmin from './Dashboard/HomeAdmin/HomeAdmin'
import HomeUser from './Post/Post';
import Donation from './Donation/Donation';
import TableDonations from '../components/Dashboard/TableDonations/TableDonations'
import TableUsers from '../components/Dashboard/TableUsers/TableUsers'
import Volunteer from './volunteer/volunteer'
import Posts from './Post/Post'
// import Register from './RegistrationPage/RegistrationPage'
export default function Routes() {
    
    const {
        session: { user: { access_token,role } }
    } = useContext(SessionContext);

    return (
        <Switch>
             <PublicRoute path="/login" component={LoginRegister} role={role}  access_token={access_token}  />
             <PublicRoute path="/register" component={LoginRegister2} role={role}  access_token={access_token}  />
             <PublicRoute path="/" component={LoginRegister} role={role} exact access_token={access_token}  />
            <PrivateRoute path="/HomeAdmin" component={HomeAdmin} access_token={access_token}  role={role}/>
            <PrivateRoute path="/HomeUser" component={HomeUser} access_token={access_token}  role={role}/>
            <PrivateRoute path="/donation" component={Donation} access_token={access_token}  role={role}/>
            <PrivateRoute path="/donations" component={TableDonations} access_token={access_token}  role={role}/>
            <PrivateRoute path="/users" component={TableUsers} access_token={access_token}  role={role}/>
            <PrivateRoute path="/volunteer" component={Volunteer} access_token={access_token}  role={role}/>
            <PrivateRoute path="/posts" component={Posts} access_token={access_token}  role={role}/>



        </Switch>
    );
}


function PublicRoute({ path, component: Component,role, access_token, ...props }) {
    return (
        <Route {...props} path={path} render={props => access_token &&role ?
            <Redirect to={(role==='admin')?'/HomeAdmin': '/HomeUser'} /> :
            <Link to='/login'><Component {...props} /></Link>
        } />
    )
}
function PrivateRoute({ path, component: Component, access_token, role, ...props }) {
    return (
        <Route {...props} path={path} render={props => {

            let redirectTo = null;
            if (!access_token) redirectTo = "/login";

            switch (role) {
                case "admin":
                    if (['/HomeUser','/'].includes(path)) redirectTo='/HomeAdmin';
                    break;
                case "default":
                    if (['/','/HomeAdmin'].includes(path)) redirectTo='/HomeUser';
                    break;
                    case "volunteer":
                        if (['/','/HomeAdmin'].includes(path)) redirectTo='/HomeUser';
                        break;
                default:
                    break;
            }

            if (redirectTo) return <Redirect to={redirectTo} />;
            return <Component {...props} />;

        }} />
    )
}