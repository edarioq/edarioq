const express = require('express');
const mongodb = require('mongodb');

// zeus
// ETfnLhcguwJz9aDm7pPVJHmCbn7Co4Qd
const router = express.Router();

// Get data
router.get('/', async (req, res) => {
    const data = await loadCollection();
    res.send(await data.find({}).toArray());
});

// Add user
router.post('/user/add', async (req, res) => {
    const data = await loadCollection();
    await data.insertOne({
        name: req.body.name,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete user
router.delete('/user/delete/:id', async (req, res) => {
    const data = await loadCollection();
    await data.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send();
})


// Load data
async function loadCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://zeus:ETfnLhcguwJz9aDm7pPVJHmCbn7Co4Qd@cluster0-x5vpg.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true
        }
    );

    return client.db('list').collection('users');
}

module.exports = router;