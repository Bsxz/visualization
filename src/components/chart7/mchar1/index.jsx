import React, {useRef, useEffect} from "react";
import {px, echarts} from "../../../shared/base-echarts-options";

export const Mchar1 = () => {
    const divRef = useRef(null)
    let maleValue = 72
    let femaleValue = 28
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            legend: {
                bottom: `${px(8)}%`,
                left: 'center',
                itemHeight: px(15),
                itemWidth: px(30),
                itemGap: px(20),
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
                            value: maleValue, name: '男',
                            itemStyle: {
                                color: '#33a4fa'
                            },
                        },
                        {
                            value: femaleValue, name: '女',
                            itemStyle: {
                                color: '#8d70f8'
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
                    radius: [`${80}%`],
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
            <span>性别</span>
        </div>
    )
}