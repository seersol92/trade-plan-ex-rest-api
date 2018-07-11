const user = require('../models/user'); //import user  model schema
var ObjectID = require('mongodb').ObjectID;

exports.index = function (req, res) {
    user.find({}).select('firstname lastname username email is_admin dateadded:').exec((err, users) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'Unable to load users!!',
            });
        } else {
            res.status(200).json({
                success: true,
                data: users
            });
        }
    });
};

// Display list of user list.
exports.get_user_by_id = function (req, res) {
    user.getUserByUsername(req.params.id, (err, user) => {
        if (err) {
            res.json({
                success: false,
                err: err
            });
        } else {
            res.json({
                success: true,
                data: user
            });
        }
    });
};


/*
    METHOD: POST
    INFO  : Handle create  POST.
*/
exports.create_user = function (req, res) {
    const create = new user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        is_admin: req.body.is_admin
    });
    create.save(function (err, new_user) {
        if (err && err.errors) {
            if (err.errors.firstname) {
                res.status(500).json({
                    success: false,
                    error: err.errors.firstname.message
                });
            } else {
                if (err.errors.lastname) {
                    res.status(500).json({
                        success: false,
                        error: err.errors.lastname.message
                    });
                } else {
                    if (err.errors.username) {
                        res.status(500).json({
                            success: false,
                            error: err.errors.username.message
                        });
                    } else {
                        if (err.errors.email) {
                            res.status(500).json({
                                success: false,
                                error: err.errors.email.message
                            });
                        } else {
                            if (err.errors.password) {
                                res.status(500).json({
                                    success: false,
                                    error: err.errors.password.message
                                });
                            }
                        }
                    }
                }
            }
        } else {
            res.status(200).json({
                success: true,
                message: 'Watch list has been created!!',
                data: new_user
            });
        }
    });
};

exports.update = function (req, res) {
    const query = {
        '_id': ObjectID(req.body._id)
    };
    const update = {
    };
    user.findOneAndUpdate(query, update, function (err ) {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'No, Watch Found!!'
            });
        } else {
            res.json({
                success: true,
                message: 'Watch Has Been Updated Successfully!!'
            });
        }
    });
};

//  delete on POST.
exports.delete_post = function (req, res) {
    const userId = req.params.id;
    user.findByIdAndRemove(ObjectID(userId), function (err, user) {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'No, User Found!!'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Watch List Has Been Deleted Successfully!!'
            });
        }
    });
};