module.exports = {
    // For Database
    DB_URL: process.env.DB_URL || "127.0.0.1",
    DB_NAME: process.env.DB_NAME || 'Cerebrum',
    DB_USER: process.env.DB_USER || 'adminAmavisca',
    DB_PASSWORD: process.env.DB_PASSWORD || 'adminAmavisca123',
    DB_PORT: "" +(process.env.DB_PORT || 3306),
    DB_ALTER: process.env.DB_ALTER || false,

    SERVER_URL: process.env.SERVER_URL || 'http://localhost',
    SERVER_PORT: process.env.SERVER_PORT || 9000,

    JWT_SECRET: process.env.JWT_SECRET || 'CEREBRUM_SECRET'
}