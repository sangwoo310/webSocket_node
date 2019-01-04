module.exports = function(app, io){

    io.on('connection', (socket) => {
        console.log('*** web socket connect ***');

        socket.on('test', data => {
            console.log("test :: "+data);
            io.emit('test', data);
        });
        
        socket.on('remitInsert', data => {
            console.log("remitInsert :: "+data);
            io.emit('remitInsert', data);
        });

        socket.on('remitUpdate', data => {
            console.log("remitUpdate :: "+data);
            io.emit('remitUpdate', data);
        });

        socket.on('remitError', data => {
            console.log("remitError :: "+data);
            io.emit('remitError', data);
        });
    });

    io.on('disconnection', (socket) => {
        console.log('!!! web socket disconnect !!!');
    });
}