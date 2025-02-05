import React,{ useState, useEffect } from "react";

const ImageSlider = (props) =>{

    const ImageList = new Array("https://cdn.mos.cms.futurecdn.net/YHdtAs36hSJUL56Lq2nxFi-1200-80.jpg", "https://esportsresults.com/wp-content/uploads/2023/01/csgo-1.jpg", "https://th.bing.com/th/id/R.8207eb93e7c857c6ce6b273773b75808?rik=PH%2bD5l96HhGpVA&pid=ImgRaw&r=0");

    const[curr, setCurr] = useState(0);

    const prev = () => setCurr(curr => curr==0? ImageList.length - 1: curr - 1);

    const next = () => setCurr(curr => curr==ImageList.length - 1? 0: curr + 1);
    
    useEffect(() => {
        const myInterval = setInterval(next, 5000);
        return () => clearInterval(myInterval);
    },[]);

    return(

        <div className="">
            
            <div className="sm:hidden overflow-hidden relative">
                <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
                    <img src={ImageList[0]}></img>
                    <img src={ImageList[1]}></img>
                    <img src={ImageList[2]}></img>
                </div>

                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {ImageList.map((_,i) => (
                            <div className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr == i? 'p-1':'opacity-50'}`}></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sm:block hidden h-[600px] overflow-hidden my-2 relative">
                <div className="grid grid-rows-1 grid-flow-col w-max transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * (100 / ImageList.length)}%)`}}>
                    <img src={ImageList[0] } className="w-screen h-[600px] object-cover p-5 rounded-[40px]"></img>
                    <img src={ImageList[1] } className="w-screen h-[600px] object-cover p-5 rounded-[40px]"></img>
                    <img src={ImageList[2] } className="w-screen h-[600px] object-cover p-5 rounded-[40px]"></img>
                </div>

                <div className="absolute bottom-8 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {ImageList.map((_,i) => (
                            <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr == i? 'p-2':'opacity-50'}`}></div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

ImageSlider.defaultProps = {

};

export default ImageSlider;