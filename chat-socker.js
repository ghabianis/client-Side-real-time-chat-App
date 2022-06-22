
const socket = io("https://3000-ghabianis-serversidecha-69cobnfogrg.ws-eu47.gitpod.io/" , { transports : ['websocket'] });



const message =  document.getElementById('message');
const messages =  document.getElementById('messages');
const handleSubmitNewMessage = () =>{
    socket.emit('message' , {data : message.value})
}

socket.on('message' , ({data}) =>{
    handleNewmessgae(data);
})

handleNewmessgae  = (message) =>{
    messages.appendChild(buildNewMessage(message))
}

const buildNewMessage = (message) =>{
    const li = document.createElement('li');
    if(li.appendChild(document.createTextNode(message))){
        document.getElementById('message').value='';
    }
    return li;
}


function empty(){
    if (messages.value!=''){
        messages.innerHTML=''
    }
}