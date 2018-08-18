module.exports = {
    "dbURL": process.env.DB_URL,
    "sessionSecret": process.env.SESSION_SECRET,
    "fb": {
        "appID": process.env.FACEBOOK_APP_ID,
        "appSecret": process.env.FACEBOOK_APP_SECRET,
        "callBackURL": "http://localhost:5000/auth/facebook/auth"
    }
};