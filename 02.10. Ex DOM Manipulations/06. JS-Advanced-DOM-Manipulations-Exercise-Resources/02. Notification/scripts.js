function notify(message) {
    const notification = document.getElementById('notification');
        notification.style.display = 'block';
        notification.innerText = message;
        console.log('click')
    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000)
    
    
}