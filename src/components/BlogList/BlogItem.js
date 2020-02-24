import React from 'react'



// 实际上这是一个展示组件容器组件  （dumb/presentational components）
export default function BlogItem(props) {

    return (
        <li>
           
           <h3>{props.title}</h3>
           <p>{props.body}</p>
        </li>
    )
}
