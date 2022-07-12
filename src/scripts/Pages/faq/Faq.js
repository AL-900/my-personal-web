/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import FaqSingle from './faqComponents/FaqSingle';
import data from '../../data/data';
import FaqForm from './faqComponents/FaqForm';
import Title from '../../Components/Title';
import useGlobalDataLayer from '../../hooks/dataLayer/useDataLayer';
import * as actions from '../../hooks/dataLayer/actions';

function FAQ() {
    // const [{ faqData }, dispatch] = useGlobalDataLayer();
    const [{ faqData }, dispatch] = useGlobalDataLayer();

    useEffect(() => {
        const fetchData = async () => {
            const res = await data;
            const getJson = await JSON.parse(res);
            const qus = await getJson.questions;
            dispatch({
                type: actions.FAQ__DATA,

                payload: qus,
            });
        };

        fetchData();
    }, [dispatch]);

    return (
        <div id="faq">
            <Title text="FAQ" className="text-light" />
            <p className="lead text-center text-light fw-bold pb-3  ">
                Frequently asked questions, get knowladge before hand !
            </p>

            <div className="container">
                {faqData.map((singleQus) => (
                    <FaqSingle {...singleQus} key={Math.random()} />
                ))}
            </div>

            <div className="container">
                <FaqForm />
            </div>
        </div>
    );
}

export default FAQ;
