const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center my-6">
      <h1 className="text-gray-500 text-5xl">
        {" "}
        {text1} <span className="text-gray-700 text-5xl">{text2}</span>{" "}
      </h1>
      <span className="h-0.5 bg-gray-700 w-20 m-3"></span>
    </div>
  );
};

export default Title;
