// personal info send form 
const personalInfoForm = document.getElementById('personal-info-form');
const pendingEnrollPage = document.getElementById('pending-enroll-page');
const personalInfoPage = document.getElementById('personal-info-page');
async function getStudentData(){
    const res = await fetchData('students/1')
    

    if(res.data.length > 0){
        
        if(res.data[0].status === 'pending'){
            pendingEnrollPage.classList.remove('hidden')
        }else{
            personalInfoPage.classList.remove('hidden')
        }
    }else{
        personalInfoForm.classList.remove('hidden')
        alert("Please add your personal information first for us to you be enrolled")
        setActiveLinks('enroll')
    }
    
}


async function getPersonalData(){
        
const currentCourse = document.querySelector('[data-info="course"]')
const fullName = document.querySelector('[data-info="full-name"]')
    const res = await fetchData('student_personal_info/5')
    
        const data= res.data[0];
        if(data){
            fullName.innerText = data.first_name+`${data.middle_name} `+ data.last_name
            currentCourse.innerText = data.course; 
        
        }
      

    const userRes = await fetchData('users/self');
    const userData = userRes.data.user;
    const userNameText = document.querySelector('[data-info="user_name"]')
    userNameText.innerText = userData.username
}



getPersonalData();
getStudentData();


async function redirect(destination) {
    
    const res = await fetchData('users/self')

    if(res.status != 200){
        window.location.href="login.html"
        return;
    }else{
        const userType = res.data.user.user_type;
        if( userType == "admin"){
            window.location.href= 'admin_dashboard.html'
        }else{
            // window.location.href= 'student_dashboard.html'
        }
    }

}

redirect();






personalInfoForm.addEventListener('submit', async (e)=>{
    const jsonData = {
        is_setup: 1,
        status: 'pending',
    }

    const res = await postData('students', jsonData)

    if(res.status != 200) return
    // alert(res.message)

})


// async function getStudent(){
//     const res = await fetchData('students')
// }
// getStudents()

