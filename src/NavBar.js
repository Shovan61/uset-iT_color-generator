import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import validateColor from 'validate-color';
import Values from 'values.js';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '10%',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '30%',
        marginRight: '1rem',
    },
    header: {
        '& h1': {
            fontWeight: '500',
            letterSpacing: '2px',
            color: '#555',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '25%',
        marginLeft: '1rem',
    },
    logo: {
        height: '50px',
        width: '50px',
        backgroundImage:
            'linear-gradient(to right top, #fdf200, #ffc337, #ff9775, #ff7eaf, #ff81dd, #f37bde, #e675de, #d870df, #f64fbb, #ff228d, #ff0058, #ff061a)',
        borderRadius: '50%',
    },
    btn: {
        position: 'relative',
        top: '5px',
    },
    slider: {
        width: '20%',
    },
}));

function NavBar({ setcolor, handleSetShade }) {
    const classes = useStyles();
    const [passColor, setpassColor] = useState('');
    const [isError, setisError] = useState(false);
    const [shade, setshade] = useState(10);

    const handleChange = (e) => {
        setpassColor(e.target.value);
    };

    const handleShade = (event, newValue) => {
        event.preventDefault();
        setshade(newValue);
        handleSetShade(shade);
    };

    const handleSubmit = (e) => {
        let col = passColor.toString().replace(/\s+/g, ' ').trim();

        e.preventDefault();

        if (passColor && validateColor(col)) {
            setcolor(new Values(`${col}`));
            setpassColor('');
        } else {
            setisError(true);
            setpassColor('');
            setTimeout(() => {
                setisError(false);
            }, 2000);
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.logo} />
                <h1>Color Generator</h1>
            </div>

            {/* Slider */}
            <div className={classes.slider}>
                <Typography color='white' id='discrete-slider' gutterBottom>
                    Color Shade (1-20)
                </Typography>
                <Slider
                    defaultValue={shade}
                    aria-labelledby='discrete-slider'
                    valueLabelDisplay='auto'
                    onChange={handleShade}
                    step={1}
                    marks
                    min={1}
                    max={20}
                />
            </div>
            <form
                className={classes.form}
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}>
                <TextField
                    error={isError}
                    id='standard-basic'
                    label={isError ? 'Invalid Color' : 'Enter Color'}
                    value={passColor}
                    onChange={handleChange}
                />
                <Button
                    disabled={isError}
                    type='submit'
                    className={classes.btn}
                    variant='contained'
                    color='primary'>
                    Generate Color
                </Button>
            </form>
        </div>
    );
}

export default NavBar;
