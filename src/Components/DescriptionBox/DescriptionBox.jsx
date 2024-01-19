import React from 'react'
import './DescriptionBox.css'


export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to Shopper, where style meets convenience. Explore the latest trends and curated collections designed to elevate your wardrobe. 
            From timeless classics to the hottest runway looks, our fashion-forward selection caters to every taste and occasion.
            Discover a seamless shopping experience with user-friendly navigation, ensuring you can effortlessly browse through our extensive range of clothing, 
            accessories, and footwear. Our commitment to quality is reflected in every piece, as we bring you a fusion of comfort, durability, and trendsetting designs.
            </p>
            <p>
            At Shoppers, we believe in making fashion accessible to everyone. Whether you're seeking everyday essentials or statement pieces, 
            our diverse range ensures there's something for every style personality. Stay ahead of the curve with our regularly updated inventory, 
            keeping you on-trend throughout the seasons.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox