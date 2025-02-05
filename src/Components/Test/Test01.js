import React, { useState, useEffect } from "react";


const Test01 = () => {
    const [Users, setUsers] = useState([]);
    const [CurrentUser, setCurrentUser] = useState(null);
    const [Error, setError] = useState(null);

    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');  // Get the access token from localStorage

        if (!accessToken) {
            setError('No access token found');
            return;
        }

        // Set up headers for the GET request with the access token
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
        };

        fetch("http://localhost:8000/API/", {
            method: 'GET',
            headers: headers,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Response not ok.");
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => setError(error.message));  // Make sure to use error.message for the error details

    }, []);


    return (
        <div>
            {Users.map((User, index) => (
                <div id={index} style={{
                    color: "white",
                }}>
                    <div>Mail: {User.email}</div>
                    <div>Username: {User.username}</div>
                    <br></br>
                </div>
            ))}
        </div>
    );
}

export default Test01;