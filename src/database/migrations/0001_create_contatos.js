exports.up = function(knex){
    return knex.schema.createTable('contatos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('ip').notNullable();
        table.string('tipoContato').notNullable();
        table.string('celular').notNullable();
        table.string('email').notNullable();
        table.string('mensagem').notNullable();
        table.boolean('feitoContato').notNullable();
        table.boolean('convertido').notNullable();
        table.dateTime('created_at',
            { precision: 6 })
            .defaultTo(knex.fn.now(6))
            .notNullable();

    });
}

exports.down = function(knex){
    return knex.schema.dropTable('contatos');
}