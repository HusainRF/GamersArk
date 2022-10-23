//            <!---------------- Random cells will be selected for getting unique salon  ----------------/>


let matrix_quest = new Array(9);
for (var i = 0; i < 9; i++) {
    matrix_quest[i] = new Array(9);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}




function generate_diagonal() {

    // matrix initialization by zero

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            matrix_quest[i][j] = 0;
        }
    }

    let possible_input = new Array(9);

    for (i = 0; i < 9; i++)
        possible_input[i] = i + 1;

    shuffleArray(possible_input);
    let mat_idx = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix_quest[i][j] = possible_input[mat_idx];
            mat_idx++;
        }
    }

    shuffleArray(possible_input);
    mat_idx = 0;
    for (i = 3; i < 6; i++) {
        for (j = 3; j < 6; j++) {
            matrix_quest[i][j] = possible_input[mat_idx];
            mat_idx++;
        }
    }

    shuffleArray(possible_input);
    mat_idx = 0;
    for (i = 6; i < 9; i++) {
        for (j = 6; j < 9; j++) {
            matrix_quest[i][j] = possible_input[mat_idx];
            mat_idx++;
        }
    }

    remain_matrix_generator();

    console.log(matrix_quest);
}


function remain_matrix_generator() {
    for (let rw_tr = 0; rw_tr < 9; rw_tr++) {
        for (let cl_tr = 0; cl_tr < 9; cl_tr++) {

            if (matrix_quest[rw_tr][cl_tr] === 0) {
                for (let num_ch = 1; num_ch <= 9; num_ch++) {
                    if (check(matrix_quest, rw_tr, cl_tr, num_ch) === 1) {
                        matrix_quest[rw_tr][cl_tr] = num_ch;
                        if (remain_matrix_generator() === 1) {
                            return 1;
                        }
                        else
                            matrix_quest[rw_tr][cl_tr] = 0;
                    }
                }

                return 0;
            }
        }
    }
    return 1;
}



//hashmap for finding input cells
let hashmap = new Array(9);
for (var i = 0; i < 9; i++) {
    hashmap[i] = new Array(9);
}

let count_tot_input; // varibale for storing total no. of input cell

// function which selects k cell, in which we put <input> element

function find_input_box(cnt_display) {

    // in hashmap 0 indicates -> requires input element 
    // in hashmap 1 indicates -> it should have fixed value - displayed
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            hashmap[i][j] = 1;
        }
        // assign all value of hashmap to 1 
    }

    // let cnt_display=30; /// for comment
    // console.log(cnt_display);
    let input_cnt = 81 - cnt_display;
    pop_counter = input_cnt;
    count_tot_input = input_cnt;

    correct = 0;
    
    let z = 0;
    let all_indeces = new Array(81);

    // This loop is for storing the id's of input cells of the matrices
    // in a 1d Array all_indeces whose size is equal to the total blocks
    // present in the matrices
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            all_indeces[z] = i * 10 + j;
            z++;
        }
    }
    let maxi = 81;

    // Math.floor(Math.random() * (myMax - myMin + 1) + myMin); ->
    // this function gives a random value bw myMax and myMin .
    for (z = 0; z < input_cnt; z++) {

        let randm = Math.floor(Math.random() * (maxi + 1));
        // This random no is used to get the id of the cell of the matrice for which
        // we will provide an input element .   

        let rw = Math.floor(all_indeces[randm] / 10); // row no.
        let cl = Math.floor(all_indeces[randm] % 10); // column no.
        // for example randm=74 then rw=74/10=7 and cl=74%10=4


        hashmap[rw][cl] = 0;

        let r = 0;
        i = 0;

        let temp = new Array(maxi - 1);

        // now we have to delete the randm no from the indeces.
        // So ,that when we again search for a randm no then we don't get again the same
        // randm no.
        // here the concept of delete ,assigning. 
        //deleting(from all indeces[]) -> Assigining(to temp array) ->Assigining(back to all_indeces[])
        for (i = 0; i < maxi; i++) {
            if (i == randm)
                i++;
            temp[r] = all_indeces[i]
            r++;
        }
        for (i = 0; i < maxi - 1; i++)
            all_indeces[i] = temp[i];
        maxi--;
    }

    console.log(hashmap);
}




