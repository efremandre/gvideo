'use strict';
export function map() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				behaviors: ['drag', 'pinchZoom', 'mouseTilt'],
				center: [45.21206032023454,39.678137215342524],
				zoom: 18
			}
			),
			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
			),
			MyLabelLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="map__label"><p>$[properties.labelContent]</p><p><time>$[properties.labelTime]</time></p></div>'
			),

			myPlacemarkWithContent = new ymaps.Placemark([45.211898, 39.678119], {
				iconContent: ''
			}, {
				iconLayout: 'default#imageWithContent',
				iconImageHref: '../../assets/images/logoForMap.png',
				iconImageSize: [130, 200],
				iconImageOffset: [-65, -210],
				iconContentOffset: [10, -20],
				iconContentLayout: MyIconContentLayout
			}),
			myPlacemark = new ymaps.Placemark([45.211898, 39.678119], {
				labelContent: 'г. Усть-Лабинск <br> ул. Красная 176',
				labelTime: 'ПН-ПТ 9:00 - 18:00 <br> СБ 9:00 - 15:00'
				}, {
					iconLayout: 'default#imageWithContent',
					iconImageHref: '',
					iconContentOffset: [-115, 20],
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