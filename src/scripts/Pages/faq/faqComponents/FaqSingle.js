/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function FaqSingle({ title, info }) {
    const [showFaq, setShowFaq] = useState(false);
    const itemRef = useRef(null);
    const handleBtn = () => {
        setShowFaq(!showFaq);
    };
    useEffect(() => {
        if (showFaq) {
            itemRef.current.style.cursor = 'pointer';
        } else itemRef.current.style.cursor = '';
    }, [showFaq]);

    return (
        <section className="single_faq shadow-lgc" ref={itemRef}>
            <div className="qus" onClick={handleBtn}>
                <h6>{title}</h6>
                <div>
                    {!showFaq ? (
                        <button
                            type="button"
                            className="plus_btn"
                            onClick={handleBtn}
                        >
                            <AiOutlinePlus />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="minus_btn"
                            onClick={handleBtn}
                        >
                            <AiOutlineMinus />
                        </button>
                    )}
                </div>
            </div>

            {showFaq && <p className="pt-3  ">{info}</p>}
        </section>
    );
}

export default FaqSingle;
