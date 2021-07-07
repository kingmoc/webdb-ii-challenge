
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.integer('vin').unique().notNullable()
        tbl.string('make').notNullable()
        tbl.string('model').notNullable()
        tbl.integer('mileage').notNullable()
        tbl.string('trans-type')
        tbl.string('title-status')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('cars')
};
