import React, { useEffect, useState, useRef } from "react";
import TaskElement from "../TaskElement/TaskElement";
import "./TasksContainer.css";
import getTasksJSON from "../../functions/getTasksJSON";

interface TasksContainerProps {
	tasksElements: Array<any>;
}

const TasksContainer: React.FC<TasksContainerProps> = (props: TasksContainerProps) => {
	return <div className="TasksContainer">{props.tasksElements}</div>;
};

export default TasksContainer;
