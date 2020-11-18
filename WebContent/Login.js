function checkmail(){
    	
        
    	
    	var email=document.getElementById("email").value;
    	
    	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email==null){
        	window.alert("email must be entered");
        }
        if(!(email.match(mailformat)))
        {
        	window.alert("email not in valid format");
  
        }
        

    }


function verifylogin(){
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var url="http://localhost:8080/MiniProject/TeamD/PillReminder/CheckUser"
    	request = new XMLHttpRequest()
    	request.open("post",url,true)
    	request.onreadystatechange=function (){
    		if(request.readyState==4 && request.status==200){
    			message=request.responseText
    			
    			if(message=="USER DOES NOT EXIST"){
    				alert("USER DOES NOT EXIST, CHECK ID OR CREATE A NEW ONE.")
    				location.href="http://localhost:8080/MiniProject/Login.html"
    			}
    			else if(message=="PASSWORD INCORECT"){
    				alert("PASSWORD INCORRECT, TRY AGAIN.")
    				location.href="http://localhost:8080/MiniProject/Login.html"
    			}
    			else{
    				alert("LOG IN SUCCESSFULLY.")
    				sessionStorage.setItem("logged","true");
    				sessionStorage.setItem("name",message.toUpperCase());
    				sessionStorage.setItem("email", email);
    				location.href="http://localhost:8080/MiniProject/MainPage.html"
    			}
    		}
	}
    	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
    	request.send("email="+email+"&password="+password);
    	return false;
}