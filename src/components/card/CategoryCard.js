import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "20px",
        marginRight: "30px",
        marginLeft: "30px"

    },
    card: {
        maxWidth: 350,
        maxHeight: 250,
        boxShadow:"1px 1px 8px #dbdde0"
        
    },
    media: {
        height: 120,
    },
}));

const CategoryCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea style={{textAlign:'center'}}>
                            <CardMedia
                                className={classes.media}>
                                    <LaptopIcon style={{width:'200px', height:'120px',margin:'20px',color:"green"}} />
                                    </CardMedia>
                            <CardContent>
                                <Typography gutterBottom style={{color:"#569CD6"}} variant="h5" component="h3">
                                    Laptops
                                </Typography>
                                <Typography style={{color:"#2C9164"}} variant="body2" variant="h6" component="h3">
                                    Upto 20% off
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Dell, Sony, ASUS, Lenovo
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                <Card className={classes.card}>
                        <CardActionArea style={{textAlign:'center'}}>
                            <CardMedia
                                className={classes.media}>
                                    <PhoneIphoneIcon style={{width:'200px', height:'120px',margin:'20px',color:"#DC3645"}} />
                                    </CardMedia>
                            <CardContent>
                                <Typography style={{color:"#569CD6"}} gutterBottom variant="h5" component="h3">
                                  Smartphones
                                </Typography>
                                <Typography style={{color:"#2C9164"}} variant="body2" variant="h6" component="h3">
                                    Upto 15% off
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Apple, Samsung, Mi, Poco
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                <Card className={classes.card}>
                        <CardActionArea style={{textAlign:'center'}}>
                            <CardMedia
                                className={classes.media}>
                                    <HeadsetMicIcon style={{width:'200px', height:'120px',margin:'20px',color:"#6C757D"}} />
                                    </CardMedia>
                            <CardContent>
                                <Typography style={{color:"#569CD6"}} gutterBottom variant="h5" component="h3">
                                    Headphones & Earphones
                                </Typography>
                                <Typography style={{color:"#2C9164"}} variant="body2" variant="h6" component="h3">
                                    Upto 30% off
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sony, JBL, boAt, Sennheiser
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                <Card className={classes.card} >
                        <CardActionArea style={{textAlign:'center'}}>
                            <CardMedia
                                className={classes.media}>
                                    <PersonIcon style={{width:'200px', height:'120px',margin:'20px',color:"#0853A6"}} />
                                    </CardMedia>
                            <CardContent>
                                <Typography gutterBottom style={{color:"#569CD6"}} variant="h5" component="h3">
                                Clothing & Accessories
                                </Typography>
                                <Typography style={{color:"#2C9164"}} variant="body2" variant="h6" component="h3">
                                    Upto 50% off
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Levi's, Wrangler, Pepe Jeans, Louis Philippe
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CategoryCard