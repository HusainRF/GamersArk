// creating a matrix 
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);
// table.setAttribute("style","border:1px solid black" )

// Adding the entire table into the matrix class
document.querySelector('.matrix').appendChild(table);

function create_table() {
    // function declation (this is the main part which creates the table of size(9*9) )

    for (i = 0; i < 9; i++) {
        
        var row = document.createElement("tr");
        
        for (j = 0; j < 9; j++) {
            cell = document.createElement("td");
            cell.innerHTML = j + 1;
            cell.setAttribute("style","border:1px solid black" );
            row.append(cell);
            
        }
        tbody.append(row);
    }

}

// matrix called and printed to a webpage (styling is still pendding....)

// calling a matrix(table , this will )
document.querySelector(".matrix").onload = create_table();


