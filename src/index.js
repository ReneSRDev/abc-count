const abcdario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
const contarLetras = () => {
    let prompt = require('prompt-sync')();
    let textoUsuario = prompt("Escribe un Texto: ");
    let cuentaCaracter = {};
    textoUsuario = textoUsuario.toLowerCase();
    
    for (char of textoUsuario) {
        cuentaCaracter[char] = (cuentaCaracter[char] ?? 0) + 1;
    }

    for (letra  of abcdario) {
        if (cuentaCaracter[letra] != null) {
            console.log(`El numero de letras ${letra} es de ${cuentaCaracter[letra]}`);
        }
    }
}

module.exports = {
    contarLetras
}