import logo from './logo.svg';
import './App.css';
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import React,{useState} from 'react'
import Event from './Event';

function App() {



  const [status, setstatus] = useState(false)
  

  const responseGoogle = response => {
    console.log(response.tokenObj)
    setstatus(true)
  }

  const responseError = response => {
    console.log(response)
  }

  const logout = response => {
    console.log(response)
    setstatus(false)
  }
  return (
    <div>
      <div className="App">
        <h1>Google Calendar api</h1>
      </div>
      <div>
        {!status ? (
          <GoogleLogin
            clientId="201496038612-1kcc6523arqvbpltln2mad4g55mdfbj6.apps.googleusercontent.com"
            buttonText="Sign In and Authorize Calendar"
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={"single_host_origin"}
            // responseType='code'
            // accessType='offline'
            scope="openid email profile https://www.googleapis.com/auth/calendar"
            isSignedIn={true}
          />
        ) : (
          <>
            <GoogleLogout
              clientId="201496038612-1kcc6523arqvbpltln2mad4g55mdfbj6.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
            />
            <Event />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