//            <!-------------- random input cell selected for a unique problem ----------/>

// pop-up call here

let pop_counter, correct;
function f2() {   // this is used to promote to  change level
    if (pop_counter != 0) {             // if everything is right then promote to new level 
        if (level == 0) {
            medium1();
        }
        else
            hard1();

    }
    else {                          // else take the user to prev level
        if (level == 2) {
            medium1();
        }
        else
            easy1();
    }

}
function f3() {              // it used as a retry button 
    if (level == 0)
        easy1();
    else if (level == 1)
        medium1();
    else
        hard1();

}






// pop-up call here

// pop-up call here



//            <!------------------- initialising the matrix - begin---------------------/>


// matrix declartion - start 

var trail = new Array(9);// solution array
for (var i = 0; i < trail.length; i++) {
    trail[i] = new Array(9);

}

var user = new Array(9); // user input array 
for (var i = 0; i < user.length; i++) {
    user[i] = new Array(9);

}

var checker = new Array(9); // confusion aaray
for (var i = 0; i < checker.length; i++) {
    checker[i] = new Array(9);

}

var check_right_input = new Array(9); // confusion aaray
for (var i = 0; i < check_right_input.length; i++) {
    check_right_input[i] = new Array(9);

}

// matrix declaration ended



// assigning initial values to matrix 
function matrix_initialization() {

    generate_diagonal();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            trail[i][j] = matrix_quest[i][j];
        }
        // console.log(trail[i]);
    }

    // Here we are initializing the checker array from the trial matrix
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (hashmap[i][j] === 0)
                checker[i][j] = "*";
            else
                checker[i][j] = trail[i][j];
        }
        // console.log(checker[i]);
    }

    // Here we are initializing the User  array from the trial matrix
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (hashmap[i][j] === 0)
                user[i][j] = '*';
            else
                user[i][j] = trail[i][j];
        }
        // console.log(user[i]);
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
                check_right_input[i][j] = 0;
        }
        // console.log(user[i]);
    }


    // matrix value assigned  - end   
    create_table();
    // This function generates a 9*9 matrix on the html page by taking values from
    // checker matrix.
}


//            <!------------------- ending of matrix's initailzation ----------------------/>

/// random calculations




//            <!----------------genrating rand no. for dipalying----------------------------/>

let level = 0;
// when level = 0 difficulty level => Easy
// when level = 1 difficulty level => Medium
// when level = 2 difficulty level => Hard
let duration;
let cnt_display = 30;
function easy1() {

    level = 0;
    duration = 5; // duration are in seconds.
    cnt_display = 50 + Math.floor((Math.random() * 10)); // generate random value 50-60
    find_input_box(cnt_display);
    matrix_initialization();

    console.log(cnt_display);
    // document.getElementById("mode").innerHTML="Easy";
    // document.getElementById("alloted").innerHTML="10 min";

}
function medium1() {
    level = 1;
    duration = 2; // duration are in seconds.
    cnt_display = 40 + Math.floor((Math.random() * 10)); // generate random value 40-50

    confirm_box();

    // document.getElementById("mode").innerHTML="Medium";
    // document.getElementById("alloted").innerHTML="18 min";
}
function hard1(event) {
    level = 2;
    duration = 1500; // duration are in seconds.
    cnt_display = 30 + Math.floor((Math.random() * 10)); // generate random value 30-40 
    confirm_box();
    // document.getElementById("mode").innerHTML="Hard";
    // document.getElementById("alloted").innerHTML="25 min";
}
//              <!---------------------------Confirmation box----------------------------------/>
function confirm_box() {
    var txt;
    if (confirm("Do you wish to change a level?")) {
        find_input_box(cnt_display);
        matrix_initialization();
        console.log(cnt_display);

    }
    document.getElementById('easy').innerHTML = "Easy";
    document.getElementById('medium').innerHTML = "Medium";
    document.getElementById('hard').innerHTML = "Hard";
}



