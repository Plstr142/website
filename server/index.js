const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql2/promise')
const cors = require('cors')
const app = express()

// ส่งผ่าน text
// app.use(bodyparser.text())

// ส่งผ่าน text
app.use(bodyparser.json())
app.use(cors())


const port = 8000

// global scope จะเป็นตัวแปรที่เรียกได้จากภายนอก
// สำหรับเก็บ users ไว้ใน RAM ในขณะที่กำลังรัน server เมื่อเกิดการ run nodemon ใหม่ช้อมูลใน get ก็จะโดนล้าง
// let users = []
// let counter = 1

let conn = null

const initMySQL = async () =>{
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'tutorials',
        port: 8889
    })
}

const validateData = (userData) => {
    let errors = []

    if(!userData.firstname){
        errors.push('กรุณาใส่ชื่อจริง')
    }

    if(!userData.lastname){
        errors.push('กรุณาใส่นามสกุล')
    }

    if(!userData.age){
        errors.push('กรุณาใส่อายุ')
    }

    if(!userData.gender){
        errors.push('กรุณาใส่เพศ')
    }

    if(!userData.interests){
        errors.push('กรุณาใส่ความสนใจ')
    }

    if(!userData.description){
        errors.push('กรุณาใส่รายละเอียดของคุณ')
    }

    return errors
}


/* app.get('/testdb', (req, res) =>{
    console.log('test')
    // asynchronus ทำการรันแบบไม่ต้องรอให้เสร็จ ไปรันบน background
    // console.log('test') ข้ามไป console.log('test2')
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'tutorials',
        port: 8889
      }) //function promise .then รอให้เสร็จค่อยทำ
      .then((conn) => {
        conn
        .query('SELECT * FROM users')
        .then((results) => {
          res.json(results[0])
        })
        .catch((error) => {
            console.error('Error fetching users:', error.message)
            res.status(500).json({ error: 'Error fetching users' })
        })
      })
    // console.log('test2')

}) */





// path = /
// app.get('/test', (req , res) =>{
//     let user = {
//         firstname: 'test',
//         lastname: 'นามสกุล',
//         age: 14
//     }
//     res.json(user)
// })



// path = GET /users/:id สำหรับการดึง users รายคนออกมา
app.get('/users', async (req, res) =>{
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
})



// path = POST/user 

/*  local scope จะเป็นตัวแปรที่เรียกได้จากภายในเท่านั้น
    (req , res) =>{
    //ข้อมูลที่จะมีการส่งผ่าน body เข้ามา
    res.send(req.body)
}) */ 


// path = POST/user สำหรับการสร้าง users ใหม่บันทึกเข้าไป
app.post('/users' , async (req , res) =>{
    // handle error 
    try{
        let user = req.body

        const errors = validateData(user)
        if(errors.length > 0){
            throw{
                message: 'กรอกข้อมูลไม่ครบ',
                errors: errors
            }
        }
        const results = await conn.query('INSERT INTO users SET ?', user)
        res.json({
            message: 'insert ok',
            data: results[0]
        })
    }catch (error){
        const errorMessage = error.message || 'something wrong'
        const errors = error.errors || []
        console.error('error message', error.message)
        res.status(500).json({
            message: errorMessage,
            errors: errors
        })
    }

    // console.log('results', results)

    // user.id = counter
    // // running number control ผ่าน counter
    // counter += 1

    // // ต่อ array เข้าไป
    // users.push(user)
    // res.json({
    //     message: 'add ok',
    //     user: user
    // })

    // console ไปที่ terminal run node
    // console.log('user', user)


    //ข้อมูลที่จะมีการส่งผ่าน body เข้ามา
    // res.send(req.body)
})







// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
//function สำหรับ GET users
app.get('/users/:id', async (req, res) =>{
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
    
        // หาก่อนว่า index ของ user ที่จะลบคือ index ไหน
        // let selectedIndex = users.findIndex(user => user.id == id)
        
        // หา index
        if (results[0].length == 0){
            throw { statusCode: 404 , message: 'หาไม่เจอ'}
        }

        res.json(results[0][0])
    }catch (error){
        console.error('error message', error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'something wrong',
            errorMessage: error.message
        })
    }
})












// path = PUT /user/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
// :คือ params หรือ parameter ส่วน id คือชื่อของ params
// params รับส่งผ่าน url ได้กับ method ทุกประเภท post get put
app.put('/users/:id', async (req, res) =>{

    try{
        let id = req.params.id
        let updateUser = req.body
        const results = await conn.query(
            'UPDATE users SET ? WHERE id = ?',
            [updateUser, id]
        )
        res.json({
            message: 'update ok',
            data: results[0]
        })
    }catch (error){
        console.error('error message', error.message)
        res.status(500).json({
            message: 'something wrong'
        })
    }
    
    // ค้นหา users จาก id ที่ส่งมา มี2วิธีคือ หาจาก find และ findindex
    // let selectedIndex = users.findIndex(user =>{
    //     if (user.id == id) {
    //         return true
    //     }else{
    //         return false
    //     }
    // })


     //เขียนแบบลดรูป return condition
    //  let selectedIndex = users.findIndex(user => user.id == id)
   

    // // update ข้อมูล user นั้น
    // // ****method put**** แยกราย fill โดยใช้ค่าเดิม เพื่อ handle จากการที่ user ไม่ได้กรอกอะไรมา ( null || 'ทดสอบ')
    // // users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    // // users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname


    // // update ข้อมูล user นั้น
    // // ****method patch **** ทรงเดิมแค่เปลี่ยนจาก || เป็น if จะใช้ patch กับการ update status ราย fill แบบเฉพาะ
    //     users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    //     users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
    //     users[selectedIndex].age = updateUser.age || users[selectedIndex].age
    //     users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender



    // user ที่ update ใหม่ update กลับเข้าไปที่ uses ตัวเดิม


   


    
    // selectedIndex จะได้เป็น index ออกมาเป็น number
    // แปลงเป็น string เพราะ res.send support เฉพาะ string เท่านั้น
    // res.send(selectedIndex + '')
})


// path method DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)*/
app.delete('/users/:id', async (req ,res) =>{

    try{
        let id = req.params.id
        const results = await conn.query('DELETE from users WHERE id = ?', id)
        res.json({
            message: 'delete ok',
            data: results[0]
        })
    }catch (error){
        console.error('error message', error.message)
        res.status(500).json({
            message: 'something wrong'
        })
    }


    // หาก่อนว่า index ของ user ที่จะลบคือ index ไหน
    // let selectedIndex = users.findIndex(user => user.id == id)



    // // ลบ users ออกโดยค่า result method get --> null
    // // delete users[selectedIndex]



    // // ลบ users ออกโดยการ splice1 ไม่ติด null
    // users.splice(selectedIndex, 1)



    // res.json({
    //     message: 'delete complete!',
    //     indexDeleted: selectedIndex
    // })
})


app.listen(port, async (req, res) =>{
    await initMySQL()
    console.log('http server run at ' + port)
})