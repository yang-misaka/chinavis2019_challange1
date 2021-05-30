var myChart_f1;
var is_init_f1 = 0;
var heatmap3D_Update_f1;
var startTime_f1;

function heatmap3D_f1(dayX){

    var dayX_mainMaps = ['data/day1_mainMap.csv', 'data/day2_mainMap.csv', 'data/day3_mainMap.csv'];
    d3.csv(dayX_mainMaps[dayX], function (error, data) {
        



        if(is_init_f1 == 0){
            myChart_f1 = echarts.init(document.getElementById('heatmap3D_f1'));
            is_init_f1 = 1;
        }
        day = document.getElementById("day_selection").value;
        if(day==0){
            startTime_f1 = 25230;
        }  
        if(day==1){
            startTime_f1 = 27030;
        }
        if(day==1){
            startTime_f1 = 27060;
        }    

        startData = data.filter(function (d) { return d.second == startTime_f1 && d.floor == 1 });
        startData_use = new Array();
        for (var i = 0; i < startData.length; i++) {
            tmp = new Array();
            tmp.push(Number(startData[i].x));
            tmp.push(Number(startData[i].y));
            tmp.push(Number(startData[i].count));
            startData_use.push(tmp);
            //console.log(startData_use);
        }

        //range(start, end) 左闭右开

        let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);

        var x = range(0, 16);
        var y = range(0, 30);

        var option = {
            tooltip: {},
            visualMap: {
                max: 100,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'category',
                data: x
            },
            yAxis3D: {
                type: 'category',
                data: y
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
				boxHeight: 100,
                boxWidth: 100,
                boxDepth: 180,
                light: {
                    main: {
                        intensity: 1.2
                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                type: 'bar3D',
                data: startData_use.map(function (item) {
                    return {
                        value: [item[0], item[1], item[2]]
                    }
                }),
                shading: 'color',

                label: {
                    show: false,
                    textStyle: {
                        fontSize: 16,
                        borderWidth: 1
                    }
                },

                itemStyle: {
                    opacity: 0.6
                },

                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: 20,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                }
            }]
        }

        myChart_f1.setOption(option);

        
        

        //更新3D柱状图

        heatmap3D_Update_f1 = function () {

            curTime = document.getElementById('time').value;

            curData = data.filter(function (d) { return d.time == curTime && d.floor == 1 });

            curData_use = new Array();
            for (var i = 0; i < curData.length; i++) {
                tmp = new Array();
                tmp.push(Number(curData[i].x));
                tmp.push(Number(curData[i].y));
                tmp.push(Number(curData[i].count));
                curData_use.push(tmp);
            }

            option["series"][0]["data"] = curData_use.map(function (item) {
                return {
                    value: [item[0], item[1], item[2]]
                }
            });

            myChart_f1.setOption(option);

        }



    });

}