import { useContext, useEffect, useState } from "react";
import { shop } from "../App";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";

const Collection = () => {
  const { products } = useContext(shop);
  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");

  // useEffect(() => {
  //   fetch("https://pm.alexondev.net/api/login", {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //     },
  //     body: {
  //       email: "alexon@admin.com",
  //       password: "12345678",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  useEffect(() => {
    setFilter(products);
  }, []);

  function cateogryFun(e) {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((el) => el !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  }
  function subCateogryFun(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((el) => el !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  }
  useEffect(() => {
    function applyFiter() {
      if (products.length > 0) {
        let productCopy = [...products];
        if (category.length > 0) {
          productCopy = products.filter((el) => category.includes(el.category));
        }
        if (subCategory.length > 0) {
          productCopy = productCopy.filter((el) =>
            subCategory.includes(el.subCategory)
          );
        }
        setFilter(productCopy);
      }
    }
    applyFiter();
  }, [category, subCategory]);

  const sortProduct = () => {
    let fpCopy = filter.slice();
    switch (sortType) {
      case "low-high":
        setFilter(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilter(fpCopy.sort((a, b) => b.price - a.price));

        break;
      case "low":
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${show ? "rotate-90" : ""}`}
            onClick={() => setShow(!show)}
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            show ? "" : "hidden"
          } `}
        >
          <p className="mb-2 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Men"}
                name=""
                id=""
                onChange={(e) => cateogryFun(e)}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Women"}
                name=""
                id=""
                onChange={(e) => cateogryFun(e)}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Kids"}
                name=""
                id=""
                onChange={(e) => cateogryFun(e)}
              />
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            show ? "" : "hidden"
          } `}
        >
          <p className="mb-2 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                name=""
                id=""
                onChange={(e) => subCateogryFun(e)}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                name=""
                id=""
                onChange={(e) => subCateogryFun(e)}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                name=""
                id=""
                onChange={(e) => subCateogryFun(e)}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          <select
            name=""
            id=""
            className="border-2 border-gray-300 text-sm px-2 h-10"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by :Relvant</option>
            <option value="low-high">Sort by :low to high</option>
            <option value="high-low">Sort by :high to low</option>{" "}
          </select>
        </div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {filter.map((el) => {
            return (
              <ProductItem
                name={el.name}
                price={el.price}
                image={el.image}
                key={el.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
