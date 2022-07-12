import React from 'react';

function FooterEnd() {
    return (
        <div className="text-center text-white py-4  footer__end">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-capitalize">
                        &copy; Copyright {new Date().getFullYear()} al mamun |{' '}
                        <strong>conditions & security</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterEnd;
