const addTaskJSON = async (input: String | undefined) => {
	const response = await fetch("http://localhost:8000/generateTask", {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "text/plain",
		},
		body: JSON.stringify(input), // body data type must match "Content-T)
	});

	const json = await response.json();
	return json.tasks;
};

export default addTaskJSON;
