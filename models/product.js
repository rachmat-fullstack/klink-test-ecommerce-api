// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('products', {
  // Define attributes
  product_name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  },
  stock: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Product;