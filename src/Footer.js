import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box mt={4} py={2} textAlign="center" bgcolor="#f5f5f5">
      <Typography variant="body2">
        © 2025 Flipkart. All rights reserved. Built by{" "}
        <a
          href="https://devtown.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          Dev Town Flipkart Bootcamp
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
