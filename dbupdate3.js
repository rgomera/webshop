const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.customer SET cust_name = $1 WHERE cust_id =3 RETURNING *';
const data = ['JOHNSON MARK J.'];

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
