export const getPosts = async () : Promise<any> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
}