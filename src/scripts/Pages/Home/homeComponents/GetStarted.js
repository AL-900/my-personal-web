import React, { useEffect, useRef } from 'react';
import LinkButton from '../../../Components/LinkButton';
import Title from '../../../Components/Title';

function GetStarted() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const form = useRef(null);
    useEffect(() => {
        const inp = form.current.querySelectorAll('input');
        const textarea = form.current.querySelector('textarea');

        form.current.addEventListener('submit', () => {
            inp.forEach((singleInp) => {
                const single = singleInp;
                single.value = '';
                textarea.value = '';
            });
        });
    }, []);

    return (
        <div id="get__started">
            <Title nextWordColor text="get started" className="display-1" />

            <div className="container">
                <p className="lead text-center lh-lg fw-bold text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet laudantium quisquam explicabo nihil asperiores laborum?
                </p>
                <div className="row ">
                    <div className="col-lg-6 shadow-lg mb-5 left  text-light rounded ">
                        <div className="left__info w-100">
                            <h4 className="display-4 fw-bold text-capitalize">
                                100% staisfiction guaranteed !
                            </h4>
                            <p className="lh-lg pt-4 pb-4">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maxime commodi officiis
                                laudantium at quia consequatur. Architecto
                                deserunt laboriosam doloribus optio, corrupti
                                tempora consequuntur quia ipsa in officiis sit,
                                tempore atque!
                            </p>
                            <h3 className="h3 fw-bold  brief">
                                What will be the next step ?{' '}
                            </h3>
                            <ul className="cta__info__list">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 rounded  shadow-lg mb-5  ">
                        <div className="form w-100 pb-2 p-2 ">
                            <h3 className="text-center mb-4 text-uppercase form__header ">
                                start your project{' '}
                            </h3>

                            <form
                                action=""
                                className="row"
                                ref={form}
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    placeholder="First Name"
                                    type="text"
                                    col
                                />
                                <Input
                                    placeholder="Last Name"
                                    type="text"
                                    col
                                />
                                <Input placeholder="Your E-mail" type="email" />
                                <div className="col-12 mb-3">
                                    <textarea
                                        className="form-control form-control-lg shadow"
                                        placeholder="message"
                                        rows="3"
                                    />
                                </div>
                                <div className="d-grid mt-1 text-center">
                                    {/* <button
                                        type="submit"
                                        className="btn text-uppercase fw-bold btn-primary  rounded-pill py-3  "
                                    >
                                        submit{' '}
                                        <i
                                            className="fa fa-paper-plane"
                                            aria-hidden="true"
                                        />
                                    </button> */}
                                    <LinkButton text="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;

function Input({ placeholder, type, col }) {
    return (
        <div className={`mb-3 ${col ? 'col-md-6' : 'col-12'}`}>
            <input
                type={type}
                className="form-control form-control-lg shadow border-none"
                aria-describedby="emailHelpId"
                placeholder={placeholder}
            />
        </div>
    );
}
