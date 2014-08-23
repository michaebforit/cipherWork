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
		var potentialbinary = decodethis;
		var smellslikebinary = potentialbinary.replace(/ /g,"");
		
		
		
		
		ishash(decodethis);
		document.getElementById("log").innerHTML += "<br/>Processing " + smellslikebinary;
		if ((/^[0,1]+$/.test(smellslikebinary))==true) {
		document.getElementById("log").innerHTML += "<br/>SMELLS LIKE BINARRRYYYYY";
		document.getElementById("log").innerHTML += "<br/>Processing without any spaces";
		isitbinary(smellslikebinary);
		} else {
		document.getElementById("log").innerHTML += "<br/>Smells like no binary. :(";
		}
		
		

		}
		
		/*
		Drop extra code here:
		potentialbinary.replace(" ","")
		/^[0,1]+$/.test()
		*/
		function isitbinary(bin) {
		if ((bin.length / 8)==Math.round(bin.length / 8)) {
		document.getElementById("log").innerHTML += "</br>" + bin.length;
		document.getElementById("log").innerHTML += (bin.length / 8);
		document.getElementById("log").innerHTML += Math.round(bin.length / 8);
		document.getElementById("log").innerHTML += "<br/><b>Valid length for binary message</b>";
		decodeBinary(bin,true);
		}
		
		}
		function decodeBinary(data,clean) {
			if (clean==true) {
					for (i = 0; i <= data.length;) {
								
								var convertbyte = data.substring(i,i+7);
								var binary = ["1100001","1000001","1100010","1000010","1100011","1000011","1100100","1000100","1100101","1000101","1100110","1000110","1100111","1000111","1101000","1001000","1101001","1001001","1101010","1001010","1101011","1001011","1101100","1001100","1101101","1001101","1101110","1001110","1101111","1001111","1110000","1010000","1110001","1010001","1110010","1010010","1110011","1010011","1110100","1010100","1110101","1010101","1110110","1010110","1110111","1010111","1111000","1011000","1111001","1011001","1111010","1011010","01111010","01011010"];
								var charset = ["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
								alert(convertbyte);
								alert(binary.indexOf(convertbyte));
								
								var binconvert = binary.indexOf(convertbyte);
								document.getElementById("log").innerHTML += charset[binconvert];
								
						}
			}
		}
