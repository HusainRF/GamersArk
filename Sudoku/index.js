//hashmap for finding input cells
let hashmap = new Array(9);

for (var i = 0; i < 9; i++) {
    hashmap[i] = new Array(9);


    for (j = 0; j < 9; j++) {
        hashmap[i][j] = 1;

    }

}

function find_input_box(cnt_display){

// in hashmao 0 indicates -> requires input element 
// in hashmao 1 indicates -> it should have fixed value - disaplyed


// let cnt_display=30; /// for comment
// console.log(cnt_display);
let input_cnt=81-cnt_display;

let z=0;
let all_indeces =new Array(81);

for(i=0;i<9;i++)
{
    for(j=0;j<9;j++)
    {
        all_indeces[z]=i*10+j;
        z++;
    }
}
let maxi=81;

for(z = 0 ; z < input_cnt ; z++)
{
    let randm = Math.floor(Math.random()*(maxi+1));
    
    
    let cl= Math.floor(all_indeces[randm]%10);
    let rw=Math.floor(all_indeces[randm] /10) ;

    hashmap[rw][cl] = 0;
    
    let r = 0  ;
    i = 0 ;
    
    let temp=new Array(maxi-1);

    for(i=0;i<maxi;i++) 
    {
       if(i==randm)
         i++;
       temp[r] = all_indeces[i]
       r++;
    }
    for( i =0 ;i < maxi -1; i++)
    all_indeces[i] = temp[i];
    maxi--;
}

console.log(hashmap);
}


//            <!-------------------Begun initialising the matrix---------------------/>

var trail = new Array(9);
for (var i = 0; i < trail.length; i++) {
    trail[i] = new Array(9);

}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        trail[i][j] = 1;
    }
    // console.log(trail[i]);
}


var checker = new Array(9);
for (var i = 0; i < checker.length; i++) {
    checker[i] = new Array(9);

}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (hashmap[i][j] === 0)
            checker[i][j] = "*";
        else
            checker[i][j] = trail[i][j];
    }
    // console.log(checker[i]);
}

var user = new Array(9);
for (var i = 0; i < user.length; i++) {
    user[i] = new Array(9);

}

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (hashmap[i][j] === 0)
            user[i][j] = '*';
        else
            user[i][j] = trail[i][j];
    }
    // console.log(user[i]);
}

//            <!------------------- ending of matrix's initailzation ----------------------/>

/// random calculations




//            <!----------------genrating rand no. for dipalying----------------------------/>

let level = 0;
// when level = 0 difficulty level => Easy
// when level = 1 difficulty level => Medium
// when level = 2 difficulty level => Hard

let cnt_display = 30;
function hard1(event) {
    level = 2;
    cnt_display = 30 + Math.floor((Math.random() * 10)); // generate random value 30-40 
    find_input_box(cnt_display);
    console.log(cnt_display);
}

function easy1() {
    level = 0;
    cnt_display = 50 + Math.floor((Math.random() * 10)); // generate random value 50-60
    find_input_box(cnt_display);
    console.log(cnt_display);
}
function medium1() {
    level = 1;
    cnt_display = 40 + Math.floor((Math.random() * 10)); // generate random value 40-50
    find_input_box(cnt_display);
    console.log(cnt_display);
}

document.getElementById('easy').addEventListener('click', easy1);
document.getElementById('medium').addEventListener('click', medium1);
document.getElementById('hard').addEventListener('click', hard1);

//             <!---------------- for display, a randomly generated number--------------------/>






//             <!-------------------------- generating a matrix----------------------------------/>


let table = document.createElement('table');
// table.setAttribute("style","border:1px solid #D6CDA4" )

// A complete table is added to the matrix class

document.querySelector('.matrix').appendChild(table);
let tbody = document.createElement('tbody');
table.appendChild(tbody);

function checkInput(ob) {
    //to check input should be 1-9
    var invalidChars = /[^1-9]/gi
    if (invalidChars.test(ob.value)) {
        alert("only numerical");

        ob.value = ob.value.replace(invalidChars, "");
        return false;
    }
    return true;
}

