//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

// Components
import TaskList from "./component/TaskList.jsx";
import TaskListPlaceHolder from "./component/TasksListPlaceHolder.jsx";
import Task from "./component/Task.jsx";

//render your react application
ReactDOM.render(
	<TaskList
		placeHolder="Nueva tarea..."
		listPlaceHolder={TaskListPlaceHolder}
		taskComponent={Task}
	/>,
	document.querySelector("#app")
);
