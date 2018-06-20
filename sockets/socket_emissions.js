module.exports = (io) => {
	io.on('connection', function(socket){
	
		console.log('connected!!!');
		socket.on('test', () =>{
			console.log('test worked');
		});

		// when client socket side disconnects
		socket.on('disconnect', function(){
			console.log('cb from ')
		});

		setTimeout(function(){ 
			socket.emit('screenpop', {message: 'call john smith at 3PM!'}, (stuff)=>{
				console.log('return', stuff);
			})
		}, 3000);

	});
};