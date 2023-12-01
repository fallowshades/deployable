import { Router } from 'express'

import {
  getAllWords,
  getSingleWord,
  createWord,
  updateWord,
  deleteWord,
} from '../controllers/wordController.js'

const router = Router()

router.route('/').post(createWord).get(getAllWords)

router.route('/:id').get(getSingleWord).patch(updateWord).delete(deleteWord)
export default router
