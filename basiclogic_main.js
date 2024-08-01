/* ((((String , Number , Boolean , Array , Object))))

// 1. String - ตัวอักษร
// let = ตัวแปรที่สามารถเปลี่ยนได้
// let firstname = 'zou'
// const idcard = '1234'

// console.log('My name is', firstname)

// 2. Number
// let age = 24;
// let height = 176;

// 3. Boolean
// let isThai = false

// ลองเปลี่ยนชื่อ
// firstname = 'test'
// idcard = '5678'

// console.log( 'My name is', firstname) 
((((String , Number , Boolean , Array , Object)))) */










/* ((((operators))))
- ลบ
* คูณ
/ หาร
% หารเหลือเศษ หรือ mod

// + - * / จะใช้คู่กับ number ได้
// let number1 = 7
// let number2 = 5

// + จะใช้คู่กับค่าstringได้
// let number1 = '7'  
// let number2 = '5'
// let number3 = number1 + number2 --> result = 75

//consolelog
// let number1 = 'test' 
// let number2 = 'num'

// let number3 = number1 + number2
// console.log('new number is' , number3)
((((operators)))) */










/* ((((condition))))
== เท่ากับ
!= ไม่เท่ากับ
> น้อยกว่า
>= น้อยกว่าหรือเท่ากับ
< มากกว่า
<= มากกว่าหรือเท่ากับ


// let number1 = 5
// let number2 = 5

// let condition1 = number1 != number2 // Boolean (true , false)
// console.log('result of condition is' , condition1)

// if - else condition
// if (number1 != number2){  
//     console.log('this is if')
// }else if(number1 == number2){
//     console.log('this is else if')
// }else{
//     console.log('this is else')
// }



/*
    Grade >= 80 เป็นเกรด A
        >= 70 เป็นเกรด B
        >= 60 เป็นเกรด C
        >= 50 เป็นเกรด D
*/

// prompt คล้ายๆ alert เพียงแต่ใส่ค่าในช่องได้
// let score = prompt('ใส่คะแนนของคุณ')
// console.log('you have score:', score)

// if - else condition
// if(score >= 80){ // false
//     console.log('you are A.')
// }else if(score >= 70){ // false
//     console.log('you are A.')
// }else if(score >= 60){ // true
//     console.log('you are C.')
// }else if(score >= 50){
//     console.log('you are D.')
// }else{
//     console.log('you are F.')
// }

/*
&& และ จะมีผลเป็นจริงก็ต่อเมื่อทุกอันต้องเป็นจริง
|| หรือ จะมีผลเป็นจริงก็ต่อเมือตัวใดตัวหนึ่งเป็นจริง
! not หรือ ไม่
*/

// let number1 = 5
// let number2 = 8

// true || false = true
// let condition = number1 >= 3 || number2 >= 10
// console.log('result of condition:', condition)

// let age = 30
// let gender = 'male'

// true && true = true
// if (age >= 20 && gender == 'male'){
//     console.log('You are male adult.')
// }

// ! not หรือ ไม่
// !(true || false) = !(true) = false
// let condition1 = !(number1 >= 3 || number2 >= 10)
// console.log('result of condition:', condition1)

//ตัวเลขที่หาร 2 ลงตัว
// let number = 20

// if(!(number % 2 == 0)){    
//     console.log('you are even.')
// } ((((condition)))) */










/* ((((loops and Iteration)))) 

// while วนไปจนกว่าจะมีค่าเป็น false
// for


let counter = 0

while (counter <= 10) { // ค่า true คือวนยังไม่จบลูบไม่ออกลูบ --> ค่า false จบลูบแล้วออกลูบ
    console.log('Hello world') 
    // 0ไปบวก1 แล้วเอาไปใส่ค่า counter result --> 1 แล้ววนใหม่จนถึง 10 
    // resultก็จะออกมาเป็น 11 ค่าจะเป็น false จบลูบออกลูบ
    // ถ้าจะให้ result เป็น 10 ต้องใช้ < 10
    counter = counter + 1 
    // shorthand การเขียนให้สั้นลง
    // counter += 1
    // counter++
}

//for (ค่าเริ่มต้น , condition วนไปจนกว่าค่าจะเป็น false ถึงจะออกloop , เมื่อวนจบลูบหนึ่งรอบแล้วค่อยกลับไปเช็ค condition)
for(let counter = 0 ; counter < 10 ; counter = counter + 1){
    console.log('Hello world') 
}
// shorthand การเขียนให้สั้นลง
for(let counter = 0 ; counter < 10 ; counter++){
    console.log('Hello world') 
}

((((loops and Iteration)))) */











