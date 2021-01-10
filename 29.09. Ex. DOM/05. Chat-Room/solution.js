function solve() {
   let button = document.getElementById('send');
   let sendTextarea = document.getElementById('chat_input');
   let chatMessages = document.getElementById('chat_messages');
   
   button.addEventListener('click', (e) => {
      let message = sendTextarea.value;
      let myMessage = document.createElement('div');
      myMessage.classList.add('message');
      myMessage.classList.add('my-message');
      myMessage.textContent = message;
      chatMessages.appendChild(myMessage);
      sendTextarea.value = '';

   })
}


