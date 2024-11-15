import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import Loader from "../components/Loader";
import Cookies from "js-cookie";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("🚀 ~ App ~ data:", data);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products", {
        headers: {
          // Authorization: `Bearer ${Cookies.get("hamada")}`,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // getData("/tasks");
  }, []);
  // data

  return (
    <div>
      {" "}
      {data.length == 0 && <Loader />}
      {data.map((el) => {
        return <ProductItem name={el.title} image={el.image} key={el.id} />;
      })}
    </div>
  );
};

export default About;
