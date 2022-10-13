//consumiendo APIS


//traigo constantes para Consumir
import{URI,PETICION} from '../helpers/peticionGET.js'

//traigo funcion que CONSUME
import {consultarCanciones} from './consultarCanciones.js'

import { pintarCanciones } from '../controllers/pintarCanciones.js'

//usamos la funcion para consumir
let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

//renderizo los datos
pintarCanciones(canciones.tracks)


