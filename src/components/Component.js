import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';
import { classNames } from 'classnames';

import Image from '../smith.jpg'


const styles = theme => ({
    root : {
        height : '100vh',
    },
    componentMain : {
        height : '100%',
        marginTop : theme.spacing.unit * 6,
        paddingBottom : '50px',
        paddingTop : '50px',
        borderBottom : '1px solid #eee',
        
    },
    component : {
        height : '100%',
        fontFamily: '"Playfair Display", serif'
    },
    firstText : {
        fontSize : '40px',
        display : 'block',
        width : '100%',
        lineHeight : '10px'
    },
    secondText : {
        fontSize : '50px',
        display : 'block',
        width : '100%',
        lineHeight : '10px'  
    },
    typo : {
        marginLeft : '40px',
        paddingLeft: '10px',
        textAlign: 'left',
        borderLeft: 'none',
        borderLeft: '5px solid gray',
        fontSize: '20px',
        lineHeight: '40px'
      },
});





class Component extends React.Component {
    render() {

		const {classes} = this.props;
	
        return (
            <Grid container justify="center" style={{background: this.props.background, color : this.props.color}}>
                <Grid item lg={11} className={classes.componentMain}>
                    <Grid container>
                        <Grid item lg={6} className={classes.component}>
                            <Grid container justify="center" alignItems="center">
                                <img src={this.props.image} width="60%" height="60%"/>
                            </Grid>
                        </Grid> 
                        <Grid item lg={6} className={classes.component}>
                            <Grid container >
                                <h1 className={classes.firstText}>{this.props.headText}</h1>
                                <h2 className={classes.secondText}>{this.props.subText}</h2>
                                <blockquote className={classes.typo}>
                                    {this.props.description}
                                </blockquote>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

Component.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
  };
  
  export default compose(
	withStyles(styles),
	withWidth(),
  )(Component);