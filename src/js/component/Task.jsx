import React from "react";
import PropTypes from "prop-types";

// Resources

import "../../styles/Task.scss";

// Components

const Task = props => {
	return (
		<li className="lh-lg">
			<p className="d-inline">{props.description}</p>
			<button
				className="ms-3 border-0 bg-transparent d-none p-0"
				onClick={() => {
					props.removeHandler();
				}}>
				🗑️
			</button>
		</li>
	);
};

Task.propTypes = {
	description: PropTypes.string.isRequired,
	removeHandler: PropTypes.func
};

export default Task;
