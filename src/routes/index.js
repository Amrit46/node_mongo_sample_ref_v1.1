import express from 'express';
import Blob from '../models/blob';

const router = express.Router();

/**
 * Find All Blobs
 * @param req
 * @param res
 * @return void
 */
const findAllBlobs = async (req, res) => {
    try {
        res.status(200).json(await Blob.find());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Find Blob by Id
 * @param req
 * @param res
 * @return void
 */
const findBlobById = async (req, res) => {
    try {
        res.status(200).json(await Blob.findById(req.params.id));
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Add a new Blob
 * @param req
 * @param res
 * @return void
 */
const addBlob = async (req, res) => {
    const newBlob = new Blob(req.body.blob);
    try {
        res.status(201).json(await newBlob.save());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Update a Blob by id.
 * @param req
 * @param res
 * @return void
 */
const updateBlob = async (req, res) => {
    try {
        const blobSchema = new Blob(await Blob.findById(req.params.id));

        blobSchema.firstName = req.body.blob.firstName;
        blobSchema.lastName = req.body.blob.lastName;

        res.status(200).json(await blobSchema.save());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Delete a Blob by id.
 * @param req
 * @param res
 * @return void
 */
const deleteBlob = async (req, res) => {
    try {
        const blobSchema = new Blob(await Blob.findById(req.params.id));
        res.status(200).json(await blobSchema.remove());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * api routes
 */
router.get('/blobs', findAllBlobs);
router.get('/blob/:id', findBlobById);
router.post('/blob', addBlob);
router.put('/blob/:id', updateBlob);
router.delete('/blob/:id', deleteBlob);

export default router;
