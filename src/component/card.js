import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import { Box, Grid, Typography } from "@mui/material";

function Card() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error);
      }
    };

    fetchCountries();
  }, []);

  if (error) {
    return <div>Error loading countries</div>;
  }

  const RenderCard = ({ country }) => {
    return (
      <Grid sx={{margin:"20px"}}>
      <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems: "center",
          alignContent:"center",
          border: 1,
          borderRadius:"8px",
          margin: "10px",
          padding: "10px",
          width: 150,
          height: 150,
        }}
      >
        <img
          style={{ maxHeight: 100, maxWidth: 100, padding: "8px" }}
          src={country.flags.png}
          alt={country.flags.alt || country.name.common}
        />
          <h3>
                  {country.name.common}
          </h3>
        {/* <p>{country.name.common}</p> */}
      </Box>
      </Grid>
    );
  };

  return (
    <Grid container className="card-wrapper">
      {countries.map((country, index) => (
        <RenderCard key={index} country={country} />
      ))}
    </Grid>
  );
}

export default Card;



