function toggle() {
    let button = document.getElementsByClassName('button')[0];
 
    let divElement = document.getElementById('extra');

    if (divElement.style.display == 'none'){
        divElement.style.display = 'block';
        button.textContent = 'Less'
    } else {
        divElement.style.display = 'none';
        button.textContent = 'More'
    }
}