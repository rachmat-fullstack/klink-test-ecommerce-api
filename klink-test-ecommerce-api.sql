/*
Navicat MySQL Data Transfer

Source Server         : localhost MySQL
Source Server Version : 100119
Source Host           : 127.0.0.1:3306
Source Database       : klink-test-ecommerce-api

Target Server Type    : MYSQL
Target Server Version : 100119
File Encoding         : 65001

Date: 2021-06-01 22:18:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Product 1', '8000', '3', '2021-05-29 09:46:51', '2021-05-29 09:46:51');
INSERT INTO `products` VALUES ('2', 'Product 2', '5000', '13', '2021-05-29 09:47:01', '2021-05-29 09:47:01');

-- ----------------------------
-- Table structure for transaction
-- ----------------------------
DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price_when_buying` double DEFAULT NULL,
  `status` varchar(255) DEFAULT 'UNPAID',
  `createdAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of transaction
-- ----------------------------
INSERT INTO `transaction` VALUES ('1', '2', '3', '5000', 'PAID', '2021-05-30 02:54:18', '2021-05-30 02:54:18');
INSERT INTO `transaction` VALUES ('2', '2', '4', '5000', 'UNPAID', '2021-05-29 19:45:35', '2021-05-29 19:45:35');
INSERT INTO `transaction` VALUES ('3', '2', '4', '5000', 'UNPAID', '2021-05-29 19:53:18', '2021-05-29 19:53:18');
INSERT INTO `transaction` VALUES ('4', '2', '4', '5000', 'UNPAID', '2021-05-30 02:44:50', '2021-05-30 02:44:50');
INSERT INTO `transaction` VALUES ('5', '2', '6', '5000', 'UNPAID', '2021-05-30 03:28:41', '2021-05-30 03:28:41');
DROP TRIGGER IF EXISTS `UPDATE_STOCK_PRODUCTS`;
DELIMITER ;;
CREATE TRIGGER `UPDATE_STOCK_PRODUCTS` AFTER UPDATE ON `transaction` FOR EACH ROW BEGIN

UPDATE
   products
        INNER JOIN 
            transaction ON products.id = transaction.product_id 
SET 
   products.stock = 
CASE WHEN NEW.status = "PAID" THEN products.stock-NEW.quantity ELSE products.stock END 
WHERE
	products.id=NEW.product_id;

END
;;
DELIMITER ;
SET FOREIGN_KEY_CHECKS=1;
