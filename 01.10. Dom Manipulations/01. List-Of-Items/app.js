function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.innerHTML = input.value;

    let itemsList = document.getElementById('items');
    itemsList.appendChild(liElement)

}