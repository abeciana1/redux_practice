import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {

    console.log(props)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     buyCake
// })

const mapDispatchToProps = {
    buyCake
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
