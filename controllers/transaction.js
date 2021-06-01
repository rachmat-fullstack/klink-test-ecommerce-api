// Import model Transaction
import Transaction from "../models/transaction.js";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var redis = require('redis');
var client = redis.createClient();

client.on('error', function(err){
    console.log('Error ' + err);
});

// Add to Cart
export const createTransactionToRedis = async (req, res) => {
    try {

        if (client.connected){
            client.set('dataRedis', JSON.stringify(req.body));
            res.json({
                "message": "(Add to Cart) Redis Data Created"
            });
          } else {
            res.json({
                "message": "Redis not connected, turn on service"
            });
          }

        

    } catch (err) {
        console.log(err);
    }
}

// Show Cart Item
export const ShowCartItemFromRedis = async (req, res) => {
    try {

        client.get('dataRedis', function(err, replies){
            if(err || replies === null) {

                res.json({
                    "message": "(Checkout) Show redis Failed, data Redis is empty."
                });
            
            } else {
                
                res.send(JSON.parse(replies));
                
            }   
        });

        

    } catch (err) {
        console.log(err);
    }
}
 
// Checkout
export const createTransactionRedisToDatabase = async (req, res) => {
    try {
        
        client.get('dataRedis', function(err, replies){
            if(err || replies === null) {

                res.json({
                    "message": "(Checkout) Redis to DB Failed, data Redis is empty."
                });
            
            } else {

                Transaction.create(JSON.parse(replies));
                res.json({
                    "message": "(Checkout) Redis to DB Success"
                });
                
            }   
        });

        client.flushall();        
        
    } catch (err) {
        console.log(err);
    }
}

// Payment Confirmation, Update Status Transaction
export const updateStatusTransaction = async (req, res) => {
    try {
        await Transaction.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json({
            "message": "Status Transaction Updated"
        });
    } catch (err) {
        console.log(err);
    }
}