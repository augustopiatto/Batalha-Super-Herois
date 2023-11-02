import { fakeDeck } from "@/helpers/apimock/fakeDeck";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";

type simpleHero = {
  id: number;
  name: string;
};

export default function SearchBar() {
  const heroes: simpleHero[] = fakeDeck.map((hero) => {
    return { id: hero.id, name: hero.name };
  });

  return (
    <Autocomplete
      options={heroes}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.id}>
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Herói"
          InputLabelProps={{ shrink: false }}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <Icon>search</Icon>
          //     </InputAdornment>
          //   ),
          // }}
        />
      )}
    />
  );
}
