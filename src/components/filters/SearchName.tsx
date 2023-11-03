import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import CardInterface from "@/interfaces/CardInterface";
import React from "react";

type simpleHero = {
  id: number;
  name: string;
};

interface SearchName {
  deck: CardInterface[];
  setName: (name: string | null) => void;
}

export default function SearchName({ deck, setName }: SearchName) {
  const heroes: simpleHero[] = deck.map((hero) => {
    return { id: hero.id, name: hero.name };
  });

  return (
    <Autocomplete
      onChange={(event, value) => {
        if (value) setName(value.name);
        else setName(null);
      }}
      options={heroes}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.id}>
          {option.name}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Herói" />}
    />
  );
}
