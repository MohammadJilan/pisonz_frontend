import React from "react";

const Guide = () => {
    return(
        <div className="bg-[#2A2A2D] w-full p-5 md:px-10 text-white rounded-lg">
            <div className="font-bold text-[12px] md:text-[15px]">Guide</div>

            <div className="border-b my-2"></div>

            <div id="Description" className="mt-5">
                
                <section className="mb-4">
                    <h1 className="text-[14px] md:text-[18px] font-bold mb-2">How to top-up PUBG Mobile UC?</h1>
                    <ul className="text-[12px] md:text-[14px] flex flex-col gap-1">
                        <li>Select the Unknown Cash UC denomination.</li>
                        <li>Enter your PUBG Mobile Player ID.</li>
                        <li>Check out and select your payment method.</li>
                        <li>Once payment made, the PUBG Mobile UC you purchased will be credited to your PUBG Mobile Account shortly.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h1 className="text-[14px] md:text-[18px] font-bold mb-2">Important Information:</h1>
                    <ul className="text-[12px] md:text-[14px] flex flex-col gap-1">
                        <li>Only Player ID required for PUBG Mobile UC top-up.</li>
                        <li>You may stay logged in throughout the transaction, once the top-up is completed, you will receive the UC in your PUBG Mobile account.</li>
                        <li>Please enter your Player ID correctly to avoid delay on receiving your UC.</li>
                        <li>This service is not available for Japanese / Korean / Taiwan / Vietnam servers.</li>
                        <li>Players only entitled to purchase PUBG Mobile Royale Pass Pack and Elite Pass Plus once per season. Once Royale Pass Pack has been activated, players can't upgrade to Elite Pass Plus.</li>
                    </ul>

                    <img src="https://images.shockbyte.com/knowledgebase/2022-07-15_MihC15dIin.png" className="mt-5 md:mt-8 md:w-full"></img>
                </section>
                
            </div>
        </div>
    );
}

export default Guide;