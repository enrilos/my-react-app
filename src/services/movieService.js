import { jsonRequest } from "../utils/requester";

const baseUri = 'http://localhost:5000/movies'

async function getAll() {
    return await jsonRequest(baseUri);
}

async function get(id) {
    return await jsonRequest(`${baseUri}/${id}`);
}

export default {
    getAll,
    get
}