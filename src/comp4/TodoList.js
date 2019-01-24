import React, {Component} from 'react'


class TodoList extends Component {

    removeHandler = (e) =>{
        console.log('removeHandler')
        const target = e.target
        console.log(target.getAttribute("data-idx"))
        const idx = target.getAttribute("data-idx")
        this.props.remove(idx)
    }

    render(){

        const todoLi = this.props.arr.map((item,index)=>
            <li key={index}>{item}<button data-idx={index} onClick={this.removeHandler}>DELETE</button></li>)

        return (
            <div >
                <ul>
                {todoLi}
                </ul>
            </div>
        )
    }

}

export default TodoList