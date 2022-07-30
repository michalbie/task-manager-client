const addTaskJSON = async (input: String | undefined) => {
	const response = await fetch("http://localhost:8000/generateTask", {
		method: "POST",
		mode: "cors",
		credentials: "same-origin",
		headers: {
			"Content-Type": "text/plain",
		},
		body: JSON.stringify(input),
	});

	const json = await response.json();
	return json.tasks;
};

export default addTaskJSON;
