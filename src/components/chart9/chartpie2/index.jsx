import React, {useRef, useEffect} from 'react'
import {px, echarts} from "../../../shared/base-echarts-options";

export const Chartpie2 = (props) => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.init(divRef.current).setOption({
            tooltip: {
                trigger: 'item',
                padding: [20, 10, 20, 10],
            },
            legend: {
                orient: 'vertical',
                left: px(20),
                itemGap: px(2),
                itemWidth: px(12),
                itemHeight: px(5),
                textStyle: {
                    color: '#5585c2'
                },
                itemStyle: {
                    color: '#5585c2'
                }
            },
            series: [
                {
                    name: '案发统计',
                    type: 'pie',
                    radius: '50%',
                    left:px(30),
                    top:px(-20),
                    data: [
                        {value: props.street[1].value, name: props.street[1].name, label: {show: false}},
                        {value: props.street[2].value, name: props.street[2].name, label: {show: false}},
                        {value: props.street[3].value, name: props.street[3].name, label: {show: false}},
                        {value: props.street[4].value, name: props.street[4].name, label: {show: false}},
                        {value: props.street[5].value, name: props.street[5].name, label: {show: false}},
                        {value: props.street[6].value, name: props.street[6].name, label: {show: false}},
                        {value: props.street[7].value, name: props.street[7].name, label: {show: false}},
                        {value: props.street[8].value, name: props.street[8].name, label: {show: false}}
                    ],
                }
            ]
        })
    }, [])
    return (
        <div ref={divRef} className='chart'></div>
    )
}