/* ((((Array)))) 

// array

// let age1 = 30
// let age2 = 35
// let age3 = 40
// console.log('age',age1,age2,age3)




// let ages = [30 , 35 , 40 ,] // Array 3 items index เริ่มนับจากตำแหน่งที่ 0 , 1 , 2 --> 30 , 35 , 40
// console.log('newage', ages[2])
// console.log('age list', ages)

// 1. แทนที่
// ages = [45,50]
// console.log('age list', ages)

// // 2. ต่อ array ใช้ push , ดึงตัวสุดท้ายออกให้ใช้ pop 
// ages.push(55)
// console.log('age list', ages)

// ages.pop()
// console.log('age list', ages)




// let ages = [30, 35, 40 ,45 ,50]
// คุณสมบัติในการ includes ค้นหา
// if(ages.includes(40)){ //return result true
//     console.log('you have 40 in list')
// }

// if(!ages.includes(40)){ //return result false
//     console.log('you have 40 in list')
// }



// คุณสมบัติในการเรียงจากน้อยไปมาก
// let ages = [35, 14, 20]
// console.log('new age', ages)

// ages.sort()

// console.log('new age', ages)


// คุณสมบัติในการ ใช้ push เพิ่มเข้าไป
// let names_list = ['zou','zan','zon']
// names_list.push('zern')
// console.log('name list', names_list)


// คุณสมบัติในการนับจำนวน ใช้ length
// let names_list = ['zou','zan','zon']
// names_list.push('zern')
// console.log('name list', names_list.length)


// คำสั่ง for loop ในการวนลูบเอาเข้ามูลแต่ละตัวออกมา
let names_list = ['zou','zan','zon']
names_list.push('zern')

// เขียนแบบนี้จะยากลำบาก จึงต้องใช้เป็น for loop
console.log('name list', names_list[0])
console.log('name list', names_list[1])
console.log('name list', names_list[2])
console.log('name list', names_list[3])
// ถ้า console.log('name list', names_list[4]) จะเกิดการเกินจำนวนขอบเขตมันจะไปแตะตำแหน่งที่4
//ทำให้เกิด out of length undefined จึงไม่ใช้ <=
// undefined คือไม่พบค่า

for (let index = 0 ; index < names_list.length ; index++){
    console.log('name list', names_list[index])
}
((((Array)))) */








/* ((((object)))) คือตัวแปรที่สามารถเก็บข้อมูลมากกว่า 1 ประเภทได้ 
และสามารถใช้งานร่วมกับ array ได้
*/

// ประกาศตัวแปร js object เพื่อให้สามารถเก็บข้อมูลตามประเภท
// let student = {
//     // key: value,
//     // key คือตัวแทนของชื่อตัวแปร
//     // value คือค่าที่ต้องการจะเก็บ
//     age: 30,
//     name: 'zou',
//     grade: 'A'
// }
//console log เพื่อ access ไปยัง key
// console.log('name:', student.name)
// console.log('age:', student.age)
// console.log('grade:', student.grade)


// let age1 = 30
// let name1 = 'zou'
// let grade1 = 'A'


// และสามารถใช้งานร่วมกับ array ได้ สามารถใส่ obj ตัวที่สองเข้าไปได้
// let students = [{
//     age: 30,
//     name: 'zou',
//     grade: 'A'
// }, {
//     age: 35,
//     name: 'zern',
//     grade: 'B'
// }]

// // push เพิ่มจำนวน student
// students.push({
//     name: 'test',
//     age: 40,
//     grade: 'C'
//  }) 

// pop ลดจำนวน student จำนวนสุดท้ายออกไป
// students.pop()

// for(let index = 0; index < students.length; index++){
//     // ถึง student คนที่เท่าไหร่
//     console.log('Student number: ', (index + 1))
//     console.log('name', students[index].name)
//     console.log('name', students[index].age)
//     console.log('name', students[index].grade)
//  ((((object)))) }








