var myChart_r1;
var is_init_r1 = 0;

function radar_1(dayX){

    var mean = ['data/mean_d1.csv', 'data/mean_d2.csv', 'data/mean_d3.csv'];
    d3.csv(mean[dayX], function (error, data) {
        console.log('hi');
        



        if(is_init_r1 == 0){
            myChart_r1 = echarts.init(document.getElementById('radar_1'));
            is_init_r1 = 1;
        }
                

        var option;
        option = {
            legend: {
                orient: 'vertical',
                right: 10,
                data: ['特殊嘉宾','普通观众','工作人员', '记者','参赛人员']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '入馆时间', max: 67000},
                    { name: '出馆时间', max: 67000},
                    { name: '馆内停留时间', max: 67000},
                ]
            },
            tooltip: {
                trigger: 'item',

            },
            series: [{
                name: '',
                type: 'radar',
                center:['20%', '70%'],
                data: [
                    {
                        value: [data[0].start, data[0].end, data[0].staytime],
                        name: '特殊嘉宾'
                    },
                    {
                        value: [data[1].start, data[1].end, data[1].staytime],
                        name: '普通观众'
                    },
                    {
                        value: [data[2].start, data[2].end, data[2].staytime],
                        name: '工作人员'
                    },
                    {
                        value: [data[3].start, data[3].end, data[3].staytime],
                        name: '记者'
                    },
                    {
                        value: [data[4].start, data[4].end, data[4].staytime],
                        name: '参赛人员'
                    }
                ]
            }]
        };

    
        option && myChart_r1.setOption(option);


        


    });

}