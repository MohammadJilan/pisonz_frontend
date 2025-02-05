import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Components/Pages/Desktop/Home"
import Cart from "./Components/Pages/Desktop/Cart"
import Game from "./Components/Pages/Desktop/Game"
import Login from "./Components/Pages/Desktop/Login"
import Register from "./Components/Pages/Desktop/Register";
import VerificationLandingPage from "./RegisterPanel/VerificationLandingPage";
import BunionSoup from "./Components/Pages/Desktop/BunionSoup";
import { jwtDecode } from "jwt-decode";
import ApiProcessor from "./Components/js/custom.apiprocessor";

function App() {

  // refreshing token every 4 minutes
  const[refreshApiProcessor, setRefreshApiProcessor] = useState(new ApiProcessor("http://localhost:8000/API/token/refresh"));

  const refreshToken = async() => {
    
    const payload = {
      refresh: localStorage.getItem("refresh_token")
    }

    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),

    }

    try{
      if(localStorage.getItem("refresh_token")){
        const response = await(fetch("http://localhost:8000/API/token/refresh", data));
        const result  = await response.json()
        localStorage.setItem("access_token", result.access);
      }
    }catch{
      // do nothing.
    }

  }

  useEffect(() => {
    const refreshToken_Interval = setInterval(refreshToken, 3 * 60 * 1000);

    return () => clearInterval(refreshToken_Interval);
  }, []);
  // end

  sessionStorage.setItem("CategoryChosen", ["Direct-top up products", 50]);

  // Getting header data

  const [isTokenValid, setTokenValid] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/API/getuserinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            email: jwtDecode(localStorage.getItem("access_token")).email,
          }),
        });


        // Check if the response is OK
        if (response.ok) {
          const result = await response.json(); // Wait for the JSON response to resolve
          setUserInfo(result[0]);
          setTokenValid(true); // Set token valid only if the response is successful
        } else {
          setTokenValid(false); // Handle failed response, for example, invalid token
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
        setTokenValid(false); // Handle error in fetching user info
      }
    };



    getUserInfo();
  }, []); // This useEffect will run once on component mount

  return (
    <Router>
      <div className="App" style={{
        backgroundColor: "#065590",
      }}>

      </div>

      <Routes>
        <Route path="/" element={<Home userInfo={userInfo} isTokenValid={isTokenValid} />}></Route>
        <Route path="/cart" element={<Cart userInfo={userInfo} isTokenValid={isTokenValid} />}></Route>
        <Route path="/product/:productid" element={<Game userInfo={userInfo} isTokenValid={isTokenValid} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verify/:uid" element={<VerificationLandingPage />}></Route>
        <Route path="/bunionsoup" element={<BunionSoup userInfo={userInfo} isTokenValid={isTokenValid}/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;

