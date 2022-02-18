import axios from "axios";

const client = axios.create();

if (process.env.NODE_ENV === "production") {
    client.defaults.baseURL = "http://reacters.vlpt.us";
}

export default client;
