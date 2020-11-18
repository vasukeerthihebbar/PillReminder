window.onload=function() {
	uname=sessionStorage.getItem("name")
	if(uname == "null"){
		location.href="http://localhost:8080/MiniProject/Login.html"
		alert("YOU NEED TO LOG IN FIRST.")
	}
	else{
		document.getElementById("username").innerHTML=uname
	}
}
