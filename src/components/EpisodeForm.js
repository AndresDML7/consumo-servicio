import React, { useState, useEffect, Fragment } from "react";
import { TextField, Container, Typography, Grid, Box } from "@mui/material";
import axios from "axios";
import Character from "./Character";
import "./EpidoseForm.css";

const EpisodeForm = () => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode/1"
        );
        setEpisode(response.data);
        await fetchCharacters(response.data.characters);
      } catch (error) {
        console.error("Error fetching the episode data", error);
      }
    };
    fetchEpisode();
  }, []);

  const fetchCharacters = async (characterUrls) => {
    try {
      const characterPromises = characterUrls.map((url) => axios.get(url));
      const charactersData = await Promise.all(characterPromises);
      setCharacters(charactersData.map((res) => res.data));
    } catch (error) {
      console.error("Error fetching character data", error);
    }
  };

  return (
    <div className="pageContainer">
      <Container>
        <Typography variant="h4" className="formTitle" gutterBottom>
          Episode Information
        </Typography>
        {episode ? (
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="formContainer"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} className="gridItem">
                <TextField
                  label="Name"
                  value={episode.name}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} className="gridItem">
                <TextField
                  label="Air Date"
                  value={episode.air_date}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} className="gridItem">
                <TextField
                  label="Episode"
                  value={episode.episode}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className="textField"
                />
              </Grid>
              {characters.map((character) => (
                <Character key={character.id} character={character} />
              ))}
            </Grid>
          </Box>
        ) : (
          <Typography variant="h6" color="textSecondary">
            Loading...
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default EpisodeForm;
