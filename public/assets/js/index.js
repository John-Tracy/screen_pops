console.log('We in business');

$('#join').click(function() {
	console.log('joining socket');
	var socket = io(window.location.origin);
	socket.on('connect', function(){
	  	console.log('connected!!!')
	});
	socket.emit('test', function(data){});
	socket.on('screenpop', function(data, cb){
		console.log('screen popped!', data);
		$("#pop-alert").show("slow");
		$("#pop-data").html(data.message);
		cb('yeep');
	})
	socket.on('disconnect', function(){
		console.log('server disconnected')
	});
});