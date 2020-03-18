
const titleInput = document.querySelector('.titleInput');
const contentInput = document.querySelector('.contentInput');
const formNotesEdit = document.querySelector('.formNotesEdit');

const alertNote = () =>{
    const successAlert = document.createElement('p');
    const alertText = document.createTextNode('Note successfully edit');
    successAlert.appendChild(alertText);
    formNotesEdit.appendChild(alertText);

    setTimeout( () =>  { 
        formNotesEdit.removeChild(alertText);
    }, 1500);

    formNotesEdit.appendChild(alertText);
}

formNotesEdit.addEventListener("submit", (e) => {
    e.preventDefault();

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
    alertNote();
});
