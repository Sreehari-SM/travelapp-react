import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Home() {
    const [places, setplaces] = useState([]);
    useEffect(()=>{
        axios.get("https://traveller.talrop.works/api/v1/places/")
        .then(function (response){
            console.log(response.data.data)
            setplaces(response.data.data);
        })
        .catch(function (error){
            console.log(error)
        })
    },[])
    let renderplaces =()=>{
        return places.map((place)=>(
            <List>
                        <Link to={`/about/${place.id}`}>
                            <Imagecontainer>
                                <Image src={place.image} alt={place.name} />
                            </Imagecontainer>
                            <Name>{place.name}</Name>
                            <Place><Locimage src={require("../../Assets/images/place.svg").default} alt={place.location} />
                            {place.location}</Place>
                        </Link>
            </List>
        ))
    }
    return (
        <>
            <Helmet>
                <title>Travel App | Home</title>
            </Helmet>
            <Gallery>
                <Heading>Welcome</Heading>
                <Note>Explore the world around you</Note>
                <Container>
                    {renderplaces()}
                </Container>
            </Gallery>
            
        </>
    )
}
const Gallery = styled.section`
    width:100%;
    padding: 100px 50px;

`
const Heading = styled.h2`
   font-size: 36px;
   font-weight: 700;
   margin-bottom: 20px;

`
const Note = styled.p`
    font-size: 18px;
   font-weight: 400;
   margin-bottom: 20px;
   color: grey;
   

`
const Container = styled.ul`
   width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

`
const List = styled.li`
    width: 30%;
    margin-bottom: 20px;
    

`
const Imagecontainer = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    

`
const Image = styled.img`
display: block;
width: 100%;
transition-duration: .8s;
&:hover{
   transform: scale(1.2);
   transition: .8s;
}
    

`
const Name = styled.span`
    font-size: 18px;
    font-weight: 700;
    display: block;

`
const Place = styled.small`
    display: flex;
    align-items: center;
    width: 40%;
    font-weight: 500;
    font-size: 12px;

`
const Locimage = styled.img`
    display: block;
    margin-right: 10px;
`
