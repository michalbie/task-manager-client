import React, { useEffect, useState, useRef } from "react";
import "./TaskButton.css";

interface TaskButtonProps {
	type: String;
	updateList: () => void;
}

const TaskButton: React.FC<TaskButtonProps> = ({ type, updateList }: TaskButtonProps) => {
	return (
		<div className="TaskButton" onClick={updateList}>
			{type == "CONFIRM" ? <img src="confirm.png"></img> : <img src="remove.png"></img>}
		</div>
	);
};

export default TaskButton;
