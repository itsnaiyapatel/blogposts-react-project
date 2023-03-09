const { verify } = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const validationToken = (req, res, next) => {
    const accessToken = req.header('accessToken');
    if (!accessToken) {
        return res.json({error: 'User not logged in.'});
    }
    else {
        const validReadableToken = verify(accessToken, `${secret}`);
        req.user = validReadableToken;

        try {
            if (validReadableToken) {
                return next();
            }
        } catch (err) {
            return res.json({error: err});
        }
    };
};

module.exports = validationToken;