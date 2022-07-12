import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './scripts/Components/NotFoundPage';
import Blogs from './scripts/Pages/blogs/Blogs';
import BlogSingle from './scripts/Pages/blogs/blogsComponent/BlogSingle';
import Chat from './scripts/Pages/chat/Chat';
import Contact from './scripts/Pages/contact/Contact';
import Faq from './scripts/Pages/faq/Faq';
import Footer from './scripts/Pages/footer/Footer';
import Home from './scripts/Pages/Home/Home';
import Navbar from './scripts/Pages/Navbar/Navbar';
import Portfolio from './scripts/Pages/portfolio/Portfolio';
import SingleProject from './scripts/Pages/portfolio/portfolioComponent/SingleProject';
import Services from './scripts/Pages/services/Services';

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Services />} path="/services" />
                <Route element={<Portfolio />} path="/projects" />
                <Route
                    element={<SingleProject />}
                    path="/projects/:projectId"
                />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Faq />} path="/faq" />
                <Route element={<Blogs />} path="/blog" />
                <Route element={<BlogSingle />} path="/blog/:id" />
                <Route element={<Chat />} path="/chat" />
                <Route element={<NotFoundPage />} path="*" />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
