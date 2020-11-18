window.onload=function() {
	uname=sessionStorage.getItem("name")
	email=sessionStorage.getItem("email")
	console.log(email)
	if(uname == "null"){
		location.href="http://localhost:8080/MiniProject/Login.html"
		alert("YOU NEED TO LOG IN FIRST.")
		
	}
}
function goToMedicalHistoryView(){
	location.href="http://localhost:8080/MiniProject/DisplayMedicalHistory.html"
}
function saveMedicalhistory() {
	var relation = document.getElementById("relation").value;
	var illness = document.getElementById("illnessid").value;
	var doctorDetails = document.getElementById("docdet").value;
	var medicine = document.getElementById("medid").value;
	var startDate = document.getElementById("stdid").value;
	var endDate = document.getElementById("endid").value;
	var dosageAmount = document.getElementById("tbid").value;
	var dosageFrequency = document.getElementById("dsgf").value;
	var dosageTime = document.getElementById("dtmid").value;
	var url = "http://localhost:8080/MiniProject/TeamD/PillReminder/AddDependent"
	request = new XMLHttpRequest();
	request.open("post", url, true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			message = request.responseText;
			alert(message);
		}
	}
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+email+"&relation="+relation+"&illness="+illness+"&doctorDetails="+doctorDetails+
			     "&medicine="+medicine+"&startDate="+ startDate+"&endDate="+endDate+"&dosageAmount=" +dosageAmount+"&dosageFrequency=" + dosageFrequency+
			     "&dosageTime="+dosageTime);
	return false;
}
