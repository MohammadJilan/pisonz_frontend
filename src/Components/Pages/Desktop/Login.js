import React, { useEffect } from "react";
import LoginPanel from "../../LoginPanel/LoginPanel";
import Swal from "sweetalert2";

const Login = () => {

    // rendering alerts
    useEffect(() => {

        if(sessionStorage.getItem("alertsuccess")){
            Swal.fire({
                icon:'success',
                title: 'Success!',
                text:sessionStorage.getItem("alertsuccess")
            });
            sessionStorage.removeItem("alertsuccess");

        }else if(sessionStorage.getItem("alerterror")){
            Swal.fire({
                icon:'error',
                title: 'Error!',
                text:sessionStorage.getItem("alerterror")
            });
            sessionStorage.removeItem("alerterror");
        }

    }, []);

    return(
        <div className="Root" style={{
            backgroundColor:"#065590",
            minWidth:"100vw",
            height:"100vh",
            display:"flex",
            minHeight:"500px",
        }}>
            <div className="Body" style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flex:"1",
            }}>
                <LoginPanel/>
            </div>            


        </div>
    );
}

export default Login;
