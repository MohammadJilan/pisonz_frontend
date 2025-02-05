import React, {useState, useEffect} from "react";
import PageHeader from "../../PageHeader/Header";
import PageHeaderUnlogged from "../../PageHeaderUnlogged/Header";
import Footer from "../../Footer/Footer";
import Details from "../../Game/Details";
//import Guide from "../../Game/Guide";
import ApiProcessor from "../../js/custom.apiprocessor";
import { resolvePath, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Game = ({isTokenValid, userInfo}) =>{

    // Getting the parameter in the url
    const {productid} = useParams();

    const navigate = useNavigate();

    const[apiProcessor, setApiProcessor] = useState(new ApiProcessor(""));
    const[details, setDetails] = useState({});

    useEffect(() => {
        const getData = async() => {
            apiProcessor.setUrl("http://127.0.0.1:8000/API/getproductdetails/" + productid);
            const productDetails = await apiProcessor.get();


            if(productDetails.error){
                navigate("/");
            }

            setDetails(productDetails);
        }
        getData();
    }, []);


    return(
        
        <div className="mt-24 md:mt-56">

            <div className=""> {/* header */}
                {isTokenValid ? <PageHeader email={userInfo.email} balance={userInfo.balance} searchDisabled={true}/> : <PageHeaderUnlogged searchDisabled={true}/>}
            </div>

            {Object.keys(details).length?(
            <div className=""> {/* body */}
                <div className="flex flex-col mt-3 p-5 md:grid md:grid-cols-2">
                    <div className="md:flex md:justify-center">
                        <img className="md:w-4/5 object-cover" src={details.Image_URL}></img>
                    </div>

                    <div className="md:mr-[10%]">
                        <Details productDetails={details} productId={productid}/>
                    </div>
                </div>

                <div className="p-5">
                    {/** Put <Guide/> here */}
                </div>

            </div>)
        :(<div className="flex justify-center items-center md:col-span-4 col-span-3">
        <svg className="animate-spin h-20 w-20 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="100" cy="100" r="1" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>)}

            <div className="mt-16">
                <Footer/>
            </div>
        </div>


    );
}

export default Game;