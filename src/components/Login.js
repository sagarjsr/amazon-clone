import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Login = (e) => {

    const classes = useStyles();

    const [userData, setUserData] = useState({
        name: "",
        password: ""
    })

    const handleChange = (name) => (e) => {
        setUserData({ ...userData, [name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData)
    }

    return (
        <div>
            <from className={classes.root} noValidate autoComplete="off" >
                <TextField disabled id="standard-disabled"
                    value={userData.name}
                    onChange={handleChange('name')}
                    label="Name" />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    value={userData.password}
                    onChange={handleChange('password')}
                    autoComplete="current-password"
                />
                <Button variant="contained" className={classes.button} onClick={handleSubmit}>
                    Submit
                    </Button>
            </from>
        </div>
    )
}

export default Login
