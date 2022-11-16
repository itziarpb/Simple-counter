import React from "react";
import PropTypes from 'prop-types';

const Counter = (props) => {
	return (
		<div className="bigCounter">
			<div><i className="fa-regular fa-clock-nine"></i></div>
			<div>{props.fourth}</div>
			<div>{props.third}</div>
			<div>{props.second}</div>
			<div>{props.first}</div>
		</div>
	)};

Counter.propTypes = {
	first: PropTypes.number,
	second: PropTypes.number,
	third: PropTypes.number,
	fourth: PropTypes.number
  };


export default Counter;