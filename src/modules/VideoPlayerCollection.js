const rootSelector = '[data-js-video-player]'

class VideoPlayer {
	selectors = {
		rootSelector: rootSelector,
		video: '[data-js-video-player-video]',
		button: '[data-js-video-player-play-button]',
	}

	stateClasses = {
		isActive: 'is-active',
	}

	constructor(rootElement) {
		this.rootElement = rootElement
		this.videoElement = this.rootElement.querySelector(this.selectors.video)
		this.playButtonElement = this.rootElement.querySelector(this.selectors.button)
		this.bindEvents()
	}

	onVideoPause = () => {
		this.videoElement.controls = false
		this.playButtonElement.classList.add(this.stateClasses.isActive)
	}

	onPlayButtonClick = () => {
		this.videoElement.play() // Вызываем у этого элемента характерный для него встроенный метод play
		this.videoElement.requestFullscreen() // Включим fullscreen режим для видео
		this.videoElement.controls = true // Отобразим элементы управления плеером
		this.playButtonElement.classList.remove(this.stateClasses.isActive)
	}

	onVideoFullScreenChange = () => {
		/*
			В fullscreenElement мы получим либо null, либо элемент,
			который открыт сейчас в режиме fullscreen и,
			сравнив наш полученный результат с videoElement,
			мы получим true или false, отвечающий на вопрос:
			был ли открыт режим фулскрина для конкретного дом элемента видео.
		*/
		const isFullScreenEnabled = document.fullscreenElement === this.videoElement

		if (!isFullScreenEnabled) {
			this.videoElement.pause()
		}
	}

	bindEvents() {
		this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
		this.videoElement.addEventListener('pause', this.onVideoPause)
		this.videoElement.addEventListener('fullscreenchange', this.onVideoFullScreenChange)
	}
}

class VideoPlayerCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach((element) => {
			new VideoPlayer(element)
		})
	}
}

export default VideoPlayerCollection