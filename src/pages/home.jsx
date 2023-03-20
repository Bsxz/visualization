import React, {useRef, useEffect} from 'react';
import './home.scss';
import headerimg from '../images/header.png'
import footerimg from '../images/footer.png'
import {Chart1} from "../components/chart1";
import {Chart2} from '../components/chart2'
import {Chart3} from "../components/chart3";
import {Chart4} from "../components/chart4";
import {Chart5} from "../components/chart5";
import {Chart6} from "../components/chart6";
import {Chart7} from "../components/chart7";
import {Chart8} from "../components/chart8";
import {Chart9} from "../components/chart9";
import {Chart10} from "../components/chart10";

export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerimg})`}}>
            </header>
            <main>
                <section className="section1">
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className="section2">
                    <Chart3/>
                    <Chart4/>
                </section>
                <section className="bordered section3">
                    <Chart5/>
                </section>
                <section className="section4">
                    <Chart6/>
                    <Chart7/>
                </section>
                <section className="section5">
                    <Chart8/>
                    <Chart9/>
                    <Chart10/>
                </section>
            </main>
            <footer style={{backgroundImage: `url(${footerimg})`}}></footer>
        </div>
    );
};
