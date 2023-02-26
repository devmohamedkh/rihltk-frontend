import React from "react";
import { Typography } from "@mui/material";

function Header1({ title, desc }) {
    return (
        <div
            height={200}
            style={{
                width: "100%",

                backgroundColor: "#0D68A2",
                padding: 50,
                textAlign: "center",
                color: "white",
            }}
        >
            <Typography variant="h4" component="h3" fontWeight={"bold"}>
                {title}
            </Typography>
            <Typography> {desc}</Typography>
        </div>
    );
}

export default Header1;
