import React, {useRef, useEffect} from 'react'
import {px,echarts} from "../../shared/base-echarts-options";

export const Under = () => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            xAxis: {
                data: ['湾仔区', '红谷区', '小蓝新区', '安宁区', '铜锣湾区', '九龙区', '城关区', '下沙区', '上城区'],
                axisLabel: {
                    color: '#627493',
                    fontSize: px(10),
                    formatter: (value) => {
                        if (value.length > 2) {
                            const arr = value.split('')
                            arr.splice(2, 0, '\n')
                            return arr.join('')
                        }
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#083b71'
                    }
                }
            },
            grid: {
                left: px(40),
                top: px(40),
                right: px(40),
                bottom: px(40)
            },
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [33, 25, 15, 31, 40, 5, 8, 28, 19]
                }
            ]
        })
    }, [])
    return (
        <div className="bordered top">
            <h4>管辖统计</h4>
            <div ref={divRef} className='chart'></div>
        </div>
    )
}

