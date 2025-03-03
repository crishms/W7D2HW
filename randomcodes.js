function generateCode () {
    //create variables to store generated codes and the type of characters we want to sho as codes
    var code = '';
    var getCode = '';
    var btnvalue;
    var str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //Generate character multiple times using a loop
    for (i = 1; i <= 8; i++){
        var char = Math.random() * str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true){
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(225, 225, 225, 0.5)";
} else {
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(225, 225, 225, 1)";
}
}
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", ealuateCode);
function ealuateCode() {
    getCode = getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    }
}
disableButton();