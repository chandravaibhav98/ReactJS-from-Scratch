//@flow
import React, { Component } from 'react';
import './App.css';


type TestProps = {
    str: String,
    num: Number,
    arr:Array<number>
};
type TestState = {
    message:string
}
type FuncProp = {
    str: string,
    children: number
}
const funcComponent = (props) => {
    return <div>props.str</div>
}
class Test extends Component<{ TestProps, TestState }> {
    static defaultProps = {
        str:'chandravaibhav98'
    }
    state  = {
        message:'hi'
    }
    h2: HTMLHeadingElement;
    render() {
		return (
			<div className="App">
                <h1>{this.props.str}</h1>
                <h1>{this.props.num}</h1>
                <h1>{this.props.arr.map(val => val)}</h1>
                <h2 ref={h=>this.h2=h}>{this.state.message}</h2>
			</div>
		);
	}
}
export default Test;