
const letterBoxes = document.getElementsByClassName('item')
const keys = document.getElementsByClassName('key')


let answer = 'USAGE'
let currentTry = ""
let currentRow= 0
let letterBoxCount = 0


function addLetter(letter){
    if(currentTry.length != 5){
        currentTry += letter.innerHTML
        letterBoxes[letterBoxCount].innerHTML = letter.innerHTML
        letterBoxCount+=1
        console.log(currentTry)
    }
    if(currentTry.length == 5){
        
        
    }
}

function enterButton(){
    if(currentTry.length != 5){
        alert('Enter a 5 letter word !')
    }
    // if(valid()){
    //     pass
    // }
    else{
        check()
        setTimeout(() => {
            if(answer == currentTry){
                alert('You have won !')
                return
            }
            else{
                currentRow +=1
                currentTry = ""
            }
        }, 2000);
    }
}

function deleteButton(){
    if(currentTry.length > 0){
        currentTry = currentTry.slice(0,-1)
        letterBoxCount -=1
        letterBoxes[letterBoxCount].innerHTML = ""
    }
}

function check(){
    for(let i = 0; i < 5; i++){
        letterBoxes[currentRow*5 + i].style.backgroundColor = "#3a3a3c";
        let key = getKey(currentTry[i])
        key.style.backgroundColor = "#3a3a3c"
    }

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            let key = getKey(currentTry[j])
            if(answer[i] == currentTry[j] && i != j){
                letterBoxes[currentRow * 5 + j].style.backgroundColor = "#b59f3b"
                letterBoxes[currentRow * 5 + j].style.border = "2px solid #b59f3b"
                key.style.backgroundColor = "#b59f3b"

            }
            else if(answer[i] == currentTry[j] && i == j){
                letterBoxes[currentRow * 5 + j].style.backgroundColor = "#538d4e"
                letterBoxes[currentRow * 5 + j].style.border = "2px solid #538d4e"
                key.style.backgroundColor = "#538d4e"
            }
        }
    }

}

function getKey(letter){
    for(let i = 0; i < keys.length; i++){
        if(keys[i].innerHTML == letter){
            return keys[i]
        }
    }
}



