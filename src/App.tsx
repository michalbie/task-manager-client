import React, { useState, useEffect } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskElement from "./components/TaskElement/TaskElement";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import getTasksJSON from "./functions/getTasksJSON";
import addTaskJSON from "./functions/addTaskJSON";
import updateTaskJSON from "./functions/updateTaskJSON";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadingIcon from "./components/LoadingIcon/LoadingIcon";

function App() {
	const [tasksList, setTasksList] = useState<any>([]);
	const [tasksElementsList, setTasksElementsList] = useState<Array<typeof TaskElement>>([]);
	const [isLoading, setIsLoading] = useState<Boolean>(false);

	useEffect(() => {
		const getList = async () => {
			const tasks = await getTasksJSON();
			setTasksList(tasks);
		};
		getList();
	}, []);

	useEffect(() => {
		updateElements(tasksList);
	}, [tasksList]);

	const updateElements = (elementsList: []) => {
		const tasksElementsList: Array<any> = elementsList.map((el: any, i: number) => {
			return (
				<TaskElement key={i} id={el.id} text={el.text} updateList={updateList} status={el.status}></TaskElement>
			);
		});
		setTasksElementsList(tasksElementsList);
	};

	const addToList = (pendingText: String | undefined) => {
		setIsLoading(true);
		addTaskJSON(pendingText).then((json) => {
			setIsLoading(false);
			setTasksList(json);
		});
	};

	const updateList = async (id: number, action: String) => {
		const newJSON = await updateTaskJSON(id, action);
		setTasksList(newJSON);
	};

	const handleSearchChange = (text: String) => {
		const searchingRegex = new RegExp(`${text}`, "i");
		const matching = tasksList.filter((el: any) => {
			return searchingRegex.test(el.text);
		});
		updateElements(matching);
	};

	return (
		<div className="App">
			<div>
				<SearchBar handleSearchChange={handleSearchChange}></SearchBar>
				<TasksContainer tasksElements={tasksElementsList} isLoading={isLoading}></TasksContainer>
				<TaskInput addToList={addToList}></TaskInput>
			</div>
		</div>
	);
}

export default App;
