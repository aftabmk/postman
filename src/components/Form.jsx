import { useContext } from 'react';

import { Select, MenuItem, TextField, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { DataContext } from '../context/DataProvider';

const useStyles = makeStyles({
    component:{
        display:"flex",
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection:"row",
        flexWrap:'no-wrap',
        "@media(maxWidth:568px)":
        {
            flexDirection:["column",'!important'],

        }
    },
    select:{
        width:150,
        height:55,
        marginRight:[5,'!important'],
        borderRadius:['27px 0  0 27px ','!important'],
    },
    textfield:{
        height:55,
        padding:0,
        width:'100%',
        background:'#f6f6f6',
    },
    button:{
        height:55,
        width:150,
        marginLeft:[5,'!important'],
        backgroundColor:["#F26B3A",'!important'],
        borderRadius:['0 27px 27px 0','!important'],
        "&:hover":
        {
            backgroundColor:["#ffd700","!important"],
            color:["#F26B3A",'!important'],
            fontWeight:[600,"!important"]
        }
    },
    
})

const Form = ({ onSendClick }) => {
    const classes = useStyles();

    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <Box className={classes.component}>
            <Select 
                className={classes.select} 
                value={formData.type} 
                label="POST" 
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'GET'}>GET</MenuItem>
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value='DELETE'>DELETE</MenuItem>
            </Select>
            <TextField 
                size="Normal" 
                className={classes.textfield} 
                onChange={(e) => onUrlChange(e)}
            />
            <Button className={classes.button} variant="contained" onClick={() => onSendClick()}>Send</Button>
        </Box>
    )
}

export default Form;