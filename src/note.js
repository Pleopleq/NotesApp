

const titleInput = document.querySelector('.titleInput');
const contentInput = document.querySelector('.contentInput');
const formNotes = document.querySelector('.formNotes');


const alertNote = (text) =>{
    const successAlert = document.createElement('p');
    const alertText = document.createTextNode(text);
    successAlert.className = 'alert';
    const alertTimeout= () => {
        successAlert.appendChild(alertText);
        formNotes.appendChild(successAlert); 
        setTimeout ( () =>  { 
            formNotes.removeChild(successAlert);
        }, 2000); 
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

formNotes.addEventListener("submit", (e) => {
    e.preventDefault()
    const url = 'http://localhost:3000';

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
    alertNote('Note was succesfully added!')
    titleInput.value = '';
    contentInput.value = '';
});
