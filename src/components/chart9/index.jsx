import React from "react";
import {Chartbar2} from "./chartbar2";
import {Chartpie2} from "./chartpie2";
import '../chart8/index.scss'

export const Chart9 = () => {
    const street = [
        {
            name: '东岗路',
            value: 8,
        },
        {
            name: '段家摊',
            value: 6,
        },
        {
            name: '雁北',
            value: 11,
        },
        {
            name: '五泉山',
            value: 9,
        },
        {
            name: '中山路',
            value: 12,
        },
        {
            name: '庆阳路',
            value: 6,
        },
        {
            name: '武都路',
            value: 8,
        },
        {
            name: '酒泉路',
            value: 8,
        },
        {
            name: '天水路',
            value: 4,
        },
    ]


    return (
        <div className="bordered middle">
            <h4>xx市案发街道统计</h4>
            <div className="top_box">
                <Chartpie2 street={street}/>
                <Chartbar2 street={street}/>
            </div>
        </div>
    )
}