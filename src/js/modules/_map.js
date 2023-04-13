'use strict';
export function map() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				behaviors: ['drag', 'pinchZoom', 'mouseTilt'],
				center: [45.212143739589784,39.678185495104785],
				zoom: 18,
			}
			),
			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
			),
			MyLabelLayout = ymaps.templateLayoutFactory.createClass(
				'<div><a class="map__label" href="https://yandex.ru/maps/20693/ust-labinsk/house/krasnaya_ulitsa_176/Z0AYcABoSEQOQFpvfX5wcHRqbA==/?ll=39.678119%2C45.211898&z=16.75">$[properties.labelContent]</a></div>'
			),

			myPlacemarkWithContent = new ymaps.Placemark([45.211898, 39.678119], {
				iconContent: ''
			}, {
				iconLayout: 'default#imageWithContent',
				iconImageHref: '../../assets/images/logoForMap.svg',
				iconImageSize: [200, 200],
				iconImageOffset: [-100, -210],
				iconContentOffset: [10, -20],
				iconContentLayout: MyIconContentLayout
			}),
			myPlacemark = new ymaps.Placemark([45.211898, 39.678119], {
				labelContent: 'г. Усть-Лабинск <br> ул. Красная 176'
				}, {
					iconLayout: 'default#imageWithContent',
					iconImageHref: '',
					iconContentOffset: [-120, 40],
					iconContentLayout: MyLabelLayout
				}
			);

		myMap.geoObjects
			.add(myPlacemarkWithContent)
			.add(myPlacemark);
		myMap.controls
			.remove('geolocationControl') // удаляем геолокацию
			.remove('searchControl') // удаляем поиск
			.remove('trafficControl') // удаляем контроль трафика
			.remove('typeSelector') // удаляем тип
			// .remove('zoomControl') // удаляем контрол зуммирования
			.remove('rulerControl'); // удаляем контрол правил
	});
}