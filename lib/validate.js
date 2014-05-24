module.exports = {
	number: function(input) {
		var value = parseInt(input, 10);
		if(isNaN(value))
			return 'value must be a number';
		else if(value <= 0) 
			return 'value must be greater than zero';
		else
			return true;
	}
};
