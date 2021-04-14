const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE public.supplier SET supp_name = $1 WHERE supp_id =3 RETURNING *';
const data = ['LAHORA, KRISTAN LOURD P.'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
pool.end();
