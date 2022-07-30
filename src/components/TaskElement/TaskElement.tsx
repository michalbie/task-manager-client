import React, { useEffect, useState, useRef } from "react";
import { updateCommaList } from "typescript";
import TaskButton from "../TaskButton/TaskButton";
import "./TaskElement.css";

interface TaskElementProps {
	id: number;
	text: String;
	updateList: (id: number, action: String) => void;
	status: String;
}

const TaskElement: React.FC<TaskElementProps> = (props: TaskElementProps) => {
	return (
		<div className="TaskElement">
			<p>{props.text}</p>
			{props.status == "Generated" ? (
				<div className="ButtonsContainer">
					<TaskButton
						type={"CONFIRM"}
						updateList={() => {
							props.updateList(props.id, "CONFIRM");
						}}
					></TaskButton>
					<TaskButton
						type={"REMOVE"}
						updateList={() => {
							props.updateList(props.id, "REMOVE");
						}}
					></TaskButton>
				</div>
			) : null}
		</div>
	);
};

export default TaskElement;
