document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector("img");
    const newImgBtn = document.querySelector(".new-img");
    const searchBar = document.querySelector("input");
    const form = document.querySelector("form");

    newImgBtn.addEventListener("click", fetchNewCorgi);
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const searchText = searchBar.value;
        if (searchText.trim() === "") {
            alert("Search cannot be blank");
            return;
        }
        try {
            const url = `https://api.giphy.com/v1/gifs/translate?api_key=BMvXAn9qlGbQaMrnxoj4LJYei0iN83A4&s=${searchText}`;
            const response = await fetch(url, { mode: "cors" });
            const responseJSON = await response.json();
            img.src = responseJSON.data.images.original.url;
        } catch (err) {
            console.error(err);
        }
    });

    async function fetchNewCorgi() {
        try {
            const response = await fetch(
                "https://api.giphy.com/v1/gifs/translate?api_key=BMvXAn9qlGbQaMrnxoj4LJYei0iN83A4&s=corgi",
                { mode: "cors" },
            );

            const responseJSON = await response.json();
            console.log(responseJSON);
            img.src = responseJSON.data.images.original.url;
        } catch (err) {
            console.error(err);
        }
    }

    fetchNewCorgi();
});
