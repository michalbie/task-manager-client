const updateTaskJSON = async (id: number, action: String) => {
	const response = await fetch("http://localhost:8000/updateTask", {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "text/plain",
		},
		body: JSON.stringify({'id': id, "action": action}), // body data type must match "Content-T)
	});

	const json = await response.json();
	return json.tasks;
};

export default updateTaskJSON;
