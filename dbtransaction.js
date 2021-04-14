const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // INSERT 1
        const q1 = 'INSERT INTO public.supplier(supp_name) VALUES ($1) RETURNING *';
        const d1 = ['transaction5, test C.'];
        const res1 = await client.query(q1, d1);
        console.log(`INSERTED --> ID: ${res1.rows[0].supp_id}, SUPPLIER NAME: ${res1.rows[0].supp_name}`);

        // INSERT 2
        const q2 = 'INSERT INTO public.supplier(supp_name) VALUES ($1) RETURNING *';
        const d2 = ['transaction6, test C.'];
        const res2 = await client.query(q2, d2);
        console.log(`INSERTED --> ID: ${res2.rows[0].supp_id}, SUPPLIER NAME: ${res2.rows[0].supp_name}`);

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
