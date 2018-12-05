// vue config.js
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/~lawtonan/sianca-super/store/dist/'
        : '/'
}