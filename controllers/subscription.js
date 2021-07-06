const store = require('../store/subscription');

const createSub = (req, res, next) => {
    console.log('POSTING sub:' + JSON.stringify(req.body));
    const id = store.saveSub(req.body);
    res.json({message: "Stored subscription with id " + id});
};

const getSub = (req, res) => {
    const id = req.params.id;
    console.log(`GET sub ${id}`);
    res.json(store.retrieveSub(id));
};

module.exports = {createSub, getSub};
