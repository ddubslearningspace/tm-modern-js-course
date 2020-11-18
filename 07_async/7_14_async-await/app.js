// async function myFunc() {
// 	const promise = new Promise((resolve, resject) => {
// 		setTimeout(() => resolve("Hello"), 1000);
// 	});

// 	const err = false;

// 	if (!err) {
// 		const res = await promise; // wait until promise is resolved
// 		return res;
// 	} else {
// 		await Promise.reject(new Error("Something went wrong"));
// 	}
// }

// myFunc()
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

async function getUsers() {
	// await respsone of the fetch call
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	// only proceed  once its resolved
	const data = await response.json();

	// onle proceed once he second promise is resolved
	return data;
}

getUsers().then((users) => console.log(users));
