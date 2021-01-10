function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let enteredEmail = inputElement.value;
    

    let customerEmails = document.querySelectorAll('#customers td:nth-of-type(2)');
    let isDeleted = false;
    for (const customerElement of customerEmails) {
        
        if (customerElement.textContent === enteredEmail) {
            let parentElement = customerElement.parentElement;
            parentElement.remove();    
            isDeleted = true;
        }
    }
    if (!isDeleted){
        let result = document.getElementById('result');
        result.innerText = 'Not found.'
    }
    
}