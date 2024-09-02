import React, { memo } from "react";

const Comp2 = ({ func }) => {
  console.log("🚀 ~ Comp2 ~ func:", func);
  console.log("component two");
  func();

  return <div>Comp2</div>;
};

export default memo(Comp2); // HOC  =>   HOF  => map  , filter,
