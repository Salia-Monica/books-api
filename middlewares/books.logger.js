function logger(req, res, next) {
    console.log('${req.method} {req. original} ${res. statusCode}');
    next();



    
}

module.exports = logger;