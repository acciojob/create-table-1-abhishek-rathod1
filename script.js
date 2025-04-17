function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

	let newRow = document.createElement("tr");
	newRow.innerHTML += "<td>New Cell1</td><td>New Cell2</td>"
	
	// table.appendChild(newRow); 
	 table.tBodies[0].insertBefore(newRow, table.tBodies[0].rows[0]);
	// table.insertBefore(newRow,table.rows[0]);
  
}
