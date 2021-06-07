import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: "2%",
        margin: 'auto',
        maxWidth: '50%',
    },
    image: {
        width: 300,
        height: 500,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        float: "left"
    },
}));



export default function ProductDetails() {
    const classes = useStyles();

    const [addIetmCount, setAddIetmCount] = useState(0);

    const increseItemCount = () => {
        setAddIetmCount(addIetmCount + 1);
    }

    const DecreaseItemCount = () => {
        if(addIetmCount > 0){
            setAddIetmCount(addIetmCount - 1);
        }
    }


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={'assets/img/product-1.png'} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs container direction="column" spacing={2} style={{ float: "right", marginTop: "10%", margin: "10%" }}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Google Pixel - Black
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Company: GOOGLE
                                </Typography>
                            <Grid item direction="column" style={{ marginTop: "10%" }} >

                                {/* <RemoveIcon fontSize="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={DecreaseItemCount} >
                                    
                                </RemoveIcon> */}
                                <IconButton
                                    color="primary"
                                    variant="outlined"
                                    onClick={DecreaseItemCount}>
                                    <RemoveIcon/>
                                </IconButton>
                                <span style={{ margin: "8px" }} >
                                    {addIetmCount}
                                </span>
                                <IconButton
                                    size="small"
                                    variant="outlined"
                                    color="secondary"
                                    style={{ marginLeft: "2%" }}
                                    onClick={increseItemCount}
                                    >
                                        <AddIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item direction="column" style={{ marginTop: "40%" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={< AddShoppingCartIcon />}>
                                    Add to cart
                                    </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{ marginLeft: "2%" }}
                                    className={classes.button}
                                    startIcon={<ShoppingCartIcon  />}>
                                    Buy Now
                                    </Button>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item>
                    <FiberNewIcon style={{ color: green[500], fontSize: 40 }} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
