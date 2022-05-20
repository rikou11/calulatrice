import React from "react";

const Button = (props) => {
  const { value } = props;
  return (
    <>
      <button className="btn btn-lg btn-primary">{value}</button>
    </>
  );
};

export default Button;
