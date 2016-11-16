app.controller('BadmintonController', function($scope, BadmintonService) {    

	$scope.section_title = "Badminton"
	$scope.table_headers = ["ID", "Time", "Amount (¥)", "Balance (¥)", "Description", "User"];
	$scope.current_page = 1;

	BadmintonService.get_data(null, $scope.current_page).then(function(response) {
		$scope.table_data = response.data.content;	
		$scope.table_count = response.data.count;
		$scope.total_funds = response.data.total_funds;
	});

	BadmintonService.getPie().then(function(response) {
		$scope.series = response.data
		Highcharts.chart('pie', {
			chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false,
	            type: 'pie'
	        },
	        title: {
	            text: '<b>小云股票, 总价值: ' + $scope.total_funds + ', http://172.18.52.26</b>'
	        },
	        tooltip: {
	            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.2f} %',
	                    style: {
	                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
	                    },
	                    connectorColor: 'silver'
	                }
	            }
	        },
	        series: $scope.series
    	});
	})

	BadmintonService.get_bar().then(function(response) {
		$scope.bar_series = response.data.series;
		$scope.bar_users = response.data.users;
		Highcharts.chart('bar', {
			chart: {
            type: 'column'
        },
        title: {
            text: 'Stock Price'
        },
        xAxis: {
            categories: $scope.bar_users,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Price (¥)'
            },
            tickInterval: 20,
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>¥{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                dataLabels: {
                    enabled: true,
                    formatter:function() {
                        return this.point.t;
                    }
                }
            }
        },
        // series: [{
        //     	name: 'Price',
        //     	data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        // 	}]
        series: $scope.bar_series,
    	});
	})

	$scope.change_page = function() {
		if ($scope.current_page != null || $scope.current_page != "") {
			BadmintonService.get_data(null, $scope.current_page).then(function(response) {
				$scope.table_data = response.data.content;	
				$scope.table_count = response.data.count;
			});
		}
	}

	$scope.inc_page_num = function(num) {
		if ($scope.current_page + num  >= 1) {
			$scope.current_page += num;
			if ($scope.current_page != null || $scope.current_page != "") {
				BadmintonService.get_data(null, $scope.current_page).then(function(response) {
					$scope.table_data = response.data.content;	
					$scope.table_count = response.data.count;
				});
			}
		}
	}
});
