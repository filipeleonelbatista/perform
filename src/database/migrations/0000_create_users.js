exports.up = function(knex){
    return knex.schema.createTable('users', table =>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();                            
            table.dateTime('updated_at', 
            { precision: 6 })
            .defaultTo(knex.fn.now(6))
            .notNullable();            
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('users');
}