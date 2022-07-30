import React, { useEffect, useState, useRef } from "react";
import TaskElement from "../TaskElement/TaskElement";
import "./TasksContainer.css";
import getTasksJSON from "../../functions/getTasksJSON";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

interface TasksContainerProps {
	tasksElements: Array<any>;
	isLoading: Boolean;
}

const TasksContainer: React.FC<TasksContainerProps> = (props: TasksContainerProps) => {
	return (
		<div className="TasksContainer">
			{props.tasksElements}
			{props.isLoading ? <LoadingIcon></LoadingIcon> : null}
		</div>
	);
};

export default TasksContainer;
