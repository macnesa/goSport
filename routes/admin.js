const router = require('express').Router();

const AdminController = require('../controllers/adminController');

// halaman home buat admin FIELD -> user.id
// ditampilkan transasction yang field.User.id = admin
// where status 0
router.get('/', AdminController.home)


// ROUTES UNTUK APPROVE
router.get('/:transactionId/approve', AdminController.approveTransaction)

// ROUTES UNTUK reject
router.get('/:transactionId/reject', AdminController.rejectTransaction)

//ROUTES UNTUK FILTER DATA >= HARI INI && STATUS 1
router.get('/current-transaction', AdminController.currentTransaction)

//ROUTES UNTUK MENAMBAH FIELD
router.get('/addField', AdminController.addField)
router.post('/addField', AdminController.postAddField)

module.exports = router