import $ from 'jquery'

export const SET_LIST = 'SET_LIST'   // 设置列表
export const SET_LINKS_ACTIVE = 'SET_LINKS_ACTIVE'  // 设置列表的active索引

export function requestList (text) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: 'https://sug.so.360.cn/suggest?word=' + text + '&encodein=utf-8&encodeout=utf-8',
            type: 'get',
            dataType: "jsonp"
        }).done(function (data) {
            resolve({
                type: 'SET_LIST',
                list: data.s
            })
        })
    })
}

export function setLinksActive (index) {
    return {
        type: SET_LINKS_ACTIVE,
        index: index,
    }
}
