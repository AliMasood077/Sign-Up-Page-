let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.inputname');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');


signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signUpBtn.classList.remove('button-1');
    signUpBtn.classList.add('button-2');
    signInBtn.classList.remove('button-2');
    signInBtn.classList.add('button-1');
    underline.style.width = '60px'; 
});

signUpBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('button-2');
    signUpBtn.classList.add('button-1');
    signInBtn.classList.remove('button-1');
    signInBtn.classList.add('button-2');
    underline.style.width = '30px'; 
});
