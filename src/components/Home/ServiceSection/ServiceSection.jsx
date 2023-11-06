import React from 'react'
import './ServiceSection.css'

function ServiceSection() {
    return (
        <div className="container">
            <div className="row" style={{ marginTop: 100, marginBottom:100 }}>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card" id="tpc">
                        <img
                            src="https://rukminim2.flixcart.com/image/416/416/kv8fbm80/dinner-set/4/q/n/yes-imperial-camber-black-opalware-dinner-set-13-pieces-cello-original-imag86c3qy3vavmv.jpeg?q=70"
                            alt="" className="card image-top" />
                        <div className="card-img-overlay">
                            <h4 className="card-titel">Best Dinner Set</h4>
                            <p className="card-text">Stainless Steel Cutlery   </p>
                            <p className="card-text">Wooden Cutlery </p>
                            <p className="card-text">Plastic Cutlery</p>
                            <div id="btn2">
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card" id="tpc">
                        <img
                            src="https://rukminim2.flixcart.com/image/416/416/xif0q/ladle/c/d/h/-original-imagt2seybzqwfjr.jpeg?q=70"
                            alt="" className="card image-top" />
                        <div className="card-img-overlay">
                            <h4 className="card-titel">Best Kitchen Tools</h4>
                            <p className="card-text">Knives</p>
                            <p className="card-text">Forks </p>
                            <p className="card-text">Spoons</p>
                            <div id="btn2">
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card" id="tpc">
                        <img
                            src="https://rukminim2.flixcart.com/image/416/416/xif0q/container/n/g/c/12-square-500ml-black-12-sedulous-original-imagnvvhqhnfyamg.jpeg?q=70"
                            alt="" className="card image-top" />
                        <div className="card-img-overlay">
                            <h4 className="card-titel">Best Grocery Container Set</h4>
                            <p className="card-text">Glass Container </p>
                            <p className="card-text">Steel Container </p>
                            <p className="card-text">Plastic Container</p>
                            <div id="btn2">
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default ServiceSection