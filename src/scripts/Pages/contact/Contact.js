import React, { useRef, useEffect } from 'react';
import { Mail, Phone, LocationOn } from '@material-ui/icons';
import Title from '../../Components/Title';
import bg from '../../../img/contact-bg.jpg';
import LinkButton from '../../Components/LinkButton';

function Contact() {
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
        <div
            id="contact"
            style={{
                background: `url(${bg}) no-repeat`,
                backgroundSize: 'cover',
            }}
        >
            <Title text="contact me" className="text-light" />
            <div className="container">
                <div className="row  shadow-lg m-3 ">
                    <div className="col-12  col-lg-6 my-3 ">
                        <h4 className="fw-bold text-capitalize text-center">
                            contact info
                        </h4>
                        <hr className="contact__hr" />

                        <div className="Contact__Info__container">
                            <ContactInfo
                                Icon={Mail}
                                title="ha.mamun.developer"
                            />
                            <ContactInfo Icon={Phone} title="+8801835426770" />
                            <ContactInfo Icon={Phone} title="+8801770085926" />
                            <ContactInfo
                                Icon={LocationOn}
                                title="Dhaka ,  Bangladesh"
                            />
                        </div>
                    </div>
                    <div className="col-12  col-lg-6  my-3  ">
                        <h4 className="fw-bold text-capitalize text-center">
                            give me short message{' '}
                        </h4>
                        <hr className="contact__hr" />
                        <form
                            className="row g-3 needs-validation"
                            onSubmit={handleSubmit}
                            ref={form}
                        >
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control my-2  "
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    className="form-control my-2 "
                                    placeholder="Your E-mail"
                                />
                                <textarea
                                    cols="20"
                                    rows="10"
                                    className="form-control my-2 "
                                    placeholder="Your Message"
                                />
                                <div className="d-grid text-center">
                                    <LinkButton text="Send" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactInfo({ Icon, title, sub }) {
    return (
        <div className="col-12 ps-3  Contact__Info d-flex d-lg-flex">
            <Icon className="icon" />
            <div className="Contact__Info__info ps-2 ">
                <p className="title fw-bold  ">{title}</p>
                <p className="p m-0">{sub}</p>
            </div>
        </div>
    );
}

export default Contact;
