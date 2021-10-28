const Form = document.getElementsByTagName('form');
const nowPassword = document.getElementById('nowPassword');
let PasswordValue = 'aaaaa';
nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
const setPassword = document.getElementById('setPassword');

setPassword.addEventListener('click', function () {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    if (PasswordValue === confirmPassword) {
        if (PasswordValue !== newPassword) {
            let result = newPassword.match(/^\d{3}-?\d{4}$/g);
            const check = /(.)\1/;
            let result = check.test(newPassword);
            const reserach = /abc/g;
            let result = newPassword.search(reserach);
            console.log(result);

            if (!result) {
                alert('xxx-yyyyの形式で入力してください');
            } else {
                PasswordValue = newPassword;
                PasswordValue.textContent = PasswordValue;
                nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
                alert(`新しいパスワードは ${PasswordValue}です`);
            }
        } else {
            alert('同じパスワードはつかえません！');
        }
    } else {
        alert('古いパスワードが間違っています！');
    }
});