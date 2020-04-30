module.exports = {
    setError(code, message, results) {
        this.body = {
            code, msg: message, results
        };
    },
    setResults(results, msg) {
        this.body = {
            code: 200,
            msg: msg || 'success',
            results
        };
    }
};
