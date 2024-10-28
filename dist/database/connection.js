"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const promise_1 = require("mysql2/promise");
const connectToDatabase = async () => {
    const connection = await (0, promise_1.createConnection)({
        host: "svr-spark-codechallenge.mysql.database.azure.com",
        user: "sparkchallengeoct",
        password: "Sp@rkCh@llenge0824",
        database: "database=dbo",
    });
    return connection;
};
exports.connectToDatabase = connectToDatabase;
