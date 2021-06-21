import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import rgbHex from 'rgb-hex';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
}));

function ColorLists({ data }) {
    const classes = useStyles();

    const converter = (rgbCol) => {
        let r = rgbCol[0];
        let g = rgbCol[1];
        let b = rgbCol[2];
        const hexCol = `#${rgbHex(r, g, b)}`;
        return hexCol;
    };

    return (
        <div className={classes.root}>
            {data.map((curColor, i) => (
                <ColorBox key={i} background={converter(curColor.rgb)} />
            ))}
        </div>
    );
}

export default ColorLists;
