import React, {useRef, useEffect} from 'react'
import {px, echarts} from "../../../shared/base-echarts-options";

export const Chartbar2 = (props) => {
    const divRef = useRef(null)
    let Echarts
    const updata = (data) => {
        const name = data.map(v => {
            return v.name
        })
        Echarts.setOption({
            xAxis: {
                data: ['', ...name],
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
                    name: '销量',
                    type: 'bar',
                    data: [0, 40, 25, 36, 22, 15, 35, 40, 15, 28],
                    itemStyle: {
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
    }
    useEffect(() => {
        Echarts = echarts.init(divRef.current)
        updata(props.street)
    }, [])
    return (
        <div ref={divRef} className='chart'></div>
    )
}