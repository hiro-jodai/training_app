const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// 会員登録
router.post('/register',(req,res,next) => authController.register(req,res,next))
// ログイン
router.post('/login',(req,res,next) => authController.login(req,res,next))
module.exports = router;

