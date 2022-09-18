import react from 'react';
import './RegistrationPage.css'
    const register = () => {
   
    return (
        <>
         <form name="regi" action="register1.jsp" method="post">
<h2>Registration Form</h2>
 
<label for="r1" id="fn">First Name :</label>
<input type="text" name="fname" id="r1" className='formInput'/><br/>

<label for="r1" id="fn">midl Name :</label>
<input type="text" name="fname" id="r1" className='formInput'/><br/>
 
<label  for="r2" id="ln">Last Name :</label>
<input type="text" name="lname" id="r2" className='formInput'/><br/>
 
<label  for="r3" id="un">Username :</label>
<input type="text" name="uname" id="r3" className='formInput'/><br/>
 
<label  for="r4" id="pwd">Password :</label>
<input type="password" name="pass" id="r4" className='formInput'/><br/>
 
<label  for="r5" id="em">Email :</label>
<input type="text" name="email" id="r5" className='formInput'/><br/>
 
<label  for="r6" id="mn">Mobile No :</label>
<input type="text" name="mno" id="r6" className='formInput'/><br/>
 
<br/><br/>
 
<button type="submit" value="Submit" id="button" className='formButton'>Register</button>
<a href="login.html">Back to Home</a>
 
</form>
        </>
    )
}
export default register;