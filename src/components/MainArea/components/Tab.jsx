import React, { Component } from 'react'
import Item from "./components/Item"

export default class Tab extends Component {
    render() {
        return (
            <div>
                Tab {this.props.name}
                <Item></Item>
                <Item></Item>
            </div>
        )
    }
}
