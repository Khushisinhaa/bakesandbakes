import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';

const responsive = {
    0: { items: 1 },
    350: { items: 2 },
    750: { items: 3 },
    1024: { items: 4 }
};

const items = mainCaroselData.map((item, index) => (
    <div key={index} className="item" style={{ 
        height: "475px", 
        overflow: "hidden", 
        margin: "0 10px" // Adds spacing between items
    }}>
        <img
            src={item.image}
            alt={`Slide ${index + 1}`}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px" // Optional for better styling
            }}
        />
    </div>
));

const MainCarosel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        infinite
        disableDotsControls
        stagePadding={{ paddingLeft: 20, paddingRight: 20 }}
    />
);

export default MainCarosel
