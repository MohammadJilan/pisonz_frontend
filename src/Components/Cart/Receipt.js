import React, { useEffect } from "react";

const Receipt = ({products, data}) => {


    const getPriceByPk = (pk) => {
        for (const key of Object.keys(data)){
            if(pk == key){
                return data[key].price.toFixed(2);
            }
        }
    }

    const getQuantityByPk = (pk) => {
        return data[pk.toString() + "_qty"];
    }

    const getTotal = () => {
        let total_amount = 0;
        let total_quantity = 0;
        const pks = products.map((product) => product.pk);

        for (const key of Object.keys(data)){
            if(!key.endsWith("_qty")){
                let price = data[key].price;
                let quantity = data[key.toString() + "_qty"]
                total_amount += price * quantity; // total amount
                total_quantity += quantity; // total quantity
            }
        }
        return [total_amount.toFixed(2), total_quantity];
    }


    

    return(
        <div className="flex flex-col text-white text-[12px] md:text-[13px] gap-5">
            <div className="font-bold text-[18px] my-2">Order Summary</div>
            
            <div id="SubItems" className="grid grid-cols-3 gap-y-5 grid-flow-row">
                {products && data?
                
                <>
                    {products.map((product, index) => (
                        <>
                        <div className="col-span-2">PRODUCT x <span>{getQuantityByPk(product.pk)}</span></div>
                        <div className="text-right">IDR {(getPriceByPk(product.pk) * getQuantityByPk(product.pk)).toFixed(2)}</div>
                        </>
                    ))}
                </>
                
                :<p>No products.</p>}
            </div>

            <div id="Total" className="mt-5 border-t-2 pt-4">
                <div className="flex justify-between">
                    <div className="text-[15px] font-bold">{`Total (${getTotal()[1]} items)`}</div>
                    <div className="text-[15px] font-bold">IDR {getTotal()[0]}</div>
                </div>
            </div>

            <div id="Button" className="mt-12 flex justify-center">
                <button className="w-full text-[12px] md:text-[14px] bg-[#2A2A2D] py-2 rounded-full font-bold hover:bg-slate-900">Lanjutkan ke pembayaran({getTotal()[1]})</button>
            </div>
        </div>
    );
}

export default Receipt;