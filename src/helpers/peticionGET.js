import {obtenerToken} from '../services/generarToken.js'
import{generarURI} from './generarURI.js'

export const URI=generarURI()

let tokenRAMDOM=await obtenerToken()

const token=tokenRAMDOM.token_type+" "+tokenRAMDOM.access_token



export const PETICION={
    method:"GET",
    headers:{
        Authorization: token
    }
}