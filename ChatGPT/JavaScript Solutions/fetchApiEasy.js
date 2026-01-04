// Easy
//1. Basic GET Request
async function getUsers() {
    const userUrl = "https://jsonplaceholder.typicode.com/users";
    const userResponse = await fetch(userUrl);
    console.log(userResponse.length);

}

//2. Handling Errors
async function getUsers() {
    const userUrl = "https://jsonplaceholder.typicode.com/users";
    const userResponse = await fetch(userUrl);
    if (!userResponse.ok) {
        throw new Error("Request failed");
    }
}

//3. Convert to JSON
async function getTitle() {
    const titleUrl = "https://jsonplaceholder.typicode.com/posts/1"
    const titleUrlResponse = await fetch(titleUrl);
    const titleUrlData = titleUrlResponse.json()

    console.log(titleUrlData.title);
}