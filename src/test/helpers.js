const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

process.env.NODE_ENV = "test";
const config = {
    db: {
        test: "mongodb://test:As123456@ds261440.mlab.com:61440/testnetflixdevf"
    },
    connection: null
}

function connect() {
    return new Promise((resolve, reject) => {
        if (config.connection) {
            return resolve();
        }
        const mongoUri = 'mongodb://test:As123456@ds261440.mlab.com:61440/testnetflixdevf';
        mongoose.Promise = Promise;
        const options = {
            server: {
                auto_connect: true,
                reconnectTries: Number.MAX_VALUE,
                reconnectInterval: 1000
            }
        };
        mongoose.connect(mongoUri, options);
        config.connection = mongoose.connection;
        config.connection.once('open', resolve)
            .on('error', (err) => {
                if (err.message.code === 'ETIMEDOUT') {
                    console.log(err);
                    mongoose.connect(mongoUri, options)
                }
                console.log(err)
                reject(err)
            })
    })
}

function clearDatabase() {
    return new Promise(resolve => {
        var count = 0;
        var max = Object.keys(mongoose.connection.collections).length;
        for (const i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(() => {
                count++;
                if (count >= max) {
                    resolve();
                }
            });
        }
    })
}

module.exports = async function setUpTest() {
    await connect();
    await clearDatabase();
};
