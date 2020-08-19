import React, { Component } from 'react'
import Tab from "./components/Tab"

export default class MainArea extends Component {
    render() {
        return (
            <div>
                <Tab name={"Web developers"} />
                <Tab name={"HTML"} />
                <Tab name={"Google"} />
            </div>
        )
    }
}
