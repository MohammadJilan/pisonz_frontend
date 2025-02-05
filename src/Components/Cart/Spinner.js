import React,{useState} from "react";

const Spinner = ({quantity, setValueEvent}) => {

    const [value, setValue] = useState(quantity);

    const minus = () => {
        if(value > 1){
            setValue(value - 1);
            setValueEvent(value - 1);
        }
    }

    const add = () => {
        if(value < 9){
            setValue(value + 1);
            setValueEvent(value + 1);
        }
    }

    return(
        <div className="flex text-white text-[12px]">
            <div id="Decbtn" className="">
                <button className="bg-slate-800 px-2 rounded-l-full" onClick={minus}>-</button>
            </div>

            <div id="Value">
                <input type="number" className="w-5 md:w-6 text-slate-700 text-left bg-white" value={`${value}`} disabled={true}/>
            </div>

            <div id="Incbtn" className="bg-slate-800 px-2 rounded-r-full">
                <button className="" onClick={add}>+</button>
            </div>
        </div>
    );
}

export default Spinner;