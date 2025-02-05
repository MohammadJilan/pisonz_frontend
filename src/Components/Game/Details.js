import React,{useState, useEffect} from "react";
import ProductInputs from "./ProductInputs";
import ProductTicket from "./ProductTicket";
import { useNavigate } from "react-router-dom";
import ApiProcessor from "../js/custom.apiprocessor";
import { toast, ToastContainer } from "react-toastify";

const Details = ({productDetails, productId}) => {
    
    // Tracking ticket chosen
    const[ticketChosen, setTicketChosen] = useState("");

    // Setting the field information.
    const[fields, setFields] = useState({});

    const[cartApiProcessor, setCartApiProcessor] = useState(new ApiProcessor(""));
    const navigate = useNavigate();

    // Adding to cart
    const addToCart = async() => {
        cartApiProcessor.setUrl("http://127.0.0.1:8000/API/receivecartcommit");

        // Setting the field dictionary.


        const payload = {
            "productid":productId,
            "ticketid": ticketChosen,
            "fields": fields
        }

        const response = await cartApiProcessor.securePost(payload);
        
        if(response.message == 401){
            navigate("/login");
        }

        if(response.error){
            toast.error("Error: Please make sure purchase option is selected and inputs are provided!");
        }

        if(response.success){
            setTicketChosen("");
            toast.success("Added to cart!");
        }
    }

    return(
        <div className="flex flex-col text-[12px] text-white">
            <div className="flex flex-col mt-5"> {/* description */}
                <div className="font-bold text-[15px]">{productDetails.Product_Name}</div>
                
                {/**<div className="text-justify mt-1"> 
                Mobile Legends: Bang Bang adalah game mobile MOBA populer yang dikembangkan oleh Moonton. Dalam game ini, dua tim yang terdiri dari lima pemain bertarung secara real-time untuk menghancurkan markas musuh. Setiap pemain memilih hero dengan kemampuan unik dan bekerja sama dengan tim untuk mencapai kemenangan. Game ini menawarkan berbagai hero, pertandingan cepat, kontrol mudah, pembaruan rutin, dan scene esports yang berkembang. Mobile Legends: Bang Bang sangat populer di Asia Tenggara, terutama karena kemudahan aksesnya melalui perangkat mobile.
                </div>*/}
                <div className="text-justify mt-1">
                    Silakan masukkan opsi yang sesuai di sini.
                </div>

            </div>

            <div>
                <ProductInputs inputList={productDetails.fields?productDetails.fields:[]} servers={productDetails.servers?productDetails.servers:{}} setFields={setFields}/>
            </div>

            <div> {/** Buy options */}
                <ProductTicket tickets={productDetails.Variation?productDetails.Variation:[]} setTicketChosen={setTicketChosen} ticketChosen={ticketChosen} />
            </div>

            <div className="mt-9"> {/** Button */}
                <div className="bg-[#2A2A2D] rounded-[30px] text-center font-bold p-2 hover:bg-[#3b3b3e]" onClick={addToCart}><a href="#">Tambahkan ke keranjang</a></div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Details;