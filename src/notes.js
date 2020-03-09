
const titleInput = document.querySelector('.titleInput');
const contentInput = document.querySelector('.contentInput');
const submitButton = document.querySelector('.submitButton');
const formNotes = document.querySelector('.formNotes');

formNotes.addEventListener("submit", (e) => {

    const url = 'http://localhost:3000/notes';

    const data = {
        "title": titleInput.value,
        "content": contentInput.value,
      }

    fetch(url , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    
});





