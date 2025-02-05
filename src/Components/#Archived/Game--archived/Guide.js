import React from "react";

const Guide = (props) => {

    const windowHeight = window.screen.height * 1.4;
    const windowWidth = window.screen.width * 1.4;

    return (
    <div
        style={{
        //width:"100%",
        backgroundColor: "#2A2A2D",
        padding: "2% 5% 10% 5%",
        color: "white", // Font color for all text
        display: "flex",
        flexDirection: "column",
        borderRadius:"16px",
        }}
    >
        {/* First Element: Guide text */}
        <div
        style={{
            fontSize: "16px",
            marginBottom: "7px",
            fontWeight:"bold",
        }}
        >
        GUIDE
        </div>

        {/* Second Element: Border Div */}
        <div
        style={{
            width: "100%",
            borderBottom: "1px solid white",
            marginBottom: "23px",
        }}
        ></div>

        {/* Third Element: Text */}
        <div
        style={{
            width: "100%",
            marginBottom: "30px",
        }}
        >
            <div dangerouslySetInnerHTML={{__html: props.Text}}/>
        </div>

        {/* Fourth Element: Image */}
        <img
        src="https://images.shockbyte.com/knowledgebase/2022-07-15_MihC15dIin.png" // Replace with your image URL
        alt="Guide Illustration"
        style={{
            width: "100%",
        }}
        />
    </div>
    );
};

Guide.defaultProps={
    Scale:1,
    Text:`<div class="container">
  <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">How to top-up PUBG Mobile UC?</h1>

  <ol style="margin-left: 20px;">
    <li>Select the Unknown Cash UC denomination.</li>
    <li>Enter your PUBG Mobile Player ID.</li>
    <li>Check out and select your payment method.</li>
    <li>Once payment made, the PUBG Mobile UC you purchased will be credited to your PUBG Mobile Account shortly.</li>
  </ol>

  <h2 style="font-size: 20px; font-weight: bold; margin-top: 30px; margin-bottom: 10px;">Important Information:</h2>

  <ul style="margin-left: 20px;">
    <li>Only Player ID required for PUBG Mobile UC top-up.</li>
    <li>You may stay logged in throughout the transaction, once the top-up is completed, you will receive the UC in your PUBG Mobile account.</li>
    <li>Please enter your Player ID correctly to avoid delay on receiving your UC.</li>
    <li>This service is not available for Japanese / Korean / Taiwan / Vietnam servers.</li>
    <li>Players only entitled to purchase PUBG Mobile Royale Pass Pack and Elite Pass Plus once per season. Once Royale Pass Pack has been activated, players can't upgrade to Elite Pass Plus.</li>
  </ul>

  <h2 style="font-size: 20px; font-weight: bold; margin-top: 30px; margin-bottom: 10px;">How to find PUBG Mobile Player ID?</h2>

  <ol style="margin-left: 20px;">
    <li>Use your account to log into the game.</li>
    <li>Open your player profile.</li>
    <li>Your PUBG Mobile Player ID will be displayed.</li>
  </ol>
</div>`,
};

export default Guide;
