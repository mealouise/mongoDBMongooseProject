let UserSchema = require('../models/users');

function email(email) {
    return new Promise((resolve, reject) => {
    UserSchema.find({email}, (err,docs) => {

        resolve(docs);
    });
 });
}

function username(username) {
    return new Promise((resolve, reject) => {
    UserSchema.find({name:username}, (err,docs1) => {

        resolve(docs1);
    });
    });
}

module.exports = {email, username}