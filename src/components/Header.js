import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';

import Image from '../images/smith.jpg'


const styles = theme => ({
    root : {
        height : '100vh'
    },

    headerBack : {
        height : '100%',
        background : `url(${Image}) no-repeat center center fixed`,
        backgroundSize : 'cover',
        filter : 'blur(2px)'
    },

    header : {
        fontFamily : 'Roboto',
        position : 'absolute',
        top : '0',
        height : '100px',
        background : '#323232',
        opacity : .9,
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
        color : '#fff'
    },

    headerRight : {
        height : '100%',
        fontFamily: '"Playfair Display", serif'
    },

    menuList : {
        listStyle : 'none',
        
    },

    listItem : {
        display : 'inline-block',
        paddingLeft : theme.spacing.unit * 15
    },

    item : {
        textDecoration : 'none',
        color : '#fff',
        fontSize : '18px',
        '&:hover' : {
            color : '#e4e4e4'
        }
    }
});



class Header extends React.Component {
    
    render() {

        const {classes} = this.props;
        
        const MenuListCreate = props => {
            return (
                <li className={classes.listItem}><a className={classes.item} href="#!">{props.name}</a></li>
            );
        }
	
        return (
            <div>
                <Grid container spacing={0} className={classes.root}>
                    <Grid item className={classes.headerBack} xs={12}></Grid>
                    <Grid container className={classes.header}>
                        <Grid item lg={1} className={classes.headerRight}>
                            <Grid container justify="center" alignItems="center" className={classes.headerRight}>
                                <img src={require('./images/app.png')} width="45px" height="45px" />
                            </Grid>
                        </Grid>
                        <Grid item lg={11} className={classes.headerRight}>
                            <Grid container justify="flex-start" alignItems="center" className={classes.headerRight}>
                                <ul className={classes.menuList}>
                                    <MenuListCreate name="Mac"/>
                                    <MenuListCreate name="iPad"/>
                                    <MenuListCreate name="iPhone"/>
                                    <MenuListCreate name="Watch"/>
                                    <MenuListCreate name="TV"/>
                                    <MenuListCreate name="Music"/>
                                    <MenuListCreate name="Support"/>
                                    <MenuListCreate name="Where To Buy"/>
                                    <MenuListCreate name={<Search />}/>
                                </ul>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
  };
  
  export default compose(
	withStyles(styles),
	withWidth(),
  )(Header);