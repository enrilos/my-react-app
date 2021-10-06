import { jsonRequest } from "../utils/requester";

const baseUri = 'http://localhost:5000/movies'

async function getAll() {
    return await jsonRequest(baseUri);
}

async function get(id) {
    return await jsonRequest(`${baseUri}/${id}`);
}

async function create(movie) {
    return await jsonRequest(`${baseUri}`, 'Post', movie);
}

async function edit(movie, id) {
    return await jsonRequest(`${baseUri}/${id}`, 'Put', movie);
}

async function del(id) {
    return await jsonRequest(`${baseUri}/${id}`, 'Delete');
}

export default {
    getAll,
    get,
    create,
    edit,
    del
}