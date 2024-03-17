// for (let i=0; i <= 10; i++) console.log(i)

// let i = 0
// while(i <= 10){
//     console.log(i)
//     i++
// }
// let i = 0
// do {
//     console.log(i)
//     i++
// } while(i <= 10)

// const str = 'string'
// for (let i=0; i < str.length; i++) {
    
//     console.log(str[i])}


const func1 = (num) => {
    for (let i = 0; i <=num; i++) console.log(i)

}

function func2(num) {
    for(let i = 0; i <=num; i++)
    console.log(i)
}
const func3 = function(num) {
    for(let i = 0; i <=num; i++)
    console.log(i)
}

func1(2)
func2(3)
func3(3)

const arrowStr = (str) => {
    for (let i = 0; i <=str.length; i++) 
    console.log(str[i])
}

function expStr(str){
    for(let i = 0; i <= str.length; i++)
    console.log(str[i])
}
const funcDecl = function(str) {
    for(let i = 0; i <=str.length; i++)
    console.log(str[i])
} 

arrowStr('evelina')
expStr('oleinic')
funcDecl('ion')