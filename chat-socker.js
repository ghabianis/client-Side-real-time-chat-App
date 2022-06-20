
const socket = io("http://localhost:3000/" , { transports : ['websocket'] });



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
    li.appendChild(document.createTextNode(message));
    console.log(message);
    return li;
}
