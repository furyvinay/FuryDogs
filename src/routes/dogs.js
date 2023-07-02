import express from 'express';
import { DogModel } from "../models/Dogs.js";
import { UserModel } from '../models/Users.js';
import { verifyToken } from './user.js';

const router = express.Router();

router.get('/viewDogs', async (req, res) => {
    try {
        const response = await DogModel.find({});
        res.json(response);
    } catch (err) {
        console.error(err);
    }
})

router.post('/viewDogs', verifyToken, async (req, res) => {
    const dog = new DogModel(req.body)
    try {
        const response = await dog.save();
        res.json(response);
    } catch (err) {
        console.error(err);
    }
})

router.put('/viewDogs', verifyToken, async (req, res) => {
    try {
        const dog = await DogModel.findById(req.body.dogID);
        const user = await UserModel.findById(req.body.userID);
        user.favouriteDogs.push(dog);
        await user.save();
        res.json({ favouriteDogs: user.favouriteDogs });
    } catch (err) {
        console.error(err);
    }
});

router.get("/favouriteDogs/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID)
        res.json({ favouriteDogs: user?.favouriteDogs });
    } catch (err) {
        res.json(err);
    }
});

router.get("/favouriteDogs/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const favouriteDogs = await DogModel.find({
            _id: { $in: user.favouriteDogs }
        });

        res.json({ favouriteDogs });
    } catch (err) {
        console.error(err);
    }
})

export { router as dogsRouter };