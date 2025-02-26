


const request = new Request("https://jsonplaceholder.typicode.com/todos/1")

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const body = request.bodyUsed;
fetch(request)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Something went wrong on API server!");
        }
    })
    .then((response) => {
        console.debug(response);
        // …
    })
    .catch((error) => {
        console.error(error);
    });