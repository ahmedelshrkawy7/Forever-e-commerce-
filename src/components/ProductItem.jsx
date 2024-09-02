import { useContext } from "react";
import { shop } from "../App";

const ProductItem = ({ id, name, price, image }) => {
  const { currency } = useContext(shop);

  return (
    <div className="text-gray-700 cursor-pointer flex flex-col items-center ">
      <div>
        <img src={image} alt="" className=" hover:scale-105 transition-all " />
      </div>
      <div>
        <h1 className="pt-3 pb-1 text-sm ">{name}</h1>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
