import React, {useRef, useEffect} from "react";
import {px, echarts} from "../../../shared/base-echarts-options";
import './index.scss'

export const Mchar3 = () => {
    const divRef = useRef()
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            title: [{
                text: '2017年7月9日：',
                bottom: `${px(0)}`,
                textStyle: {
                    color: '#a3cee7',
                    fontSize: px(14)
                }
            }],
            legend: {
                data: ['盗窃'],
                left: px(120),
                bottom: px(10),
                padding: px(0),
                itemHeight: px(10),
                itemWidth: px(20),
                itemGap: px(0),
                textStyle: {
                    color: '#a3cee7',
                    fontSize: px(15)
                }
            },
            xAxis: {
                type: 'category',
                data: ['', '18', '28', '38', '48', '58'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: px(16),
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
                splitLine: {
                    show: true
                },
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            grid: {
                left: px(55),
                top: px(5),
                right: px(10),
                bottom: px(80)
            },
            series: [
                {
                    name: '盗窃',
                    data: [25, 18, 14, 24, 16, 22, 16, 12],
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        color: '#f29e18'
                    }
                },
            ]
        })
    }, [])
    return (
        <div className="bordered minbordered">
            <h4>犯罪年龄趋势图</h4>
            <div ref={divRef}></div>
        </div>
    )
}