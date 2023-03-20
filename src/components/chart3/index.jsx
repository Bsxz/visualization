import React, {useRef, useEffect} from "react";
import {px, echarts} from "../../shared/base-echarts-options";

export const Chart3 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            legend: {
                data: ['盗窃', '抢劫', '诈骗', '打架斗殴', ''],
                left: px(1),
                bottom: px(10),
                width: px(500),
                padding: px(0),
                itemHeight: px(10),
                itemWidth:px(20),
                itemGap: px(0),
                textStyle: {
                    color: '#4a6283',
                    fontSize: px(15)
                }
            },
            xAxis: {
                type: 'category',
                data: ['', '2011', '', '2013', '', '2015', '', '2017'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0
                },
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                interval: 5,
                min:10,
                max:40,
                splitLine: {
                    show: true
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            grid: {
                left: px(66),
                top: px(30),
                right: px(10),
                bottom: px(80)
            },
            series: [
                {
                    name: '盗窃',
                    data: [11, 13, 14, 12, 15, 14, 16, 12],
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        color: '#f29e18'
                    }
                },
                {
                    name: '抢劫',
                    data: [10, 16, 15, 13, 18, 21, 15, 17],
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        color: '#8d70f8'
                    }
                },
                {
                    name: '诈骗',
                    data: [14, 15, 18, 25, 21, 18, 19, 14],
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        color: '#1adc7c'
                    }
                },
                {
                    name: '打架斗殴',
                    data: [15, 16, 14, 13, 20, 19, 18, 14],
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        color: '#14a4ff'
                    }
                }
            ]
        })
    }, [])
    return (
        <div className="bordered top">
            <h4>发案趋势分析</h4>
            <div className="chart" ref={divRef}></div>
        </div>
    )
}