window.onload=function() {
	uname=sessionStorage.getItem("name")
	email=sessionStorage.getItem("email")
	console.log(email)
	if(uname == "null"){
		location.href="http://localhost:8080/MiniProject/Login.html"
		alert("YOU NEED TO LOG IN FIRST.")
		
	}
	else{
      document.getElementById("username").innerHTML=uname;
	}
	
}

function enable() {

    document.getElementById("outrelationship").disabled=false;

	document.getElementById("outname").disabled = false; 
	document.getElementById("outemail").disabled = false; 
	document.getElementById("outcontact").disabled = false; 
	document.getElementById("outbldgrp").disabled = false; 
	document.getElementById("outdob").disabled = false; 
	document.getElementById("outweight").disabled = false; 
	document.getElementById("outheight").disabled = false; 
	} 

function addDep(){
	var depname=document.getElementById("depname").value;
	var depemail=document.getElementById("depemail").value;
	var relation="Self";
	var depcontact=document.getElementById("depcontact").value;
	var depheight=document.getElementById("depheight").value;
	var depdob=document.getElementById("depdob").value;
	var depbldgrp=document.getElementById("depbldgrp").value;
	var depweight=document.getElementById("depweight").value;
	var url="http://localhost:8080/MiniProject/TeamD/PillReminder/AddDependent"
	request = new XMLHttpRequest()
	request.open("post",url,true)
	request.onreadystatechange=function (){
		if(request.readyState==4 && request.status==200){
			message=request.responseText
			alert(message)
		}
	}
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+email+"&depname="+depname+"&depemail="+depemail+"&relation="+relation+"&depcontact="+depcontact+"&depheight="+depheight+"&depdob="+depdob+"&depweight="+depweight+"&depbldgrp="+depbldgrp);
	return false;	
}

function addDependent(){
	var depname=document.getElementById("outname").value;
	var depemail=document.getElementById("outemail").value;
	var relation=document.getElementById("outrelationship").value;
	var depcontact=document.getElementById("outcontact").value;
	var depheight=document.getElementById("outheight").value;
	var depdob=document.getElementById("outdob").value;
	var depbldgrp=document.getElementById("outbldgrp").value;
	var depweight=document.getElementById("outweight").value;
	var url="http://localhost:8080/MiniProject/TeamD/PillReminder/AddDependent"
	request = new XMLHttpRequest()
	request.open("post",url,true)
	request.onreadystatechange=function (){
		if(request.readyState==4 && request.status==200){
			message=request.responseText
			alert(message)
		}
	}
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+email+"&depname="+depname+"&depemail="+depemail+"&relation="+relation+"&depcontact="+depcontact+"&depheight="+depheight+"&depdob="+depdob+"&depweight="+depweight+"&depbldgrp="+depbldgrp);
	return false;	
}

function displayDep() {
	var relation=document.getElementById("outrelation").value
	var url = "http://localhost:8080/MiniProject/TeamD/PillReminder/ViewDependentDetails";
	let request = new XMLHttpRequest();
	request.open("post",url,true);
	request.onreadystatechange = function() {
	    if (request.readyState == 4 && request.status == 200) {
			var user = request.responseText;
			console.log(user);
			user = JSON.parse(user);
			 document.getElementById("outname").value=user.depname;
			 document.getElementById("outemail").value=user.depemail;
			 document.getElementById("outcontact").value=user.depcontact;
			 document.getElementById("outbldgrp").value=user.depbldgrp;
			 document.getElementById("outdob").value=user.depdob;
			 document.getElementById("outweight").value=user.depweight;
			 document.getElementById("outheight").value=user.depheight;
			 document.getElementById("outrelationship").value=user.relation;
	    }
	}
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+email+"&relation="+relation);
	return false;
    }
function updateDep(){
	var depname=document.getElementById("outname").value;
	var depemail=document.getElementById("outemail").value;
	var relation=document.getElementById("outrelationship").value;
	var depcontact=document.getElementById("outcontact").value;
	var depheight=document.getElementById("outheight").value;
	var depdob=document.getElementById("outdob").value;
	var depbldgrp=document.getElementById("outbldgrp").value;
	var depweight=document.getElementById("outweight").value;
	var url="http://localhost:8080/MiniProject/TeamD/PillReminder/updateDependentDetails"
	request = new XMLHttpRequest()
	request.open("post",url,true)
	request.onreadystatechange=function (){
		if(request.readyState==4 && request.status==200){
			message=request.responseText
			alert(message)
		}
	};
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+email+"&depname="+depname+"&depemail="+depemail+"&relation="+relation+"&depcontact="+depcontact+"&depheight="+depheight+"&depdob="+depdob+"&depweight="+depweight+"&depbldgrp="+depbldgrp);
	return false;
}