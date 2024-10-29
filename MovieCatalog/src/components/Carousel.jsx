import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Example(props)
{
    var items = [
        {
            img: "https://images3.alphacoders.com/610/610318.jpg",
        },
        {
            img: "https://wallpaperaccess.com/full/1869531.jpg",
        },
        {
          img:"https://cdn.wallpapersafari.com/40/56/vWgtzR.jpg"
        },
        {
          img:"https://w0.peakpx.com/wallpaper/270/433/HD-wallpaper-mortal-kombat-mortal-kombat-movie-mortal-kombat-movies-2021-movies.jpg"
        }
    ]

    return (
        <Carousel sx={{display:"flex",flexDirection:"column", justifyContent:"center",width:"90%",backgroundColor:"yellow"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
            <img src={props.item.img} alt="img" width="100%" height={500} />
    )
}