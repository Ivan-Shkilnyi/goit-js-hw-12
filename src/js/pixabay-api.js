import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55083969-985dcd53ed8fb60fc84f8ef8d";

export async function getImagesByQuery(query) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
    });

    return response.data.hits;
}