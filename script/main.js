document.addEventListener ('DOMContentLoaded', function() {
    let form = document.getElementById('main_form');
    let name = document.getElementById('login');
    let pass = document.getElementById('pass');
    let repass = document.getElementById('repass');
    let que = document.getElementById('question');
    let logerr = document.getElementById('log_not_correct');
    let passcorr = document.getElementById('passcorr')
    let passerr = document.getElementById('pass_not_correct');
    let anserr = document.getElementById('answer_not_correct');
        console.log('Registration/Technical-info');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let nameVal = name.value;
            if(nameVal.length >5) {
                console.log('name:', 'Not correct')
                logerr.textContent = 'Login must be only 5 characters'
                logerr.style.display = 'block';
            return;
                
            } else {
                logerr.style.display = 'none'
            }

            let passVal = pass.value;
            let repassVal = repass.value;
                if(passVal === repassVal) {
                    passcorr.textContent = '';
                    passcorr.style.display ='block';
                    passerr.style.display = 'none';
                } else {
                    passerr.textContent = 'Password and Repasword not the same!!!'
                    passerr.style.display = 'block';
                    passcorr.style.display = 'none'
                    console.log('pascorrect?', 'ERROR');
                    return;
                }
            
            let answerVal = que.value;
                if (answerVal !== '22') {  //зворотня умова
                    anserr.textContent = 'YOU ARE BOT!!!';
                    anserr.style.display = 'block';  
                    return; 
                } else {
                    console.log('answer:', '+');
                    anserr.style.display = 'none';
                }
            
            
        });
    
    
});