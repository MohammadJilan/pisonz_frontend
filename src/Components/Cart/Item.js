import React,{useState, useEffect} from "react";
import ApiProcessor from "../js/custom.apiprocessor.js";
import { faA, faInfo} from '@fortawesome/free-solid-svg-icons';
import Spinner from "./Spinner.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const Item = ({product, addToReceipt}) => {

    const[apiProcessor, setApiProcessor] = useState(new ApiProcessor(""));
    const[details, setDetails] = useState({});
    const [ticket, setTicket] = useState({});

    useEffect(() => {
        const getData = async() =>{
            apiProcessor.setUrl("http://127.0.0.1:8000/API/getproductdetails/" + product.product_id);
            const productDetails = await apiProcessor.get();
            setDetails(productDetails);
            
            for(const [key,variation] of Object.entries(productDetails.Variation)){
                if(variation.variation_id.toString() == product.ticket_id){
                    const obj = {};

                    obj.ticket_name = variation.variation_name;
                    obj.ticket_price = variation.variation_price;

                    setTicket(obj);
                    
                    // Adding data for receipt
                    const uid = Date.now() + Math.random().toString(36).substr(2, 9);
                    const uid2 = product.pk.toString();
                    let data = {
                        price:variation.variation_price
                    }

                    addToReceipt(uid2, data);
                    break;
                }
            }

        }

        getData();
    },[]);

    const showItemFields = () => {
        
        let htmldata = "";
        for(const [key,field] of Object.entries(product.fields)){
            htmldata += `${key}: ${field}<br>`;
        }

        Swal.fire({
            title:"Details",
            icon: "info",
            confirmButtonColor:"#2A2A2D",
            iconColor:"#2A2A2D",
            html: htmldata
        });
        
    }

    // getting spinner value
    const[spinnerValue, setSpinnerValue] = useState(product.quantity);
    const setSpinnerValueEvent = (value) => {
        setSpinnerValue(value);
    }

    useEffect(() => {
        addToReceipt(product.pk.toString() + "_qty",spinnerValue);
    }, [spinnerValue]);

    return (
        <div className="flex flex-row justify-between w-full">
            <div className="flex w-full py-3 md:py-5 px-2 gap-7 text-white">

                <div id="Image">
                    {Object.keys(details).length == 0?"loading...":<img src={details.Image_URL} className="h-16 md:h-24"></img>}
                </div>

                <div id="Details" className="flex flex-col justify-between text-[10px] md:text-[14px]">
                    <div className="flex flex-col">
                        <div className="font-bold">{Object.keys(details).length == 0?"loading...":details.Product_Name}</div>
                        <div className="text-[8px] md:text-[12px]">{Object.keys(ticket).length == 0?"loading...":ticket.ticket_name}</div>
                    </div>

                    <div className="font-bold">IDR {Object.keys(ticket).length == 0?"loading...":ticket.ticket_price}</div>
                </div>

            </div>

            <div id="Widgets" className="flex flex-col justify-between p-3">
                <div className="text-right">
                    <span onClick={showItemFields} className="border rounded-full flex text-[8px] md:text-[12px] text-white justify-center items-center py-1 hover:bg-white hover:text-slate-800">
                        <FontAwesomeIcon icon={faInfo} className="mx-1 text-[7px] md:text-[10px]"/>
                        <a href="#">Details</a>
                    </span>
                </div>
                <div>
                    <Spinner quantity={product.quantity} setValueEvent={setSpinnerValueEvent}/>
                </div>
            </div>
        </div>
    );
}

export default Item;