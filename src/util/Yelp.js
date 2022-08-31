//ZZ-7LDBj0eb3K-2LAhZZkb5LAg7rPw6hKCy28-MAMiyF4E7vfofwD1j5GO3gHMVTVZXvbO1Hi_thp9VaFkEjrE4NH3jgkww4vhKxG9C48-s-giYHwk28SvQtnkAPY3Yx

const apiKey = 'ZZ-7LDBj0eb3K-2LAhZZkb5LAg7rPw6hKCy28-MAMiyF4E7vfofwD1j5GO3gHMVTVZXvbO1Hi_thp9VaFkEjrE4NH3jgkww4vhKxG9C48-s-giYHwk28SvQtnkAPY3Yx';

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
            Authorization : `Bearer ${apiKey}`
        }}).then((response) => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id : business.id,
                        imageSrc : business.image_url,
                        name : business.name,
                        address : business.location.address1,
                        city : business.location.city,
                        state : business.location.state,
                        zipCode : business.location.zipCode,
                        catergory : business.catergories,
                        rating : business.rating,
                        reviewCount : business.review_count,
                        url : business.url
                    };
                });
            }
        });
    }
 };

export default yelp;