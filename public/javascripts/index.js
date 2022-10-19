//fetch an image:
fetch("http://localhost:3000/images/meme.jpg").then((data) =>
	console.log(data)
);

//fake Requests:

// GET
const fakeGETConnect = () => {
	return fetch("http://localhost:3000", {
		method: "GET",
	}).then((response) => {
		console.log(response);
	});
};
const fakePOSTConnect = () => {
	return fetch("http://localhost:3000", {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({ test: "POST" }),
	}).then((response) => {
		console.log(response);
	});
};

fakeGETConnect();
fakePOSTConnect();
