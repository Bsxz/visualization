import React, {useRef, useEffect} from 'react';
import './home.scss';
import headerimg from '../images/header.png'
import footerimg from '../images/footer.png'
import {Under} from "../components/under";
import {Solve} from '../components/solve'
import {Both} from "../components/both";
import {Crime} from "../components/crime";
import {Results} from "../components/results";

export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerimg})`}}>
            </header>
            <main>
                <section className="section1">
                    <Under/>
                    <Solve/>
                </section>
                <section className="section2">
                    <Both/>
                    <Crime/>
                </section>
                <section className="bordered section3">
                    <Results/>
                </section>
                <section className="section4">
                    <div className="bordered top">
                        <h4>管辖统计</h4>
                    </div>
                    <div className="bordered bottom">
                        <h4>管辖统计</h4>
                    </div>
                </section>
                <section className="section5">
                    <div className="bordered top">
                        <h4>管辖统计</h4>
                    </div>
                    <div className="bordered middle">
                        <h4>管辖统计</h4>
                    </div>
                    <div className="bordered bottom">
                        <h4>管辖统计</h4>
                    </div>
                </section>
            </main>
            <footer style={{backgroundImage: `url(${footerimg})`}}></footer>
        </div>
    );
};
