const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.purchaseorder SET po_product = $1 WHERE po_id =3 RETURNING *';
const data = ['MOUSE PAD'];

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
