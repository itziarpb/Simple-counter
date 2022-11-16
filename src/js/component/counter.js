import React from "react";
import PropTypes from 'prop-types';

const Counter = (props) => {
	return (
		<div>
			<div className="bigCounter">
				<div><i className="fa-regular fa-clock-nine"></i>reloj</div>
				<div>{props.fourth}</div>
				<div>{props.third}</div>
				<div>{props.second}</div>
				<div>{props.first}</div>
			</div>
			<div className="buttons">
				<button type="button" className="btn btn-danger">Parar</button>
				<button type="button" className="btn btn-warning">Reanudar</button>
				<button type="button" className="btn btn-success">Reiniciar</button>
			</div>
		</div>);
};

Counter.propTypes = {
	first: PropTypes.number,
	second: PropTypes.number,
	third: PropTypes.number,
	fourth: PropTypes.number
  };


export default Counter;