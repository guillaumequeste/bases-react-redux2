import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { washApple, eatApple, rotApple, bgApple } from '../actions/index';

const Apple = ({ washApple, eatApple, rotApple, bgApple, dirty, remainingBites, color, background  }) => (
    <div style={{backgroundColor:`${background}`}}>
        <p>Dirty: {dirty ? 'true' : 'false'}</p>
        <p>Remaining bites: {remainingBites}</p>
        <p>Color: {color}</p>
        <p style={{color:`${color}`}}>text</p>

        <button onClick={washApple}>Wash apple</button>
        <button onClick={eatApple}>Eat apple</button>
        <button onClick={rotApple}>Rot apple</button>
        <button onClick={bgApple}>Bg apple</button>
    </div>
);

const mapStateToProps = (state) => ({
    dirty: state.apple.dirty,
    remainingBites: state.apple.remainingBites,
    color: state.apple.color,
    background: state.apple.background
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    washApple,
    eatApple,
    rotApple,
    bgApple,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Apple); // Connects `Apple` to the Redux store