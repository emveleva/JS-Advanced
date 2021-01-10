function solve() {
    let buttonElement = document.querySelector('form button');
    let inputs = Array.from(document.querySelectorAll('.actions input'));
    let dropdownMenu = document.querySelector('select');
    // let dateField = document.querySelector('')
    let modulesArray = [];
    
    let modulesElement = document.querySelector('.modules');

    // let trainingsElement = document.

    buttonElement.addEventListener('click', e => {
        e.preventDefault();
        let selected = dropdownMenu.value;
        
        
        if (!inputs.every(input => input.value)){
            return;
        }
        if (selected.textContent === 'Select module'){
            return;
        }
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'module');
        
        let h3Element = document.createElement('h3');
        h3Element.textContent = `${selected.toUpperCase()}-MODULE`;
        
        let ulElement = document.createElement('ul');
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'flex');
        let h4Element = document.createElement('h4');

        let date = new Date();

        h4Element.textContent = `${inputs[0].value} - ${inputs[1].value}`;
        let buttonElementDel = document.createElement('button');
        buttonElementDel.setAttribute('class', 'red')
        buttonElementDel.textContent = 'Del';
        buttonElementDel.addEventListener('click', e => {

            let parentElement = buttonElementDel.parentElement;
                parentElement.remove();
            
            let children = Array.from(ulElement.children);
            if (children.length === 0){
                divElement.remove();
                modulesArray.splice()
            }
            
        }
        )
        

        liElement.appendChild(h4Element);
        liElement.appendChild(buttonElementDel);
        ulElement.appendChild(liElement);
        if (!modulesArray.includes(h3Element.textContent)){
            divElement.appendChild(h3Element);
            modulesArray.push(h3Element.textContent);
        }
        
        divElement.appendChild(ulElement);
        modulesElement.appendChild(divElement);

        


    })
    

        

};