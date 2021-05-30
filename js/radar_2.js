var myChart_r2;
var is_init_r2 = 0;

function radar_2(dayX){

    var areaMean = ['data/areaMean_d1.csv', 'data/areaMean_d2.csv', 'data/areaMean_d3.csv'];
    d3.csv(areaMean[dayX], function (error, data) {
        console.log('hi');
        



        if(is_init_r2 == 0){
            myChart_r2 = echarts.init(document.getElementById('radar_2'));
            is_init_r2 = 1;
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
                    { name: '签到处', max: 10000},
                    { name: '主会场', max: 10000},
                    { name: '分会场A', max: 10000},
                    { name: '分会场B', max: 10000},
                    { name: '分会场C', max: 10000},
                    { name: '分会场D', max: 10000},
                    { name: '海报区', max: 10000},
                    { name: '展厅', max: 10000},
                    { name: '服务台', max: 10000},
                    { name: '餐厅', max: 10000},
                    { name: '休闲区', max: 10000},
                    { name: 'room1', max: 10000},
                    { name: 'room2', max: 10000},
                    { name: 'room3', max: 10000},
                    { name: 'room4', max: 10000},
                    { name: 'room5', max: 25000},
                    { name: 'room6', max: 10000}
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
                        value: [data[0].签到处,data[0].主会场,data[0].分会场A,data[0].分会场B,data[0].分会场C,data[0].分会场D,data[0].海报区,data[0].展厅,data[0].服务台,data[0].餐厅,data[0].休闲区,data[0].room1,data[0].room2,data[0].room3,data[0].room4,data[0].room5,data[0].room6],
                        name: '特殊嘉宾'
                    },
                    {
                        value: [data[1].签到处,data[1].主会场,data[1].分会场A,data[1].分会场B,data[1].分会场C,data[1].分会场D,data[1].海报区,data[1].展厅,data[1].服务台,data[1].餐厅,data[1].休闲区,data[1].room1,data[1].room2,data[1].room3,data[1].room4,data[1].room5,data[1].room6],
                        name: '普通观众'
                    },
                    {
                        value: [data[2].签到处,data[2].主会场,data[2].分会场A,data[2].分会场B,data[2].分会场C,data[2].分会场D,data[2].海报区,data[2].展厅,data[2].服务台,data[2].餐厅,data[2].休闲区,data[2].room1,data[2].room2,data[2].room3,data[2].room4,data[2].room5,data[2].room6],
                        name: '工作人员'
                    },
                    {
                        value: [data[3].签到处,data[3].主会场,data[3].分会场A,data[3].分会场B,data[3].分会场C,data[3].分会场D,data[3].海报区,data[3].展厅,data[3].服务台,data[3].餐厅,data[3].休闲区,data[3].room1,data[3].room2,data[3].room3,data[3].room4,data[3].room5,data[3].room6],
                        name: '记者'
                    },
                    {
                        value: [data[4].签到处,data[4].主会场,data[4].分会场A,data[4].分会场B,data[4].分会场C,data[4].分会场D,data[4].海报区,data[4].展厅,data[4].服务台,data[4].餐厅,data[4].休闲区,data[4].room1,data[4].room2,data[4].room3,data[4].room4,data[4].room5,data[4].room6],
                        name: '参赛人员'
                    }
                ]
            }]
        };

    
        option && myChart_r2.setOption(option);


        


    });

}