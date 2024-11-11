import React, { FC, useMemo, useState } from "react";

const Demo: FC = () => {
  console.log("demo");
  const [num1, setNumb1] = useState(10);
  const [num2, setNumb2] = useState(20);
  const [text, setText] = useState("helloworld");

  const sum = useMemo(() => {
    console.log("gen sum..");
    return num1 + num2;
  }, [num1, num2]);

  return (
    <>
      <p>{sum}</p>
      <p>
        {num1} <button onClick={() => setNumb1(num1 + 1)}> add num1</button>
      </p>
      <p>
        {num2} <button onClick={() => setNumb2(num2 + 1)}> add num2</button>
      </p>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text}></input>
      </div>
    </>
  );
};

export default Demo;
