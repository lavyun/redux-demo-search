import React, { Component } from 'react'

export default class Input extends Component {
    constructor (props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    render () {
        return (
            <div>
                <input type="text" ref="input"
                       onInput={() => this.handleInput()}
                       onKeyUp={e => this.handleKeyUp(e)}
                />
                <button onClick={() => this.handleClick()}>搜索</button>
            </div>
        )
    }

    handleKeyUp (e) {
        const {data, activeIndex} = this.props.list
        const {setLinksActive} = this.props
        const listLength = data.length
        const inputNode = this.refs.input
        let c = activeIndex

        switch (e.keyCode) {
            case 40:  // down press
                setLinksActive(c === listLength -1 ? 0 : ++c)
                inputNode.value = data[c]
                break
            case 38:  // up press
                setLinksActive(c === 0 ? listLength - 1 : --c)
                inputNode.value = data[c]
                break
            case 13:  // enter press
                open("https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=" + inputNode.value)
        }
    }

    handleInput () {
        var value = this.refs.input.value.trim()
        if (this.state.keyword !== value) {
            this.props.requestList(value)
        }
        this.setState({
            keyword: value
        })
    }

    handleClick () {
        const inputNode = this.refs.input
        open("https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=" + inputNode.value)
    }
}