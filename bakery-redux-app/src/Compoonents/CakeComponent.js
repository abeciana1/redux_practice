import React from 'react'
import { connect } from 'react-redux'

import { bakeCake, sellCake } from '../actions/cake-actions'

const CakeComponent = (props) => {

    return (
    <React.Fragment>
        <div
            style={{
                backgroundColor: "#FFAFC5",
                padding: "20px",
                width: "25%"
            }}>
            <img src="https://chelsweets.com/wp-content/uploads/2020/04/adding-sprinkles-to-top-of-cake-2-scaled-720x720.jpg" alt="Cake" style={{ "width": "100%" }} />
            <br />
            <br />
            <b>{props.cake} Cakes</b>
            <br />
            <br />
            <button onClick={props.sellCake}>Sell Cake</button>
            <br />
            <br />
            <button onClick={props.bakeCake}>Bake Cake</button>
            <br />
            <br />
        </div>
    </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return state.cake
}

const mapDispatchToProps = {
    bakeCake,
    sellCake,
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)