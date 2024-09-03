var xhr2 = new XMLHttpRequest();

const url1 = './messaging.json';

xhr2.open("Get",url1,true);

xhr2.responseType = 'json';

xhr2.onload= function(){
    var messagesList= xhr2.response.messages;
    var messagesDiv =document.getElementById('messages');

    messagesList.forEach(message => {
         var messageDiv = document.createElement('div');
        messagesDiv.classList.add('massage');

      var messageId = document.createElement('h2')
      messageId.textContent = message.message_id;

      var senderId = document.createElement("p");
      senderId.texContent =message.sender_id;

      var receiverId = document.createElement('p');
      receiverId.texContent =message.receiver_id;

      var content = document.createElement('p');
      content.textContent = message.content;

      var timestamp = document.createElement('p');
      timestamp.textContent = message.timestamp;

      var read = document.createElement('p');
      read.textContent = message.read;

      messageDiv.appendChild(messageId);
      messageDiv.appendChild(senderId);
      messageDiv.appendChild(receiverId);
      messageDiv.appendChild(content);
      messageDiv.appendChild(timestamp);
      messageDiv.appendChild(read);

      messagesDiv.appendChild(messageDiv);


    });
}

xhr2.send();