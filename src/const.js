module.exports = {

    SECRET_KEY: process.env.SECRET_KEY || "@[=g3,8d]\\&fbb=-q]/hk%fg",
    SECRET_KEY_STRIPE: process.env.SECRET_KEY_STRIPE || "sk_test_yS3NJJ4txiXuwXbl41Xi59Xh",
    SUBSCRIPTIONS_TYPES: {
        "GOLD": "plan_E1YRF7Gbi2bjOX",
        "PREMIUM": "plan_E1B0cbQX0RSdgG"
    },
    MONGO_URI: 'mongodb://netflix:As123456@cluster0-shard-00-00-f39ra.mongodb.net:27017,cluster0-shard-00-01-f39ra.mongodb.net:27017,cluster0-shard-00-02-f39ra.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    TEST_MONGO_URI: 'mongodb://test:As123456@ds261440.mlab.com:61440/testnetflixdevf'
};
