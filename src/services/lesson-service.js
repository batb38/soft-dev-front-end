import axios from "axios";
import history from "../assets/history";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/test/";

const addLesson = (data) => {
    axios.post("http://localhost:8081/api/addLesson", data)
        .then((response) => {
            console.log(response.data);
            history.push(`/lesson/${response.data.id}`)
        }).catch((err) => {
            console.log(err);
        });
}


const uploadVideo = (data) => {
    return axios.post("http://localhost:8081/api/upload", data);
}


export default {
    addLesson,
    uploadVideo,
};