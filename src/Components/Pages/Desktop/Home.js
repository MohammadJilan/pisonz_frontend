import React, { useEffect, useState } from "react";
import ImageSlider from "../../ImageSlider/ImageSlider";
import { jwtDecode } from "jwt-decode";
import PageHeader from "../../PageHeader/Header";
import PageHeaderUnlogged from "../../PageHeaderUnlogged/Header";
import CategoriesDesktop from "../../Catalogue/CategoriesDesktop";
import CategoriesMobile from "../../Catalogue/CategoriesMobile";
import Catalogue from "../../Catalogue/Catalogue";
import Footer from "../../Footer/Footer";
import JsonRowCollector from "../../js/custom.jsonrowcollector";
import ApiProcessor from "../../js/custom.apiprocessor";

const Home = ({isTokenValid, userInfo}) => {
  // Search term. It will be passed from header to catalogue through the concept of stateup.
  const[searchTerm, setSearchTerm] = useState("");


  // Getting the products according to category selected.
  const [products, setProducts] = useState([]);
  const jsonrowcollector = new JsonRowCollector(["ID", "post_title"]);
  const apiProccessor = new ApiProcessor("");

  const[selectedCategory, setSelectedCategory] = useState(sessionStorage.getItem("CategoryChosen"));

  useEffect(() => {
      const interval = setInterval(() => {
          setSelectedCategory(sessionStorage.getItem("CategoryChosen"));
      }, 100);

      return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getData = async () => {
      setProducts([]);
      apiProccessor.setUrl(`http://localhost:8000/API/getallproducts/${selectedCategory.split(",")[1]}`);
      const result = await apiProccessor.get();   
      const cleanedArray = jsonrowcollector.result(result);
      setProducts(cleanedArray);
  }

  getData();

  }, [selectedCategory]);

  

  return (
    <div className="mt-24 md:mt-48">
      {isTokenValid ? <PageHeader email={userInfo.email} balance={userInfo.balance} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchHidden={false} /> : <PageHeaderUnlogged searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchHidden={false}/>}
      
      <div>
      <ImageSlider />
      </div>

      <header>
        <div className="text-white font-bold sm:font-semibold sm:text-[50px] text-[25px] mt-5 mb-2 sm:mb-7 flex justify-center sm:justify-start sm:ml-[5%]">Permainan</div>
      </header>

      <section id="categories-mobile">
        <CategoriesMobile />
      </section>

      <section className="sm:hidden">
        <Catalogue productjsonlist={products} searchTerm={searchTerm}/>
      </section>

      <section id="DesktopCatalogueSection" className="sm:block hidden">
        <div className="flex mx-[5%]">
          <div className="basis-1/5 flex justify-center pt-8">
            <CategoriesDesktop />
          </div>
          <div className="basis-4/5">
            <Catalogue productjsonlist={products} searchTerm={searchTerm} />
          </div>
        </div>
      </section>

      <section id="Footer" className="mt-16">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
