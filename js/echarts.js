
/*---Add code in ECharts -----*/
var dom = document.getElementById("temp_chart");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
	title: {
		text: '温度センサーデータ' ,
		textStyle: {
			fontSize: 12,
			color: '#F36E65',
		},
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: [
			'ts-01',
			'ts-02',
			'ts-03',
			'ts-04',
			'ts-05'
		],
		orient : 'vertical',
        x : 'right'
	},
	grid: {
		left: '10%',
		right: '15%',
		bottom: '3%',
		containLabel: true
	},
	toolbox: {
		feature: {
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true,
				title: 'リセット'
			},
			saveAsImage: {
				title: '保存',
			},
		},
		x:'center',
	},
	xAxis: {
		name: 'time',
		type: 'category',
		boundaryGap: false,
		data: [
			'0:00', '1:00', '2:00', '3:00', '4:00', '5:00',
			'6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
			'12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
			'18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
		]
	},
	yAxis: {
		name: 'temperature(℃)',
		type: 'value',
		min: 15
	},
	series: [{
			name: 'ts-01',
			type: 'line',
			smooth: true,
			data: [20, 20, 20, 20, 21, 20, 20, 20, 21, 23, 27, 28, 30, 31, 33, 32, 29, 27, 22, 21, 20, 20, 20, 20]
		},
		{
			name: 'ts-02',
			type: 'line',
			smooth: true,
			data: [20, 20, 21, 20, 20, 20, 20, 21, 22, 23, 29, 29, 31, 32, 34, 36, 30, 28, 22, 21, 20, 20, 20, 20]
		},
		{
			name: 'ts-03',
			type: 'line',
			smooth: true,
			data: [21, 20, 20, 20, 20, 21, 20, 20, 22, 24, 29, 30, 32, 33, 42, 35, 31, 28, 23, 21, 20, 20, 20, 21]
		},
		{
			name: 'ts-04',
			type: 'line',
			smooth: true,
			data: [20, 20, 20, 21, 20, 20, 20, 21, 23, 24, 30, 32, 34, 35, 45, 36, 33, 31, 24, 22, 21, 20, 20, 20]
		},
		{
			name: 'ts-05',
			type: 'line',
			smooth: true,
			data: [21, 20, 20, 20, 20, 20, 21, 22, 24, 24, 31, 33, 35, 38, 47, 42, 37, 34, 26, 23, 21, 20, 21, 20]
		}
	]
};;
if (option && typeof option === "object") {
	myChart.setOption(option, true);
};
//echarts size automatically resize
$(window).on('resize', function(){
     myChart.resize();
});
