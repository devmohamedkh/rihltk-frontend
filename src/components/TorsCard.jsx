import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TorsCard() {
    return (
        <Link to={"/tours/test"}>
            <Card
                sx={{
                    position: "relative",
                    display: "flex",

                    justifyContent: "center",
                }}
            >
                <CardMedia
                    component="img"
                    height="250"
                    image="/rihltk-frontend/images/tours.jpg"
                    alt="green iguana"
                />

                <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(74, 100, 114, 0.3)",
                        width: "100%",
                        height: "100%",
                        color: "white",
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        paddingBottom: 2,
                    }}
                >
                    جورجيا
                </Typography>
            </Card>
        </Link>
    );
}

export default TorsCard;
