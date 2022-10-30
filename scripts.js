/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function(){
    let submitButton = document.getElementsByTagName('button')[0];
    let messageBox = document.getElementsByClassName('message')[0];
    let emailBox = document.getElementById('email');

    submitButton.addEventListener('click', function(e){
        if(emailBox.value.includes('@') && emailBox.value.includes('.')){
            messageBox.innerHTML = 'Thank you! Your email address ' + emailBox.value + ' has been added to our mailing list';
        }else{
            messageBox.innerHTML = 'Please enter a valid email address.';
        }
        e.preventDefault();
    })
})