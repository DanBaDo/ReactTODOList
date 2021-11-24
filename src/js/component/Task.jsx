import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	return (
		<>
			<li>{props.description}</li>
			<button
				onClick={() => {
					props.removeHandler();
				}}>
				x
			</button>
		</>
	);
};

Task.propTypes = {
	description: PropTypes.string.isRequired,
	removeHandler: PropTypes.func
};

export default Task;
