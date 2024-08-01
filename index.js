const submitData = async () =>{
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')

    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked')
   
    let descriptionDOM = document.querySelector('textarea[name=description]')
    
    // วนลูบ interest concasting
    let interest = ''

    for (let i = 0; i < interestDOMs.length; i++){
        interest += interestDOMs[i].value 
        // จะใส่ , เมื่อตัวนี้ไม่ใช่ตัวสุดท้าย
        // i.length -1 จะเป็นตำแหน่งสุดท้าย 
        // length จะเป็นขนาดความยาว 
        // index [] จะเป็นตำแหน่งที่ 0 , 1 , 2
        /* ลอง log ดูใน console --> 
        let i = [ 1 , 2, 3] result undefined
        i.length result 3
        i.length - 1 result 2
        i[i.length - 1] result 3 (หยิบตัวสุดท้าย)
        */ 
        if(i != interestDOMs.length-1){
            interest += ', '
        }
    }

    // สร้าง obj เตรียมส่งค่าผ่าน input
    let userData = {
        firstname: firstNameDOM.value,
        lastname: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests: interest
    }

    console.log('submit data', userData)
    const response = await axios.post('https://localhost:8000/users', userData)
    
    console.log('response', response.data)
}