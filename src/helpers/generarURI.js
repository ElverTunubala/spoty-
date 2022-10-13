
export function generarURI(idArtista){

    let uri=`https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=US`
           

    return uri
}