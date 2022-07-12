import React from 'react';
import { Mail, Phone, LocationOn } from '@material-ui/icons';
import FooterTop from './footerComponent/FooterTop';
import FooterSocial from './footerComponent/FooterSocial';
import FooterContent from './footerComponent/FooterContent';
import FooterEnd from './footerComponent/FooterEnd';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <FooterTop Icon={Phone} title="+8801835426770" sub="24/7" />
                    <FooterTop
                        Icon={Mail}
                        title="ha.mamun.developer@gmail.com"
                        sub="Online support"
                    />
                    <FooterTop
                        Icon={LocationOn}
                        title="Dhaka , Bangladesh"
                        sub="Tangail"
                    />
                </div>
            </div>
            <FooterSocial />
            <FooterContent />
            <FooterEnd />
        </div>
    );
}

export default Footer;
