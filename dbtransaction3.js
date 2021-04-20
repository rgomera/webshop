const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // bases whether customer canceled the order or not
        const isCustomerCancel = true;

        // INSERT 1
        const q1 = 'INSERT INTO public.supplier(supp_name) VALUES ($1) RETURNING *';
        const d1 = ['new Customer Canceled.'];
        const res1 = await client.query(q1, d1);

        // INSERT 2
        const q2 = 'INSERT INTO public.supplier(supp_name) VALUES ($1) RETURNING *';
        const d2 = ['new Customer_1 Canceled_1.'];
        const res2 = await client.query(q1, d1);

        // if customer decide to canceled, throws an error
        if (isCustomerCancel) {
            throw '\nERROR: Customer Order Canceled!!';
        }

        // COMMIT Transaction
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        console.error(e);
        console.log('Failure State: Transaction Rollback!');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));
