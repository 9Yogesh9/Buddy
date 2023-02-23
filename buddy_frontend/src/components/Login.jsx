import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

import { client } from '../client';

const Login = () => {

  const navigate = useNavigate();
  const responseGoogle = async (response) => {

    localStorage.setItem('user', JSON.stringify(response.credential));
    const { name, aud, picture } = jwt_decode(response.credential);

    const doc = {
      _id: aud,
      _type: 'user',
      userName: name,
      image: picture
    }

    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.error('Oh no, the update failed: ', err)
      });
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="logo" width="130px" srcSet="" />
        </div>

        <div className="shadow-2xl">
          <GoogleLogin
            onSuccess={credentialResponse => {
              responseGoogle(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />;
        </div>
      </div>
    </div>
  )
}

export default Login