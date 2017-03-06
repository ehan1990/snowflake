app.directive('dpibarchart', ['DeviceService', function(DeviceService) {
	var directive = {}
	directive.templateUrl = "assets/device/barchart.html";

	directive.link = function ($scope, element, attrs) { 
		// content of directive

		DeviceService.getOfflineCountDaily().then(function(response) {
			$scope.x_axis = response.data.x_axis;
			$scope.series = response.data.series;
			// content of high charts
			Highcharts.chart('bars', {
		    	chart: {
			        type: 'column'
			    },
			    title: {
			        text: 'DPI Offline'
			    },
			    xAxis: {
			        categories: $scope.x_axis,
			        crosshair: true
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: 'Offline Count'
			        }
			    },
			    tooltip: {
			        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			            '<td style="padding:0"><b>{point.y:0f} </b></td></tr>',
			        footerFormat: '</table>',
			        shared: true,
			        useHTML: true
			    },
			    plotOptions: {
			    	series: {
			    		"animation": false
			    	},
			        column: {
			            pointPadding: 0.2,
			            borderWidth: 0
			        }
			    },
			    series: $scope.series
	    	});
			// content of high charts
		}); 



		// content of directive
	}
	return directive;
}]);
