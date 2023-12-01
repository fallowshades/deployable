import { Router } from 'express'

import {
  createCRUD,
  getAllCRUD,
  getSingleCRUD,
  updateCRUD,
  deleteCRUD,
  createDomain,
  getAllDomain,
  getSingleDomain,
  updateDomain,
  deleteDomain,
  createTuple,
  getAllTuple,
  getSingleTuple,
  updateTuple,
  deleteTuple,
  createPlace,
  getAllPlace,
  getSinglePlace,
  updatePlace,
  deletePlace,
  createItem,
  getAllItem,
  getSingleItem,
  updateItem,
  deleteItem,
} from '../queries/no/index.js'
import {
  createShock,
  getAllShock,
  getSingleShock,
  updateShock,
  deleteShock,
  createDenial,
  getAllDenial,
  getSingleDenial,
  updateDenial,
  deleteDenial,
  createAnger,
  getAllAnger,
  getSingleAnger,
  updateAnger,
  deleteAnger,
  createBargain,
  getAllBargain,
  getSingleBargain,
  updateBargain,
  deleteBargain,
  createDepression,
  getAllDepression,
  getSingleDepression,
  updateDepression,
  deleteDepression,
  createTesting,
  getAllTesting,
  getSingleTesting,
  updateTesting,
  deleteTesting,
  createAcceptance,
  getAllAcceptance,
  getSingleAcceptance,
  updateAcceptance,
  deleteAcceptance,
} from '../queries/so/index.js'

const router = Router()

router.route('/no/crud').get(getAllCRUD).post(createCRUD)
router.route('/no/domain/').get(getAllDomain).post(createDomain)
router.route('/no/tuple').get(getAllTuple).post(createTuple)
router.route('/no/place').get(getAllPlace).post(createPlace)
router.route('/no/item').get(getAllItem).post(createItem)

router.route('/so/shock/').get(getAllShock).post(createShock)
router.route('/so/denial').get(getAllDenial).post(createDenial)
router.route('/so/anger').get(getAllAnger).post(createAnger)
router.route('/so/bargain').get(getAllBargain).post(createBargain)
router.route('/so/depression').get(getAllDepression).post(createDepression)
router.route('/so/testing').get(getAllTesting).post(createTesting)
router.route('/so/acceptance').get(getAllAcceptance).post(createAcceptance)

router
  .route('/no/crud/:id')
  .get(getSingleCRUD)
  .patch(updateCRUD)
  .delete(deleteCRUD)
router
  .route('/no/domain/:id')
  .get(getSingleDomain)
  .patch(updateDomain)
  .delete(deleteDomain)
router
  .route('/no/tuple/:id')
  .get(getSingleTuple)
  .patch(updateTuple)
  .delete(deleteTuple)
router
  .route('/no/place/:id')
  .get(getSinglePlace)
  .patch(updatePlace)
  .delete(deletePlace)
router
  .route('/no/item/:id')
  .get(getSingleItem)
  .patch(updateItem)
  .delete(deleteItem)

router
  .route('/so/shock/:id')
  .get(getSingleShock)
  .patch(updateShock)
  .delete(deleteShock)
router
  .route('/so/denial/:id')
  .get(getSingleDenial)
  .patch(updateDenial)
  .delete(deleteDenial)
router
  .route('/so/anger/:id')
  .get(getSingleAnger)
  .patch(updateAnger)
  .delete(deleteAnger)
router
  .route('/so/bargain/:id')
  .get(getSingleBargain)
  .patch(updateBargain)
  .delete(deleteBargain)
router
  .route('/so/depression/:id')
  .get(getSingleDepression)
  .patch(updateDepression)
  .delete(deleteDepression)
router
  .route('/so/testing/:id')
  .get(getSingleTesting)
  .patch(updateTesting)
  .delete(deleteTesting)
router
  .route('/so/acceptance/:id')
  .get(getSingleAcceptance)
  .patch(updateAcceptance)
  .delete(deleteAcceptance)

export default router
