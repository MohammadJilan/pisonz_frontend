import React, {useState, useEffect} from "react";
import PageHeader from "../../PageHeader/Header";
import PageHeaderUnlogged from "../../PageHeaderUnlogged/Header";
import CartItems from "../../Cart/CartItems";
import Receipt from "../../Cart/Receipt";
import Footer from "../../Footer/Footer";

import ApiProcessor from "../../js/custom.apiprocessor";
import { use } from "react";


const Cart = ({ isTokenValid, userInfo }) => {

    const [products, setProducts] = useState([]);
    const [apiProcessor, setApiProcessor] = useState(new ApiProcessor("http://127.0.0.1:8000/API/getcart"))

    useEffect(() => {
        const getData = async(e) => {
            const response = await apiProcessor.secureGet();
            
            if(response.error && response.message == 401){
                window.location.href = "/login";
            }

            setProducts(response);
        }
        
        getData();
    },[]);

    // getting the item prices and quantity to pass to receipt from.
    const[receiptData, setReceiptData] = useState({});

    const appendtoReceipt = (key, value) => {
        setReceiptData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };


    return (
        <div className="mt-24 md:mt-56">

            <div className=""> {/* header */}
                {isTokenValid ? <PageHeader email={userInfo.email} balance={userInfo.balance} searchDisabled={true} /> : <PageHeaderUnlogged searchDisabled={true} />}
            </div>

            <div id="Body" className="px-10 md:px-16">
                
                <div id="Description" className="text-white" onClick={() => console.log(receiptData)}>
                    <div className= "font-bold text-[25px] md:text-[50px] mt-5 mb-1 md:mb-0 flex">Keranjang</div>
                    <div className="text-[12px] md:text-[13px]">Pilih barang untuk checkout di sini.</div>
                </div>

                <div id="CartContent" className="mt-8 flex flex-col md:flex-row gap-10 md:gap-16">
                    <div className="md:flex-1"><CartItems products={products} addToReceipt={appendtoReceipt}/></div>
                    <div className="md:basis-1/3 h-full"><Receipt products={products} data={receiptData}/></div>
                </div>

            </div>

            <div className="mt-24">
                <Footer/>
            </div>

        </div>
    );
}

export default Cart;