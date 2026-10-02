
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 45696,
          make: 'Dodge',
          model: 'Stratus',
          mileage: 120000
        },
        {
          vin: 7895,
          make: 'Chevy',
          model: 'Impala',
          mileage: 50000,
          'trans-type': 'auto',
          'title-status': 'clean'
        },
      ]);
    });
};
