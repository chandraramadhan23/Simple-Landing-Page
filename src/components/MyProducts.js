import React from "react";

function MyProducts() {
    const myProducts = [
        {
            id: 1,
            promo: '35',
            url: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            promo: '39',
            url: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            promo: '29',
            url: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <>

            <div className="container" id="product">
                <br />
                <div className="row text-center mt-5 mb-5 productsText">
                    <h1>P r o d u c t s</h1>
                </div>
                <div className="row">
                    {myProducts.map((item) => (
                        <div key={item.id} className="col-lg-4 text-center">
                            <h3>P r o m o  {item.promo}  %</h3>
                            <div className="image-container">
                                <img className="promo-image mt-3 mb-5" src={item.url} alt="" />
                                <button className="buy-now-btn">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}


export default MyProducts;