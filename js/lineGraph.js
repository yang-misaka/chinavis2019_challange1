
function lineGraph(dayX) {

    var margin = { top: 50, right: 50, bottom: 50, left: 50 },
        width = document.getElementById("lineGraph").offsetWidth - margin.left - margin.right,
        height = document.getElementById("lineGraph").offsetHeight - margin.top - margin.bottom;

    var svg_lineGraph = d3.select("#lineGraph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)

    var dayX_mainMaps = ['data/day1_mainMap.csv', 'data/day2_mainMap.csv', 'data/day3_mainMap.csv'];
        

    d3.csv(dayX_mainMaps[dayX], function (data) {
        day = document.getElementById("day_selection").value;
        if(day==0){
            svg_lineGraph.append("svg:image")
            .attr("xlink:href", "pic/line/1-11.png")
            .style.width="100%"
        }
        if(day==1){
            svg_lineGraph.append("svg:image")
            .attr("xlink:href", "pic/line/2-11.png")
            .style.width="100%"
        }
        if(day==2){
            svg_lineGraph.append("svg:image")
            .attr("xlink:href", "pic/line/3-11.png")
            .style.width="100%"
        }

        function lineGraphUpdate(areaName,dayX){
            day = document.getElementById("day_selection").value;
            svg_lineGraph.html(null);
            if(day==0){
                if(areaName=='签到处'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-1.png")
                    .style.width="100%"
                }
                if(areaName=='分会场A'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-2.png")
                    .style.width="100%"
                }
                if(areaName=='分会场B'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-3.png")
                    .style.width="100%"
                }
                if(areaName=='分会场C'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-4.png")
                    .style.width="100%"
                }
                if(areaName=='分会场D'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-5.png")
                    .style.width="100%"
                }
                if(areaName=='海报区'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-6.png")
                    .style.width="100%"
                }
                if(areaName=='厕所1'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-7.png")
                    .style.width="100%"
                }
                if(areaName=='room1'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-8.png")
                    .style.width="100%"
                }
                if(areaName=='room2'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-9.png")
                    .style.width="100%"
                }
                if(areaName=='展厅'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-10.png")
                    .style.width="100%"
                }
                if(areaName=='主会场'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-11.png")
                    .style.width="100%"
                }
                if(areaName=='服务台'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-12.png")
                    .style.width="100%"
                }
                if(areaName=='room3'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-13.png")
                    .style.width="100%"
                }
                if(areaName=='room4'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-14.png")
                    .style.width="100%"
                }
                if(areaName=='厕所2'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-15.png")
                    .style.width="100%"
                }
                if(areaName=='餐厅'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-16.png")
                    .style.width="100%"
                }
                if(areaName=='room5'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-17.png")
                    .style.width="100%"
                }
                if(areaName=='休闲区'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-18.png")
                    .style.width="100%"
                }
                if(areaName=='厕所3'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-19.png")
                    .style.width="100%"
                }
                if(areaName=='room6'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/1-20.png")
                    .style.width="100%"
                }
            }
            if(day==1){
                if(areaName=='签到处'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-1.png")
                    .style.width="100%"
                }
                if(areaName=='分会场A'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-2.png")
                    .style.width="100%"
                }
                if(areaName=='分会场B'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-3.png")
                    .style.width="100%"
                }
                if(areaName=='分会场C'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-4.png")
                    .style.width="100%"
                }
                if(areaName=='分会场D'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-5.png")
                    .style.width="100%"
                }
                if(areaName=='海报区'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-6.png")
                    .style.width="100%"
                }
                if(areaName=='厕所1'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-7.png")
                    .style.width="100%"
                }
                if(areaName=='room1'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-8.png")
                    .style.width="100%"
                }
                if(areaName=='room2'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-9.png")
                    .style.width="100%"
                }
                if(areaName=='展厅'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-10.png")
                    .style.width="100%"
                }
                if(areaName=='主会场'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-11.png")
                    .style.width="100%"
                }
                if(areaName=='服务台'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-12.png")
                    .style.width="100%"
                }
                if(areaName=='room3'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-13.png")
                    .style.width="100%"
                }
                if(areaName=='room4'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-14.png")
                    .style.width="100%"
                }
                if(areaName=='厕所2'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-15.png")
                    .style.width="100%"
                }
                if(areaName=='餐厅'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-16.png")
                    .style.width="100%"
                }
                if(areaName=='room5'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-17.png")
                    .style.width="100%"
                }
                if(areaName=='休闲区'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-18.png")
                    .style.width="100%"
                }
                if(areaName=='厕所3'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-19.png")
                    .style.width="100%"
                }
                if(areaName=='room6'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/2-20.png")
                    .style.width="100%"
                }
            }
            if(day==2){
                if(areaName=='签到处'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-1.png")
                    .style.width="100%"
                }
                if(areaName=='分会场A'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-2.png")
                    .style.width="100%"
                }
                if(areaName=='分会场B'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-3.png")
                    .style.width="100%"
                }
                if(areaName=='分会场C'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-4.png")
                    .style.width="100%"
                }
                if(areaName=='分会场D'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-5.png")
                    .style.width="100%"
                }
                if(areaName=='海报区'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-6.png")
                    .style.width="100%"
                }
                if(areaName=='厕所1'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-7.png")
                    .style.width="100%"
                }
                if(areaName=='room1'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-8.png")
                    .style.width="100%"
                }
                if(areaName=='room2'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-9.png")
                    .style.width="100%"
                }
                if(areaName=='展厅'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-10.png")
                    .style.width="100%"
                }
                if(areaName=='主会场'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-11.png")
                    .style.width="100%"
                }
                if(areaName=='服务台'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-12.png")
                    .style.width="100%"
                }
                if(areaName=='room3'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-13.png")
                    .style.width="100%"
                }
                if(areaName=='room4'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-14.png")
                    .style.width="100%"
                }
                if(areaName=='厕所2'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-15.png")
                    .style.width="100%"
                }
                if(areaName=='餐厅'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-16.png")
                    .style.width="100%"
                }
                if(areaName=='room5'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-17.png")
                    .style.width="100%"
                }
                if(areaName=='休闲区'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-18.png")
                    .style.width="100%"
                }
                if(areaName=='厕所3'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-19.png")
                    .style.width="100%"
                }
                if(areaName=='room6'){
                    svg_lineGraph.append("svg:image")
                    .attr("xlink:href", "pic/line/3-20.png")
                    .style.width="100%"
                }
            }
            
    }


        // 给主图绑定区域选择功能，对应绘制折线图

        function areaHovered(){
            d3.select(this)
                .attr("fill-opacity", 0.2)
                .attr("fill","green")
                .attr("rx", 5)
                .attr("ry", 5)
                .style("stroke-opacity", 1)
                .style("stroke-width", "2.5px");
        }

        function areaLeave(){
            d3.select(this)
                .attr("fill-opacity", 0.1)
                .attr("rx", 0)
                .attr("ry", 0)
                .style("stroke-opacity", 0.7)
                .style("stroke-width", "2px");
            if(String(d3.select(this).attr("id")).indexOf("扶梯") != -1)
                d3.select(this).attr("fill","yellow");
            else d3.select(this).attr("fill","blue");
        }

        function areaSelected(){
            //console.log(d3.select(this).attr("id"))
            var areaName = d3.select(this).attr("id");
            //更新折线图
            lineGraphUpdate(areaName);

        }

        for(var area in all_areaRects){
            //console.log(area,all_areaRects[area]);
            all_areaRects[area].on("click",areaSelected);
            all_areaRects[area].on("mouseover",areaHovered);
            all_areaRects[area].on("mouseleave",areaLeave);
        }
            
    });

}

