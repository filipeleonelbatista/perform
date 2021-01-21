exports.up = function(knex){
    return knex.schema.createTable('users', table =>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('avatar').notNullable();
            table.string('celular').notNullable();
            table.string('email').notNullable();
            table.string('cpf').notNullable();
            table.string('rg').notNullable();
            table.string('password').notNullable();
            table.string('telefone').notNullable();
            table.boolean('iswhatsapp').notNullable();
            table.dateTime('dtnascimento', 
                            { precision: 6 })
                            .defaultTo(knex.fn.now(6))
                            .notNullable();
            table.boolean('isactive').notNullable();
            table.integer('updatedby').notNullable();
            table.string('logradouro').notNullable();
            table.string('numero').notNullable();
            table.string('bairro').notNullable();
            table.string('cidade').notNullable();
            table.string('uf').notNullable();
            table.string('pais').notNullable();
            table.string('cep').notNullable();
            
            table.dateTime('created_at', 
                            { precision: 6 })
                            .defaultTo(knex.fn.now(6))
                            .notNullable();
                            
            table.dateTime('updated_at', 
            { precision: 6 })
            .defaultTo(knex.fn.now(6))
            .notNullable();

            
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('users');
}