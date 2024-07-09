function obtenerTexto(){
    let mensaje = document.getElementById('Texto-a-encriptar').value; 
    console.log(mensaje);
    
    return mensaje;
}

function encriptarTexto(){

    let mensaje = obtenerTexto();

    let mensajeEncriptado = "";
    
    for(let i = 0; i <= mensaje.length; i++){
        let letra = mensaje.charAt(i);

        switch(letra){
            case 'a':
                mensajeEncriptado = mensajeEncriptado + "ai";
            break;
            case 'e':
                mensajeEncriptado = mensajeEncriptado + "enter";
                break;
            case 'i':
                mensajeEncriptado = mensajeEncriptado + "imes";
                break;
            case 'o': 
                mensajeEncriptado = mensajeEncriptado + "ober";
                break;
            case 'u':
                mensajeEncriptado = mensajeEncriptado + "ufat";
                break;
            case ' ':
                mensajeEncriptado = mensajeEncriptado + " ";
                break;
            default:
                mensajeEncriptado = mensajeEncriptado + letra;
                break;
        }

        
    }
    console.log("Texto Encriptado: "+ mensajeEncriptado);

    mostrarTexto(mensajeEncriptado);
}
function desEncriptarTexto(){
    
    let mensaje = obtenerTexto();

    let mensajeDesEncriptado = "";
    let confir = 0;

    for(let i = 0; i <= mensaje.length; i++){
        let letra = mensaje.charAt(i);
        
        if(confir == i){

            

            switch(letra){
                case "a":
                    mensajeDesEncriptado = mensajeDesEncriptado + "a";
                    confir = 2 + i;
                break;
                case "e":
                    mensajeDesEncriptado = mensajeDesEncriptado + "e";
                    confir = 5 + i;
                    break;
                case "i":
                    mensajeDesEncriptado = mensajeDesEncriptado + "i";
                    confir = 4 + i;
                    break;
                case "o": 
                    mensajeDesEncriptado = mensajeDesEncriptado + "o";
                    confir = 4 + i;
                    break;
                case "u":
                    mensajeDesEncriptado = mensajeDesEncriptado + "u";
                    confir = 4 + i;
                    break;
                case ' ':
                    mensajeDesEncriptado = mensajeDesEncriptado + " ";
                    confir++;
                break;
                default:
                    mensajeDesEncriptado = mensajeDesEncriptado + letra;
                    confir++;
                    break;
            }
            
        }
        
    }
    console.log("Texto des-encriptado: "+ mensajeDesEncriptado);

    mostrarTexto(mensajeDesEncriptado);
    
   
}
function copiar(){
    let text = document.getElementById('texto-resultado');
    let button = document.getElementById('boton-copiar');

    navigator.clipboard.writeText(text.textContent);
    button.textContent = 'copiado';


}
function mostrarTexto(mensaje){

    

    document.getElementById('img-sinMensaje').style.display = 'none';
    document.getElementById('mensajeUno').style.display = 'none';
    document.getElementById('pIngresaTexto').style.display = 'none';

    document.getElementById('texto-resultado').style.display = 'block';
    document.getElementById('texto-resultado').innerHTML = mensaje; 
    document.getElementById('boton-copiar').style.display = 'block';
}
