const db = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async index(req, res) {
        try {
            const usuarios = await db('users').select('*');

            return res.status(201).json(usuarios);
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }
    },
    async show(req, res) {
        const { id } = req.params;
        try {
            const usuario = await db('users')
                .where('users.id', '=', id);

            return res.status(201).json(usuario);
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }
    },
    async delete(req, res) {
        const { id } = req.params;
        try {
            const usuario = await db('users')
                .where('users.id', '=', id)
                .del();

            return res.status(200).json({
                success: true,
                result: usuario,
            });
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }
    },
    async loginValidate(req, res) {
        const { email, password } = req.query;
        
        try {
            const usuario = await db('users')
                .where({
                    email,
                    password,
                });

            return res.status(201).json(usuario);
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }
    },
    async login(req, res) {
        const { email, password } = req.query;
        try {
            const usuario = await db('users')
                .where('users.email', '=', email);
            const result = await bcrypt.compare(password, usuario[0].password);

            if (result) {
                return res.status(201).json({
                    success:true,
                    usuario
                });
            } else {
                return res.status(404).json({
                    success: false,
                    error: 'NotFoundUserException',
                    parameters: {
                        email,
                        password
                    }
                });
            }
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }


    },
    async create(req, res) {
        const {
            nome,
            email,
            password,
        } = req.body;

        const trx = await db.transaction();

        const data = {
            name: nome,
            email,
            password: await bcrypt.hash(password, 8),
            updated_at: new Date(Date.now()).toISOString(),
        }
        try {
            await trx('users').insert(data);

            await trx.commit();

            return res.status(201).send({
                success: true,
                created: data
            });

        } catch (err) {

            await trx.rollback();

            return res.status(400).json({
                success: false,
                error: 'Unexpected error while creating new user',
                err,
                parameters: data
            })
        }
    },
    async update(req, res) {
        const {
            nome,
            email,
            password,
        } = req.body;
        const { id } = req.params;

        let usuario = [];
        try {
            usuario = await db('users')
                .where('users.id', '=', id);
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }

        const trx = await db.transaction();

        const data = {
            name: usuario.name === nome ? usuario.name : nome,
            email: usuario.email === email ? usuario.email : email,
            password: await bcrypt.hash(password, 8),
        }
        try {
            await trx('users')
                .where("users.id", "=", id)
                .update(data);

            await trx.commit();

            return res.status(201).send({
                success: true,
                created: data
            });

        } catch (err) {

            await trx.rollback();

            return res.status(400).json({
                success: false,
                error: 'Unexpected error while creating new letter',
                parameters: data
            })
        }
    }
}