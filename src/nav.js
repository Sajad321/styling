import PropTypes from "prop-types";
import React from "react";
import navStyles from "./nav-styles";

function getPrevStyle(props) {
  return props.hasPrevious ? navStyles.prev : navStyles.prevHidden;
}

function getNextStyle(props) {
  return props.hasNext ? navStyles.next : navStyles.nextHidden;
}

function Nav(props) {
  return (
    <div style={navStyles.root}>
      <button style={getPrevStyle(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button style={getNextStyle(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
};

export default Nav;
