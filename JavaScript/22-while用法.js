// while 循环
cars = ["BMW", "Volvo", "Saab", "Ford"];

var i = 0;

while (cars[i]) {
	document.write(cars[i] + "<br>");
	i++;
}


function myFunction() {
	var x = "", i = 0;
	while (i <= 10) {
		x = x + "该数字为 " + i + "<br>";
		i++;
	}
	document.getElementById("demo").innerHTML = x;
}

myFunction()
