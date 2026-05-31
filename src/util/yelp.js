// src/util/yelp.js

const SEARCH_PATH = "/api/yelp/businesses/search";

async function searchBusinesses(term, location, sortBy) {

    const params = new URLSearchParams({
        term: term,
        location: location,
        sort_by: sortBy,
        limit: "20",
    });

    const url = `${SEARCH_PATH}?${params.toString()}`;
    console.log('Fetching URL:', url); // Should show: /api/yelp/businesses/search?term=pizza&location=NYC&...

    // const res = await fetch(`${SEARCH_PATH}?${params}`);
    const res = await fetch(`${SEARCH_PATH}?${params.toString()}`);

    if (!res.ok) {
        throw new Error(`Yelp request failed (${res.status})`);
    }
    // TODO: Convert the response to JSON
    const data = await res.json();

    // TODO: Return the businesses array mapped into the format used by the Business component
    return data.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1 || '',
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0]?.title || '',
        rating: `${business.rating} stars`,
        reviewCount: business.review_count.toString(),
        url: business.url
    }));
}

export default searchBusinesses;