import React from "react";
import {Chartbar} from "./chartbar";
import {Chartpie} from "./chartpie";


export const Chart8 = () => {
    return (
        <div className="bordered top">
            <h4>xx市案发类型统计</h4>
            <div className="top_box">
                <Chartbar/>
                <Chartpie/>
            </div>
        </div>
    )
}