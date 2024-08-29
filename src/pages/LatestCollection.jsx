import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { shop } from "../App";
import ProductItem from "../components/ProductItem";

const LatestCollection = () => {
  const { products } = useContext(shop);
  const [latestCollection, setLatestCollection] = useState();
  console.log("🚀 ~ LatestCollection ~ latestCollection:", latestCollection);

  useEffect(() => {
    setLatestCollection(products.slice(1, 11));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 gap-4 ">
        <Title text1="Latest" text2="Collection" />
        <p className="w-3/4 text-gray-600 sm:text-sm md:text-base">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          excepturi assumenda nemo repudiandae pariatur tenetur similique{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 my-10 justify-center">
        {latestCollection?.map((el) => {
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
  );
};

export default LatestCollection;
