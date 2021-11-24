import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskList = props => {
	const [inputVal, setInputVal] = useState("");
	const [tasksList, setTasksList] = useState([]);

	function addTask() {
		setTasksList([...tasksList, inputVal]);
		setInputVal("");
	}

	function keyHandlers(ev) {
		if (ev.key === "Enter") addTask();
	}

	function removeTask(taskIndex) {
		setTasksList(tasksList.filter((task, idx) => idx !== taskIndex));
	}

	return (
		<>
			<input
				type="text"
				placeholder={props.inputPlaceHolder}
				value={inputVal}
				onChange={ev => {
					setInputVal(ev.target.value);
				}}
				onKeyPress={ev => {
					keyHandlers(ev);
				}}
			/>
			<button
				onClick={() => {
					addTask();
				}}>
				+
			</button>
			<ul>
				{tasksList.length
					? tasksList.map((task, idx) =>
							React.cloneElement(
								props.taskComponent({
									description: task,
									removeHandler: () => {
										removeTask(idx);
									}
								}),
								{ key: idx }
							)
					  )
					: props.listPlaceHolder()}
			</ul>
			<p>{tasksList.length} items</p>
		</>
	);
};

TaskList.propTypes = {
	inputPlaceHolder: PropTypes.string,
	taskComponent: PropTypes.elementType.isRequired,
	listPlaceHolder: PropTypes.elementType.isRequired
};

export default TaskList;
