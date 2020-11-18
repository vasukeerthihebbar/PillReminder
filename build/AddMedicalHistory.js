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
	element11.value="Del";
	element11.onclick = function() {
del(this);
}
	cell10.appendChild(element10);
	cell10.appendChild(element11);

 
}

function save(row){


var table = document.getElementById('data_table');
var i=row.parentNode.parentNode.rowIndex;

var illness=table.row(i).td(0).value;
var doctordetail=table.row(i).td(1).value;
var medicine=table.row(i).td(2).value;
var startdate=table.row(i).td(3).value;
var enddate=table.row(i).td(4).value;
var dosageamount=table.row(i).td(5).value;
var dosagefrequency=table.row(i).td(6).value;
var dosagetime=table.row(i).td(7).value;
var emailnotification=table.row(i).td(8).value;


table.row(i).td(0).innerHTML="illness";
table.row(i).td(1).innerHTML="doctordetail";
table.row(i).td(2).innerHTML="medicine";
table.row(i).td(3).innerHTML="startdate";
table.row(i).td(4).innerHTML="enddate";
table.row(i).td(5).innerHTML="dosageamount";
table.row(i).td(6).innerHTML="dosagefrequency";
table.row(i).td(7).innerHTML="dosagetime";
table.row(i).td(8).innerHTML="emailnotification";


document.getElementById("save").style.display="none";
}

function del(row){
var i=row.parentNode.parentNode.rowIndex;
document.getElementById('data_table').deleteRow(i);

}
















