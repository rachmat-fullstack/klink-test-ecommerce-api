// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('klink_test_ecommerce_api', 'root', '', {
    logging: false,
    host: 'localhost',
    dialect: 'mysql',
});
 
// export connection
export default db;