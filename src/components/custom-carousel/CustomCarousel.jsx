import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import './CustomCarousel.css';


const CustomCarousel = ({items}) => {
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    );
};

export default CustomCarousel;

function Item({item})
{
    return (
        <Paper className='carousel'>
            <img className="section-item-image" src={item.src} alt={item.alt}/>
        </Paper>
    )
}