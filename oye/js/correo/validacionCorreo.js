
function ValidateEmail(inputText, inputtxt)
{
/*----	Validamos correo ----*/
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(inputText.value.match(mailformat))
{
alert("Correo electrónico valido!");
document.getElementById("correo").style.border="3px solid #63f9ad";
/*document.form1.text1.focus();
return true;*/
}
else
{
alert("Correo electrónico invalido!");
document.getElementById("correo").style.border="3px solid #e23131";
/*document.form1.text1.focus();
return false;*/
}



/*----	Validamos clave ----*/
var passw = /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Contraseña valida.')
document.getElementById("correo").style.border="3px solid #63f9ad";
/*document.form1.text2.focus();
return true;*/
}
else
{ 
alert('Contraseña invalida!')
document.getElementById("clave").style.border="3px solid #e23131";
/*document.form1.text2.focus();*/
return false;
}

}/*----	fin funcion ----*/






