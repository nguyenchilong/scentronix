
const { findServer } = require('./findServer');

export default (req, res) => {
    findServer().then(res => {
        res.status(200).json(res);
    }).catch(error => {
        res.status(404).send(error.message);
    });
}
