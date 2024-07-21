import React from "react";

function MyJumbotron() {
    return (
        <>

        <section className="mb-5" id="home">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1676822252274-f81d2d6aab23?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/1920x1280)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="container text-center">
                        <h1 className="display-4">Welcome to Beauty Cosmetic</h1>
                        <p className="lead">The best cosmetic company in Indonesia, enjoy the promotion of our products</p>
                        <a href="#" className="custom-btn">Go to Login</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="container text-center">
                        <h1 className="display-4">Discover Our New Products</h1>
                        <p className="lead">Check out the latest additions to our cosmetic line</p>
                        <a href="#" className="custom-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="container text-center">
                        <h1 className="display-4">Special Offers</h1>
                        <p className="lead">Don't miss our exclusive deals and discounts</p>
                        <a href="#" className="custom-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>

        </>
    )
}

export default MyJumbotron;