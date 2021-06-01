// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('klink-test-ecommerce-api', 'root', '', {
    logging: false,
    host: 'localhost',
    dialect: 'mysql',
});
 
// export connection
export default db;