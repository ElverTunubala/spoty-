//generar un token automatico

//uri
const URI="https://accounts.spotify.com/api/token"

//datos de envio
const DATO1="grant_type=client_credentials"
const DATO2="client_id=d7ecde9bcfc84a24b1627b031abd753a"
const DATO3="client_secret=af956409790b4be086ac1a1a420a3eac"

//peticion
const PETICION={
    method:"POST",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body:DATO1+"&"+DATO2+"&"+DATO3
}

//fetch

//promesa
// fetch(URI,PETICION)
// .then(function(respuesta){
//     return respuesta.json()
// })
// .then(function(respuesta){
//     console.log(respuesta)
// })
// .catch(function(respuesta){
//     console.log(respuesta)
// })

//async await

export async function obtenerToken(){
    let respuesta=await fetch(URI,PETICION)
    return await respuesta.json()
}
console.log(await obtenerToken())