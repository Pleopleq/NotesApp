
const titleInput = document.querySelector('.titleInput');
const contentInput = document.querySelector('.contentInput');
const formNotesEdit = document.querySelector('.formNotesEdit');

const alertNote = (text) =>{
    const successAlert = document.createElement('p');
    const alertText = document.createTextNode(text);
    successAlert.className = 'alert';
    const alertTimeout= () => {
        successAlert.appendChild(alertText);
        formNotesEdit.appendChild(successAlert); 
        setTimeout ( () =>  { 
            formNotesEdit.removeChild(successAlert);
        }, 1500); 
    }
    clearAlert();
    alertTimeout();
}

const clearAlert = () => {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}

formNotesEdit.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = formNotesEdit.action;

    const data = {
        "title": titleInput.value,
        "content": contentInput.value,
      }
      if (data.title === '' || data.content === ''){
        return alertNote('Please enter a title and content')
      }
    
    fetch(url , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    alertNote('Note successfully edit')
});
