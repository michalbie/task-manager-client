import React, { useEffect, useState, useRef } from "react";
import { updateCommaList } from "typescript";
import TaskButton from "../TaskButton/TaskButton";
import "./TaskElement.css";

interface TaskElementProps {
	id: number;
	text: string;
	updateList: (id: number, action: String) => void;
	status: String;
}

const TaskElement: React.FC<TaskElementProps> = (props: TaskElementProps) => {
	const text = useRef<HTMLParagraphElement>(null);

	return (
		<div className="TaskElement">
			<p className="task-text" ref={text}>
				{props.text}
			</p>

			<div className="ButtonsContainer">
				{props.status == "Generated" ? (
					<TaskButton
						type={"CONFIRM"}
						updateList={() => {
							props.updateList(props.id, "CONFIRM");
						}}
					></TaskButton>
				) : null}
				<TaskButton
					type={"REMOVE"}
					updateList={() => {
						props.updateList(props.id, "REMOVE");
					}}
				></TaskButton>
			</div>
		</div>
	);
};

export default TaskElement;
