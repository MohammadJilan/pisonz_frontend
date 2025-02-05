import React, { useState, useRef, useEffect } from "react";
import Item from "./Item";
import ApiProcessor from "../js/custom.apiprocessor";
import { toast, ToastContainer } from "react-toastify";

const CartItems = ({products, addToReceipt}) => {

    const [selectCount, setSelectCount] = useState(0);
    const [apiProcessor, setApiProcessor] = useState(new ApiProcessor("http://127.0.0.1:8000/API/deletecart"));

    const UpdateCount = (e) => {
        if (e.target.checked) {
            setSelectCount(selectCount + 1);
        } else if (!(e.target.checked)) {
            setSelectCount(selectCount - 1);
        }
    }

    const ItemRefs = useRef(null);
    const selectAllRef = useRef(null);

    function newMap(){
        if(!ItemRefs.current){
            ItemRefs.current = new Map();
        }
        return ItemRefs.current;
    }

    function manageSelection(id){
        
        const map = newMap();
        const node = map.get(id);

        // updating count
        if(node.checked){
            setSelectCount(selectCount + 1);
        }else{
            setSelectCount(selectCount - 1);
        }

        // setting select all as a checked if all 3 items are checked
        const iterator1 = map.keys();
        let selectAllChecked = true;
        for(let k = 0; k < map.size; k++){
            if(map.get(iterator1.next().value).checked == false){
                selectAllChecked = false;
            }
        }
        if(selectAllChecked){
            selectAllRef.current.checked = true;
        }else{
            selectAllRef.current.checked = false;
        }


    } // end function

    function manageSelectionP2(){
        const map = newMap();
        // selecting all items if the select all is true
        if (selectAllRef.current.checked == true) {
            const iterator1 = map.keys();

            for (let k = 0; k < map.size; k++) {
                map.get(iterator1.next().value).checked = true;
            }
        }else{
            const iterator1 = map.keys();
            for (let k = 0; k < map.size; k++) {
                map.get(iterator1.next().value).checked = false;
            }
        }

        // updating select count
        if(selectAllRef.current.checked == true){
            setSelectCount(map.size);
        }else{
            setSelectCount(0);
        }
    }

    // Creating a function to delete cart items.
    const deleteProduct = async() => {
        const map = newMap();
        const iterator1 = map.keys();

        let productToDelete = {};

        for (let k = 0; k < map.size; k++) {
            let temp = map.get(iterator1.next().value)
            let key = temp.id
            let value = temp.checked
            productToDelete[key] = value;
        }
        
        // Sending a post request for deletion.
        const result = await apiProcessor.securePost(productToDelete);

        if(result.success){
            toast.success("Removed from Cart!");
            window.location.reload();
        }

    }

    return (
        <div className="">
            <div className="flex justify-between text-[12px] md:text-[15px] text-white mb-2 font-bold">
                <div id="SelectAll" className="flex gap-1">
                    <input type="checkbox" ref={selectAllRef} onChange={() => manageSelectionP2()}/>
                    <div>Pilih semua</div>
                </div>
                <div className="hover:underline" onClick={() => deleteProduct()}><a href="#">Hapus</a>({selectCount})</div>
            </div>
            <div className="flex flex-col gap-3 border-t">

                {products.map((product, index) => (

                    <div className="flex gap-3 border-b">
                    <input id={`${product.pk}`} name="cart" type="checkbox" onChange={() => manageSelection(`${product.pk}`)} ref={(node) => {
                        const map = newMap();
                        map.set(`${product.pk}`, node);

                        return () => {
                            map.delete();
                        }
                    }}/>
                    <Item product={product} addToReceipt={addToReceipt}/>
                    <ToastContainer/>
                    </div>

                ))}

            </div>
        </div>
    );
}

export default CartItems;