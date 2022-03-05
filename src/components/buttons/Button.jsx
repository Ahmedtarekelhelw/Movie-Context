import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = (props) => {
  return (
    <button
      className={props.className && props.className}
      onClick={props.onClick ? () => props.onClick() : null}
      disabled={props.disabled ? props.disabled : null}
    >
      {props.children}
    </button>
  );
};

Button.prototype = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
