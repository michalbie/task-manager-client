import React, { useEffect, useState, useRef } from "react";
import "../TextInput.css";

interface TaskInputProps {
	addToList: (pendingText: String | undefined) => void;
}

const TaskInput: React.FC<TaskInputProps> = (props: TaskInputProps) => {
	const input = useRef<HTMLInputElement>(null);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key == "Enter") {
			event.preventDefault();

			if (input.current && input.current.value != "") {
				props.addToList(input?.current?.value);
				input.current.value = "";
			}
		}
	};

	return (
		<div className="TextInput">
			{/* style={{ marginTop: "1em" }} */}
			<input
				type={"text"}
				className="text-input"
				name="text-input"
				placeholder="Type here"
				ref={input}
				onKeyDown={handleKeyDown} //onKeyPress maybe?
			></input>
		</div>
	);
};

export default TaskInput;
