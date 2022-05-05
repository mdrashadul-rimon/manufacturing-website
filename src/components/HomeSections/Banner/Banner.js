import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <section className="w-full">
            <div className="banner-container flex items-center justify-center">
                <div className="header-title">
                    <h3 className="text-6xl">Warehouse TechSolution</h3>
                    <p className="text-4xl">A complete technical solution</p>
                    <Link to="/manage">
                        <button>Manage Inventories</button>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Banner;