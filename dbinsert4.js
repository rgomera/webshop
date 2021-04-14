const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'INSERT INTO public.purchaseorder(po_product) VALUES ($1) RETURNING *';
const data = ['mouse pad'];

// use the pool's query method
pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
