import React, { FC, useState } from "react";

const Demo: FC = () => {
  // const [userInfo ,setUserInfo] = useState({ name: 'Robin', age:20 })

  // function changeAge(){
  //   setUserInfo({
  //     ...userInfo, // jiegou
  //     age: 21,
  //   })
  // }

  const [list, setList] = useState(["x", "y"]);

  function addItem() {
    setList(list.concat("z"));
  }

  return (
    <>
      <h2>state unchangable data</h2>
      {/* <div>{JSON.stringify(userInfo)}</div> */}
      {/* <button onClick={changeAge}>change age</button> */}
      <button onClick={addItem}>{list}</button>
    </>
  );
};

export default Demo;
