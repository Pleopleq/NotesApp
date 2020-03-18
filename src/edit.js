
const titleInput = document.querySelector('.titleInput');
const contentInput = document.querySelector('.contentInput');
const formNotesEdit = document.querySelector('.formNotesEdit');
const editHeader = document.querySelector('.editNoteHeader');

formNotesEdit.addEventListener("submit", (e) => {

    const url = formNotesEdit.action;

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

const success = () =>{


}