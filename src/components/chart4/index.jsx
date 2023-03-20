import React, {useRef, useEffect} from "react";
import {px, echarts} from "../../shared/base-echarts-options";

export const Chart4 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
                axisLabel: {
                    interval: 0,
                    min: -2,
                    max: 24,
                    textStyle: {
                        fontSize: px(12),
                    },
                },
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                interval: 5,
                min: 10,
                max: 40,
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            grid: {
                left: px(66),
                right: px(20),
                top: px(60),
                bottom: px(80)
            },
            series: [
                {
                    data: [16, 15, 13, 12, 14, 15, 16, 17, 20, 25, 27],
                    type: 'line',
                    symbol: 'circle',
                    areaStyle: {
                        color: 'rgba(58, 68, 147,.8)'
                    },
                    itemStyle: {
                        color: '#626ede'
                    }
                },
                {
                    data: [16, 15, 13, 12, 14, 15, 16, 17, 20, 25, 27, 24, 23],
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        color: '#626ede'
                    }
                }
            ]
        })
    }, [])
    return (
        <div className="bordered bottom">
            <h4>案发时段分析</h4>
            <div className="chart" ref={divRef}></div>
        </div>
    )
}