import React, {useState, useEffect} from "react";
import PickManager from "../js/custom.pickmanager";

const CategoriesDesktop = () => {
    const catList = Array(
            ["Direct-top up products", 50],
            ["Other Gift Cards", 51],
            ["Amazon Gift Cards", 1391],
            ["Apple Music", 1444],
            ["Garena Shells", 766],
            ["Google Play", 538],
            ["iTunes Gift Card", 2433],
            ["League of Legends", 1223],
            ["Netflix", 874],
            ["PSN", 765],
            ["Razer Gold", 451],
            ["Riot Access Code", 1261],
            ["Spotify", 992],
            ["Steam", 993],
            ["Apex Legends", 2377],
            ["XBox Gift Card", 3381],
            ["NetEase Pay", 3381],
            ["Astro Pay", 3351],
            ["Bilibili", 3075],
            ["iQIYI", 3382],
    );

    const pickmanager = new PickManager(catList);


    // Initially setting selected Category to the first element.
    useEffect(() => {
        sessionStorage.setItem("CategoryChosen", catList[0]); // store as array catList[0]        
    }, []);


    const[selectedCategory, setSelectedCategory] = useState(sessionStorage.getItem("CategoryChosen"));

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedCategory(sessionStorage.getItem("CategoryChosen"));
        }, 100);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>

            <div id="Categories-desktop" className="hidden sm:block">
                <div className="flex flex-col gap-9">
                    {catList.map((category, index) => (     
                        <div onClick={() => pickmanager.result("CategoryChosen", index)} className={`border-[3px] rounded-full w-[170px] h-9 sm:h-12 text-sm font-semibold flex justify-center items-center hover:bg-white hover:text-black ${selectedCategory == category? "text-black bg-white":"text-white"}`}>{category[0]}</div>
                    ))}
                </div>
            </div>

        </div>
    );
}


export default CategoriesDesktop