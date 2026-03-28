const getIdGromTitle = (title) => { // Функция в параметрах будет ожидать строку и возвращать выражение ниже.
	return title
		.toLowerCase()
		.replaceAll(' ', '-')
}

export default getIdGromTitle