document.addEventListener("DOMContentLoaded", function () {
    const authorInput = document.getElementById("author");
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const imageInput = document.getElementById("image");
    const addPostButton = document.getElementById("add-post");
    const postsContainer = document.querySelector(".posts");

    addPostButton.addEventListener("click", function () {
        const author = authorInput.value;
        const title = titleInput.value;
        const content = contentInput.value;
        const imageFile = imageInput.files[0];

        if (author && title && content) {
            const post = createPost(author, title, content, imageFile);
            postsContainer.appendChild(post);
            clearForm();
        }
    });

    function createPost(author, title, content, imageFile) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const authorElement = document.createElement("p");
        authorElement.textContent = "글쓴이: " + author;

        const titleElement = document.createElement("h3");
        titleElement.textContent = title;

        const contentElement = document.createElement("p");
        contentElement.textContent = content;

        const imageElement = document.createElement("img");
        if (imageFile) {
            imageElement.src = URL.createObjectURL(imageFile);
        }

        postDiv.appendChild(authorElement);
        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postDiv.appendChild(imageElement);

        return postDiv;
    }

    function clearForm() {
        authorInput.value = "";
        titleInput.value = "";
        contentInput.value = "";
        imageInput.value = "";
    }
});
