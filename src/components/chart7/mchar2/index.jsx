import React, {useRef, useEffect} from "react";
import {px, echarts} from "../../../shared/base-echarts-options";


export const Mchar2 = () => {
    const divRef = useRef(null)
    let tenValue = 11
    let twentyValue = 36
    let thirtyValue = 24
    let fortyValue = 18
    let fiftyValue = 11
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            legend: {
                bottom: `${px(2)}%`,
                itemHeight: px(10),
                itemWidth: px(15),
                itemGap: px(10),
                textStyle: {
                    color: '#a3cee7'
                }
            },
            series: [
                {
                    name: '性别',
                    type: 'pie',
                    radius: [`${40}%`, `${70}%`],
                    bottom: `${px(50)}%`,
                    startAngle: px(-11),
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
                        formatter(options) {
                            return options.value + '%';
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: tenValue, name: '10-',
                            itemStyle: {
                                color: '#f38e1c'
                            }
                        },
                        {
                            value: twentyValue, name: '20-',
                            itemStyle: {
                                color: '#1cdb7c'
                            }
                        },
                        {
                            value: thirtyValue, name: '30-',
                            itemStyle: {
                                color: '#33a4fa'
                            }
                        },
                        {
                            value: fortyValue, name: '40-',
                            itemStyle: {
                                color: '#856bed'
                            }
                        },
                        {
                            value: fiftyValue, name: '50-',
                            itemStyle: {
                                color: '#f46064'
                            }
                        }
                    ],
                },
                {
                    type: 'pie',
                    bottom: `${px(50)}%`,
                    radius: [`${40}%`],
                    emptyCircleStyle: {
                        color: '#000526'
                    }
                },
                {
                    type: 'pie',
                    radius: [`${77}%`],
                    bottom: `${px(50)}%`,
                    emptyCircleStyle: {
                        color: 'transparent',
                        borderWidth: px(3),
                        borderColor: '#2c77c3'
                    }
                }
            ]
        })
    }, [])
    return (
        <div>
            <div ref={divRef}></div>
            <span>年龄段</span>
        </div>
    )
}