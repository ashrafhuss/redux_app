import React from 'react';

function Home(){
    return (
        <div>
        <div className='add-to-cart'>
        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-add-to-cart--icon-design-png-image_4269419.jpg" alt="" />
        </div>
        <h2>Home Component</h2>
        <div className='cart_wrapper'>
         <div className='img-cart item'>
         <img src='https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg'/>
         </div>
         <div className='text-wrapper item'>
           <span>
           OPPO A74
           </span>
           <br/>
           <span>
           Price: 150,000
           </span>
         </div>
         <div className='btn-wrapper item'>
           <button>Add to Cart</button>
         </div>
        </div>
        </div>
    )
}
export default Home;