import { Bookcard } from '../components/Bookcard'

import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface BookProps {
    book: {
        id: number
        title: string
        author: string
        price: number
        rating: number
        imageUrl: string
    }
}

export const BooksCarousel: React.FC<{ featured: BookProps['book'][] }> = ({ featured }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className="mx-10 ">
            <Slider {...settings}>
                {featured.map(({ id, title, author, price, rating, imageUrl }) => (
                    <Bookcard book={{ title, id, author, price, rating, imageUrl }} />
                ))}
            </Slider>
        </div>
    )
}
