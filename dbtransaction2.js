const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // INSERT 1
        const q1 = 'SELECT * FROM public.supplier';
        const res1 = await client.query(q1);

        // display
        console.log('\nDisplay Supplier:');
        res1.rows.forEach(el => console.log(`ID: ${el.supp_id} | SUPPLIER NAME: ${el.supp_name}`));

        // COMMIT Transaction
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));
