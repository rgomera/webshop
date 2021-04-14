const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'DELETE FROM public.customer WHERE cust_id = $1 RETURNING*';
const data = [3];

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
