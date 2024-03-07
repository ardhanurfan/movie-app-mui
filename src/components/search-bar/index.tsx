import { Box, Paper, InputBase, InputAdornment } from "@mui/material";
import iconSearch from "../../assets/icons/icon-search.svg";

interface SearchProps {
  search: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
function SearchBar({ search, onChange }: SearchProps) {
  return (
    <Box>
      <Paper
        component={"form"}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          p: 1,
          gap: 1,
          backgroundColor: "#10141f",
          border: "none",
        }}
      >
        <InputBase
          placeholder="Search for movies or TV series"
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
          }}
          value={search}
          onChange={onChange}
          startAdornment={
            <InputAdornment position="start">
              <img src={iconSearch} alt="search-icon" width={20} height={20} />
            </InputAdornment>
          }
        ></InputBase>
      </Paper>
    </Box>
  );
}

export default SearchBar;
