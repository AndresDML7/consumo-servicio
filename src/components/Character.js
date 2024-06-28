import React from "react";
import { Typography, Grid, TextField } from "@mui/material";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <div className="characterContainer">
      <Grid item xs={12} key={character.id}>
        <Typography variant="h6" className="characterName">
          Character: {character.name}
        </Typography>
        <TextField
          label="Status"
          value={character.status}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          className="characterDetails"
        />
        <TextField
          label="Species"
          value={character.species}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          className="characterDetails"
        />
      </Grid>
    </div>
  );
};

export default Character;
