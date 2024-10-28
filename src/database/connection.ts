import { createConnection } from "mysql2/promise";

export const connectToDatabase = async () => {
  const connection = await createConnection({
    host: "svr-spark-codechallenge.mysql.database.azure.com",
    user: "sparkchallengeoct",
    password: "Sp@rkCh@llenge0824",
    database: "dbo",
    ssl: {
        rejectUnauthorized: true, 
      },
  });

  return connection;
};
