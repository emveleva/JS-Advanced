function solve() {
    let buttonElement = document.querySelector('#container button');
    let inputs = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inputs;

    buttonElement.addEventListener('click', e =>{
        e.preventDefault();

        if (!inputs.every(x => x.value)){
            return;
        }
        if (!Number(ageElement.value)){
            return;
        }
    })
}

