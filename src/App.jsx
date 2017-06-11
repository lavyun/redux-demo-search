import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestList, setLinksActive} from './redux/actions'
import Input from './components/Input'
import List from './components/List'

class App extends Component {
    render () {
        const {dispatch, list} = this.props
        return (
            <div>
                <Input
                    requestList={text => dispatch(requestList(text))}
                    setLinksActive={index => dispatch(setLinksActive(index))}
                    list={list}
                />
                <List list={list}/>
            </div>
        )
    }
}

App.propTypes = {
    list: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.string),
        show: PropTypes.bool,
        activeIndex: PropTypes.number
    })
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(function (state) {
    return {
        list: state.list
    }
})(App)