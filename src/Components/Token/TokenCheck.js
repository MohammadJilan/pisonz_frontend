// validateTokens.js
// still a WORK IN PROGRESS
export const validateTokens = async (apiUrl = "http://127.0.0.1:8000/API/", accessToken=localStorage.getItem('access_token'), refreshToken=localStorage.getItem('refresh_token')) => {
    try {
      // Validate Access Token by accessing a protected endpoint
      const accessResponse = await fetch(`${apiUrl}/testtoken`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (accessResponse.ok) {
        return true;
      } else {
        console.warn("Access token is invalid or expired.");
  
        // Try to refresh the token if access token is expired
        const refreshResponse = await fetch(`${apiUrl}/api/token/refresh/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: refreshToken }),
        });
  
        if (refreshResponse.ok) {
          const data = await refreshResponse.json();
          return false;
        } else {
          console.error("Refresh token is invalid or expired.");
          return false;
        }
      }
    } catch (error) {
      console.error("Error validating tokens:", error);
      return false;
    }
  };
  