var toastBox = document.getElementById('toastBox');
var successMsg = '<i class="fa-solid fa-user-check"></i> Successfully submitted';
var errorMsg = '<i class="fa-solid fa-user-xmark"></i> Please fix the error!';
var invalidMsg = '<i class="fa-solid fa-user-slash"></i> Invalid input, check again';
function showToast(msg) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('input')) {
        toast.classList.add('invalid');
    }
    setTimeout(function () {
        toast.remove();
    }, 6000);
}
