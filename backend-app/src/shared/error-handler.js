/**
* Error handler is meant to unify errors all over the app
* @param code: number
* @param error: {code: number, message}
*/
module.exports = (code, error) => {
    return {
        statusCode: code,
        error: error
    }
};
