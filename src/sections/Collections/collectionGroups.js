import categoryItems from "../Categories/categoryItems"

const collectionGroups = [
	{
		isActive: true,
		title: "Movies",
		items: [
			{
				title: "Our Genres",
				categoryItems,
			},
			{
				title: "Popular Top 10 In Genres",
				categoryItems: [
					{
						title: 'Action',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/action/1.jpg',
							'/src/assets/images/categories/action/2.jpg',
							'/src/assets/images/categories/action/3.jpg',
							'/src/assets/images/categories/action/4.jpg',
						],
					},
					{
						title: 'Adventure',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/adventure/1.jpg',
							'/src/assets/images/categories/adventure/2.jpg',
							'/src/assets/images/categories/adventure/3.jpg',
							'/src/assets/images/categories/adventure/4.jpg',
						],
					},
					{
						title: 'Comedy',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/comedy/1.jpg',
							'/src/assets/images/categories/comedy/2.jpg',
							'/src/assets/images/categories/comedy/3.jpg',
							'/src/assets/images/categories/comedy/4.jpg',
						],
					},
					{
						title: 'Drama',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/drama/1.jpg',
							'/src/assets/images/categories/drama/2.jpg',
							'/src/assets/images/categories/drama/3.jpg',
							'/src/assets/images/categories/drama/4.jpg',
						],
					},

					{
						title: 'Action2',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/action/1.jpg',
							'/src/assets/images/categories/action/2.jpg',
							'/src/assets/images/categories/action/3.jpg',
							'/src/assets/images/categories/action/4.jpg',
						],
					},
					{
						title: 'Adventure',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/adventue/1.jpg',
							'/src/assets/images/categories/adventue/2.jpg',
							'/src/assets/images/categories/adventue/3.jpg',
							'/src/assets/images/categories/adventue/4.jpg',
						],
					},
					{
						title: 'Comedy',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/comedy/1.jpg',
							'/src/assets/images/categories/comedy/2.jpg',
							'/src/assets/images/categories/comedy/3.jpg',
							'/src/assets/images/categories/comedy/4.jpg',
						],
					},
					{
						title: 'Drama',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/drama/1.jpg',
							'/src/assets/images/categories/drama/2.jpg',
							'/src/assets/images/categories/drama/3.jpg',
							'/src/assets/images/categories/drama/4.jpg',
						],
					},

					{
						title: 'Action3',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/action/1.jpg',
							'/src/assets/images/categories/action/2.jpg',
							'/src/assets/images/categories/action/3.jpg',
							'/src/assets/images/categories/action/4.jpg',
						],
					},
					{
						title: 'Adventure',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/adventue/1.jpg',
							'/src/assets/images/categories/adventue/2.jpg',
							'/src/assets/images/categories/adventue/3.jpg',
							'/src/assets/images/categories/adventue/4.jpg',
						],
					},
					{
						title: 'Comedy',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/comedy/1.jpg',
							'/src/assets/images/categories/comedy/2.jpg',
							'/src/assets/images/categories/comedy/3.jpg',
							'/src/assets/images/categories/comedy/4.jpg',
						],
					},
					{
						title: 'Drama',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/drama/1.jpg',
							'/src/assets/images/categories/drama/2.jpg',
							'/src/assets/images/categories/drama/3.jpg',
							'/src/assets/images/categories/drama/4.jpg',
						],
					},

					{
						title: 'Action4',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/action/1.jpg',
							'/src/assets/images/categories/action/2.jpg',
							'/src/assets/images/categories/action/3.jpg',
							'/src/assets/images/categories/action/4.jpg',
						],
					},
					{
						title: 'Adventure',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/adventue/1.jpg',
							'/src/assets/images/categories/adventue/2.jpg',
							'/src/assets/images/categories/adventue/3.jpg',
							'/src/assets/images/categories/adventue/4.jpg',
						],
					},
					{
						title: 'Comedy',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/comedy/1.jpg',
							'/src/assets/images/categories/comedy/2.jpg',
							'/src/assets/images/categories/comedy/3.jpg',
							'/src/assets/images/categories/comedy/4.jpg',
						],
					},
					{
						title: 'Drama',
						badge: "Top 10 In",
						images: [
							'/src/assets/images/categories/drama/1.jpg',
							'/src/assets/images/categories/drama/2.jpg',
							'/src/assets/images/categories/drama/3.jpg',
							'/src/assets/images/categories/drama/4.jpg',
						],
					},
				],
				sliderParams: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 30,
					breakpoints: {
						0: {
							slidesPerView: 1.6,
							slidesPerGroup: 1,
							spaceBetween: 20,
						},
						481: {
							slidesPerView: 2,
							slidesPerGroup: 3,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							slidesPerGroup: 4,
							spaceBetween: 20,
						},
						1024: {
							spaceBetween: 20,
							allowTouchMove: false,
						},
						1441: {
							spaceBetween: 30,
							allowTouchMove: false,
						}
					}
				}
			},
			{
				title: "Trending Now",
				movieItems: [
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},

					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},

										{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},

										{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},

										{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
					{
						title: "Fight Club",
						imgSrc: '/src/assets/images/categories/action/1.jpg',
						duration: "2h 19min",
						view: "2K",
					},
				],
			},
			{
				title: "New Releases",
				movieItems: [
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						released: {
							label: 'October 6, 2000',
							dateTime: '2000-10-6', // Это нужно для атрибута datetime элемента time, который будет использован в разметке использовать в разметке
						}
					},
				],
			},
			{
				title: "Must - Watch Movies",
				movieItems: [
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
					{
						title: "Requiem for a Dream",
						imgSrc: '/src/assets/images/categories/action/2.jpg',
						duration: "1h 30min",
						rating: {
							value: 4.5,
							label: '20K',
						}
					},
				],
				sliderParams: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 30,
					breakpoints: {
						0: {
							slidesPerView: 1.6,
							slidesPerGroup: 1,
							spaceBetween: 20,
						},
						481: {
							slidesPerView: 2,
							slidesPerGroup: 3,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							slidesPerGroup: 4,
							spaceBetween: 20,
						},
						1024: {
							spaceBetween: 20,
							allowTouchMove: false,
						},
						1441: {
							spaceBetween: 30,
							allowTouchMove: false,
						}
					}
				}
			}
		]
	}
]

export default collectionGroups