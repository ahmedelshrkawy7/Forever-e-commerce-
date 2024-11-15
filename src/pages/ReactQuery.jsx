import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const ReactQuery = () => {
  async function getData({ queryKey }) {
    console.log(queryKey);

    const data = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        return res.data;
      });

    return data;
  }

  const { data, isError, isLoading } = useQuery(
    ["products", "hamada"],
    getData,
    {
      staleTime: 3000,
    }
  );
  console.log("🚀 ~ ReactQuery ~ isLoading:", isLoading);

  return isLoading ? <h1>Loading ...</h1> : <div>ReactQuery</div>;
};

export default ReactQuery;
