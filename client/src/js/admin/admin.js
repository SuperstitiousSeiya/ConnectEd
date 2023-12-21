async function redirect(destination) {
    
    const res = await fetchData('users/self')

    if(res.status != 200){
        window.location.href="login.html"
        return;
    }else{
        const userType = res.data.user.user_type;
        if( userType == "admin"){
            // window.location.href= 'admin_dashboard.html'
        }else{
            window.location.href= 'student_dashboard.html'
        }
    }

    
}

redirect();



