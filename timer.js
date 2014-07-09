function Timer(){
	this.startTime = new Date().getTime();
	return this.startTime;
}
Timer.prototype.report = function(){
	var seconds = Math.floor((new Date().getTime() - this.startTime)/1000);
	var numyears = Math.floor(seconds / 31536000);
	var numdays = Math.floor((seconds % 31536000) / 86400); 
	var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
	var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	var x = '';
	if(numyears > 0){
		var interval = (numyears > 1)? " years ":" year ";
		x = x.concat(numyears+interval);
	}
	if(numdays > 0){
		var interval = (numdays > 1)? " days ":" day ";
		x = x.concat(numdays+interval);
	}
	if(numhours > 0){
		var interval = (numhours > 1)? " hours ":" hour ";
		x = x.concat(numhours+interval);
	}
	if(numminutes > 0){
		var interval = (numminutes > 1)? " minutes ":" minute ";
		x = x.concat(numminutes+interval);
	}
	if(numseconds > 0){
		var interval = (numseconds > 1)? " seconds ":" second ";
		x = x.concat(numseconds+interval);
	}else if(seconds <= 0) {
		x = x.concat(" less than a second");
	}
	return x;
}
Timer.prototype.reportMicro = function(){
	return ((seconds = new Date().getTime() - this.startTime)/1000)+" seconds" ;
}
Timer.prototype.reset = function() {
	this.startTime = new Date().getTime();
};
