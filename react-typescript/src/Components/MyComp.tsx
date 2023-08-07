import * as React from 'react';

type MyCompProps = {
    name: string,
    isMarried: boolean,
    kids: number,
    livedin:string,
}
const MyComp = (props:MyCompProps) => {
  return (
    <div>
          <p>My name is {props.name}</p>
          <p>{props.isMarried};Kids: {props.kids};{props.livedin}</p>
    </div>
  )
}

export default MyComp
