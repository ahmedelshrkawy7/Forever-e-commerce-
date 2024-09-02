import React, { memo } from "react";

const Comp1 = ({ num }) => {
  console.log(" component one");

  return (
    <div>
      <h1>comp 1</h1>
      <h1 className="text-red-500"> {num}</h1>
    </div>
  );
};

export default memo(Comp1);
