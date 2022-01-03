import React, { Component } from 'react'
import img from './ajax-loader.gif'
export class Loader extends Component {
    render() {
        return (
            <>
                <img src={img} alt="" />
            </>
        )
    }
}

export default Loader
