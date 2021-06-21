import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '44%',
        width: '20%',
        display: 'inline-block',
        '&:hover button': {
            opacity: '1',
        },
    },
    btn: {
        position: 'relative',
        top: '180px',
        left: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '28px',
        border: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        color: '#444',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '8px 16px',
        textDecoration: 'none',
        textShadow: '0px 1px 0px #2f6627',
        opacity: '0',
        transition: 'opacity 0.3s ease-in',
        '&:active': {
            position: 'relative',
            top: '182px',
        },
    },
    name: {
        position: 'relative',
        top: '340px',
        left: '15px',
    },
    header: {
        fontSize: '50px',
        fontWeight: '500',
        letterSpacing: '3px',
        marginBottom: '1rem',
    },
    para: {
        fontSize: '25px',
    },
}));

function ColorBox(props) {
    const classes = useStyles();
    const [isCopied, setisCopied] = useState(false);
    const background = props.background;
    const luminance = chroma(background).luminance();
    const nameColor = luminance < 0.4 ? 'white' : 'black';

    const handleCopy = () => {
        setisCopied(true);
        setTimeout(() => {
            setisCopied(false);
        }, 1500);
    };

    return (
        <div style={{ backgroundColor: background }} className={classes.root}>
            <div
                style={{ backgroundColor: background }}
                className={`copyColor ${isCopied && 'show'}`}
            />

            <div className={`copyColorText ${isCopied && 'show'}`}>
                <h1 style={{ color: nameColor }} className={classes.header}>
                    Copied!!
                </h1>
                <p style={{ color: nameColor }} className={classes.para}>
                    {background}
                </p>
            </div>
            <span style={{ color: nameColor }} className={classes.name}>
                {background}
            </span>
            <CopyToClipboard text={background} onCopy={handleCopy}>
                <button className={classes.btn}>COPY</button>
            </CopyToClipboard>
        </div>
    );
}

export default ColorBox;
