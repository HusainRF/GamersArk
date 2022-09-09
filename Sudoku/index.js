// creating a matrix 
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);
// table.setAttribute("style","border:1px solid #D6CDA4" )

// Adding the entire table into the matrix class
document.querySelector('.matrix').appendChild(table);

function create_table() {
    // function declation (this is the main part which creates the table of size(9*9) )

    for (i = 1; i <= 9; i++) {
        
        var row = document.createElement("tr");
        
        for (j = 1; j <= 9; j++) {
            cell = document.createElement("td");
            cell.innerHTML = j ;

            if(i%3==0 && j%3 == 0 )
            cell.setAttribute("style","border-right:3px solid black ;border-bottom:3px solid black;" );
            else if(i%3==0  && j%3 !=0 )
            cell.setAttribute("style","border-bottom:3px solid black; border-right:3px solid #D6CDA4;" );
            else if(j%3==0 && i%3 !=0)
            cell.setAttribute("style","border-right:3px solid black ; border-bottom  :3px solid #D6CDA4 ;" );
            else 
               cell.setAttribute("style","border-right:3px solid #D6CDA4 ; border-bottom  :3px solid #D6CDA4 ;" );
            row.append(cell);


        }
        tbody.append(row);
    }

}

// matrix called and printed to a webpage (styling is still pendding....)

// calling a matrix(table , this will )
document.querySelector(".matrix").onload = create_table();


