var socket = io();

socket.on('connect',function(){
    console.log('connected to server');

    socket.emit('createMessage',{
        from:'kevlanyo',
        text:'hey this is Kevin'
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage',function(msg){
    console.log('New message ',msg);
});