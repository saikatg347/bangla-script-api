const asyncHandler = require('express-async-handler')
const { execOnline } = require('../compiler/executor')

const submitCode = asyncHandler(async (req, res) => {
	const { code } = req.body

	if (!code) {
		return res.status(400).json({ error: 'The code body is empty' })
	}

	try {
		// const output = await execLocally(code)
		const output = await execOnline(code)
		return res.status(200).json(output)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

module.exports = {
	submitCode,
}
