// import React from 'react';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import * as locales from '@material-ui/core/locale';

// export default function Locales() {
//   const [locale, setLocale] = React.useState('hiIN');

//   return (
//     <div>
//       <ThemeProvider theme={(outerTheme) => createMuiTheme(outerTheme, locales[locale])}>
//         <Autocomplete
//           options={Object.keys(locales)}
//           getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
//           style={{ width: 300 }}
//           value={locale}
//           disableClearable
//           onChange={(event, newValue) => {
//             setLocale(newValue);
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="自动完成" variant="outlined" fullWidth />
//           )}
//         />
//       </ThemeProvider>
//     </div>
//   );
// }import React from 'react';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import * as locales from '@material-ui/core/locale';

// export default function Locales() {
//   const [locale, setLocale] = React.useState('hiIN');

//   return (
//     <div>
//       <ThemeProvider theme={(outerTheme) => createMuiTheme(outerTheme, locales[locale])}>
//         <Autocomplete
//           options={Object.keys(locales)}
//           getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
//           style={{ width: 300 }}
//           value={locale}
//           disableClearable
//           onChange={(event, newValue) => {
//             setLocale(newValue);
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="自动完成" variant="outlined" fullWidth />
//           )}
//         />
//       </ThemeProvider>
//     </div>
//   );
// }




import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import LanguageIcon from '@material-ui/icons/Language';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(2),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [age, setAge] = React.useState('<LanguageIcon/>10');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}>
                    <option value={10}><LanguageIcon /> IND</option>
                    <option value={20}>US</option>
                    <option value={30}>UK</option>
                </NativeSelect>
            </FormControl>
            <p style={{ color: 'white' }}>
                <a>Australia</a>
                <a style={{ paddingLeft: "10px" }}> Brazil</a>
                <a style={{ paddingLeft: "10px" }}> Canada</a>
                <a style={{ paddingLeft: "10px" }} > China</a>
                <a style={{ paddingLeft: "10px" }} > France</a>
                <a style={{ paddingLeft: "10px" }}> United States</a>
            </p>
        </div>
    );
}


