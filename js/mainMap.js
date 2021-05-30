var all_areaRects = new Object();
var timeOut;
var startTime;
function mainMap(curday){

    var sensors_map = new Map();
    var all_rects1 = new Array();
    var all_rects2 = new Array();
   

    var x_left = 0.18;
    var x_step = 0.021;
    var y_top1 = 0.03;
    var y_top2 = 0.52;
    var y_step = 0.028;
    var width;
    var height;
    var svg;

    /********************* 绘制原始地图 ****************************/

    d3.csv("data/sensors.csv", function (error, data0) {
        if(curday==0){
            startTime = 25230;
        }  
        if(curday==1){
            startTime = 27030;
        }
        if(curday==2){
            startTime = 27060;
        }

        //读取mainMap的宽高信息，构建svg

        width = document.getElementById("mainMap").offsetWidth;
        height = document.getElementById("mainMap").offsetHeight;
        svg = d3.select("#mainMap")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        //按照会场布置地图，用多块区域构建出整个会场图（16*30）,并且所有区域的颜色均为灰色

        for (var i = 0; i < 16; i++) {
            all_rects1[i] = new Array();
            all_rects2[i] = new Array();
            for (var j = 0; j < 30; j++) {
                all_rects1[i][j] = svg.append("rect")
                    .attr('index_x', i)
                    .attr('index_y', j)
                    .attr('x', width * x_left + width * j * x_step)
                    .attr("y", height * y_top1 + height * i * y_step)
                    .attr("width", width * x_step)
                    .attr("height", height * y_step)
                    .attr("fill", d3.rgb(192, 192, 192))
                    .style("stroke", "grey")
                    .style("stroke-width", "0.1px");
                
                all_rects2[i][j] = svg.append("rect")
                    .attr('index_x', i)
                    .attr('index_y', j)
                    .attr('x', width * x_left + width * j * x_step)
                    .attr("y", height * y_top2 + height * i * y_step)
                    .attr("width", width * x_step)
                    .attr("height", height * y_step)
                    .attr("fill", d3.rgb(192, 192, 192))
                    .style("stroke", "grey")
                    .style("stroke-width", "0.1px");
                
            }
        }
        // 将有传感器的位置设为白色

        for (var i = 0; i < data0.length; i++) {
            var tmp_obj = new Object();
            tmp_obj['floor'] = Number(data0[i]['floor']);
            tmp_obj['x'] = Number(data0[i]['x']);
            tmp_obj['y'] = Number(data0[i]['y']);
            sensors_map.set(data0[i]['sid'], tmp_obj);
            if (tmp_obj['floor'] == 1)
                all_rects1[tmp_obj['x']][tmp_obj['y']].attr("fill", 'white');
            else
                all_rects2[tmp_obj['x']][tmp_obj['y']].attr("fill", 'white');
        }

        for (var j = 20; j < 29; j++){
            all_rects1[1][j].attr("fill", 'white');
            if (j >= 25){
                all_rects1[2][j].attr("fill", 'white');
            }
        }
        for (var k = 2; k < 12; k++){
            if(k > 2){
                all_rects1[k][28].attr("fill", 'white');
            }
            if (k <= 9){
                all_rects2[k][1].attr("fill", 'white');
            }
        }

        // draw areas

        all_areaRects["分会场A"] = svg.append("rect")
            .attr('x', width * x_left + width * 1 * x_step)
            .attr('y', height * y_top1 + height * 2 * y_step)
            .attr("width", width * x_step * 5)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","分会场A")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 1 * x_step + width * x_step * 5 / 2)
            .attr('y', height * y_top1 + height * 2 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("分会场A");

        all_areaRects["分会场B"] = svg.append("rect")
            .attr('x', width * x_left + width * 1 * x_step)
            .attr('y', height * y_top1 + height * 4 * y_step)
            .attr("width", width * x_step * 5)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","分会场B")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 1 * x_step + width * x_step * 5 / 2)
            .attr('y', height * y_top1 + height * 4 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("分会场B");

        all_areaRects["分会场C"] = svg.append("rect")
            .attr('x', width * x_left + width * 1 * x_step)
            .attr('y', height * y_top1 + height * 6 * y_step)
            .attr("width", width * x_step * 5)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","分会场C")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 1 * x_step + width * x_step * 5 / 2)
            .attr('y', height * y_top1 + height * 6 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("分会场C");

        all_areaRects["分会场D"] = svg.append("rect")
            .attr('x', width * x_left + width * 1 * x_step)
            .attr('y', height * y_top1 + height * 8 * y_step)
            .attr("width", width * x_step * 5)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","分会场D")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 1 * x_step + width * x_step * 5 / 2)
            .attr('y', height * y_top1 + height * 8 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("分会场D");

        all_areaRects["海报区"] = svg.append("rect")
            .attr('x', width * x_left + width * 7 * x_step)
            .attr('y', height * y_top1 + height * 3 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 7)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","海报区")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 7 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 3 * y_step + height * y_step * 7 / 2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .style("writing-mode", "vertical-lr")
            .text("海报区");

        all_areaRects["签到处"] = svg.append("rect")
            .attr('x', width * x_left + width * 2 * x_step)
            .attr('y', height * y_top1 + height * 12 * y_step)
            .attr("width", width * x_step * 4)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","签到处")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 2 * x_step + width * x_step * 4 / 2)
            .attr('y', height * y_top1 + height * 12 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("签到处");

        all_areaRects["扶梯1"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top1 + height * 1 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 1)
            .attr("fill", "yellow")
            .attr("fill-opacity", 0.1)
            .attr("id","扶梯1")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 1 * y_step + height * y_step * 1 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "500")
            .style("fill", "grey")
            .text("扶梯1");

        all_areaRects["厕所1"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top1 + height * 4 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","厕所1")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 4 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.7)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("厕所1");

        all_areaRects["room1"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top1 + height * 6 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 4)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","room1")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 6 * y_step + height * y_step * 4 / 2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "600")
            .style("fill", "grey")
            // .style("writing-mode", "vertical-lr")
            .text("room1");

        all_areaRects["room2"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top1 + height * 10 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","room2")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        // svg.append("text")
        //     .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
        //     .attr('y', height * y_top1 + height * 10 * y_step + height * y_step * 2 / 2.8)
        //     .attr("text-anchor", "middle")
        //     .style("font-size", width * x_step * 0.6)
        //     .style("font-weight", "600")
        //     .style("fill", "grey")
        //     .text("room2");
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 10 * y_step + height * y_step * 2 / 1.2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("room2");

        all_areaRects["扶梯2"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top1 + height * 14 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 1)
            .attr("fill", "yellow")
            .attr("fill-opacity", 0.1)
            .attr("id","扶梯2")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 14 * y_step + height * y_step * 1 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "500")
            .style("fill", "grey")
            .text("扶梯2");

        all_areaRects["展厅"] = svg.append("rect")
            .attr('x', width * x_left + width * 15 * x_step)
            .attr('y', height * y_top1 + height * 2 * y_step)
            .attr("width", width * x_step * 4)
            .attr("height", height * y_step * 10)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","展厅")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 15 * x_step + width * x_step * 4 / 2)
            .attr('y', height * y_top1 + height * 2 * y_step + height * y_step * 10 / 2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("展厅");

        all_areaRects["主会场"] = svg.append("rect")
            .attr('x', width * x_left + width * 19 * x_step)
            .attr('y', height * y_top1 + height * 2 * y_step)
            .attr("width", width * x_step * 10)
            .attr("height", height * y_step * 10)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","主会场")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 19 * x_step + width * x_step * 10 / 2)
            .attr('y', height * y_top1 + height * 2 * y_step + height * y_step * 10 / 2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("主会场");

        all_areaRects["服务台"] = svg.append("rect")
            .attr('x', width * x_left + width * 19 * x_step)
            .attr('y', height * y_top1 + height * 14 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","服务台")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 19 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 14 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.6)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("服务台");

        all_areaRects["room3"] = svg.append("rect")
            .attr('x', width * x_left + width * 21 * x_step)
            .attr('y', height * y_top1 + height * 14 * y_step)
            .attr("width", width * x_step * 4)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","room3")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 21 * x_step + width * x_step * 4 / 2)
            .attr('y', height * y_top1 + height * 14 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.6)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("room3");

        all_areaRects["room4"] = svg.append("rect")
            .attr('x', width * x_left + width * 25 * x_step)
            .attr('y', height * y_top1 + height * 14 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","room4")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 25 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 14 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("room4");

        all_areaRects["厕所2"] = svg.append("rect")
            .attr('x', width * x_left + width * 27 * x_step)
            .attr('y', height * y_top1 + height * 14 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","厕所2")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 27 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top1 + height * 14 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.6)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("厕所2");

        all_areaRects["餐厅"] = svg.append("rect")
            .attr('x', width * x_left + width * 1 * x_step)
            .attr('y', height * y_top2 + height * 2 * y_step)
            .attr("width", width * x_step * 5)
            .attr("height", height * y_step * 8)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","餐厅")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 1 * x_step + width * x_step * 5 / 2)
            .attr('y', height * y_top2 + height * 2 * y_step + height * y_step * 8 / 2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("餐厅");

        all_areaRects["room5"] = svg.append("rect")
            .attr('x', width * x_left + width * 1 * x_step)
            .attr('y', height * y_top2 + height * 10 * y_step)
            .attr("width", width * x_step * 5)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","room5")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 1 * x_step + width * x_step * 5 / 2)
            .attr('y', height * y_top2 + height * 10 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.7)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("room5");

        all_areaRects["休闲区"] = svg.append("rect")
            .attr('x', width * x_left + width * 0 * x_step)
            .attr('y', height * y_top2 + height * 13 * y_step)
            .attr("width", width * x_step * 6)
            .attr("height", height * y_step * 3)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","休闲区")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 0 * x_step + width * x_step * 6 / 2)
            .attr('y', height * y_top2 + height * 13 * y_step + height * y_step * 3 / 2)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.8)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("休闲区");

        all_areaRects["扶梯3"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top2 + height * 1 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 1)
            .attr("fill", "yellow")
            .attr("fill-opacity", 0.1)
            .attr("id","扶梯3")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top2 + height * 1 * y_step + height * y_step * 1 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "500")
            .style("fill", "grey")
            .text("扶梯3");

        all_areaRects["厕所3"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top2 + height * 4 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","厕所3")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top2 + height * 4 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.7)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("厕所3");

        all_areaRects["room6"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top2 + height * 6 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 2)
            .attr("fill", "blue")
            .attr("fill-opacity", 0.1)
            .attr("id","room6")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top2 + height * 6 * y_step + height * y_step * 2 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "600")
            .style("fill", "grey")
            .text("room6");

        all_areaRects["扶梯4"] = svg.append("rect")
            .attr('x', width * x_left + width * 10 * x_step)
            .attr('y', height * y_top2 + height * 14 * y_step)
            .attr("width", width * x_step * 2)
            .attr("height", height * y_step * 1)
            .attr("fill", "yellow")
            .attr("fill-opacity", 0.1)
            .attr("id","扶梯4")
            .style("stroke-width", "2px")
            .style("stroke", "black")
            .style("stroke-opacity", 0.7);
        svg.append("text")
            .attr('x', width * x_left + width * 10 * x_step + width * x_step * 2 / 2)
            .attr('y', height * y_top2 + height * 14 * y_step + height * y_step * 1 / 1.5)
            .attr("text-anchor", "middle")
            .style("font-size", width * x_step * 0.5)
            .style("font-weight", "500")
            .style("fill", "grey")
            .text("扶梯4");

        
        // //draw entrance and exit



        
    });

    /************************* 动态绘制人员分布*****************************************/
    var dayX_mainMaps = ['data/day1_mainMap.csv', 'data/day2_mainMap.csv', 'data/day3_mainMap.csv'];
    var Times = d3.map(dayX_mainMaps[curday], function (d) { return (d.time) }).keys()
    d3.csv(dayX_mainMaps[curday], function (error, data1) {

        //设置select

        var Times = d3.map(data1, function (d) { return (d.time) }).keys()
        d3.select("#time")
            .selectAll('myOptions')
            .data(Times)
            .enter()
            .append('option')
            .text(function (d) { return d; })
            .attr("value", function (d) { return d; });

            startData = data1.filter(function (d) { return d.second == startTime });
            console.log(startData);
        for (var i = 0; i < startData.length; i++) {
            var y_top = startData[i].floor == "1" ? y_top1 : y_top2;
            //将count个circle随机散布到rect中
            for (var j = 0; j < startData[i].count_c1; j++) {
                cx = width * x_left + width * startData[i].y * x_step + Math.random() * width * x_step;
                cy = height * y_top + height * startData[i].x * y_step + + Math.random() * height * y_step;
                svg.append('circle')
                    .attr('r', 1.5)
                    .attr('cx', cx)
                    .attr('cy', cy)
                    .attr('fill', "blue")
            }
            for (var j = 0; j < startData[i].count_c2; j++) {
                cx = width * x_left + width * startData[i].y * x_step + Math.random() * width * x_step;
                cy = height * y_top + height * startData[i].x * y_step + + Math.random() * height * y_step;
                svg.append('circle')
                    .attr('r', 1.5)
                    .attr('cx', cx)
                    .attr('cy', cy)
                    .attr('fill', "red")
            }
            for (var j = 0; j < startData[i].count_c3; j++) {
                cx = width * x_left + width * startData[i].y * x_step + Math.random() * width * x_step;
                cy = height * y_top + height * startData[i].x * y_step + + Math.random() * height * y_step;
                svg.append('circle')
                    .attr('r', 1.5)
                    .attr('cx', cx)
                    .attr('cy', cy)
                    .attr('fill', "yellow")
            }
            for (var j = 0; j < startData[i].count_c4; j++) {
                cx = width * x_left + width * startData[i].y * x_step + Math.random() * width * x_step;
                cy = height * y_top + height * startData[i].x * y_step + + Math.random() * height * y_step;
                svg.append('circle')
                    .attr('r', 1.5)
                    .attr('cx', cx)
                    .attr('cy', cy)
                    .attr('fill', "lime")
            }
            for (var j = 0; j < startData[i].count_c5; j++) {
                cx = width * x_left + width * startData[i].y * x_step + Math.random() * width * x_step;
                cy = height * y_top + height * startData[i].x * y_step + + Math.random() * height * y_step;
                svg.append('circle')
                    .attr('r', 1.5)
                    .attr('cx', cx)
                    .attr('cy', cy)
                    .attr('fill', "black")
            }
        }

        //手动更新人员分布
        function timeUpdate(curtime) {
            // console.log("hi");

            curData = data1.filter(function (d) { return d.time == curtime });
            // console.log(curData);

            svg.selectAll("circle").remove();//移除当前所有的circle
            if (curData.length>0){
                for (var i = 0; i < curData.length; i++) {
                    var y_top = curData[i].floor == "1" ? y_top1 : y_top2;
                    //将count个circle随机散布到rect中
                    for (var j = 0; j < curData[i].count_c1; j++) {
                        cx = width * x_left + width * curData[i].y * x_step + Math.random() * width * x_step;
                        cy = height * y_top + height * curData[i].x * y_step + + Math.random() * height * y_step;
                        svg.append('circle')
                            .attr('r', 1.5)
                            .attr('cx', cx)
                            .attr('cy', cy)
                            .attr('fill', "blue")
                    }
                    for (var j = 0; j < curData[i].count_c2; j++) {
                        cx = width * x_left + width * curData[i].y * x_step + Math.random() * width * x_step;
                        cy = height * y_top + height * curData[i].x * y_step + + Math.random() * height * y_step;
                        svg.append('circle')
                            .attr('r', 1.5)
                            .attr('cx', cx)
                            .attr('cy', cy)
                            .attr('fill', "red")
                    }
                    for (var j = 0; j < curData[i].count_c3; j++) {
                        cx = width * x_left + width * curData[i].y * x_step + Math.random() * width * x_step;
                        cy = height * y_top + height * curData[i].x * y_step + + Math.random() * height * y_step;
                        svg.append('circle')
                            .attr('r', 1.5)
                            .attr('cx', cx)
                            .attr('cy', cy)
                            .attr('fill', "yellow")
                    }
                    for (var j = 0; j < curData[i].count_c4; j++) {
                        cx = width * x_left + width * curData[i].y * x_step + Math.random() * width * x_step;
                        cy = height * y_top + height * curData[i].x * y_step + + Math.random() * height * y_step;
                        svg.append('circle')
                            .attr('r', 1.5)
                            .attr('cx', cx)
                            .attr('cy', cy)
                            .attr('fill', "lime")
                    }
                    for (var j = 0; j < curData[i].count_c5; j++) {
                        cx = width * x_left + width * curData[i].y * x_step + Math.random() * width * x_step;
                        cy = height * y_top + height * curData[i].x * y_step + + Math.random() * height * y_step;
                        svg.append('circle')
                            .attr('r', 1.5)
                            .attr('cx', cx)
                            .attr('cy', cy)
                            .attr('fill', "black")
                    }
                }
            }

            document.getElementById('time').value = curData[0].time;

        }

        

        

        d3.select("#time").on("change", function () {
            var curtime = d3.select("#time").property("value");
            timeUpdate(curtime);
        });


        d3.select("#start").on("click", Play);
        
        function Play() {
            var curtime = d3.select("#time").property("value");
            var i;
            for ( i =0;i<Times.length;i++){
                if(Times[i]==curtime){
                    break;
                }
            }
            curtime = Times[i+1]; 
            timeUpdate(curtime);
            heatmap3D_Update_f1();
            heatmap3D_Update_f2();
            timeOut = setTimeout(Play,200);

        }
        d3.select("#stop").on("click", Stop);
        
        function Stop() {
            clearTimeout(timeOut);
        }
    })





}