document.getElementById('easy').addEventListener('click', easy1);
document.getElementById('medium').addEventListener('click', medium1);
document.getElementById('hard').addEventListener('click', hard1);

//             <!---------------- for display, a randomly generated number--------------------/>






//             <!-------------------------- generating a matrix----------------------------------/>


let table;
table = document.createElement('table');

// document.querySelector('.matrix').append(table);
// A complete table is added to the matrix class

function checkInput(ob) {
    //to check input should be 1-9
    var invalidChars = /[^1-9]/gi
    if (invalidChars.test(ob.value)) {
        // alert("only numerical");

        ob.value = ob.value.replace(invalidChars, "");
        return false;
    }
    return true;
}

function create_table() {
    // function declaration (this is the main part which creates the table of size(9x9))
    // console.log("creating table");
    table = undefined;

    // console.log(table);
    table = document.createElement('table');

    // very important  this part used to load diff matrix for (easy , med , hard) 
    let mat = document.querySelector('.matrix');
    console.log(mat.childElementCount);

    let element = document.querySelector('.matrix');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    mat.appendChild(table);
    ////// do'nt delete 


    let tbody = document.createElement('tbody');

    table.appendChild(tbody);

    for (i = 1; i <= 9; i++) {

        // creating ith row for the matrix 
        var row = document.createElement("tr");

        for (j = 1; j <= 9; j++) {
            cell = document.createElement("td");
            // inp = Whenever a field is empty, it saves user input.


            let num = (i) * 10 + (j);
            let input_id = num.toString();

            // here big input element is breakdown in 3-parts...
            let inp1 = '<input id = "' + input_id;
            let inp2 = ' "maxlength="1" onChange="checkInput(this)" onKeyup="checkInput(this)" type="text" onkeydown ="return myKeyPress(event, id)" autocomplete="off"/>'

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

            // This is the css part (by js)for construction of a particular cell   
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

function check(matrix_to_check, row, col, keypress) {
    for (i = 0; i < 9; i++) {
        if (matrix_to_check[i][col] === keypress)
            return 0;
        if (matrix_to_check[row][i] === keypress)
            return 0;
        if (matrix_to_check[(3 * (Math.floor(row / 3))) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] === keypress)
            return 0;
    }
    return 1;
}

//    <!------------------------------- check for a user input ---------------------------/>









//     <!--------------------------- user input — listener --------------------------------/>

// Recording which no. is entered in which cell of matrix 
function myKeyPress(e, id) {
    // var keynum;


    // if (window.event) {
    //     keynum = e.keyCode;
    // } else if (e.which) {
    //     keynum = e.which;
    // }

    // let num_pressed = String.fromCharCode(keynum);

    // console.log(num_pressed);
    // id  => id of input cell where user enters new value
    // num_pressed  => tell's what number was press


    // alert(num_pressed + "  " + id);

    if (((e.keyCode) > 48 && (e.keyCode) <= 57) || ((e.keyCode) > 96 && (e.keyCode) <= 105) || e.keyCode == 8) {


        let num_pressed;// To get the actual no. which pressed either from numbers or from numpad

        if ((e.keyCode) > 96 && (e.keyCode) <= 105)
            num_pressed = e.keyCode - 96;// when a number from numpad is pressed

        if ((e.keyCode) > 48 && (e.keyCode) <= 57)
            num_pressed = e.keyCode - 48; // when a number from numbers/upper row is pressed



        if (e.keyCode == 8) // keyCode of backspace
        {
            if(check_right_input[id[0] - '1'][id[1] - '1'] === 1) // right input removed
              count_tot_input++;

            check_right_input[id[0] - '1'][id[1] - '1'] = 0;
            
            user[id[0] - '1'][id[1] - '1'] = '*';
            document.getElementById(id).style.backgroundColor = "white";


        }
        else if (user[id[0] - '1'][id[1] - '1'] === '*') {
            let rw_data = id[0] - '1';
            let cl_data = id[1] - '1';

            let ok = check(user, rw_data, cl_data, num_pressed);// To check if the no. entered is correct or not
            user[id[0] - '1'][id[1] - '1'] = num_pressed;
            pop_counter++;

            if (!ok) // if number is not correct ,we change bg color to red
            {
                document.getElementById(id).style.backgroundColor = "#FF5D5D";
            }
            else // if it is correct  ,no change.
            {
                check_right_input[id[0] - '1'][id[1] - '1'] = 1;
                count_tot_input -- ; // decrease cnt by 1 because right input inserted
                document.getElementById(id).style.backgroundColor = "white";
            }
        }

        // console.log(user);
    }

}

//    <!---------------------------function end-------------------------------------------/>







//      <!---------------------------Countdown-Timer started-------------------------------/>


function f1() {
    startTimer(duration, timer2);
}

// var pause = true;
chnge_mode = 0;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const myinterval = setInterval(myTimer, 1000);
    display.style.backgroundColor = "white";


    function myTimer() {
        if (chnge_mode == 1) {
            display.innerHTML = "00" + ":" + "00";
            chnge_mode = 0;
            clearInterval(myinterval);
        }
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;
        // console.log(pop_counter);

        if (timer === -1) {
            display.style.backgroundColor = "red";
            display.innerHTML = "Time is Up!";
            let flag1 = 0;


            // to finall check the matrix if it is completely filled and also correctly filled
            // for (let t = 0; t < 9; t++) {
            //     for (let u = 0; u < 9; u++) {
            //         if (user[t][u] === '*') {
            //             flag1 = 1;
            //             break;
            //         }
            //         let x, y;
            //         for (x = 0; x < 9; x++) // column check
            //         {
            //             if (x != u) {
            //                 if (user[t][x] === user[t][u])
            //                     flag1 = 1;
            //                 break;
            //             }
            //         }
            //         for (x = 0; x < 9; x++)  // row check
            //         {
            //             if (x != t) {
            //                 if (user[x][u] === user[t][u])
            //                     flag1 = 1;
            //                 break;
            //             }
            //         }
            //         for (x = 3 * Math.floor(t / 3); x < 3 * Math.floor(t / 3) + 3; i++) // box check
            //         {
            //             for (y = 3 * Math.floor(u / 3); y < 3 * Math.floor(u / 3) + 3; y++) {
            //                 if (x != t && y != u) {
            //                     if (user[x][y] === user[t][u]) {
            //                         flag1 = 1;
            //                         break;
            //                     }
            //                 }
            //             }
            //             if (flag1==1)
            //                 break;

            //         }


            //         if (flag1 == 1)
            //             break;

            //     }
            //     if (flag1 == 1)
            //         break;
            // }
            console.log(flag1);
            //above check function is used;

            if (flag1 == 0) {
                document.getElementById("stats1").innerHTML = "Victory";
                document.getElementById("stats2").innerHTML = "Congratulations you are promoted to next level";
                document.getElementById("stats3").innerHTML = "Next Level";
                document.getElementById("stats4").innerHTML = "Retry";


            }
            else {
                document.getElementById("stats1").innerHTML = "You Lost";
                document.getElementById("stats2").innerHTML = "Take a breath and start again";
                document.getElementById("stats3").innerHTML = "previous level";
                document.getElementById("stats4").innerHTML = "Retry";

            }
            OpenBootstrapPopup();
            function OpenBootstrapPopup() {
                $("#simpleModal").modal('show');
            }


            clearInterval(myinterval);

            /*  timer = duration; */ // uncomment this line to reset timer automatically after reaching 0
        }
        timer--;
    }
}

// document.getElementById('pause').addEventListener('click', function () {
//     pause = false;
// });

// document.getElementById('resume').addEventListener('click', function () {
//     pause = true;
// });
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

window.onload = easy1();
// document.querySelector(".matrix").onload =
 // <!---------------------------- matrix called ended------------------------------/>