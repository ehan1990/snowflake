app.controller('LineController', function($scope, $stateParams, $interval, DeviceService) {    

    $scope.section_title = "Line Chart: ";
    $scope.current_page = 1;

    // var interval_promise = $interval(updateSystemStats, 20000);

    function getCpuStatus() {
        DeviceService.getCpuGraph(10).then(function successCallback(response) {
            $scope.cpu_graph_stats = response.data;
            $scope.cpu_graph_stats.y = response.data.map(function(a) {return a.y});
            $scope.cpu_graph_stats.x = response.data.map(function(a) {
                var local_time = moment().utc(a.x).format('MM DD YYYY h:mm:ss');
                return local_time;
            });
            Highcharts.chart('container', {
                title: {
                    text: 'System Stats'
                },

                xAxis: {
                    categories: $scope.timestamps
                },

                yAxis: {
                    title: {
                        text: 'Percentage'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },

                series: [{
                    name: 'CPU',
                    data: $scope.cpu_graph_stats.y
                }]
            });
            
        });
    }

    getCpuStatus();

});



app.controller('SplineChartController', function($scope, $stateParams, $interval, DeviceService) {    

    $scope.section_title = "Spline Chart: ";
    $scope.current_page = 1;

    // var interval_promise = $interval(updateSystemStats, 20000);

    function getCpuStatus() {
        DeviceService.getCpuGraph().then(function successCallback(response) {
            $scope.cpu_graph_stats = response.data;
            $scope.timestamps = response.data.map(function(a) {return a.x});
            Highcharts.chart('container', {
                chart: {
                    type: 'spline',
                    animation: Highcharts.svg, // don't animate in old IE
                    marginRight: 10,
                    events: {
                        load: function () {

                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function () {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.random();
                                series.addPoint([x, y], true, true);
                            }, 1000);
                        }
                    }
                },
                title: {
                    text: 'Live random data'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Random data',
                    data: (function () {
                        // generate an array of random data
                        var data = [],
                            time = (new Date()).getTime(),
                            i;

                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: Math.random()
                            });
                        }
                        return data;
                    }())
                }]
            });
            
        });
    }

    getCpuStatus();

    // $scope.$on("$destroy", function() {
    //     $interval.cancel(interval_promise);
    //     console.log("cancelled interval");
    // });

});




