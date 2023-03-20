import React, {useRef, useEffect} from "react";
import {px, echarts} from "../../shared/base-echarts-options";

export const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
            echarts.init(divRef.current).setOption({
                textStyle: {
                    fontSize: px(16),
                    color: '#4589dd'
                },
                grid: {
                    left: px(2),
                    top: px(10),
                    right: px(2),
                    bottom: px(2),
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    splitLine: {show: false},
                    axisLabel: {show: false}
                },
                yAxis: {
                    type: 'category',
                    data: ['湾仔区', '红谷区', '小蓝新区', '安宁区', '铜锣湾区', '九龙区', '城关区', '下沙区', '上城区'],
                    axisTick: {show: false},
                },
                series: [
                    {
                        name: '破案排名',
                        type: 'bar',
                        data: [3, 6, 8, 4, 5, 1, 2, 9, 7],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#43cbff'
                                }, {
                                    offset: 1, color: '#9708cc'
                                }]
                            }
                        }
                    },
                    {
                        type: 'bar',
                        data: [2, 8, 4, 9, 7, 6, 1, 3, 5],
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#eead92'
                                }, {
                                    offset: 1, color: '#6018dc'
                                }]
                            }
                        }
                    }
                ]
            })
        },
        []
    )
    return (<div className="bordered bottom">
        <h4>破案排名</h4>
        <div ref={divRef} className="chart"></div>
        <div className="legend">
            <span className="first"/><span className="p">破案排名</span>
            <span className="second"/><span className="p">破案排名</span>
        </div>
    </div>)
}