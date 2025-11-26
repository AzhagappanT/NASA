import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Calendar } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="glass-panel fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-2xl font-display text-white">
                    <Rocket className="w-8 h-8 text-accent-500" />
                    NASA Explorer
                </Link>
                <div className="flex gap-6">
                    <Link to="/" className="hover:text-white transition-colors">Today</Link>
                    <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
                </div>
            </nav>
            <main className="flex-grow pt-24 px-6 pb-12 container mx-auto">
                {children}
            </main>
            <footer className="text-center py-8 text-space-100/50">
                <p>© {new Date().getFullYear()} NASA APOD Explorer. Powered by NASA API.</p>
            </footer>
        </div>
    );
};

export default Layout;
