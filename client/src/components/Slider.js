import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        height: 300,
    },
});

const marks = [
    {
        value: 0,
        label: "0",
    },
    {
        value: 5,
        label: "5",
    },
    {
        value: 10,
        label: "10",
    },
    {
        value: 15,
        label: "15",
    },
    {
        value: 20,
        label: "20",
    },
];

export const VerticalSlider = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography id="vertical-slider" gutterBottom>
                {props.name}
            </Typography>
            <div className={classes.root}>
                <Slider
                    orientation="vertical"
                    min={0}
                    step={1}
                    max={20}
                    defaultValue={[0, 20]}
                    aria-labelledby="vertical-slider"
                    marks={marks}
                    valueLabelDisplay="auto"
                    onChangeCommitted={(event, newValue) => props.updateValues(newValue)}
                />
            </div>
        </React.Fragment>
    );
};
