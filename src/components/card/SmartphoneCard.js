import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router";
import { storeProducts } from '../../data/SmartphoneData';

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
        boxShadow: "1px 1px 8px #dbdde0"

    },
    media: {
        height: 120,
    },
}));

const CategoryCard = () => {
    const history = useHistory();
    const classes = useStyles();

    const navigatetoPrdetails = (id) => {
   // history.push(`/productdetails/:${id}`);
}

return (
    <div className={classes.root}>
        <Typography color="textSecondary" variant="h5" component="h3">
            Smartphones
                                </Typography>
        <br></br>
        <Grid container spacing={2}>
            {storeProducts.map((item) =>
                <Grid key={item.id} item xs={3} onClick={navigatetoPrdetails({id:item.id})}>
                    {console.log(item.img)}
                    <Card className={classes.card}>
                        <CardActionArea style={{ textAlign: 'center' }}>
                            <CardMedia
                                className={classes.media}>
                                <img src={item.img} alt={item.title} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom style={{ color: "#569CD6" }} variant="h5" component="h3">
                                    {item.title}
                                </Typography>
                                <Typography style={{ color: "#2C9164" }} variant="body2" variant="h6" component="h3">
                                    {item.company}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )}

        </Grid>
    </div>
);
}

export default CategoryCard