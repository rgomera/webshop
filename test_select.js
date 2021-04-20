const pool = require('./test_db');

pool.query('SELECT * FROM "PrelimExam"."GL_supplier"', (err, res) => {
    if (err) console.error(err.stack);
    else console.log(res.rows);
});

// end the database connection
pool.end();
