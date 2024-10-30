// src/components/PropertyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState({ city: '', phase: '', plotNumber: '' });

    // Fetch properties based on search query
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/properties', {
                    params: { ...searchQuery }
                });
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, [searchQuery]);

    // Handle search input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchQuery((prevQuery) => ({ ...prevQuery, [name]: value }));
    };

    return (
        <div>
            <h2>Property Listings</h2>
            <div>
                <input
                    type="text"
                    name="city"
                    placeholder="Search by City"
                    value={searchQuery.city}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="phase"
                    placeholder="Search by Phase"
                    value={searchQuery.phase}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="plotNumber"
                    placeholder="Search by Plot Number"
                    value={searchQuery.plotNumber}
                    onChange={handleInputChange}
                />
            </div>

            <ul>
                {properties.map((property) => (
                    <li key={property._id}>
                        <h3>{property.city} - {property.phase} - Plot {property.plotNumber}</h3>
                        <p>Price: {property.price}</p>
                        <p>{property.description}</p>
                        <div>
                            {property.images.map((image, index) => (
                                <img key={index} src={image} alt={`Property ${property.plotNumber}`} width="100" />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
