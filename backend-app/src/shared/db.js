const mongoose = require('mongoose');

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_DATABASE,
} = process.env;

const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`;

module.exports = () => {
    mongoose.connect(url).catch((err) => {
        console.log('MongoDB Connection Failed');
        process.exit(0);
    });

    process.once('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('MongoDB Connection Closed');
            process.exit(0);
        });
    });
};
