import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { washApple, eatApple, rotApple, bgApple, toggle, essayer } from '../actions/index';

const Apple = ({ washApple, eatApple, rotApple, bgApple, toggle, essayer, dirty, remainingBites, color, background, stateToggle, essai  }) => (
    <div style={{backgroundColor:`${background}`}}>
        <p>Dirty: {dirty ? 'true' : 'false'}</p>
        <p>Remaining bites: {remainingBites}</p>
        <p>Color: {color}</p>
        <p style={{color:`${color}`}}>text</p>
        <p>State toggle : {stateToggle ? 'true' : 'false'}</p>
        <p>Essai : {essai}</p>

        <button onClick={washApple}>Wash apple</button>
        <button onClick={eatApple}>Eat apple</button>
        <button onClick={rotApple}>Rot apple</button>
        <button onClick={bgApple}>Bg apple</button>
        <button onClick={toggle}>Toggle button</button>
        <button onClick={essayer}>Essayer</button>
    </div>
);

const mapStateToProps = (state) => ({
    dirty: state.apple.dirty,
    remainingBites: state.apple.remainingBites,
    color: state.apple.color,
    background: state.apple.background,
    stateToggle: state.apple.stateToggle,
    essai: state.other.essai
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    washApple,
    eatApple,
    rotApple,
    bgApple,
    toggle,
    essayer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Apple); // Connects `Apple` to the Redux store