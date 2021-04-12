import React from 'react';

import { connect } from "react-redux"
import { getBakers } from '../actions/baker-actions'

const BakerComponent = (props) => {
    
    console.log(props)
    return (
        <React.Fragment>
            {props.bakers.map(baker => <ul><li>{baker.name}</li></ul>)}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state.baker
}

const mapDispatchToProps = {
    getBakers
}


export default connect(mapStateToProps, mapDispatchToProps)(BakerComponent);