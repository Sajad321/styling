import PropTypes from "prop-types";
import React from "react";
import sildeStyles from "./slide-styles";
import slideStyles from "./slide-styles";

function Slide(props) {
  return (
    <article style={{ ...sildeStyles.root, ...props.style }}>
      <img src={props.image} alt={props.title} />
      <footer style={slideStyles.footer}>
        <h2 style={slideStyles.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Slide;
