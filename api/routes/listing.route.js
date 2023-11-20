import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controller/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete', verifyToken, deleteListing);
router.post('/update', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get/:id', getListings);


export default router;