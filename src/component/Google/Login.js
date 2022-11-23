import { React, useEffect } from 'react';
import { gapi } from "gapi-script";


import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';
import { refreshTokenSetup } from './refreshToken'

const clientId = '902898062155-a1m445ou1bo512ekubiktfhdl1ej4nt5.apps.googleusercontent.com';

function LoginGoogle() {

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: "",
            });
        };
        gapi.load("client:auth2", initClient);
    });


    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        // alert(
        //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
    };

    return (
        <div style={{ width: '404px' }} className='d-flex mt-3'>
            <GoogleLogin className='text-dark rounded-4 w-25'
                clientId={clientId}
                buttonText=""
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default LoginGoogle;