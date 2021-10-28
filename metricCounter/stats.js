const eachDayOfInterval = require('date-fns/eachDayOfInterval');
const format = require('date-fns/format');

function quantile(arr, q) {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
    } else {
        return Math.floor(sorted[base]);
    }
};

function prepareData(result) {
	return result.data.map(item => {
		item.date = item.timestamp.split('T')[0];

		return item;
	});
}

// TODO: реализовать
// показать значение метрики за несколько день
function showMetricByPeriod(data, page, name, startPeriod, endPeriod) {
	const interval = eachDayOfInterval({ start: new Date(startPeriod), end: new Date(endPeriod) })
		.map(date => format(date, 'yyyy-MM-dd'));

	let sampleData = data
		.filter(item => item.page === page && item.name === name && interval.includes(item.date))
		.map(item => item.value);

	let result = {};

	result.hits = sampleData.length;
	result.p25 = quantile(sampleData, 0.25);
	result.p50 = quantile(sampleData, 0.5);
	result.p75 = quantile(sampleData, 0.75);
	result.p95 = quantile(sampleData, 0.95);

	return result;
}

// показать сессию пользователя
function showSession() {
}

// сравнить метрику в разных срезах
function compareMetric() {
}

// любые другие сценарии, которые считаете полезными


// Пример
// добавить метрику за выбранный день
function addMetricByDate(data, page, name, date) {
	let sampleData = data
					.filter(item => item.page === page && item.name === name && item.date === date)
					.map(item => item.value);

	let result = {};

	result.hits = sampleData.length;
	result.p25 = quantile(sampleData, 0.25);
	result.p50 = quantile(sampleData, 0.5);
	result.p75 = quantile(sampleData, 0.75);
	result.p95 = quantile(sampleData, 0.95);

	return result;
}
// рассчитывает все метрики за день
function calcMetricsByDate(data, page, date) {
	console.log(`All metrics for ${date}:`);

	let table = {};
	table.connect = showMetricByPeriod(data, page, 'connect', date);
	table.ttfb = addMetricByDate(data, page, 'ttfb', date);
	table.load = addMetricByDate(data, page, 'load', date);
	table.square = addMetricByDate(data, page, 'square', date);
	table.load = addMetricByDate(data, page, 'load', date);
	table.generate = addMetricByDate(data, page, 'generate', date);
	table.draw = addMetricByDate(data, page, 'draw', date);

	console.table(table);
};

// рассчитываем метрику за период
function calcMetricsByPeriod(data, page, metricName, startPeriod, endPeriod) {
	console.log(`Metric data for period from: ${startPeriod} to: ${endPeriod}:`);

	let table = {};
	table.metricName = showMetricByPeriod(data, page, metricName, startPeriod, endPeriod);

	console.table(table);
};

fetch('https://shri.yandex/hw/stat/data?counterId=97e1b95b-c293-4219-bb8f-233e3e65e0be')
	.then(res => res.json())
	.then(result => {
		let data = prepareData(result);

		calcMetricsByDate(data, 'main', '2021-10-22');
		calcMetricsByPeriod(data, 'main', 'load', '2021-10-27', '2021-10-28');

		// добавить свои сценарии, реализовать функции выше
	});
