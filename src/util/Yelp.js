const apiKey ="OORnp7w2FvCirTiSv5vqOEUFC_YCw5_hrTQ0RDkvIVo8ISRcAQDg8PNFbjGBxIUtb40f9hKHXcF0uKRuOSpNcZCVMs5zjHLDW5mk5GLvMtOxssXiNztqg1HAlyXWXnYx";
let Yelp={
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response=>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>{
                    return{
                        id : business.id,
                        src: business.imageSrc,
                        name:business.name,
                        address:business.address,
                        city:business.city,
                        state:business.state,
                        zipCode:business.zipCode,
                        category:business.category,
                        rating:business.rating,
                        reviewCount:business.reviewCount
                    }
                });
            }
        })
    }
}

export default Yelp ;