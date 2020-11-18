function checklength(){
    	var password=document.getElementById("password").value;
    	len=password.length
    	if(len<8){
    		alert("PASSWORD SHOULD BE MINIMUM 8 CHARACTERS LONG.")
    		document.getElementById("Password").value = ""
    	}
    	
    }

    function homepage(){
    	alert("REGISTRATION CANCELLED.")
    	window.location.href="http://localhost:8080/MiniProject/Login.html"
    }
    function addmember(){
    	
        
    	var name=document.getElementById("name").value;
    	var email=document.getElementById("email").value;
    	
    	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email==null){
        	window.alert("email must be entered");
    		email.focus();
        	//return false;
        }
        if(!(email.match(mailformat)))
        {
        	window.alert("email not in valid format");
    		email.focus();
        	//return false;
        }
        
    	var contact=document.getElementById("contact").value;
    	var country=document.getElementById("country").value;
    	var dob=document.getElementById("dob").value;
    	var password=document.getElementById("password").value;
    	
    	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    	var repassword=document.getElementById("repassword").value;
    	if(!(password.match(strongRegex))) 
        { 
        	window.alert("password must be a combination of uppercase, lowercase and a number"); 
            password.focus();
            
        }
    	if(password!=repassword){
    		alert("THIS PASSWORD SHOULD MATCH ABOVE PASSWORD")
    		document.getElementById("repassword").value = ""
    		repassword.focus();
    		return false;
    	}
    	var url="http://localhost:8080/MiniProject/TeamD/PillReminder/AddUser"
    	request = new XMLHttpRequest()
    	request.open("post",url,true)
    	//request.onreadystatechange();
    	/* request.setRequestHeader("content-type","application/x-www-form-urlencoded");
    	request.send("name="+name+"&email="+email+"&contact="+contact+"&country="+country+"&dob="+dob+"&password="+password); */
    	request.onreadystatechange=function (){
    		if(request.readyState==4 && request.status==200){
    			message=request.responseText
    			if(message=="Inserted Successfully"){
    				alert("DETAILS SAVED.")
    				location.href="http://localhost:8080/MiniProject/Login.html"
    			}
    			else if(message=="User already Exist"){
    				alert("USER ALREADY EXISTS, TRY LOGGING IN OR USE DIFFERENT MAIL ID TO SIGN UP.")
    				location.href="http://localhost:8080/MiniProject/Registration.html"
    			}
    		}
    	}
    	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
    	request.send("name="+name+"&email="+email+"&contact="+contact+"&country="+country+"&dob="+dob+"&password="+password);
    	return false;
    }