function create_table() {
    // function declaration (this is the main part which creates the table of size(9x9))
    // console.log("creating table");

    for (i = 1; i <= 9; i++) {

        var row = document.createElement("tr");

        for (j = 1; j <= 9; j++) {
            cell = document.createElement("td");
            // inp = Whenever a field is empty, it saves user input.


            let num = (i) * 10 + (j);
            let input_id = num.toString();

            // here big input element is breakdown in 3-parts...
            let inp1 = '<input id = "' + input_id;
            let inp2 = ' "maxlength="1" onChange="checkInput(this)" onKeyup="checkInput(this)" type="text" onkeypress="return myKeyPress(event, id)" autocomplete="off"/>'

            // let inp3 = '';
            // those 3-parts are merged together for further use
            let inp = inp1 + inp2;


            let cell_id = num.toString();
            cell_id += "r";

            cell.id += cell_id;


            if (checker[i - 1][j - 1] != '*') {
                // fixed value for rest of cell....
                cell.classList.add("fxd");
                cell.innerHTML = trail[i - 1][j - 1];
            }
            else {
                cell.innerHTML = inp;

                // document.querySelector("#cell_id input").style.color= "red";
            }


            if (i % 3 == 0 && j % 3 == 0)
                cell.setAttribute("style", "border-right:3px solid black ;border-bottom:3px solid black;");
            else if (i % 3 == 0 && j % 3 != 0)
                cell.setAttribute("style", "border-bottom:3px solid black; border-right:3px solid #D6CDA4;");
            else if (j % 3 == 0 && i % 3 != 0)
                cell.setAttribute("style", "border-right:3px solid black ; border-bottom  :3px solid #D6CDA4 ;");
            else
                cell.setAttribute("style", "border-right:3px solid #D6CDA4 ; border-bottom  :3px solid #D6CDA4 ;");
            row.append(cell);


        }
        tbody.append(row);
    }

}

//              <!------------matrix design + printing + adding input cell  -  end -----------------/>





//                  <!------------------------check for a user input ----------------------------/>

function check_row(row, column, keypress) {
    for (let j = 0; j < 9; j++) {
        if (user[row][j] == keypress)
            return 0;

    }
    return 1;
}

function check_column(row, column, keypress) {
    for (let j = 0; j < 9; j++) {
        if (user[j][column] == keypress)
            return 0;

    }
    return 1;

}

function check_box(row, column, keypress) {
    row -= row % 3;
    column -= column % 3;
    console.log(row + " " + column);
    for (let i = row; i < row + 3; i++) {
        for (let j = column; j < column + 3; j++) {
            if (user[i][j] === keypress)
                return 0;
        }
    }
    return 1;

}

function check_input(id, keypress) {
    let ok = 1;
    let i = id[0] - '1';
    let j = id[1] - '1';


    if (!check_row(i, j, keypress)) {
        return 0;
    }

    if (!check_column(i, j, keypress)) {

        return 0;
    }


    if (!check_box(i, j, keypress)) {
        ok = 0;
        return ok;
    }

    return 1;

    //boxcheck

}


//                     <!------------------check for a user input ------------------------/>









//                  <!--------------------------- user input — listener --------------------------------/>

// Recording which no. is entered in which cell of matrix 
function myKeyPress(e, id) {
    var keynum;
    if (window.event) {
        keynum = e.keyCode;
    } else if (e.which) {
        keynum = e.which;
    }
    let num_pressed = String.fromCharCode(keynum);


    // id  => id of input cell where user enters new value
    // num_pressed  => tell's what number was press


    alert(num_pressed + "  " + id);
    let ok = check_input(id, num_pressed - '0');

    console.log(ok);
    if (!ok) {
        document.getElementById(id).style.backgroundColor = "#FF5D5D";
    }
    else
        user[id[0] - '1'][id[1] - '1'] = num_pressed - '0';


}

//                <!---------------------------function end-------------------------------------------/>





//                <!---------------------------Countdown-Timer started-------------------------------/>


function f1() {
    countdown("timer2", 10, 0);
}
var pause = true;
function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;
    var counter = setInterval(updateTimer, 1000);
    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    var temp = 0;
    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        if (pause != false) {
            msLeft = endTime + temp - (+new Date);
            temp = 0;
            if (msLeft < 1000) {
                element.innerHTML = "Time is up!";
                clearInterval(updateTimer);
            } else {
                time = new Date(msLeft);
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                // setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
            }
        }
        else {
            temp += 1000;
        }

    }
}
document.getElementById('pause').addEventListener('click', function () {
    pause = false;
});

document.getElementById('resume').addEventListener('click', function () {
    pause = true;
});
// countdown( "ten-countdown", 10, 0 );

// var timersCount = 0;
// var pause = false; //is timer paused



// function countTimers() {
//     timersCount++;

//     var count = 26;
//     var counter = setInterval(timer, 1000);

//     function timer() {
//         if (!pause) { //do something if not paused
//             count = count - 1;
//             if (count < 0) {
//                 clearInterval(counter);
//                 setTimeout(countTimers, 5000); //start count from 26 again
//                 return;
//             }

//             document.getElementById("timer").innerHTML = count;
//         }
//     }

//     document.getElementById("countTimers").innerHTML = timersCount;
// }


// <!----------------------------Countdown-Timer ended------------------------------/>



// <!------------------- calling a matrix(table , this will )------------------------/>

document.querySelector(".matrix").onload = create_table();
window.onload = easy1();
 // <!---------------------------- matrix called ended------------------------------/>