const jwt = require("jsonwebtoken");

module.exports = {
    createtoken: (obj, secret) => jwt.sign(obj, secret),
    verifyToken: (token, secret) => new Promise((resolve, reject) => jwt.verify(token, secret, (err, decode) => {
        if (err) {
            reject(err)
            return
        }
        resolve(decode)
    }))
}