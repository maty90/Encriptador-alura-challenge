const imputTexto = document.querySelector(".input-texto");

const mensaje = document.querySelector(".mensaje");
const parrafoMensaje = document.querySelector(".parrafo")

function btnEncriptar(){
    const textoEncriptado = encriptar(imputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    imputTexto.value = ""
    parrafoMensaje.style.visibility = "collapse"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length ; i++) {
       if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])}

       }
    return stringEncriptada;


}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(imputTexto.value)
    mensaje.value = textoEncriptado
    imputTexto.value = ""
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length ; i++) {
       if(stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])}

       }
    return stringDesencriptada;


}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    
}
