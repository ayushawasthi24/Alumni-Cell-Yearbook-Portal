const express = require('express');
const router = express.Router();
const userDataController = require('../controllers/userController');

router.route('/userData')
    .get(userDataController.getUserData)
    .post(userDataController.createUsersData)
    .update(userDataController.deleteUserData)

module.exports = router;
