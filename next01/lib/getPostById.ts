export const getPostById = async (id : string) : Promise<any> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
}