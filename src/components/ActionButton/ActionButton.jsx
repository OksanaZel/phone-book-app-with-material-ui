import React from "react";
import PropTypes from 'prop-types';
import { StyledFab } from "./ActionButton.styled";

function ActionButton({ children, onClick, ...allyProps }) {
    return (
        <StyledFab type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </StyledFab>
    )
}

ActionButton.defaultProps = {
  onClick: () => null,
  children: null,
};

ActionButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default ActionButton;



