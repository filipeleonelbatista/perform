const db = require('../database/connection');

module.exports = {
    async index(req, res) {
        res.json({message: "OK"})
    },
    async show(req, res) {
        res.json({message: "OK"})        
    },
    async delete(req, res) {
        res.json({message: "OK"})        
    },
    async create(req, res) {
        res.json({message: "OK"})          
    },
    async update(req, res) {
        res.json({message: "OK"})          
    }
}