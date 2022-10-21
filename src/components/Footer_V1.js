import React from "react";
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {title, urls, postcode, isOpen} = props;
  return (
    <div>
    <h3>{title}  &copy; {new Date().getFullYear()}</h3>
    <p>
    {urls} 
    {postcode}
    {isOpen.toString()}
    </p>
    <p style={styles.title}>codingthailand</p>
    </div>
  )
};

const styles = {
  title: {
    color: 'red'
  }
}

Footer.propTypes = {
  title: PropTypes.string,
  urls: PropTypes.string,
  postcode: PropTypes.number,
  inOpen: PropTypes.bool

};

export default Footer;
