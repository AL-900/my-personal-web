import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Close } from '@material-ui/icons';
import { FaBars } from 'react-icons/fa';
import data from '../../data/data';
import * as actions from '../../hooks/dataLayer/actions';
import useGlobalDataLayer from '../../hooks/dataLayer/useDataLayer';
import { scrollToTop } from '../../others/myS';

function Navbar() {
    const [{ navItems }, dispatch] = useGlobalDataLayer();
    const itemsContainer = useRef(null);
    const navItemsRef = useRef(null);
    const [navFixed, setNavFixed] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    /**
     * getting nav items .
     */
    useEffect(() => {
        async function fetchData() {
            const response = await data;
            const convertFromJson = await JSON.parse(response);
            const navItemList = convertFromJson.navbar;
            dispatch({
                type: actions.NAV_ITEMS,
                payload: navItemList,
            });
        }
        fetchData();
    }, [dispatch]);

    /**
     *
     * fixed navbar
     *
     */
    useEffect(() => {
        const scrolling = () => {
            if (window.scrollY > 200) {
                setNavFixed(true);
            } else setNavFixed(false);
        };

        window.addEventListener('scroll', scrolling);
    }, []);

    /**
     *
     * dropdown navbar
     *
     */

    useEffect(() => {
        const itemsHeight = navItemsRef.current.getBoundingClientRect().height;

        if (dropdown) {
            itemsContainer.current.style.height = `${itemsHeight}px`;
        } else itemsContainer.current.style.height = 0;

        [...navItemsRef.current.children].forEach((v) => {
            v.addEventListener('click', () => {
                setDropdown(false);
                scrollToTop();
            });
        });
    }, [dropdown, navItems]);

    const handledropdownMenu = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className={navFixed ? 'navFixed' : null}>
            <div className="navCenter">
                <div className="navLogo">
                    <NavLink to="/" onClick={scrollToTop}>
                        <h2>HA Mamun</h2>
                    </NavLink>

                    {dropdown ? (
                        <Close
                            onClick={handledropdownMenu}
                            className="navToggler"
                        />
                    ) : (
                        <FaBars
                            className="navToggler"
                            onClick={handledropdownMenu}
                        />
                    )}
                </div>
                <div className="navItemsContainer" ref={itemsContainer}>
                    <div className="navItems" ref={navItemsRef}>
                        {navItems.map((navItem) => (
                            <div key={navItem?.id}>
                                <NavLink to={navItem?.url} className="navLink">
                                    {navItem?.text}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
