import { generarURI } from "../helpers/generarURI.js"
import { PETICION } from "../helpers/peticionGET.js"
import { consultarCanciones} from "../services/consultarCanciones.js"
import { pintarCanciones } from "./pintarCanciones.js"

let botonArtista=document.getElementById("botonBuscar")
botonArtista.addEventListener("click",function(evento){

    let artista=document.getElementById("artista")

    const URI=generarURI(artista.value)
    console.log("el boton buscar sirve"+URI)
    

   
    async function activarServicio(){
        console.log(PETICION)
        let canciones= await consultarCanciones(URI,PETICION)

        pintarCanciones(canciones.tracks)
        

    }

    activarServicio()

    
    
    
})