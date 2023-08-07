import React, { Component } from 'react';


export interface MyClassProps { name?: string; isMarried: boolean; }
export interface MyClassState { age: number; }

class MyClass extends React.Component<MyClassProps,MyClassState> {
    public static defaultProps: Partial<MyClassProps> = {
        name:'chandravaibhav98'
    }
    state = {
        age:21
    }
    render() {
        return (
            <div className="App">
                <h4>My Class</h4>
                <h4>{this.props.isMarried}</h4>
                <h4>Name : Age</h4>
                <h4>{this.props.name} : {this.state.age}</h4>
            </div>
        );
    }
}

export default MyClass;