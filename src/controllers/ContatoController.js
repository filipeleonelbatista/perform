const db = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const contatos = await db('contatos').select('*');

            return res.status(201).json(contatos);
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
            const contato = await db('contatos')
                .where('contatos.id', '=', id);

            return res.status(201).json(contato);
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
            const contato = await db('contatos')
                .where('contatos.id', '=', id)
                .del();

            return res.status(200).json({
                success: true,
                result: contato,
            });
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
            ip,
            tipoContato,
            celular,
            email,
            nome,
            mensagem,
            feitoContato,
            convertido
        } = req.body;

        const trx = await db.transaction();

        const data = {
            ip,
            tipoContato,
            celular,
            email,
            nome,
            mensagem,
            feitoContato,
            convertido,
            created_at: new Date(Date.now()).toISOString(),
        }
        try {
            await trx('contatos').insert(data);

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
    },
    async update(req, res) {
        const {
            ip,
            tipoContato,
            celular,
            email,
            nome,
            mensagem,
            feitoContato,
            convertido
        } = req.body;

        const { id } = req.params;

        let contato = [];
        try {
            contato = await db('contatos')
                .where('contatos.id', '=', id);
        } catch (err) {
            const errorData = {
                success: false,
                error_msg: err,
            }
            return res.status(400).json(errorData);
        }

        const trx = await db.transaction();

        const data = {
            ip: contato.ip === ip ? contato.ip : ip,
            tipoContato : contato.tipoContato === tipoContato ? contato.tipoContato : tipoContato,
            celular : contato.celular === celular ? contato.celular : celular,
            email : contato.email === email ? contato.email : email,
            nome: contato.nome === nome ? contato.nome : nome,
            mensagem: contato.mensagem === mensagem ? contato.mensagem : mensagem,
            feitoContato: contato.feitoContato === feitoContato ? contato.feitoContato : feitoContato,
            convertido: contato.convertido === convertido ? contato.convertido : convertido,
        }
        try {
            await trx('contatos')
                    .where("contatos.id", "=", id)
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