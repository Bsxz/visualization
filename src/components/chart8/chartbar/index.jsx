import React, {useRef, useEffect} from 'react'
import {px, echarts} from "../../../shared/base-echarts-options";

export const Chartbar = () => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            xAxis: {
                data: ['', '入室抢劫', '当街偷窃', '团伙诈骗', '刑事案件', '民事案件'],
                axisLabel: {
                    color: '#627493',
                    interval: 0,
                    fontSize: px(13),
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
                interval: 5,
                min: 10,
                max: 40,
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
                top: px(30),
                right: px(40),
                bottom: px(50)
            },
            series: [
                {
                    name: '案件详情',
                    type: 'bar',
                    data: [0, 40, 25, 23, 16, 34],
                    itemStyle:{
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#1e34fa'
                            }, {
                                offset: 1, color: '#0a97fb'
                            }]
                        }
                    }
                }
            ]
        })
    }, [])
    return (
        <div ref={divRef} className='chart'></div>
    )
}