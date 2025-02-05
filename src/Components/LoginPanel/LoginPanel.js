import React,{ useState, useEffect} from "react";
import Swal from "sweetalert2";

const LoginPanel = (props) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const handleLogin = async(e) =>{
        e.preventDefault();

        const loginData = {
            email,
            password
        }

        try{
            const response = await fetch("http://127.0.0.1:8000/API/login", {
                method:'POST',
                headers:{

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            
            const result = await response.json();

            if (result.access) {
                const data = result;
                const { access, refresh } = data;

                localStorage.setItem('access_token', access);  // Store the access token
                localStorage.setItem('refresh_token', refresh);  // Store the refresh token

                window.location.href = '/';  // Redirect to a protected page after login
            } else if(result.error) {
                Swal.fire({
                    title:"Error",
                    icon: "error",
                    text: result.error
                });
            }
        }catch(err){
            setError(String(err));

        }
    };
    return (
        <form onSubmit={handleLogin}>
            <div className="w-56 md:w-72 h-64 md:h-80 bg-white rounded-xl flex items-stretch">
                <div className="m-5 flex flex-col w-full gap-7 flex-1 justify-start">
                    <div>{error}</div>
                    <div>
                        <p className="text-xl md:text-[28px] font-bold basis-1">Login</p>
                    </div>

                    <div className="basis-1 flex w-full">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email here..." className="outline-none border flex-1 h-8 md:h-10 rounded-lg border-[#8B8B91] pl-3 text-[12px] md:text-[15px]" />
                    </div>

                    <div className="basis-1 flex w-full">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password here..." minLength={8} maxLength={20} type="password" className="outline-none border flex-1 h-8 md:h-10 rounded-lg border-[#8B8B91] pl-3 text-[12px] md:text-[15px]" />
                    </div>
                    
                    <div>
                        <div className="basis-1 flex bg-[#2A2A2D] justify-center items-center rounded-full h-8 md:h-10">
                            <button type="submit" className="text-center text-white border-0 bg-none basis-1 text-[12px] flex bg-[#2A2A2D] justify-center items-center rounded-sm h-8 md:h-10 md:text-[15px]">Login</button>
                        </div>
                        <div className="text-center">
                            <a href="/register" className="text-[10px] underline hover:font-bold">Register instead</a>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
}

LoginPanel.defaultProps = {
    Scale: 1,
};

export default LoginPanel;

