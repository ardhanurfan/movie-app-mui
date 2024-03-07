import { Box } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/search-bar";

interface LayoutProps {
  children: ReactNode;
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Layout({ children, search, onChange }: LayoutProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        color: "white",
        padding: { xs: 1, lg: 3 },
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Box sx={{ width: "100%", overflowY: "scroll" }}>
        <SearchBar search={search} onChange={onChange} />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
