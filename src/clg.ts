const clg = (
	title: string,
	valueToBeLogged?: string,
	callback?: () => void
) => {
	console.group(`Called from ${title}`)
	if (valueToBeLogged) {
		console.info(valueToBeLogged)
		console.log(`Type: ${typeof valueToBeLogged}`)
	}
	console.log(`Timestamp: ${new Date()}`)

	if (callback) {
		callback()
	}
	console.groupEnd()
}

export default clg
