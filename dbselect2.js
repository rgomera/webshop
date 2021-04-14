const pool = require('./db'); // load/import the pool libraries that was written on other file

// use the pool's query method
pool.query('SELECT * FROM public.product', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

// end the database connection
pool.end();
