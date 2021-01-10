function solve() {
    let dropdownElement = document.getElementById('dropdown-ul');
    let dropdownButtonElement = document.getElementById('dropdown');
    let boxElement = document.getElementById('box');

    dropdownButtonElement.addEventListener('click', e => {
        //toggle menu
        if (dropdownElement.style.display != 'block'){
            dropdownElement.style.display = 'block';
        } else {
            dropdownElement.style.display = 'none';

        }
        if (dropdownElement.style.display == 'none'){
            boxElement.style.backgroundColor = 'black';
            boxElement.style.color = 'white';
        }
        
    })

    dropdownElement.addEventListener('click', e => {
        boxElement.style.backgroundColor = e.target.textContent;
        boxElement.style.color = 'black';
    })
}