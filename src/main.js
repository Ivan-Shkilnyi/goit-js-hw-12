import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { renderGallery, clearGallery } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", async event => {
    event.preventDefault();

    const input = event.currentTarget.elements["search-text"];
    const query = input.value.trim();

    // ❗ перевірка
    if (query === "") {
        iziToast.warning({
            message: "Введіть текст для пошуку!",
            position: "topRight",
        });
        return;
    }

    clearGallery();

    try {
        const images = await getImagesByQuery(query);

        if (images.length === 0) {
            iziToast.error({
                message:
                    "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            return;
        }

        renderGallery(images);

    } catch (error) {
        iziToast.error({
            message: "Сталася помилка при запиті!",
            position: "topRight",
        });
    }
});