import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import List from '../../public/list.json';
import Cards from './Cards';

function Freebook() {
    const filterData = List.filter((data) => data.category === "Free");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
           <div>
           <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
            <p className="mb-4">
                Lorem ipsum aaa bbb jjjjjj hhhh aaaaaa aaaa 
                aaa aaa ffff gggg hhhhh tttt eee sss ccc
            </p>
          
            
        </div>
        <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>  
      </>  
    );
}

export default Freebook;
