 window.onload=function() {
    	uname=sessionStorage.getItem("name")
    	umail=sessionStorage.getItem("email")
    	console.log(umail)
    	if(uname == "null"){
    		location.href="http://localhost:8080/MiniProject/Login.html"
    		alert("YOU NEED TO LOG IN FIRST.")
    		
    	}
    }
    function show() {
    	var relation = document.getElementById("relation").value;
    	var emailid=sessionStorage.getItem("email");
    	//var emailid = "guest@abc.com";  //sessionStorage.getItem("emailid");
    	var url = "http://localhost:8080/MiniProject/TeamD/PillReminder/getMedicalHistory";
    	let request = new XMLHttpRequest();
    	request.open("POST",url,true);
    	request.onreadystatechange = function() {
    	    if (request.readyState == 4 && request.status == 200) {
    			var user = request.responseText;
    			user1 = JSON.parse(user);
    			for (var i=1;i<=Object.keys(user1).length;i++) {
    				var table =document.getElementById("userlist");
    				var row=table.insertRow(1);
    				var cell1=row.insertCell(0);
    				var cell2=row.insertCell(1);
    				var cell3=row.insertCell(2);
    				var cell4=row.insertCell(3);
    				var cell5=row.insertCell(4);
    				var cell6=row.insertCell(5);
    				var cell7=row.insertCell(6);
    				var cell8=row.insertCell(7);
    				cell1.innerHTML=user1[i].illness;
    				cell2.innerHTML=user1[i].doctorDetails;
    				cell3.innerHTML=user1[i].medicine;
    				cell4.innerHTML=user1[i].startDate;
    				cell5.innerHTML=user1[i].endDate;
    				cell6.innerHTML=user1[i].dosageAmount;
    				cell7.innerHTML=user1[i].dosageFrequency;
    				cell8.innerHTML=user1[i].dosageTime;
    	    }
    	    }
    	}
    	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
    	request.send("umail="+emailid+"&relation="+relation);
    	return false;
    }