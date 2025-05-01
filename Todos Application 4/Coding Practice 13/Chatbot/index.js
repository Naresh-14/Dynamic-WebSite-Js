let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById('chatContainer');
let userInputEl = document.getElementById('userInput');


function onSendReplyMsg() {
    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement('span');
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";

    getReplyFromChatbot()
}

function getReplyFromChatbot() {
    let onSendchatbotMsg = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * onSendchatbotMsg) - 1];

    let msgContainerElement = document.createElement("div");
    msgContainerElement.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerElement);

    let chatbotMsgE = document.createElement("span");
    chatbotMsgE.classList.add("msg-from-chatbo");
    chatbotMsgE.textContent = chatbotMsg;
    msgContainerElement.appendChild(chatbotMsgE);
}