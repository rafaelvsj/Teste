function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    var chatButton = document.getElementById('open-chat');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
        chatButton.style.display = 'none';
    } else {
        chatBox.style.display = 'none';
        chatButton.style.display = 'block';
    }
}

function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();
    if (message) {
        var messagesContainer = document.getElementById('chat-messages');
        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        messagesContainer.appendChild(newMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        input.value = ''; // Limpa o campo de entrada após o envio.
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var chatInput = document.getElementById('chat-input');
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    document.getElementById('chat-box').style.display = 'none';
    document.getElementById('open-chat').style.display = 'block';
});
