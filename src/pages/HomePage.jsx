//import '../../index.css'
import './HomePage.css'
import SearchBar from '../Components/SearchBar/SearchBar.jsx'
import BusinessList from '../Components/BusinessList/BusinessList.jsx'
// import image from '../../assets/pizza.jpg';
import Navigation from '../Components/Navigation/Navigation.jsx';
import Subscription from '../Components/Subscription/Subscription.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import searchBusinesses from '../util/yelp.js';

import { useState } from 'react';

// const business = {
//     imageSrc: image,
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Bordertown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'ITALIAN',
//     rating: '4.5 stars',
//     reviewCount: '90'
// };

// const businesses = [business, business, business, business, business, business];


function HomePage() {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchYelp = async (term, location, sortBy) => {
        setLoading(true);
        setError(null);
        try {
            const data = await searchBusinesses(term, location, sortBy);
            setBusinesses(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="HomePage">
            <SearchBar searchYelp={searchYelp} />

            {loading && <p className="HomePage-status">Loading...</p>}
            {error && <p className="HomePage-status HomePage-status--error">{error}</p>}
            {!loading && !error && <BusinessList businesses={businesses} />}

            <Subscription />
            <Footer />
        </div>
    );
}

export default HomePage;