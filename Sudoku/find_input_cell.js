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


function check(matrix_to_check,row, col,keypress)
{
    for(i=0;i<9;i++)
    {
        if(matrix_to_check[i][col]===keypress)
        return 0;
        if(matrix_to_check[row][i]===keypress)
        return 0;
        if(matrix_to_check[(3*(Math.floor(row/3)))+ Math.floor(i/3 )][3*(Math.floor(col/3))+i%3] === keypress)
        return 0;
    }
    return 1;
}

function generate_diagonal(){
  
    // matrix initialization by zero
     for( i = 0 ;i < 9 ; i++){
        for(j =0 ; j< 9 ; j++){
            matrix_quest[i][j] = 0;
          }
     }

    let possible_input = new Array(9);
    
    for( i = 0 ;i < 9 ; i++)
         possible_input[i] = i+1;

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
    for ( i = 3; i <6; i++) {
        for ( j = 3; j < 6; j++) {
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


function remain_matrix_generator(){
    for(let rw_tr = 0 ; rw_tr <9 ; rw_tr++ ){
        for(let cl_tr = 0 ; cl_tr <9 ; cl_tr++ ){
            
            if(matrix_quest[rw_tr][cl_tr] === 0){
                 for( let num_ch = 1 ; num_ch <= 9 ; num_ch++){
                      if(  check(matrix_quest,rw_tr, cl_tr, num_ch) === 1 ){
                        matrix_quest[rw_tr][cl_tr] = num_ch;
                          if(remain_matrix_generator() === 1){
                            return 1;
                          }
                          else 
                            matrix_quest[rw_tr][cl_tr] = 0 ;
                      }
                 }
                 
                 return 0;
            }
        }
    }
    return 1;
}


window.onload = generate_diagonal();
