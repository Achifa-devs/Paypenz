const { neon_db } = require("./db");
const { errHandler } = require("./errHandler");


function CreateTables(params) {

    // order_id

    // USERS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            user_id TEXT NOT NULL UNIQUE,
            provider TEXT NOT NULL, 
            fname TEXT NOT NULL,
            lname TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            pin TEXT NOT NULL,
            phone_number TEXT NOT NULL UNIQUE,
            gender TEXT NOT NULL, 
            is_active BOOLEAN NOT NULL,
            last_seen TEXT NOT NULL,
            is_email_verified BOOLEAN NOT NULL,
            is_phone_verified BOOLEAN NOT NULL,
            is_acct_verified BOOLEAN NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            referral_src TEXT NOT NULL,
            language TEXT NOT NULL,
            timezone TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    neon_db().then((pool) => {
        pool.query(`CREATE TABLE timezones (
            id SERIAL PRIMARY KEY,
            timezone VARCHAR(100) NOT NULL,
            name VARCHAR(100) NOT NULL,
            utc_offset VARCHAR(10) NOT NULL
        )`)
    })
    .catch(err=> {
        errHandler(err)
    })
 
    neon_db().then((pool) => {
        pool.query(`CREATE TABLE languages (
            id SERIAL PRIMARY KEY,
            code VARCHAR(10) NOT NULL,
            name VARCHAR(100) NOT NULL
        )`)
    })
    .catch(err=> {
        errHandler(err)
    })

    neon_db().then((pool) => {
        pool.query(`CREATE TABLE subscription_plans (
            plan_id SERIAL PRIMARY KEY,
            product_id TEXT NOT NULL,
            name TEXT NOT NULL,
            price TEXT NOT NULL,
            billing_frequency TEXT NOT NULL,
            created_at TEXT NOT NULL        
        )`)
    })
    .catch(err=> {
        errHandler(err)
    })

    neon_db().then((pool) => {
        pool.query(`CREATE TABLE subscription_transactions (
            transaction_id SERIAL PRIMARY KEY,
            subscription_id TEXT NOT NULL,
            entrepreneur_id TEXT NOT NULL,
            transaction_date TEXT NOT NULL,
            amount bigint NOT NULL,
            status TEXT NOT NULL,
            created_at TEXT NOT NULL
        )`)
    })
    .catch(err=> {
        errHandler(err)
    })



    // SHOPS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shops(
            id SERIAL PRIMARY KEY,
            shop_id TEXT NOT NULL UNIQUE,
            shop_name TEXT NOT NULL,
            shop_description TEXT NOT NULL,
            shop_logo_url TEXT NOT NULL UNIQUE,
            shop_category TEXT NOT NULL,
            shop_open_hours TEXT NOT NULL UNIQUE,
            shop_social_links TEXT NOT NULL,
            is_verified BOOLEAN NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // CUSTOMERS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_customers(
            id SERIAL PRIMARY KEY,
            shop_id TEXT NOT NULL,
            customer_id TEXT NOT NULL UNIQUE,
            customer_name TEXT NOT NULL,
            customer_email TEXT NOT NULL UNIQUE,
            customer_phone_number TEXT NOT NULL UNIQUE,
            customer_gender TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // SHIPPINGS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_shipping_details(
            id SERIAL PRIMARY KEY,
            shop_id TEXT NOT NULL,
            shipping_id TEXT NOT NULL UNIQUE,
            shipping_method TEXT NOT NULL,
            shipping_cost TEXT NOT NULL UNIQUE,
            shipping_time TEXT NOT NULL UNIQUE,
            shipping_policy TEXT NOT NULL,
            return_policy TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // POLICIES
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_policies (
            id SERIAL PRIMARY KEY,
            policy_type_id INT NOT NULL,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT NOT NULL,
            last_updated TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // PRODUCTS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_product(
            id SERIAL PRIMARY KEY,
            product_id TEXT NOT NULL,
            shop_id TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            price bigint NOT NULL,
            stock bigint NOT NULL,
            category TEXT NOT NULL,
            sub_category TEXT NOT NULL,
            specification JSON NOT NULL,
            others JSON NOT NULL,
            discount TEXT NOT NULL,
            img_urls TEXT NOT NULL,
            engagements JSON NOT NULL,
            created_at TEXT NOT NULL,
            last_updated TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // INVENTORY
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_inventory(
            id SERIAL PRIMARY KEY,
            inventory_id TEXT NOT NULL,
            product_id TEXT NOT NULL,
            shop_id TEXT NOT NULL,
            quantity bigint NOT NULL,
            change_date TEXT NOT NULL,
            change_reason TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // ORDERS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_orders (
            id SERIAL PRIMARY KEY,
            customer_id TEXT NOT NULL,
            order_id TEXT NOT NULL,
            product_id TEXT NOT NULL,
            order_status TEXT NOT NULL,
            order_quantity bigint NOT NULL,
            created_at TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // SHIPPINGS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_shippings (
            id SERIAL PRIMARY KEY,
            shipping_id TEXT NOT NULL,
            order_id TEXT NOT NULL,
            address TEXT NOT NULL,
            city TEXT NOT NULL,
            state TEXT NOT NULL,
            country TEXT NOT NULL,
            postal_code TEXT NOT NULL,
            status TEXT NOT NULL,
            created_at TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // POS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_payments (
            id SERIAL PRIMARY KEY,
            payment_id TEXT NOT NULL,
            shop_id TEXT NOT NULL,
            order_id TEXT NOT NULL,
            amount_paid bigint NOT NULL,
            payment_method TEXT NOT NULL,
            payment_date TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // CUSTOMER SUPPORT
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_customer_support (
            id SERIAL PRIMARY KEY,
            customer_support_id TEXT NOT NULL,
            shop_id TEXT NOT NULL,
            customer_support_name TEXT NOT NULL,
            customer_support_email TEXT NOT NULL,
            customer_support_phone TEXT NOT NULL,
            customer_support_address TEXT NOT NULL,
            customer_support_city TEXT NOT NULL,
            customer_support_postal_code TEXT NOT NULL,
            customer_support_state TEXT NOT NULL,
            customer_support_country TEXT NOT NULL,
            created_at TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // TEAMS

    // FOLLOWERS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_followers (
            id SERIAL PRIMARY KEY,
            follower_id TEXT NOT NULL,
            shop_id TEXT NOT NULL,
            user_id TEXT NOT NULL,
            date TEXT NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // ANALYTICS
    
    // REVIEWS

    // CARTS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS shop_carts (
            id serial PRIMARY KEY NOT NULL,
            cart_id text NOT NULL,
            product_id text NOT NULL,
            user_id text NOT NULL,
            quantity bigint NOT NULL,
            date text NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // VIEWS
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS product_views (
            id serial PRIMARY KEY NOT NULL,
            views_id text NOT NULL,
            product_id text NOT NULL,
            user_id text NOT NULL,
            date text NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // SHARES
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS product_shares (
            id serial PRIMARY KEY NOT NULL,
            share_id text NOT NULL,
            product_id text NOT NULL,
            user_id text NOT NULL,
            date text NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })

    // FAVOURITES
    neon_db().then(pool => {
        pool.query(`CREATE TABLE IF NOT EXISTS product_likes (
            id serial PRIMARY KEY NOT NULL,
            likes_id text NOT NULL,
            product_id text NOT NULL,
            user_id text NOT NULL,
            date text NOT NULL
        )`)
    }).catch(err=> {
        errHandler(err)
    })
}

module.exports={
    CreateTables
}