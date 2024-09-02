import React, { useCallback, useMemo, useState } from "react";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  console.log("🚀 ~ Test ~ show:", show);

  // memo =>    props changed  => HOC  =>  fucntion takes component as parameter
  // useCallback

  // Array / object

  // useMemo  =>

  let x = useMemo(
    function heavy() {
      let sum = 0;
      for (let i = counter; i < 1000; i++) {
        console.log(i);

        sum += i;
      }
      return sum;
    },
    [counter]
  );
  console.log("🚀 ~ x ~ x:", x);

  const add = useCallback(function () {
    console.log("this is add function ");
  }, []);

  //   const x = 10

  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      <h1> Test </h1>
      <h1>{counter}</h1>
      <button
        className="border-gray-500 border-2 "
        onClick={() => setCounter(counter + 1)}
      >
        increment
      </button>
      <Comp1 num={counter} />
      <Comp2 func={add} />
      {/*   refrence  =>  memory   */}
    </div>
  );
};

export default Test;
