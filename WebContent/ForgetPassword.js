function homepage(){
	alert("PROCESS CANCELLED.")
	window.location.href="http://localhost:8080/MiniProject/Login.html"
}
function checklength(){
	var newpassword=document.getElementById("newpassword").value;
	len=newpassword.length
	if(len<8){
		alert("NEW PASSWORD SHOULD BE MINIMUM 8 CHARACTERS LONG.")
		document.getElementById("newpassword").value = ""
		newpassword.focus();
		return false;
	}
}

function changepass(){
	var email=document.getElementById("email").value;
	var contact=document.getElementById("contact").value;
	var newpassword=document.getElementById("newpassword").value;
	var renewpassword=document.getElementById("renewpassword").value;
	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
	len=newpassword.length
	if(len<8){
		alert("PASSWORD SHOULD BE MINIMUM 8 CHARACTERS LONG.")
		document.getElementById("newpassword").value = ""
		newpassword.focus();
		return false;
	}
	if(!(newpassword.match(strongRegex))) 
    { 
    	window.alert("password must be a combination of uppercase, lowercase and a number"); 
    	document.getElementById("newpassword").value = ""
        newpassword.focus();
        return false;
        
    }
	if(newpassword!=renewpassword){
		alert("THIS PASSWORD SHOULD MATCH ABOVE PASSWORD")
		window.location.href="http://localhost:8080/MiniProject/ForgetPassword.html"
		return false;
	}
	
	
	var url="http://localhost:8080/MiniProject/TeamD/PillReminder/ResetPassword"
    	request = new XMLHttpRequest()
    	request.open("post",url,true)
    	request.onreadystatechange=function (){
    		if(request.readyState==4 && request.status==200){
    			message=request.responseText
    			if(message=="true"){
    				alert("PASSWORD RESET SUCCESSFUL.")
    				location.href="http://localhost:8080/MiniProject/Login.html"
    			}
    			else if(message=="USER DOES NOT EXIST"){
    				alert("USER OR CONTACT NUMBER DO NOT MATCH,TRY AGAIN.")
    				location.href="http://localhost:8080/MiniProject/ForgetPassword.html"
    			}
    			else if(message=="PASSWORD INCORECT"){
    				alert("CURRENT PASSWORD INCORRECT, TRY AGAIN.")
    				location.href="http://localhost:8080/MiniProject/ForgetPassword.html"
    			}
    			else{
    				alert("UNKNOWN ERROR.")
    			}
    		}
	}
    	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
    	request.send("email="+email+"&contact="+contact+"&newpassword="+newpassword);
    	return false;
}