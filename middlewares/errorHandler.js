function errorHandler(err, req, res, next) {
	console.error(err.stack)

	const status = res.status ? res.status : 500 // 500 - server error

	res.status(status)

	res.json({ message: err.message })
}

module.exports = errorHandler
