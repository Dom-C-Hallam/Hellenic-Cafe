const formName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const form = document.getElementById('form');

const nameError = document.getElementById('name-error');

form.addEventListener('submit', (e) => {
    if(formName.value === '' || formName.value === null)
    
        {
            let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
        }

        {
            e.preventDefault();
            nameError.innerHTML = "Name is required or contains invalid characters";
        }
});