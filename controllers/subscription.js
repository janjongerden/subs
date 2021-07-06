const store = require('../store/subscription');

const createSub = (req, res, next) => {
    const id = store.saveSub(req.body);
    res.json({message: "Stored subscription with id " + id});
};

const getSub = (req, res) => {
    const id = req.params.id;
    res.json(store.retrieveSub(id));
};

const getAllSubs = (req, res) => {
    res.json(store.retrieveAll());
};

module.exports = {createSub, getSub, getAllSubs};
