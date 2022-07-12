import React, { useRef, useEffect } from 'react';

function CountDown() {
    const countDownItems = useRef(null);
    const eventEndingTime = null;

    useEffect(() => {
        const counting = () => {
            let gap;
            const currentTime = new Date().getTime();
            const tempYr = new Date().getFullYear();

            const endTime = new Date(
                `19 march , ${tempYr + 1} , 00:00:00`
            ).getTime();

            if (!eventEndingTime) {
                gap = endTime - currentTime;
            } else {
                const time = new Date(eventEndingTime).getTime();
                gap = time - currentTime;
            }

            const second = 1000;
            const oneMin = second * 60;
            const oneHr = oneMin * 60;
            const oneDay = oneHr * 24;

            const formatting = (num = 0) => {
                let number = num;
                if (number < 10 && number >= 0) {
                    number = `0${number}`;
                }
                if (number < 0) {
                    number = `00`;
                }
                return number;
            };
            const day = Math.floor(gap / oneDay);
            const hr = Math.floor((gap % oneDay) / oneHr);
            const min = Math.floor((gap % oneHr) / oneMin);
            const sec = Math.floor((gap % oneMin) / second);
            const valuesOfNumber = [day, hr, min, sec];
            const valuesOfText = ['Days', 'Hours', 'Minutes', 'Seconds'];

            [...countDownItems.current.children].forEach((child, i) => {
                const v = child;
                v.firstChild.textContent = formatting(valuesOfNumber[i]);
                if (valuesOfNumber[i] <= 1) {
                    v.lastChild.textContent = valuesOfText[i]
                        .split('s')
                        .join('');
                } else {
                    v.lastChild.textContent = valuesOfText[i];
                }
            });
        };

        const timer = setInterval(counting, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="event_ending ">
            <div className="container">
                <h3 className="text-uppercase">
                    My next birthday in counting ...
                </h3>
                <div className="row">
                    <div className="event__ending__items" ref={countDownItems}>
                        <div>
                            <h4>""</h4> <span>""</span>
                        </div>
                        <div>
                            <h4>""</h4> <span>""</span>
                        </div>
                        <div>
                            <h4>""</h4> <span>""</span>
                        </div>
                        <div>
                            <h4>""</h4> <span>""</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountDown;
