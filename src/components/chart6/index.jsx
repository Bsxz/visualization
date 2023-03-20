import React, {useRef, useEffect} from "react";
import {px, echarts} from '../../shared/base-echarts-options'
import './index.scss'
import china from '../../china.json'

export const Chart6 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        echarts.registerMap('CN', china);
        echarts.init(divRef.current).setOption({
            xAxis: {show: false}, yAxis: {show: false},
            geo: {
                map: "CN",
                label: {show: false, color: 'white'},
                selectedMode:true,
                itemStyle: {
                    areaColor: '#010D3D',
                    borderColor: '#01A7F7',
                },
                emphasis: {
                    label: {color: 'white'},
                    itemStyle: {
                        color: '#5470C6'
                    }
                },
                select: {
                    label: {color: 'white'},
                    disabled: true,
                    itemStyle: {
                        color: '#5470C6'
                    }
                }
            },
            series: [
                {
                    type: "scatter",
                    name: "青海省",
                    coordinateSystem: "geo",
                    data: [
                        {name: "青海", value: [96.043533, 35.726403]},
                    ],
                    color: '#1ff2d3'
                },
                {
                    type: "scatter",
                    name: "甘肃",
                    coordinateSystem: "geo",
                    data: [
                        {name: "甘肃", value: [103.823557, 36.058039]},
                    ],
                    color: '#16b1fd',

                },
                {
                    type: "scatter",
                    name: "新疆维吾尔自治区",
                    coordinateSystem: "geo",
                    data: [
                        {name: "新疆维吾尔自治区", value: [85.294711, 41.371801]},
                    ],
                    color: '#bb39fe',
                }
            ],
            tooltip: {
                trigger: "item"
            }
        });
    }, []);
    return (<div className="bordered top">
        <h4>犯罪人员籍贯分布地</h4>
        <div ref={divRef} className="chart map"></div>
        <div className="bordered box">
            <ul>
                <li><span></span>x肃籍</li>
                <li><span></span>x海籍</li>
                <li><span></span>x疆籍</li>
            </ul>
        </div>
        <div className="xxx">无任何用途</div>
    </div>)
}