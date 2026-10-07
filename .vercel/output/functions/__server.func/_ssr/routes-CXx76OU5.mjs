import { i as __toESM } from "../_runtime.mjs";
import { d as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { G as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, o as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CXx76OU5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var CUSTINE_PORTRAIT = "/images/travelers/custine.jpg";
var GAUTIER_PORTRAIT = "/images/travelers/gautier.jpg";
var CUSTINE_SOURCE = {
	work: "Astolphe de Custine, «La Russie en 1839»",
	detail: "т. III, письмо XIX, Петербург, 1 августа 1839 (Paris, Amyot, 1843)",
	quality: "Качество A. Первое посещение: LIKELY.",
	url: "https://www.gutenberg.org/cache/epub/27267/pg27267-images.html",
	firstVisit: "LIKELY"
};
var GAUTIER_SOURCE_WINTER = {
	work: "Théophile Gautier, «Voyage en Russie»",
	detail: "часть III, гл. 7–8, перевод A. S. Kline",
	quality: "Качество B (перевод, французский оригинал не сверен). Первое посещение: LIKELY.",
	url: "https://www.poetryintranslation.com/PITBR/French/GautierTravelsInRussiaPartIII.php",
	firstVisit: "LIKELY"
};
var GAUTIER_SOURCE_ISAAC = {
	work: "Théophile Gautier, «Voyage en Russie»",
	detail: "часть VI, гл. 15, перевод A. S. Kline",
	quality: "Качество B. Первое посещение: LIKELY.",
	url: "https://www.poetryintranslation.com/PITBR/French/GautierTravelsInRussiaPartVI.php",
	firstVisit: "LIKELY"
};
var HOW_TO_READ = {
	title: "Как читать",
	body: "Для каждого места указаны авторы, их общее впечатление, оценка и подробный пересказ того, что человек пишет. Это пересказ, а не дословная цитата: дословные фрагменты приведены только короткие. Оценка выведена только из текста автора. Проверенных авторов двое — Astolphe de Custine и Théophile Gautier. Цитаты и имена не придуманы.",
	stars: [
		{
			mark: "★★★",
			label: "восхищение"
		},
		{
			mark: "★★",
			label: "смешанное или спокойное впечатление"
		},
		{
			mark: "★",
			label: "негативное"
		}
	],
	corpus: "Мест: 5. Авторов: 2. Отзывов: 9. Третьего проверенного автора в доступных текстах нет — пустые слоты не заполнены вымыслом."
};
function starsFrom(values) {
	const avg = values.reduce((sum, value) => sum + value, 0) / values.length;
	if (avg >= 2.75) return 3;
	if (avg >= 1.5) return 2;
	return 1;
}
var custineIsaac = {
	id: "custine",
	name: "Астольф де Кюстин",
	nameOriginal: "Astolphe de Custine",
	country: "Франция",
	role: "писатель",
	year: "1839",
	portrait: CUSTINE_PORTRAIT,
	portraitAlt: "Портрет Астольфа де Кюстина, XIX век",
	stars: 2,
	impression: "Восхищение масштабом, но без восторга: собор в лесах, судить о нём рано.",
	brief: "Кюстин поднялся на медный купол ещё недостроенного Исаакия. Леса этого купола, одного из самых высоких в мире, он называет памятниками сами по себе. С высоты он видит плоский Петербург до горизонта и пишет, что человек может жить здесь только за счёт постоянных усилий. Ансамбль Исаакия, Адмиралтейства, Зимнего дворца и памятника Петру для него «не красиво, но поразительно огромно».",
	full: "Кюстин поднялся на медный купол собора и пишет, что леса этого купола, одного из самых высоких в мире, сами по себе памятники. Церковь не закончена, и он признаётся, что не может представить, какое впечатление она произведёт в готовом виде. С высоты он видит плоский Петербург и такие же плоские окрестности до горизонта: человек, по его мнению, может жить здесь только за счёт постоянных усилий. Для него это «печальный и пышный результат» человеческих чудес, который вызывает отвращение и должен послужить уроком правителям, не считающимся с природой при выборе места для города. Об окружающем ансамбле он пишет, что Исаакий вместе с Адмиралтейством, Зимним дворцом и памятником Петру образует три огромные площади, слитые в одну. В целом, по его формулировке, это «не красиво, но поразительно огромно». Он находит многое достойным критики, но ансамбль в целом всё же вызывает у него восхищение.",
	source: CUSTINE_SOURCE
};
var gautierIsaac = {
	id: "gautier",
	name: "Теофиль Готье",
	nameOriginal: "Théophile Gautier",
	country: "Франция",
	role: "писатель и критик",
	year: "1858–59",
	portrait: GAUTIER_PORTRAIT,
	portraitAlt: "Теофиль Готье. Фотография Надара, около 1856 года",
	stars: 3,
	impression: "Полное восхищение: самый прекрасный храм современности.",
	brief: "Готье называет Исаакий первым среди церквей столицы и лучшим достижением современной архитектуры. Купол виден ещё с моря и сияет над силуэтом, как золотая митра. Его восхищает материал — гранит, мрамор, бронза и золото, ничего не крашено. Иконостас из малахита и лазурита он называет «храмом внутри храма». Минусы — слишком низкий цоколь и неравномерный свет внутри, но вывод однозначный: самая красивая из современных церквей.",
	full: "Готье называет Исаакий первым среди церквей столицы и лучшим достижением современной архитектуры. Купол виден ещё с моря при подходе к городу и сияет над силуэтом, как золотая митра. Он находит в здании гармоничный синтез собора Св. Петра, римского Пантеона, лондонского Св. Павла, парижских Инвалидов и Сент-Женевьев. Особенно его восхищает материал: гранит, мрамор, бронза и золото, ничего не крашено и не подделано. Колонны-монолиты он сравнивает с башнями, а гранитные ступени — с храмами Карнака. О внутреннем убранстве пишет, что при входе поражаешься пышности мрамора и позолоты, а иконостас из малахита и лазурита называет «храмом внутри храма». К минусам он относит слишком низкий гранитный цоколь, из-за которого собор кажется приземистым, и неравномерное освещение внутри, где многие картины плохо видны. Но общий вывод у него однозначный: это самая красивая из современных церквей, а её классический стиль идеально подходит Петербургу. Отдельно он описывает собор зимой, на закате и при луне.",
	source: GAUTIER_SOURCE_ISAAC
};
var custineKazan = {
	id: "custine",
	name: "Астольф де Кюстин",
	nameOriginal: "Astolphe de Custine",
	country: "Франция",
	role: "писатель",
	year: "1839",
	portrait: CUSTINE_PORTRAIT,
	portraitAlt: "Портрет Астольфа де Кюстина, XIX век",
	stars: 2,
	impression: "Собор большой и красивый, но испорчен нелепым входом.",
	brief: "Казанский собор, построенный при Александре, для Кюстина обширен и красив. Главный недостаток — входить приходится сбоку, «с угла». Причина в правиле: алтарь должен смотреть на восток, а Невский — «Перспектива» — направлен иначе. Церковь поставили боком: «архитекторы проиграли, победили верующие». Один из красивейших памятников России, считает он, испорчен суеверием.",
	full: "Кюстин пишет, что Казанский собор, построенный при Александре, обширен и красив. Его главный недостаток в том, что входить в него приходится сбоку, «с угла». Причину он объясняет религиозным правилом: алтарь православного храма должен быть обращён на восток, а улица, которую он называет «Перспективой» (Невский проспект), направлена иначе. Церковь поэтому поставили боком: по его словам, архитекторы проиграли, победили верующие. В итоге один из красивейших памятников России, считает он, испорчен суеверием. Рядом он замечает, что церковь Троицы красива, но внутри пуста, как и большинство православных храмов, которые он видел в России.",
	source: CUSTINE_SOURCE
};
var gautierKazan = {
	id: "gautier",
	name: "Теофиль Готье",
	nameOriginal: "Théophile Gautier",
	country: "Франция",
	role: "писатель и критик",
	year: "1858–59",
	portrait: GAUTIER_PORTRAIT,
	portraitAlt: "Теофиль Готье. Фотография Надара, около 1856 года",
	stars: 2,
	impression: "Приятное зимнее впечатление: собор «преобразился к лучшему».",
	brief: "Готье упоминает Казанский собор мимоходом, в санной поездке по Невскому. Снег пошёл зданию на пользу: итальянский купол покрылся «русской» снежной шапкой, карнизы обведены белизной, на колоннаде появилась «серебряная балюстрада», а ступени — мягкий горностаевый ковёр. Статуи Барклая и Кутузова в римских одеждах его забавляют: скульптору стоило одеть героев в бронзовые шинели. Тёплое, но спокойное впечатление.",
	full: "Готье упоминает Казанский собор мимоходом, во время зимней поездки на санях по Невскому проспекту. Он пишет, что снег пошёл собору на пользу: итальянский купол покрылся «русской» снежной шапкой, карнизы и коринфские капители обведены чистой белизной, на террасе полукруглой колоннады появилась «серебряная балюстрада», а ступени к порталу покрыты мягким горностаевым ковром, достойным золотой туфельки царицы. Тут же он замечает, что у собора стоят статуи Барклая де Толли и Кутузова в римских одеждах, и шутит, что скульптору стоило одеть героев в бронзовые шинели. Это короткое, но тёплое и эстетски окрашенное впечатление без сильных эмоций.",
	source: GAUTIER_SOURCE_WINTER
};
var custineWinter = {
	id: "custine",
	name: "Астольф де Кюстин",
	nameOriginal: "Astolphe de Custine",
	country: "Франция",
	role: "писатель",
	year: "1839",
	portrait: CUSTINE_PORTRAIT,
	portraitAlt: "Портрет Астольфа де Кюстина, XIX век",
	stars: 2,
	impression: "Дворец внушителен, но площадь вокруг подавляет масштабом.",
	brief: "Кюстин называет дворец внушительным, стиль времён регентства — благородным, красный песчаник приятен для глаза. Вид перед Зимним — одно из немногих мест, где он действительно восхищается. Но монументы теряются на площади, которая скорее равнина. Александровская колонна, Генштаб, арка, Адмиралтейство, памятник Петру: всё вместе «не красиво, но поразительно огромно».",
	full: "Кюстин называет дворец внушительным, а стиль его архитектуры времён регентства — благородным. Красный цвет песчаника, из которого он построен, приятен для глаза. Он признаёт, что вид перед Зимним дворцом — одно из немногих мест, где он действительно восхищается. Дворец стоит на Адмиралтейском острове, который, по его словам, теперь самый красивый квартал города. Но тут же он замечает, что монументы теряются на огромной площади, которая скорее равнина, чем площадь. Он перечисляет Александровскую колонну, Генеральный штаб, арку, Адмиралтейство, памятник Петру и ведёт к выводу: всё вместе не красиво, но поразительно огромно. Эрмитаж он описывает отдельно, и отзыв о нём остаётся смешанным.",
	source: CUSTINE_SOURCE
};
var gautierWinter = {
	id: "gautier",
	name: "Теофиль Готье",
	nameOriginal: "Théophile Gautier",
	country: "Франция",
	role: "писатель и критик",
	year: "1859",
	yearNote: "Дата в тексте противоречива: 1858 в примечании переводчика, по хронологии поездки это январь 1859. Датировка UNCERTAIN.",
	portrait: GAUTIER_PORTRAIT,
	portraitAlt: "Теофиль Готье. Фотография Надара, около 1856 года",
	stars: 3,
	impression: "Восхищение торжественным зрелищем крещенской церемонии во дворце.",
	brief: "Готье описывает не фасад, а Крещение, которое наблюдал из окна Зимнего. Залы полны знати, министров, дипломатов и генералов; он следит за литургией в дворцовой церкви, затем процессия выходит к павильону над прорубью на Неве. Гремят пушки со Стрелки, гарцуют черкесы и казаки. Зрелище «столь же великолепно, сколь внушительно», толпа — самая тихая из всех.",
	full: "Готье описывает не здание, а событие в нём: праздник Крещения (водосвятие на Неве), который он наблюдал из окна Зимнего дворца, куда ему любезно разрешили пройти. Огромные залы были полны высшей знати, министров, дипломатов и генералов, расшитых золотом, между рядами солдат в парадной форме. Он стоял в глубине помоста и с «почтительным любопытством» следил за литургией во дворцовой церкви: священник в митре и серебряно-золотом облачении, хор в оранжево-красном бархате с золотом, император с семьёй, мелькавший за золотой завесой иконостаса. Потом процессия вышла к Неве, где был воздвигнут павильон над прорубью, под окнами гарцевали черкесы, лезгины и казаки, а с Стрелки Васильевского острова гремели пушки. Всё зрелище он называет столь же великолепным, сколь внушительным, а толпу — самой тихой из всех. Оценка относится именно к торжественной церемонии во дворце.",
	source: GAUTIER_SOURCE_WINTER
};
var custineNeva = {
	id: "custine",
	name: "Астольф де Кюстин",
	nameOriginal: "Astolphe de Custine",
	country: "Франция",
	role: "писатель",
	year: "1839",
	portrait: CUSTINE_PORTRAIT,
	portraitAlt: "Портрет Астольфа де Кюстина, XIX век",
	stars: 3,
	impression: "Прямое восхищение набережными, при печали о цене стройки.",
	brief: "Набережные Петербурга для Кюстина — одна из самых красивых вещей в Европе. Причина — «роскошь в прочности»: гранитные блоки на болотистом дне и мрамор против мороза. Город защищён от Невы и украшен парапетами. Он вспоминает, что сто тысяч человек умерли на этой стройке, и признаёт: восхищается с неохотой, но всё же восхищается. Саму реку до этого называет стоячим разливом.",
	full: "Кюстин называет набережные Петербурга одной из самых красивых вещей в Европе. Причина — «роскошь в прочности»: гранитные блоки, привезённые на болотистое дно вместо земли, и мрамор, противопоставленный разрушительной силе мороза, дают ему представление о разумной силе и величии. Город, по его словам, защищён от Невы и украшен великолепными парапетами. Он тут же с сожалением вспоминает, что сто тысяч человек умерли на этой стройке, и признаёт, что восхищается с неохотой, но всё же восхищается. Саму Неву он до этого описывает довольно сурово: это стоячий разлив, который называют рекой за неимением лучшего слова.",
	source: CUSTINE_SOURCE
};
var gautierNeva = {
	id: "gautier",
	name: "Теофиль Готье",
	nameOriginal: "Théophile Gautier",
	country: "Франция",
	role: "писатель и критик",
	year: "1858–59",
	portrait: GAUTIER_PORTRAIT,
	portraitAlt: "Теофиль Готье. Фотография Надара, около 1856 года",
	stars: 3,
	impression: "Восхищение зимней Невой и видами с её берегов.",
	brief: "С Благовещенского моста Готье видит золотые купола, Исаакий «как усыпанную бриллиантами митру мага», иглу Адмиралтейства, шпиль Петропавловской крепости и Стрелку с ростральными колоннами. Лёд — кристаллическая каменоломня; ночью две линии газовых фонарей превращают реку во «второй Невский». На льду — лагерь самоедов, скачки, экипажи. Нева для него одна из «властей» Петербурга.",
	full: "Готье подробно описывает замёрзшую Неву. С Благовещенского моста он видит золотые купола, Исаакий «как усыпанную бриллиантами митру мага», иглу Адмиралтейства, шпиль Петропавловской крепости и Стрелку Васильевского острова с ростральными колоннами из розового гранита. Лёд он сравнивает с кристаллической каменоломней: вырезанные глыбы переливаются всеми цветами спектра, а в сумерках напоминают развалины сказочного дворца. Ночью на льду зажигаются две линии газовых фонарей, и замёрзшая Нева становится «вторым Невским проспектом» города. На реке стоит лагерь самоедов с оленьими упряжками, проходят скачки, а толпа и экипажи, по его словам, не боятся трёхфутового льда. Сначала он признаёт лёгкую тревогу, но спокойствие русских его убеждает. Он пишет, что Нева — одна из «властей» Петербурга, которой русские оказывают почёт.",
	source: GAUTIER_SOURCE_WINTER
};
var gautierNevsky = {
	id: "gautier",
	name: "Теофиль Готье",
	nameOriginal: "Théophile Gautier",
	country: "Франция",
	role: "писатель и критик",
	year: "1858–59",
	portrait: GAUTIER_PORTRAIT,
	portraitAlt: "Теофиль Готье. Фотография Надара, около 1856 года",
	stars: 3,
	impression: "Восхищение зимним видом проспекта.",
	brief: "Готье едет на санях до Аничкова моста и не верит, насколько проспект выиграл от снега: «огромная серебряная полоса» между двумя рядами дворцов, гостиниц и церквей. Розовые, жёлтые и серо-палевые дома, странные в обычное время, в снегу дают гармоничный тон — впечатление «поистине волшебное». Позже Невский становится санным «Лоншаном»: шумно только для глаза, снег глушит звуки. Летний проспект он здесь не описывает.",
	full: "Готье едет на санях до Аничкова моста и пишет, что не мог поверить, насколько проспект выиграл от снега: это «огромная серебряная полоса», протянувшаяся между двумя рядами дворцов, гостиниц и церквей. Розовые, жёлтые и серо-палевые краски домов, которые в обычное время бывают странными, в снегу приобрели гармоничный тон, а общее впечатление он называет поистине волшебным. По дороге он проезжает Казанский собор, статуи Барклая и Кутузова и канал Екатерины под мостом. Позже он описывает Невский и Английскую набережную как место санного «Лоншана»: проспект полон троек и экипажей, но снег глушит звуки, и картина «шумна только для глаза». Впечатление привязано к зиме.",
	source: GAUTIER_SOURCE_WINTER
};
var places = [
	{
		id: "isaac",
		number: "01",
		name: "Исаакиевский собор",
		shortName: "Исаакий",
		coords: [59.934, 30.3061],
		context: "В 1839 году собор Монферрана ещё достраивался, освятили его в 1858-м. Авторы видели разные состояния здания.",
		averageStars: starsFrom([2, 3]),
		why: "Средняя оценка ★★ складывается из двух разных зданий. Кюстин в 1839-м видел собор в лесах и писал: «не красиво, но поразительно огромно». Готье после освящения назвал его самым прекрасным храмом современности. Один восторг, одна оговорка — итог смешанный.",
		images: [
			{
				src: "/images/places/isaac-1.jpg",
				alt: "Исаакиевский собор из Александровского сада",
				caption: "Из Александровского сада. Фотохром, 1890–1900. Library of Congress"
			},
			{
				src: "/images/places/isaac-2.jpg",
				alt: "Медный всадник и Исаакиевский собор",
				caption: "Медный всадник и собор. Фотохром, 1890–1900"
			},
			{
				src: "/images/places/isaac-3.jpg",
				alt: "Исаакиевский собор, вид конца XIX века",
				caption: "St. Petersbourg. La Cathédrale Isaac. Фотохром Photoglob, ок. 1890"
			},
			{
				src: "/images/places/isaac-4.jpg",
				alt: "Исаакиевский собор в лесах во время строительства",
				caption: "Собор в лесах. Рисунок 1840-х по Монферрану — то состояние, которое видел Кюстин"
			}
		],
		travelers: [custineIsaac, gautierIsaac]
	},
	{
		id: "kazan",
		number: "02",
		name: "Казанский собор",
		shortName: "Казанский",
		coords: [59.9342, 30.3245],
		averageStars: starsFrom([2, 2]),
		why: "Оба автора спокойны и скорее доброжелательны, без восторга. Кюстин считает собор обширным и красивым, но испорченным входом «с угла». Готье видит зимнюю красоту колоннады — коротко, тепло, без сильных эмоций. Отсюда ★★.",
		images: [
			{
				src: "/images/places/kazan-1.jpg",
				alt: "Казанский собор со стороны Екатерининского канала",
				caption: "Со стороны Екатерининского канала. Андрей Мартынов, 1810-е"
			},
			{
				src: "/images/places/kazan-2.jpg",
				alt: "Казанский собор, рисунок начала XX века",
				caption: "Казанский собор. Фредерик де Ханен, ок. 1913"
			},
			{
				src: "/images/places/kazan-3.jpg",
				alt: "Казанский собор, фотография XIX века",
				caption: "Казанский собор. Альбумин, ок. 1880. Library of Congress"
			}
		],
		travelers: [custineKazan, gautierKazan]
	},
	{
		id: "winter",
		number: "03",
		name: "Зимний дворец",
		shortName: "Зимний",
		coords: [59.9404, 30.3136],
		context: "Зимний дворец горел в 1837 году; Кюстин видел уже восстановленное здание (общеизвестный факт, не из его текста).",
		averageStars: starsFrom([2, 3]),
		why: "Кюстин хвалит благородство фасада и тут же теряется на площади-равнине. Готье ставит ★★★ не зданию, а крещенской церемонии внутри дворца. Итог ★★: внушительно, но единого восторга архитектурой нет.",
		images: [
			{
				src: "/images/places/winter-1.jpg",
				alt: "Северный фасад Зимнего дворца в XIX веке",
				caption: "Северный фасад со стороны Невы. XIX век"
			},
			{
				src: "/images/places/winter-2.jpg",
				alt: "Зимний дворец, альбуминовый отпечаток около 1880 года",
				caption: "Зимний дворец. Альбумин, ок. 1880. Library of Congress"
			},
			{
				src: "/images/places/winter-3.jpg",
				alt: "Дворцовая площадь и Зимний дворец от начала Невского проспекта",
				caption: "Вид площади от начала Невского. Бенжамен Патерсен, 1801"
			}
		],
		travelers: [custineWinter, gautierWinter]
	},
	{
		id: "neva",
		number: "04",
		name: "Набережные и Нева",
		shortName: "Нева",
		coords: [59.9426, 30.3208],
		averageStars: starsFrom([3, 3]),
		why: "Единственное место, где оба сходятся в прямом восхищении. Для Кюстина гранитные набережные — одна из самых красивых вещей в Европе, даже если цена стройки его печалит. Для Готье зимняя Нева — одна из «властей» Петербурга. Отсюда ★★★.",
		images: [
			{
				src: "/images/places/neva-1.jpg",
				alt: "Петропавловская крепость и Дворцовая набережная",
				caption: "Крепость и Дворцовая набережная. Фёдор Алексеев"
			},
			{
				src: "/images/places/neva-2.jpg",
				alt: "Стрелка Васильевского острова с Дворцовой набережной",
				caption: "Стрелка Васильевского острова. Бенжамен Патерсен, 1807"
			},
			{
				src: "/images/places/neva-3.jpg",
				alt: "Университетская набережная в XIX веке",
				caption: "Университетская набережная. XIX век"
			}
		],
		travelers: [custineNeva, gautierNeva]
	},
	{
		id: "nevsky",
		number: "05",
		name: "Невский проспект",
		shortName: "Невский",
		coords: [59.9332, 30.3434],
		context: "Найден один проверенный отзыв. Кюстин упоминает «Перспективу» только в связи с ориентацией Казанского собора и проспект как место не оценивает — поэтому здесь его нет.",
		averageStars: starsFrom([3]),
		why: "Оценка по единственному проверенному отзыву. Готье описывает зимний Невский с явным восторгом — «огромная серебряная полоса» между дворцами. Летнего проспекта в этом тексте нет, третьего автора тоже: пустой слот не заполнен.",
		images: [
			{
				src: "/images/places/nevsky-1.jpg",
				alt: "Невский проспект и Адмиралтейство",
				caption: "Невский и Адмиралтейство. Фотохром, 1890–1900"
			},
			{
				src: "/images/places/nevsky-2.jpg",
				alt: "Невский проспект у башни Городской думы",
				caption: "У башни Городской думы. Фотохром, 1896–1897"
			},
			{
				src: "/images/places/nevsky-3.jpg",
				alt: "Невский проспект от Полицейского моста к Думе",
				caption: "От Полицейского моста к Думе. Фотохром, 1896–1897"
			}
		],
		travelers: [gautierNevsky]
	}
];
function placeById(id) {
	if (!id) return void 0;
	return places.find((place) => place.id === id);
}
function formatStars(value) {
	return "★".repeat(value);
}
function AboutPanel({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "panel-enter pointer-events-auto flex h-full max-h-[88dvh] w-full flex-col bg-bg-panel shadow-panel md:max-h-none md:w-[min(30rem,42vw)]",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "about-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-8 md:py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xxs font-medium tracking-display text-muted uppercase",
				children: "О проекте"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "about-title",
				className: "mt-1 font-display text-2xl font-medium leading-tight text-fg",
				children: HOW_TO_READ.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "flex size-11 shrink-0 items-center justify-center text-fg transition-opacity duration-150 hover:opacity-60",
				"aria-label": "Закрыть",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-5",
					strokeWidth: 1.25
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-8 md:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-normal text-fg",
					children: HOW_TO_READ.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: HOW_TO_READ.stars.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-12 font-display text-base tracking-display text-accent",
							children: row.mark
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: row.label
						})]
					}, row.mark))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs leading-snug text-subtle",
					children: HOW_TO_READ.corpus
				})
			]
		})]
	});
}
var CityMapInner = (0, import_react.lazy)(() => import("./city-map-inner-Df3eW-8h.mjs"));
function CityMap(props) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full w-full bg-map",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full w-full bg-map",
			"aria-hidden": "true"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityMapInner, { ...props })
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LoadingScreen({ leaving }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg px-6", leaving && "is-leaving loading-screen", !leaving && "loading-screen"),
		role: "status",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xxs font-medium uppercase tracking-display text-muted",
				children: "Санкт-Петербург · XIX век"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "loading-rule my-6 h-px w-40 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "max-w-xl text-center font-display text-2xl font-medium leading-tight tracking-wide text-fg sm:text-3xl",
				children: [
					"Мишленовские",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"путешествия"
				]
			})
		]
	});
}
function PlaceIndex({ selectedId, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Пять мест",
		className: "pointer-events-auto hidden w-56 shrink-0 flex-col justify-center gap-1 md:flex",
		children: places.map((place) => {
			const active = selectedId === place.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(place.id),
				className: cn("flex items-baseline justify-between gap-3 px-3 py-2.5 text-left transition-colors duration-150", active ? "text-fg" : "text-muted hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex min-w-0 items-baseline gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-xxs tabular-nums tracking-label text-subtle",
						children: place.number
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-lg leading-tight",
						children: place.shortName
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-display text-xs tracking-label", active ? "text-accent" : "text-subtle"),
					children: formatStars(place.averageStars)
				})]
			}, place.id);
		})
	});
}
function ImageGallery({ images, placeName }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const current = images[index];
	if (!current) return null;
	const go = (direction) => {
		setIndex((value) => (value + direction + images.length) % images.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-lg bg-map",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: current.src,
					alt: current.alt,
					className: "aspect-4/3 h-auto w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
				}), images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(-1),
					className: "absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-elevated/80 text-fg transition-opacity duration-150 hover:bg-bg-elevated",
					"aria-label": "Предыдущее изображение",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-4",
						strokeWidth: 1.5
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(1),
					className: "absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-elevated/80 text-fg transition-opacity duration-150 hover:bg-bg-elevated",
					"aria-label": "Следующее изображение",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "size-4",
						strokeWidth: 1.5
					})
				})] }) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-snug text-muted",
					children: current.caption
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 font-sans text-xxs tabular-nums tracking-label text-subtle uppercase",
					children: [
						String(index + 1).padStart(2, "0"),
						" / ",
						String(images.length).padStart(2, "0"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sr-only",
							children: [" — ", placeName]
						})
					]
				})]
			}),
			images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: images.map((image, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setIndex(imageIndex),
					className: cn("h-px flex-1 transition-colors duration-150", imageIndex === index ? "bg-accent" : "bg-line"),
					"aria-label": `Изображение ${imageIndex + 1}`,
					"aria-current": imageIndex === index
				}, image.src))
			}) : null
		]
	});
}
var sizeClass = {
	sm: "text-sm tracking-[0.18em]",
	md: "text-base tracking-[0.22em]",
	lg: "text-xl tracking-[0.28em]"
};
function StarRating({ value, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block font-display text-accent", sizeClass[size], className),
		"aria-label": `${value} из 3`,
		children: formatStars(value)
	});
}
function TravelerBlock({ traveler }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const text = expanded ? traveler.full : traveler.brief;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "border-t border-line pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: traveler.portrait,
						alt: traveler.portraitAlt,
						className: "size-16 shrink-0 rounded-sm object-cover object-top outline outline-1 -outline-offset-1 outline-fg/10 grayscale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-sans text-xxs font-medium tracking-label text-muted uppercase",
								children: [
									traveler.country,
									" · ",
									traveler.year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl font-medium leading-tight text-fg",
								children: traveler.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-sm text-muted",
								children: [traveler.nameOriginal, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle",
									children: [" · ", traveler.role]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
						value: traveler.stars,
						size: "sm",
						className: "pt-1"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-display text-lg leading-snug text-fg italic",
				children: traveler.impression
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-normal text-fg/90",
				children: text
			}),
			traveler.yearNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-snug text-subtle",
				children: traveler.yearNote
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setExpanded((value) => !value),
				className: "mt-4 text-xs font-medium tracking-label text-accent uppercase transition-opacity duration-150 hover:opacity-70",
				children: expanded ? "Свернуть" : "Читать полностью"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-1 text-xxs leading-snug text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						traveler.source.work,
						". ",
						traveler.source.detail,
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: traveler.source.quality }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: traveler.source.url,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-block text-muted underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-fg",
						children: "Сверить источник"
					})
				]
			})
		]
	});
}
function PlacePanel({ place, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "panel-enter pointer-events-auto flex h-full max-h-[88dvh] w-full flex-col bg-bg-panel shadow-panel md:max-h-none md:w-[min(34rem,46vw)]",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "place-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-8 md:py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xxs font-medium tracking-display text-muted uppercase",
				children: ["Место ", place.number]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "place-title",
				className: "mt-1 font-display text-2xl font-medium leading-tight text-fg md:text-3xl",
				children: place.name
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "flex size-11 shrink-0 items-center justify-center text-fg transition-opacity duration-150 hover:opacity-60",
				"aria-label": "Закрыть",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-5",
					strokeWidth: 1.25
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-8 md:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
						value: place.averageStars,
						size: "lg"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xxs tracking-label text-subtle uppercase",
						children: place.travelers.length === 1 ? "1 отзыв" : `${place.travelers.length} отзыва`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-normal text-fg",
					children: place.why
				}),
				place.context ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 border-l border-accent/40 pl-4 text-sm leading-normal text-muted",
					children: place.context
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageGallery, {
						images: place.images,
						placeName: place.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-10",
					children: place.travelers.map((traveler) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TravelerBlock, { traveler }, `${place.id}-${traveler.id}`))
				})
			]
		})]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	const [booting, setBooting] = (0, import_react.useState)(true);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const [aboutOpen, setAboutOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const hold = reduced ? 200 : 1700;
		const leave = reduced ? 0 : 380;
		const start = window.setTimeout(() => setLeaving(true), hold);
		const done = window.setTimeout(() => setBooting(false), hold + leave);
		return () => {
			window.clearTimeout(start);
			window.clearTimeout(done);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") {
				setSelectedId(null);
				setAboutOpen(false);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const selected = placeById(selectedId);
	const panelOpen = Boolean(selected) || aboutOpen;
	const closePanels = () => {
		setSelectedId(null);
		setAboutOpen(false);
	};
	const openPlace = (id) => {
		setAboutOpen(false);
		setSelectedId((current) => current === id ? null : id);
	};
	const openAbout = () => {
		setSelectedId(null);
		setAboutOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh overflow-hidden bg-bg",
		children: [
			booting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { leaving }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 pt-4 md:px-6 md:pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xxs font-medium tracking-display text-muted uppercase",
						children: "Санкт-Петербург глазами иностранцев"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-xl font-medium leading-tight text-fg md:text-2xl",
						children: "Мишленовские путешествия"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: openAbout,
					className: "pointer-events-auto px-2 py-3 font-sans text-xxs font-medium tracking-display text-muted uppercase transition-colors duration-150 hover:text-fg",
					children: "Как читать"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityMap, {
					selectedId,
					onSelect: openPlace,
					panelOpen
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 left-0 z-20 hidden items-center pl-3 md:flex lg:pl-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceIndex, {
					selectedId,
					onSelect: openPlace
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute bottom-6 left-4 z-20 max-w-48 font-sans text-xxs leading-snug tracking-label text-muted uppercase md:left-6",
				children: "Пять мест · 1839–1859"
			}),
			panelOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute inset-0 z-30 hidden bg-fg/10 md:block",
				"aria-label": "Закрыть карточку",
				onClick: closePanels
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 z-40 md:inset-x-auto md:top-0 md:right-0",
				children: [selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlacePanel, {
					place: selected,
					onClose: () => setSelectedId(null)
				}) : null, aboutOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutPanel, { onClose: () => setAboutOpen(false) }) : null]
			})] }) : null
		]
	});
}
//#endregion
export { places as n, routes_exports as t };
