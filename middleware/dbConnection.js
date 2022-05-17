const {Client} = require('pg');


exports.connectToPostgressDatabase = (req,res,next) => {
    const client = new Client(
        {
            connectionString : process.env.DATABASE_URL || 'postgres://xovtphrqjrmhbm:68d69a9cd2e25f79f2783782dc3d2cdd89cd97187887f85b65de22918fb78ef7@ec2-44-194-117-205.compute-1.amazonaws.com:5432/dd0bc08c4pl53i',
            ssl : { rejectUnauthorized: false }
        }
    );
    client.connect();
    
    req.dbConnect = client;
    
    next();
};