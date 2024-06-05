import React, { useState, useEffect } from "react";
import CardComponent from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import "./card.css";
import { Box, Grid } from "@mui/material";

function Card() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(response.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchCountries();
  }, []);

  
  const RenderCard = ({ country }) => {
    return (

      <Grid item className="card">
        <CardComponent sx={{ maxWidth: 150, margin: "10px" }}>
          <CardMedia
            component="img"
            height="100"
            width="100"
            margin="2px"
            image={country.flags.png}
            alt={country.flags.alt}
          />
          <CardContent>
            <Box gutterBottom variant="body1" component="div">
              {country.name.common}
            </Box>
          </CardContent>
        </CardComponent>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} className="card-wrapper">
      {country.map((country, index) => ( 
        <RenderCard key={index} country={country} />
      ))}
    </Grid>
  );
}

export default Card;


