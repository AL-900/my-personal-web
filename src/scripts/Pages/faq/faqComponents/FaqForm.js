import React, { useState } from 'react';
import { EmojiEmotions } from '@material-ui/icons';

function FaqForm() {
    const [faqFormMesseage, setFaqFormMessage] = useState('');
    const [faqEmail, setFaqEmail] = useState('');
    const [faqMessageSentSuccessfull, setFaqMessageSentSuccessfull] =
        useState(false);

    const data = {
        email: faqEmail,
        message: faqFormMesseage,
    };
    const createStorage = () => {
        localStorage.setItem('faq_message', JSON.stringify(data));
    };
    const handleFaqFormSubmit = (e) => {
        e.preventDefault();

        createStorage();
        setFaqFormMessage('');
        setFaqEmail('');
        setFaqMessageSentSuccessfull(true);
    };

    return (
        <div className="faq__form">
            <div className="row">
                <div className="col-md-6 left__side">
                    <h3 className="text-start text-capitalize display-6 ">
                        don't feel shy !{' '}
                    </h3>
                    <p>
                        If you have still any questions , please don't feel shy
                        to ask me <br />
                        I'll give my answers as soon as possible
                    </p>
                </div>
                <div className="col-md-6 right__side">
                    {faqMessageSentSuccessfull ? (
                        <div className="text-center faqMessageSentSuccessfull ">
                            <h4>wait for my response </h4>
                            <div className="my-3">
                                <EmojiEmotions htmlColor="yellow" />
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-primary text-capitalize "
                                onClick={() =>
                                    setFaqMessageSentSuccessfull(false)
                                }
                            >
                                any more questions ?
                            </button>
                        </div>
                    ) : (
                        <form
                            action=""
                            onSubmit={handleFaqFormSubmit}
                            className=""
                        >
                            <input
                                type="email"
                                placeholder="Your E-mail"
                                value={faqEmail}
                                onChange={(e) => setFaqEmail(e.target.value)}
                            />
                            <textarea
                                name=""
                                id=""
                                placeholder="Your questions ..."
                                value={faqFormMesseage}
                                onChange={(e) =>
                                    setFaqFormMessage(e.target.value)
                                }
                            />
                            <button type="submit" className="text-uppercase">
                                submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FaqForm;
