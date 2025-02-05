import React, {useState, useEffect} from "react";

const ProductInputs = ({inputList, servers, setFields}) => {

    const [fieldObject, setFieldObject] = useState({})
    
    useEffect(() => {
        // Filling the array for the inputs with empty values so we have all inputs in the field list in the case an input isn't changed.
        for(let i = 0;i < inputList.length; i++){
            fieldObject[inputList[i]] = "";
        }
    },[]);

    const handleChange = (event) => {
        const id = event.target.id;
        fieldObject[id] = event.target.value;

        setFields(fieldObject);
    }

    useEffect(() => {
        setFields(fieldObject); // Making sure we not only store on change but also when the fields are loaded from the AJAX request.
    } ,[fieldObject]);
    
    return (
        <div className="flex mt-9 justify-start gap-4">
            {inputList.map((element, index) => (
                <div className="flex flex-col font-bold gap-1">
                    <div>{element}</div>
                    {element != "Server"?
                    <div><input id={element} className="w-36 border-2 border-black rounded-[50px] text-[12px] text-black pl-1" placeholder={`${element}...`} onChange={handleChange} /></div>
                    :
                    <select id={element} className="w-36 border-2 border-black rounded-[50px] text-[12px] text-black pl-1" onChange={handleChange}>
                        <option value={""}>--SELECT SERVER--</option>
                        {Object.keys(servers).map((element, index) => (
                            <option id={index} value={element}>{element}</option>
                        ))}
                    </select>
                }
                </div>
            ))}
        </div>
    );
}

export default ProductInputs;