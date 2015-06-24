function getQuadKey(x, y, level) {
	var quadKey = "";
	for (var i = level; i > 0; i--) {
		var digit = "0",
		mask = 1 << (i - 1);
		if ((x & mask) != 0) {
			digit++;
		}
		
		if ((y & mask) != 0) {
			digit = digit + 2; 
		}
		quadKey += digit;
	}

	return quadKey;
}