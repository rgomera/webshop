const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.product SET prod_name = $1 WHERE prod_id =2 RETURNING *';
const data = ['tv'];

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
