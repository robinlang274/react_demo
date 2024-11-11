import React, { FC, useRef } from "react";

const Demo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function selectInput() {
    const inputElem = inputRef.current;
    if (inputElem) inputElem.select();
  }

  return (
    <>
      <input ref={inputRef} defaultValue="helloworld" />
      <button onClick={selectInput}>select input</button>
    </>
  );
};

export default Demo;
