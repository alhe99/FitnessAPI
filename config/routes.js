import { Router } from 'express'
import exercisesController from '../controllers/ExercisesController'

const router = new Router()

// Obtiene ejercicios disponibles
router.get('/exercises', exercisesController.index)

// Crea un nuevo ejercicio
router.post('/exercises', exercisesController.store)

// Obtiene detalles del ejercicio
router.get('/exercises/:id', exercisesController.details)

//Obtiene la lista de ejercisios segun el criterio de busqueda
router.get('/exercises/:title',exercisesController.findByTitle)

export default router
