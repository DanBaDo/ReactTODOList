import React from "react";
import ReactDOM from "react-dom";

// Resources
import "bootstrap";
import "../styles/index.scss";

// Components
import TaskList from "./component/TaskList.jsx";
import TaskListPlaceHolder from "./component/TasksListPlaceHolder.jsx";
import Task from "./component/Task.jsx";

// Logic
ReactDOM.render(
	<TaskList
		placeHolder="Nueva tarea..."
		listPlaceHolder={TaskListPlaceHolder}
		taskComponent={Task}
	/>,
	document.querySelector("#app")
);
