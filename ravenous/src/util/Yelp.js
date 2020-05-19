const apiKey = 'yboF9ujRQRkf_-rZcKqNbwLG-TaQn6YebUJAC5bqr2qZJ1G2l0cAcdcVBGfDY4dWZJ7T9yE7QQ2m3mRZSjbknRzCGiTYHms9mw4PWovSWznacH0gjJ7Wl2GxMxzEXnYx';

const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers : {
            Authorization: `Bearer ${apiKey}`,
    }
        }).then((response) => {
            return response.json();
        }).then ((jsonResponse) => {
           if (jsonResponse.businesses){
               return jsonResponse.businesses.map((business) => {
                   console.log(business);
                   return {
                       id: business.id,
                       imgSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       reviewCount: business.review_count,
                   };
               })
           }
        })
    }
    
}

export default Yelp;