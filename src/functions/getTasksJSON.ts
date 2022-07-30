const getTasksJSON = async () => {
	const response = await fetch("http://localhost:8000/getTasks");
	const text = await response.text();
	const json = JSON.parse(text);
	return json.tasks;
};

export default getTasksJSON;
