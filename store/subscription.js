var maxId = 0;
var subs = {};

const saveSub = (sub) => {
    maxId++;
    subs[maxId] = { ...sub, "creationDate": new Date() };
    console.log("stored sub nr " + maxId);
    return maxId;
};

const retrieveSub = (id) => {
    return subs[id];
};

const retrieveAll = () => {
    return subs;
};

module.exports = {saveSub, retrieveSub, retrieveAll};