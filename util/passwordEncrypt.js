const bcrypt = require('bcrypt');

module.exports = { 
    encrypt: function(user) {
        return new Promise((resolve, reject) => {
            if (user) {
                bcrypt.hash(user.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    else {
                        user.password = hash;
                        resolve(user);
                    }
                });
            }
        });
    },
    decrypt: async function(password, user) {
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return true;
            }
        }
        else {
            return false;
        }
    }
};