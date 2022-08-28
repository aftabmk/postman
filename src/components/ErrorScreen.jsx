import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import error from './../assets/error.png'

const useStyles = makeStyles({
    error: {
        width: '60%',
        height: 'auto',
        objectPosition: 'center 0%',
        margin: 'auto'
    }
})

const ErrorScreen = () => {
    const classes = useStyles();

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{ display: 'flex' }}>
                <img src={error} alt="error" className={classes.error} />
            </Box>
        </Box>
    )
}

export default ErrorScreen;