import React, { useState, useEffect } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskElement from "./components/TaskElement/TaskElement";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import getTasksJSON from "./functions/getTasksJSON";
import addTaskJSON from "./functions/addTaskJSON";
import updateTaskJSON from "./functions/updateTaskJSON";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
	const [tasksList, setTasksList] = useState([]);
	const [tasksElementsList, setTasksElementsList] = useState<Array<typeof TaskElement>>([]);

	useEffect(() => {
		const getList = async () => {
			const tasks = await getTasksJSON();
			setTasksList(tasks);
		};
		getList();
	}, []);

	useEffect(() => {
		const updateElements = () => {
			const tasksElementsList: Array<any> = tasksList.map((el: any, i: number) => {
				return (
					<TaskElement
						key={i}
						id={el.id}
						text={el.text}
						updateList={updateList}
						status={el.status}
					></TaskElement>
				);
			});
			setTasksElementsList(tasksElementsList);
		};
		updateElements();
	}, [tasksList]);

	const addToList = async (pendingText: String | undefined) => {
		const newJSON = await addTaskJSON(pendingText);
		setTasksList(newJSON);
	};

	const updateList = async (id: number, action: String) => {
		const newJSON = await updateTaskJSON(id, action);
		setTasksList(newJSON);
	};

	const handleSearchChange = (text: String) => {
		const searchingRegex = new RegExp(`^${text}`, "i");
		const matching = tasksList.map((el: any, i: number) => {

		});
	}

	return (
		<div className="App">
			<div>
				<SearchBar handleSearchChange={handleSearchChange}></SearchBar>
				<TasksContainer tasksElements={tasksElementsList}></TasksContainer>
				<TaskInput addToList={addToList}></TaskInput>
			</div>
		</div>
	);
}

export default App;
