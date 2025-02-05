import React from "react";
import RegisterPanel from "../../../RegisterPanel/RegisterPanel";

const Register = () => {
    return (
        <div>
            <div className="Root" style={{
                backgroundColor: "#065590",
                minWidth: "100vw",
                height: "100vh",
                display: "flex",
                minHeight: "500px",
            }}>
                <div className="Body" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                }}>
                    <RegisterPanel/>
                </div>


            </div>
        </div>
    );
}

export default Register;