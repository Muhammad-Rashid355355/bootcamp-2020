let signup_array = [];
const sign_up =()=>{
    let user_name_signup = user_Name.value;
    let user_password_signup = password2.value;
    let user_Repaet_password = Repaet_password.value;
    let user_Email_signup = Email.value;

    let All_signup_data ={
        user_name_signup,user_password_signup,user_Repaet_password,user_Email_signup
    }
    if(user_password_signup == user_Repaet_password){
    signup_array.push(All_signup_data);
    localStorage.setItem("login_form" , JSON.stringify(signup_array))
    console.log(signup_array)
    }else{
        alert("check your passowrd")
    }
}
const sign_in=()=>{
    // getdatafromDB();
    let signup_data = JSON.parse(localStorage.getItem("login_form"))
    signup_data.forEach(element => {
        let User_Email_Signup = element.user_Email_signup;
        let user_password = element.user_password_signup;
        let user_email_signin = user_Email.value;
        let user_password_signin = password1.value;
        if(user_email_signin == User_Email_Signup){
            if(user_password_signin == user_password){
                
                window.location.href="cards.html";
                
            }else{
                alert("check your password")
            }
        }else{
            alert("check your E-mail")
        }
        
    });

}
// function getdatafromDB(){
//     return JSON.parse(localStorage.getItem("login_form"))
// }