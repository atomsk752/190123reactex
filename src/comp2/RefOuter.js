import React, {Component} from 'react'
import RefInner from './RefInner'


class RefOuter extends Component{


    changeHandler = (e) => {
        console.log("outer change click")

        this.inner.setState({
            title:'Outer Call inner ctr'
        })
    }

    render(){
        return(
            <div>
                <h2>바깥쪽 부모 컴포넌트</h2>
                <button onClick={this.changeHandler}>change</button>
                <RefInner ref={(ref)=>this.inner=ref}/>
            </div>
        )
    }

}

export default RefOuter