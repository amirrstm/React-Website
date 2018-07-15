import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root : {
        height : '80%',
        opacity : .8
    },

    text : {
        fontFamily : 'Roboto'
    },

    newText : {
        fontFamily : 'Roboto' ,
        width : '100%',
        textAlign : 'right'
    },

    footerList : {
        paddingTop : '5px',
        listStyle : 'none'
    },

    listItem : {
        display : 'inline-block',
        paddingLeft : theme.spacing.unit * 4,
        paddingRight : theme.spacing.unit * 4,
        borderRight : '1px solid #424242',
        '&:nth-child(4)' : {
            borderRight : 'none'
        }
    },

    item : {
        textDecoration : 'none',
        color : '#000'
    }

    
});



class Footer extends React.Component {
    
    render() {

        const {classes} = this.props;

        const MenuListCreate = props => {
            return (
                <li className={classes.listItem}><a className={classes.item} href="#!">{props.name}</a></li>
            );
        }
        
        return (
            <div>
                <Grid container justify="center" className={classes.root}>
                    <Grid item lg={8}>
                        <Grid container>
                            <h3 className={classes.text}> Copyright © 2018 Apple Inc. All rights reserved.</h3>
                            <ul className={classes.footerList} >
                                <MenuListCreate name="Mac"/>
                                <MenuListCreate name="iPad"/>
                                <MenuListCreate name="iPhone"/>
                                <MenuListCreate name="Watch"/>
                            </ul>
                            <h4 className={classes.newText}>United States</h4>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
  };
  
  export default compose(
	withStyles(styles),
	withWidth(),
  )(Footer);