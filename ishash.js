function ishash(ciphertext) {
		// Slight StackOverflow help again on the charset
		if (/^[a-zA-Z0-9]+$/.test(ciphertext)) {
        document.getElementById("log").innerHTML += "<br /> Looks like it could be a hash based on charset<br />Looking at more characteristics of it<br />"
			if (ciphertext.length=="40") {
			        document.getElementById("log").innerHTML += "<br />Have you considered the possibility of it being an SHA1 hash?<br />I recommend <a href='https://crackstation.net/'>CrackStation</a> for cracking"
					sha1_blankcheck(ciphertext)
			}
		} else if (/^[a-zA-Z0-9$]+$/.test(ciphertext)) {
        document.getElementById("log").innerHTML += "<br />Please note I don't support linux hashes, and this supports the charset of a linux hash"
		} 
}
function sha1_blankcheck(ciphertext) {
	var hashes = ["da39a3ee5e6b4b0d3255bfef95601890afd80709","5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8","cbfdac6008f9cab4083784cbd1874f76618d2a97","49efef5f70d47adc2db2eb397fbef5f7bc560e29"];
	var unhashed = ["null (nothing)","password","password123","Password123!"];
	var hashlocation = hashes.indexOf(ciphertext);
	document.getElementById("log").innerHTML += "</br>Trying an itty bitty brute force on SHA1"
}