/* ((((functions))))
let score1 = 50
let score2 = 60


// ประกาศ function แบบ js แต่เดิม
// function calculation_grade (score){
//     if(score >= 80){
//         grade = 'A'
//     }else if(score>= 70){
//         grade = 'B'
//     }else if(score>=60){
//         grade = 'C'
//     }else if(score>=50){
//         grade = 'D'
//     }else{
//         grade = 'F'
//     }
//     return grade
// }

// ประกาศ function แบบ arrow function
// ใช้ function
let calculation_grade =(score)=>{
    if(score >= 80){
        grade = 'A'
    }else if(score>= 70){
        grade = 'B'
    }else if(score>=60){
        grade = 'C'
    }else if(score>=50){
        grade = 'D'
    }else{
        grade = 'F'
    }
    return grade
}


let grade1 = calculation_grade(score1) //score1 เทียบเท่า score parameter
let grade2 = calculation_grade(score2)
console.log('grade:', grade1, grade2)

((((functions))))  */












/* ((((parameter function array))))
// array

// let score = [10 , 20 ,30 ,40]
// let newScore = []

// for(let index = 0; index < score.length; index++){
//     console.log('score: ', score[index])
// }

// สิ่งที่อยู่ข้างในเป็น parameter function ก็คือ function
// เขียนแบบ arrow function
// forEach คือการไล่ลูบในแต่ละ item ของ array โดนผ่านตัวแปร s 
// แล้วให้ s ไปเป็นค่าใน function ที่อยู่ภายในนั้นแทน


// การเขียน access เป็นค่าใหม่ *แบบยากลำบาก
// score[0] = score[0] * 2
// score[1] = score[1] * 2
// score[2] = score[2] * 2
// score[3] = score[3] * 2


// ****ในส่วน map**** คูณค่าในแต่ละตำแหน่ง
// score = score.map((s)=>{
//     return s*2 //ไล่ตำแหน่ง 10*2, 20*2 ...
// })

// score.forEach((s)=>{
//     console.log('new score: ', s)
// })


// ****ในส่วน map**** push ค่าออกมาแสดงผล
// let score = [10 , 20 ,30 ,40]
// let newScore = []

// for(let index = 0; index < score.length; index++){
//     console.log('score: ', score[index])
//     if(score[index]>=30){
//         //ได้ค่า 30 , 40 เอาไปเก็บใน newScore
//         newScore.push(score[index])
//     }
// }

// // พ่น newscore ออกมาแสดงผล
// newScore.forEach((ns)=>{
//     console.log('new score: ', ns)
// })




// ****ในส่วน filter จะมี if ในตัวในการวนลูบ****
// let score = [10 , 20 ,30 ,40]


// for(let index = 0; index < score.length; index++){
//     console.log('score: ', score[index])
//     // if(score[index]>=30){
//     //     newScore.push(score[index])
//     // }
// }
// let newScore = score.filter((s)=>{
//     if(s >= 30){
//         return true
//     }else{
//         return false
//     }
// })
// shorthand 
// let newScore = score.filter((s)=>{
//    return s >= 30
// })

// newScore.forEach((ns)=>{
//     console.log('new score: ', ns)
// })
 
((((parameter function array))))  */










/* ((((parameter function array)))) */
//object 

let students = [
    {
        name: 'zou',
        score: 50,
        grade: 'A'
    },
    {
        name: 'zern',
        score: 60,
        grade: 'C'
    },
    {
        name: 'zarn',
        score: 65,
        grade: 'D'
    }
]

let student = students.find((s)=>{
    if(s.name == 'zern'){
        return true
    }
})

// let doubleScore_student = students.map((s)=>{
//     // modify โดยการ * 2 score ในแต่ละ object
//     s.score = s.score*2
//     return s
// })

// console.log('doubleScore_studnet: ', doubleScore_student)

// .map คือคืนตัวนั้นไป
// .filter คือคืนเงื่อนไขว่าตัวนี้อนุญาตให้ออกไปในตัวแปรใหม่ไหม
let highScore_student = students.filter((s)=>{
    if (s.score >= 60){
        return true
    }
})

console.log('student: ', student)
console.log('highScore_student: ', highScore_student)
