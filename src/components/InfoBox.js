import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";
function InfoBox({ title, cases, isRed, isBlue, total, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isBlue && "infoBox--blue"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox__cases ${
            !isRed && !isBlue && "infoBox__cases--green"
          } ${!isRed && "infoBox__cases--blue"}`}
        >
          {cases}
        </h2>
        <Typography className="infoBox__title" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
