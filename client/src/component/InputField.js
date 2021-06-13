import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  console.log("ERROR Inside: ", error);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        className="form-control"
        name={name}
        id={name}
        aria-describedby={name}
        placeholder={label}
      />
      {error && error.errorData.details[name] && (
        <p style={{ color: "red" }}>{error.errorData.details[name]}</p>
      )}
    </div>
  );
};

export default Input;
