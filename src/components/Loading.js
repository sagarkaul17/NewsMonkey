import React, { Component } from 'react'
import loading from './loading.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loading} alt="loading" height={200} width={200}/>
            </div>
        )
    }
}