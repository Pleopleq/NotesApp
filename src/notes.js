
const titleInput = document.querySelector('.titleInput');
const contentInput = document.querySelector('.contentInput');
const submitButton = document.querySelector('.submitButton');
const formNotes = document.querySelector('.formNotes');

formNotes.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        "title": titleInput.value,
        "content": contentInput.value,
      }

    fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json();
    })
});





