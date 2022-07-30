const updateTaskJSON = async (id: number, action: String) => {
	const response = await fetch("http://localhost:8000/updateTask", {
		method: "POST",
		mode: "cors",
		credentials: "same-origin",
		headers: {
			"Content-Type": "text/plain",
		},
		body: JSON.stringify({'id': id, "action": action}),
	});

	const json = await response.json();
	return json.tasks;
};

export default updateTaskJSON;
