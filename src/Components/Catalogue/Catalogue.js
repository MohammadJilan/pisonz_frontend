import React, { useEffect, useState } from "react";
import ApiProcessor from "../js/custom.apiprocessor";
import JsonRowCollector from "../js/custom.jsonrowcollector";
import Category from "../js/custom.category";
import Search from "../js/custom.search";

const Catalogue = ({productjsonlist, searchTerm="a"}) => {
    const[apiProcessor, setApiProcessor] = useState(new ApiProcessor("http://127.0.0.1:8000/API/getproductimage/50"));
    const[jsonRowCollector, setJsonRowCollector] = useState(new JsonRowCollector(["product_id", "image_url"]));
    const[images, setImages] = useState(null);

    const[selectedCategory, setSelectedCategory] = useState(sessionStorage.getItem("CategoryChosen"));
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedCategory(sessionStorage.getItem("CategoryChosen"));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const getData = async(e) => {
            apiProcessor.setUrl("http://127.0.0.1:8000/API/getproductimage/" + selectedCategory.split(",")[1]);
            const imagesjson = await apiProcessor.get();
            const imagesarray = jsonRowCollector.result(imagesjson);
            setImages(imagesarray);
        }
        getData();
    },[selectedCategory]);


    return (
        <section id="catalogue" className="mt-2 p-7">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {productjsonlist.length > 0?productjsonlist.map((element, index) => (
                    <a href={"/product/" + element[0]} className={`${Search.check(element[1], searchTerm)?"":"hidden"}`}><div className={`bg-white rounded-lg sm:rounded-[20px] h-36 sm:h-56 p-1 sm:p-3 flex-col`}>
                        <img src={images?.find(image => image[0] === parseInt(element[0]))?.[1] || ""} className="w-full h-[100px] sm:h-[180px] object-cover rounded-lg sm:rounded-[20px] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]"></img>
                        <div className="text-[9px] sm:text-[12px] font-semibold flex justify-center mt-1 sm:mt-2">{element[1]}</div>
                        <div className="hidden">{element[0]}</div>
                    </div></a>
                )):
                <div className="flex justify-center items-center md:col-span-4 col-span-3">
                    <svg className="animate-spin h-20 w-20 text-blue-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="100" cy="100" r="1" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                }

            </div>
        </section>
    );
}

export default Catalogue;