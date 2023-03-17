// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Rita) {

    return cats.push(Rita)
}

function destructivelyPrependCat(Yuki){

    return cats.unshift(Yuki)
}


function  destructivelyRemoveFirstCat(Yuki){
    return cats.shift(Yuki)
}

function destructivelyRemoveLastCat(Rita){

    return cats.pop(Rita)
}

function   appendCat(Peter){
    return [...cats,Peter];
}
function    prependCat(Stick){
    return [Stick,...cats];
}
function  removeLastCat(){
    return   cats.slice(0, -1);;
}
function   removeFirstCat(){
     return cats.slice(1);;
}


