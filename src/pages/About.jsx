import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { store } from "../store";

import { getCountry } from '../store/actions/ActionsCountry';
import { useSelector } from "react-redux";
import CardCountry from '../components/CardCountry';
import { getMeteoDay } from '../store/actions/ActionsMeteo';

const About = () => {
    const ListCountries = useSelector(state => state.countries.ListCountries)
    const listMeteo = useSelector(state => state.meteo.listMeteo)
    useEffect(() => {
        store.dispatch(getCountry());
        store.dispatch(getMeteoDay());
    }, []);
    return (
        <div>
            <Navigation />
            <Logo />
            <h1> A propos</h1>
            <br />
            {(ListCountries.length > 0) && ListCountries.map((item, key1) => {
                return <CardCountry kakawait={item} key={key1} />
            })}
            {(listMeteo.length > 0) && listMeteo.map((item, index) => {
                console.log('test', item.weather[0].main)
                return <CardCountry item={item} key={index} />
            })}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo odio eius harum alias,
                error repudiandae vero iusto illum expedita quod ipsum facere saepe enim cumque cum pariatur
                omnis odit voluptate consectetur similique minima obcaecati et dolorum. Omnis fugiat deserunt
                sunt necessitatibus porro ab rem quos, sed qui nam minus a magnam voluptate unde illum animi
                dolorem fugit, laborum voluptas!</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a ipsam corrupti
                nisi quam non autem sapiente adipisci asperiores itaque totam aliquam nostrum inventore
                unde cumque eaque ex ea veritatis eius accusantium, magnam consequatur nihil? Laudantium
                ipsum atque quae pariatur at, earum adipisci reprehenderit delectus optio officia totam modi
                eligendi numquam officiis velit quibusdam dolor possimus libero aut hic aliquam? Blanditiis
                a consequuntur dignissimos aut facilis voluptas eligendi repudiandae, voluptatibus corporis
                quo, fuga amet molestias maxime? Vero vel ab sint sunt culpa facere dolorum perspiciatis ullam!
                Delectus sequi consequuntur accusamus tempore voluptatem reiciendis itaque voluptate tenetur
                autem facilis pariatur quos impedit laborum expedita nobis voluptatibus eum, maxime amet quasi.
                Nobis repellendus voluptatum ullam rerum id possimus, molestias rem quam eveniet voluptas,
                quia at enim quos, blanditiis modi et temporibus quibusdam ipsa facilis aperiam! Amet, mollitia qui obcaecati
                ducimus quidem eligendi!</p>
        </div>
    );
};

export default About;