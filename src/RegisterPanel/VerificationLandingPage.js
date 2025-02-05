import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const VerificationLandingPage = () => {

    const {uid} = useParams();

    useEffect(() => {
        const confirmAccount = async() => {
            const data = {
                method:'GET',
                headers:{
                    "Content-Type": "application/json",
                }
            }

            const response = await fetch(`http://localhost:8000/API/verifyaccountemail/${uid}`);
            const result = await response.json();

            if(result.success){
                sessionStorage.setItem("alertsuccess", "User confirmed! Please login!");
            }else if(result.error){
                sessionStorage.setItem("alerterror", result.error);
            }

            window.location.href = '/login';

        }
        confirmAccount();
    }, []);
    

    return(
        <div>
            
        </div>
    );
}

export default VerificationLandingPage;