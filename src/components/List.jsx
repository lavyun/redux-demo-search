import React, { Component } from 'react'

export default class List extends Component {
    render () {
        const {data, show, activeIndex} = this.props.list

        return (
            <ul style={{display: show ? 'none' : 'block'}}>
                {
                    data.map((v, i) => {
                        return (
                            <li className={i === activeIndex ? 'li-bc' : ''} key={i}>
                                <a href={`https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=${v}`}>
                                    {v}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}