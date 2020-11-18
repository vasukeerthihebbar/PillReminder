window.onload=function() {
	uname=sessionStorage.getItem("name")
	umail=sessionStorage.getItem("email")
	console.log(umail)
	if(uname == "null"){
		location.href="http://localhost:8080/MiniProect/Login.html"
		alert("YOU NEED TO LOG IN FIRST.")
		
	}
}

function add_row(tableID) {

	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	
	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	cell1.appendChild(element1);

 var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	cell2.appendChild(element2);

var cell3 = row.insertCell(2);
	var element3 = document.createElement("input");
	cell3.appendChild(element3);

var cell4 = row.insertCell(3);
	var element4 = document.createElement("input");
	cell4.appendChild(element4);

 var cell5 = row.insertCell(4);
	var element5 = document.createElement("input");
	cell5.appendChild(element5);

var cell6 = row.insertCell(5);
	var element6 = document.createElement("input");
	cell6.appendChild(element6);

var cell7 = row.insertCell(6);
	var element7 = document.createElement("input");
	cell7.appendChild(element7);

 var cell8 = row.insertCell(7);
	var element8 = document.createElement("input");
	cell8.appendChild(element8);

var cell9= row.insertCell(8);
	var element9 = document.createElement("input");
	element9.setAttribute("type","checkbox");
	element9.setAttribute("class","toggle");
	cell9.appendChild(element9);



	var cell10=row.insertCell(9);
	  var element10 = document.createElement("input");
	element10.type = "button";
	element10.name="save";
	element10.value="save";
	   element10.onclick = function() {
save(this);
}  ;        
	var element11 = document.createElement("input");
	element11.type = "button";
	element11.value="Delete";
	element11.onclick = function() {
del(this);
}
	cell10.appendChild(element10);
	cell10.appendChild(element11);

 
}

function save(row){
console.log("testing......testing");

var table = document.getElementById("data_table");
var i=row.parentNode.parentNode.rowIndex;

console.log(table);
console.log(i);

var relation = document.getElementById("userlist").value;
console.log("relation : "+relation);
	
	
var illness=table.rows[i].cells[0].childNodes[0].value;
console.log("illness : "+ illness);
var doctordetail=table.rows[i].cells[1].childNodes[0].value;
console.log("doctordetail : " + doctordetail);
var medicine=table.rows[i].cells[2].childNodes[0].value;
console.log("medicine : " + medicine);
var startdate=table.rows[i].cells[3].childNodes[0].value;
console.log("start date : " + startdate);
var enddate=table.rows[i].cells[4].childNodes[0].value;
console.log("end date : "+ enddate);
var dosageamount=table.rows[i].cells[5].childNodes[0].value;
console.log("dosage amount : " + dosageamount);
var dosagefrequency=table.rows[i].cells[6].childNodes[0].value;
console.log("dosagefrequency : " + dosagefrequency);
var dosagetime=table.rows[i].cells[7].childNodes[0].value;
console.log("dosagetime : " + dosagetime);
var emailnotification=table.rows[i].cells[8].childNodes[0].value;
console.log("emailnotification : " + emailnotification);


      var url="http://localhost:8080/MiniProject/TeamD/PillReminder/saveMedicalDetails"
	request = new XMLHttpRequest()
	request.open("post",url,true)
	request.onreadystatechange=function (){
		if(request.readyState==4 && request.status==200){
			message=request.responseText
			
			if(message=="Details Saved"){
				alert("medical history added")
				//location.href="http://localhost:8080/MiniProject/AddMedicalHistory.html"
			}
			else{
				alert("unable to add")
				
				location.href="http://localhost:8080/MiniProject/AddMedicalHistory.html"
			}
		}
 }  

	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+umail+"&relation="+relation+"&illness="+illness+"&doctorDetails="+doctordetail+"&medicine="+medicine+"&startDate="+startdate+"&endDate="+enddate+"&dosageAmount="+dosageamount+"&dosageFrequency="+dosagefrequency+"&dosageTime="+dosagetime+"&emailNotify="+emailnotification);
	return false;


}
function display(row) {
	var table = document.getElementById("data_table");
	
	var relation = document.getElementById("userlist").value;
	var url = "http://localhost:8080/MiniProject/TeamD/PillReminder/getMedicalHistory";
	let request = new XMLHttpRequest();
	request.open("post",url,true);
	request.onreadystatechange = function() {
	    if (request.readyState == 4 && request.status == 200) {
			var user = request.responseText;
			console.log(user);
			user = JSON.parse(user);
			
			 document.getElementById("new_illness_row1").value=user.illness;
			document.getElementById("new_doctordetails_row1").value=user.doctorDetails;
			document.getElementById("new_medicine_row1").value=user.medicine;
			document.getElementById("new_startdate_row1").value=user.startDate;
			document.getElementById("new_enddate_row1").value=user.endDate;
			document.getElementById("new_dosageamount_row1").value=user.dosageAmount;
			document.getElementById("new_dosagefrequency_row1").value=user.dosageFrequency;
			document.getElementById("new_dosagetime_row1").value=user.dosageTime;
			document.getElementById("new_emailnotification_row1").value=user.emailNotify;
			document.getElementById("userlist").value=relation;
	
			 
	    }
	}
	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
	request.send("email="+umail+"&relation="+relation);
	return false;
    }


function del(row){
var i=row.parentNode.parentNode.rowIndex;
document.getElementById('data_table').deleteRow(i);

}
















