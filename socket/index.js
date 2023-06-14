 function socket(server,Server){

    console.log("socket loaded")
const io = new Server(server, {
    cors: {
        origin: 'https://whatsapp-frontend-zeta.vercel.app/',
    },
})





let users = [];

const addUser = (userData, socketId) => {
    console.log("Method")
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection', (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userData => {
        console.log(userData)
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);

        io.to(user.socketId).emit('getMessage', data)
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})


}

export default socket