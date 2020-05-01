import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        height: 300,
    },
});

const createMarks = (maxValue) => {
    var largest_mark = 0;
    const marks = [];
    while (maxValue >= largest_mark) {
        marks.push({ value: [largest_mark], label: [largest_mark].toString() });
        largest_mark = largest_mark + 5;
    }

    return marks;
};

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
                    max={props.max}
                    defaultValue={[props.selectedMax, props.selectedMin]}
                    aria-labelledby="vertical-slider"
                    marks={createMarks(props.max)}
                    valueLabelDisplay="auto"
                    onChangeCommitted={(event, newValue) => props.updateValues(newValue)}
                />
            </div>
        </React.Fragment>
    );
};
