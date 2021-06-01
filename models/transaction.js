// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Transaction = db.define('transaction', {
  // Define attributes
  product_id: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  price_when_buying: {
    type: DataTypes.DOUBLE
  },
  status: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Transaction
export default Transaction;