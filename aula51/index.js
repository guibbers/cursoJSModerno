function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola Mundo')

console.log(olaMundo('mundo!'))