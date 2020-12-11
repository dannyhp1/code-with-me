import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Code with Me
            </Typography>
            {/* <Button color='inherit'>Source Code</Button> */}
          </Toolbar>
        </AppBar>
    )
};

export default Header;