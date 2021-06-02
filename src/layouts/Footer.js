import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Fragment } from 'react';
import Footerbrandlogo from '../assets/brandLogo.png';
import UpperFooter from './UpperFooter'

const useStyles = makeStyles({
    upperFooter: {

        width: '100%',
        position: 'fixed',
        bottom: '5%',
        height:'15%',
        paddingTop:'2%',
        backgroundColor: 'rgb(35,47,62)'
    },
    lowerFooter: {

        width: '100%',
        position: 'fixed',
        bottom: '0',
        backgroundColor: 'rgb(19,26,34)'
    },
    iconColor: {
        color: "white"
    }
});

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Fragment>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.upperFooter}>
                <img className={classes.title} src={Footerbrandlogo} alt="barnd_logo" width="220" height="80" /> 
                <UpperFooter />
            </BottomNavigation>   
             <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.lowerFooter}
            >
                <BottomNavigationAction style={{ color: "white" }} label="Amazon 2021" icon={<CopyrightIcon />} />
                <BottomNavigationAction className={classes.iconColor} label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction className={classes.iconColor} label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Fragment>
    );
}