const uppercase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers   = ["0","1","2","3","4","5","6","7","8","9"]
const symbol    = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const lenght = 12;
const allchar = uppercase + lowercase + numbers + symbol

let passI = document.getElementById("password-one")
let done = document.getElementById("ready")
  function generatepassword(){
	let password = " ";
		password+= uppercase[Math.floor(Math.random() * uppercase.length)];
		password+= lowercase[Math.floor(Math.random() * lowercase.length)];
		password+= numbers[Math.floor(Math.random() * numbers.length)];
		password+= symbol[Math.floor(Math.random() * symbol.length)];
	   
		while(lenght > password.length){
			password+= allchar[Math.floor(Math.random() * allchar.length)];
		}
		passI.value = password;
	}
	function donemsg(){
		 console.log("Yeh, you are awosam..!1")
		
	}