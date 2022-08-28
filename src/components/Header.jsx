import logo from './../assets/postman.png';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    div:{
        margin: "0 20",
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    logo:{
        flex:1,
        maxWidth:50,
        padding:20,
        "&:hover":
        {
            backgroundColor:'rgba(255,105,55,1)',
            borderRadius:"50%"
        }
    },
    name:{
        flex:1,
        padding:20,
        maxWidth:100,
        fontWeight:1000,
        fontFamily:"sans-serif",
        fontSize:20,
        color:"#F26B3A"
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <img src={logo} alt="logo" className={classes.logo} />
            <span className={classes.name}>POSTMAN</span>
        </div>
    )
}

export default Header;