// Function to draw the table based on user input
function make_table(rows, cols) {
    let htmlcode = '<table id="mytable">';
    
    // Generate rows and columns
    for (let i = 0; i < rows; i++) {
        htmlcode += "<tr>";
        for (let j = 0; j < cols; j++) {
            htmlcode += `<td>${(i + 1) * (j + 1)}</td>`;
        }
        htmlcode += "</tr>";
    }
    htmlcode += "</table>";

    // Insert the table into the page
    document.getElementById('table-container').innerHTML = htmlcode;
}

// Function to handle the button click and get the user inputs
function drawTable() {
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('columns').value;
    
    if (rows > 0 && cols > 0) {
        make_table(rows, cols);
    } else {
        alert('Please enter valid values for rows and columns.');
    }
}
