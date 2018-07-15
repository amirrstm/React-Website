import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';
import { classNames } from 'classnames';
import Header from './Header';
import Component from './Component';
import Footer from './Footer';


const styles = theme => ({
  container : {
      height : '70%',
  },
  component : {
      height : '100%',
  },
  cover : {
      position : 'absolute',
      top : '100px',
      zIndex : '10',
      height : '400px',
      width : '80%'
  },
  mainText : {
    fontFamily: '"Playfair Display", serif',
    fontSize : '60px',
    width : '100%'
  },
  mainSubText : {
    fontFamily: '"Playfair Display", serif',
    fontSize : '40px',
    width : '100%'
  }
});



class App extends React.Component {
    render() {

		const {classes} = this.props;
	
        return (
            <div>
                <Header />

                <Grid container justify="center">
                    <Grid item lg={12} className={classes.cover} align="center">
                        <h1 className={classes.mainText}>Apple Products</h1>
                        <h1 className={classes.mainSubText}>A New Generation Of Tech.</h1>
                    </Grid>
                </Grid>

                <Grid container className={classes.container} justify="space-around">
                    <Grid item lg={12} className={classes.component} >
                        <Component 
                            image = {require('../images/mac.png')}
                            headText="MacBook"
                            subText="Light. Years ahead."
                            description="Our goal with MacBook was to do the impossible: engineer a full‑size experience into the thinnest, lightest Mac notebook yet. And not only is it compact — it’s more powerful than ever. The new MacBook delivers up to 20 percent faster performance with new seventh‑generation Intel Core m3, i5, and i7 processors, and up to 50 percent faster SSD storage."
                            background = '#fff'
                            color = '#000'
                        />
                    </Grid>
                    <Grid item lg={12} className={classes.component} >
                        <Component 
                            image = {require('../images/iphone.png')}
                            headText="Iphone X"
                            subText="Say hello to the future."
                            description='The 10th anniversary Apple iPhone is here, and it’s called the iPhone X (pronounced “iPhone Ten”). The Cupertino, California-based company made it official at an event on the Apple Campus in the Steve Jobs Theater — and in our iPhone X review, we call it “the best iPhone ever.”'
                            background = '#eee'
                            color = '#000'
                        />
                    </Grid>
                    <Grid item lg={12} className={classes.component} >
                        <Component 
                            image = {require('../images/imac.png')}
                            headText="iMac Pro"
                            subText="Power to the pro."
                            description='Pros love iMac. So we created one just for you. It’s packed with the most powerful graphics and processors ever in a Mac, along with the most advanced storage, memory, and I/O — all behind a breathtaking Retina 5K display in a sleek, all-in-one design. For everyone from photographers to video editors to 3D animators to musicians to software developers to scientists, iMac Pro is ready to turn your biggest ideas into your greatest work.'
                            background = 'black'
                            color = '#fff'
                        />
                    </Grid>
                </Grid>

                <Footer />
            </div>
        );
    }

}



App.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
  };
  
  export default compose(
	withStyles(styles),
	withWidth(),
  )(App);