import React,{ useState, useEffect} from "react";
import Swal from "sweetalert2";

const RegisterPanel = (props) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const handleRegister = async(e) =>{
        e.preventDefault();
        console.log("COOKIES: ", document.cookie);

        const registerData = {
            email,
            password
        }

        try{
            const response = await fetch("http://127.0.0.1:8000/API/register", {
                method:'POST',
                headers:{

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });
            
            const result = await response.json();

            if (result.success) {
                Swal.fire({
                    icon:'success',
                    title:"Successfully Registered!",
                    text:"Please confirm your email by clicking the link sent."
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.href = "/login"
                    }
                })
            } else if(result.error) {
                Swal.fire({
                    title:"Error",
                    icon: "error",
                    text: result.error
                });
            }
        }catch(err){
            Swal.fire({
                title:"Error",
                icon: "error",
                text: "Unknown Error..."
            });

        }
    };
    return (
        <form onSubmit={handleRegister}>
            <div className="w-56 md:w-72 h-64 md:h-80 bg-white rounded-xl flex items-stretch">
                <div className="m-5 flex flex-col w-full gap-7 flex-1 justify-start">
                    <div>{error}</div>
                    <div>
                        <p className="text-xl md:text-[28px] font-bold basis-1">Sign Up</p>
                    </div>

                    <div className="basis-1 flex w-full">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email here..." type="email" className="outline-none border flex-1 h-8 md:h-10 rounded-lg border-[#8B8B91] pl-3 text-[12px] md:text-[15px]" />
                    </div>

                    <div className="basis-1 flex w-full">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password here..." type="password" minLength={8} maxLength={20} className="outline-none border flex-1 h-8 md:h-10 rounded-lg border-[#8B8B91] pl-3 text-[12px] md:text-[15px]" />
                    </div>

                    <div>
                        <div className="basis-1 flex bg-[#2A2A2D] justify-center items-center rounded-full h-8 md:h-10">
                            <button type="submit" className="text-center text-white border-0 bg-none basis-1 text-[12px] flex bg-[#2A2A2D] justify-center items-center rounded-sm h-8 md:h-10 md:text-[15px]">Register</button>
                        </div>
                        
                        <div className="text-center">
                                <a href="/login" className="text-[10px] underline hover:font-bold">Already have an account? Login</a>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
}

export default RegisterPanel;

