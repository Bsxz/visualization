import React from "react";
import './index.scss'
import {Mchar1} from "./mchar1";
import {Mchar2} from "./mchar2";
import {Mchar3} from "./mchart3";

export const Chart7 = () => {
    return (
        <div className="bordered bottom">
            <h4>xx市犯罪人员年龄段分布</h4>
            <div className="chart mchart">
                <Mchar1/>
                <Mchar2/>
                <Mchar3/>
            </div>
        </div>
    )
}