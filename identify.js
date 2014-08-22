function trigger(tstamp) {
document.getElementById("log").innerHTML += "<br/>At the local stamp of " + tstamp +" the process was initialized...</br>";
var ciphertext = document.getElementById("encoded").value;
document.getElementById("log").innerHTML += "<br/>Ciphertext passed as parameter: " + ciphertext;
idcipher(ciphertext);
}
function triggertime() {
var d = new Date();
var day = d.getDate();
var mon = d.getMonth()+1;
var yr = d.getFullYear();
var min = d.getMinutes();
var hr = d.getHours();
var fulltstamp = mon + "/" + day + "/" + yr + " " + hr + ":" + min;
trigger(fulltstamp);
}
function idcipher(decodethis) {
		// Is it base64?
		if (decodethis.indexOf("==")=="-1") {
		// Definitely not
		var isB64 = false;
		document.getElementById("log").innerHTML += "<br/>Not Base64."
		} else {
			if (decodethis.indexOf("==")==(decodethis.length-2)) {
			// == in the wrong place? Might still be base64!! Human error?
			document.getElementById("log").innerHTML += "<br/>Potential Base64 detected";
			document.getElementById("log").innerHTML += "<br/>Moving to decrypt";
			document.getElementById("log").innerHTML += "<br/>Raw Decrypt: </br>" + atob(decodethis);
			var solution = atob(decodethis);
			document.getElementById("decoded").value = solution;
			} else {
			// Straight up decode
			document.getElementById("log").innerHTML += "<br/>Detected Base64 behavior, <br/>but it seems your string doesn't end with ==, as all B64 codes do. </br>If it's in quotes or something stupid, fix that."
			}
		} // Slight stackoverflow on this one
		// My solution was cringe
		// Ben Alpert wrote this next line, and I modified it a bit
		var rot13fixed = decodethis.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}); 
		document.getElementById("log").innerHTML += "<br/> Blind ROT13 decrypt resolves: " + rot13fixed;
		ishash(decodethis);
		}
		
		
