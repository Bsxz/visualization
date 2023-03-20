import React, {useRef, useEffect} from 'react'
import {px, echarts} from "../../../shared/base-echarts-options";

export const Chartpie = () => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            legend: {
                top: 'bottom',
                itemHeight: px(10),
                itemWidth: px(20),
                itemGap: px(20),
                textStyle: {
                    color: '#627493',
                    fontSize: px(15)
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [`${px(50)}%`, `${px(100)}%`],
                    startAngle: -20,
                    center: ['50%', '50%'],
                    roseType: 'area',
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'outside', textStyle: {fontSize: px(15)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value + '%';
                        }
                    },
                    labelLine: {show: true, length: 0},
                    data: [
                        {
                            value: 40, name: '刑事案件', itemStyle: {color: '#8d70f8'},
                            label: {
                                textStyle: {
                                    color: '#8d70f8'
                                }
                            }
                        },
                        {
                            value: 38, name: '民事案件', itemStyle: {color: '#f46064'},
                            label: {
                                textStyle: {
                                    color: '#f46064'
                                }
                            }
                        },
                        {
                            value: 32, name: '经济案件', itemStyle: {color: '#f38e1c'},
                            label: {
                                textStyle: {
                                    color: '#f38e1c'
                                }
                            }
                        },
                        {
                            value: 30, itemStyle: {color: '#17dd7d'},
                            label: {
                                textStyle: {
                                    color: '#17dd7d'
                                }
                            }
                        },
                        {
                            value: 28, itemStyle: {color: '#e8e800'},
                            label: {
                                textStyle: {
                                    color: '#e8e800'
                                }
                            }
                        },
                    ]
                }
            ]
        })
    }, [])
    return (
        <div ref={divRef} className='chart'></div>
    )
}