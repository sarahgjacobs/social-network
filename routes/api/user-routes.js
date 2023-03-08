const router = require('express').Router();
const { createUser, getUsers, getSingleUser, addFriend, deleteUser, removeFriend } = require('../../controllers/usercontroller');
router.route('/').post(createUser).get(getUsers)
router.route('/:userId').get(getSingleUser).delete(deleteUser)
router.route('/:userId/friends/:friendId').post(addFriend).put(removeFriend)




module.exports = router;