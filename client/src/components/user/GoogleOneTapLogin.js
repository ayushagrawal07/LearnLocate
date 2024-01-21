import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useValue from '../../context/ContextProvider'

const GoogleOneTapLogin = () => {

  const { dispatch, } = useValue();
    
  const [disabled, setDisabled] = useState(false);
 
  
    const handleResponse =(response)=>{
    console.log(response);
  }
  const handleGoogleLogin =()=>{
    setDisabled(true);
    try{
      
      window.google.accounts.id.initialize({
        client_id:process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback:handleResponse,
      });
      window.google.accounts.id.prompt((notification)=>{
        if(notification.isNotDisplayed()){
          throw new Error("Try to clear the cookies or try again later");
        }
        if(notification.isSkippedMoment() || notification.isDismissedMomemt()){
          setDisabled(false);
        }
      });
    }
    catch(error){
      dispatch({type:'UPDATE_ALERT',payload:{open:true,severity:'error',message:error.message}});
      console.log(error);
    }
  };
  return (
    <Button variant="outlined"
     startIcon={<Google />
     } 
     disabled = {disabled}
     onClick={handleGoogleLogin}
     >
      Login with Google
    </Button>
  );
};

export default GoogleOneTapLogin;