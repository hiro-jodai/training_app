const db = require("../models/index");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

// userモデル
const user = db.User;
// bcrypt.genSaltで生成した値を.envから取得
const salt = process.env.HASH_SALT;

const authController = {
    me: async (req, res, next) => {

    },
    login: async (req, res, next) => {
        try{
            if(!req.body.email || !req.body.password){
                // メール、パスワードがそろってない
                return res.status(401).json({message: "Unauthorized"});
            }
            // 平文パスワードをハッシュ化
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            const userData = await user.findOne({
                where:{
                    email: req.body.email,
                    password: hashedPassword
                }
            });
            if(!userData){
                // ログイン失敗
                return res.status(401).json({message: "Unauthorized"});
            }
            const tokenData = {
                id: userData.dataValues.id,
                name: userData.dataValues.name,
                email: userData.dataValues.email,
            }
            // jwtトークンを発行
            const token = jwt.sign(tokenData , process.env.JWT_SECRET, { expiresIn: "24h" });
            res.json({message: "login finished", token});
        } catch (e) {
            console.error(e);
            return res.status(500).json({message: "failed"});
        }
    },
    register: async (req, res, next) => {
        try {
            if(!req.body.name || !req.body.email || !req.body.password){
                // ログインデータがそろってない
                return res.status(404).json({message: "invalid data"});
            }
            // パスワードハッシュ化
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            // ユーザー作成
            user.create({
                name: req.body.name,
                email: req.body.email,
                password:hashedPassword
            })
            res.json({message:"created user"})
        } catch (e){
            console.error(e);
            return res.status(500).json({message: "failed"});
        }

    }
}

module.exports = authController;