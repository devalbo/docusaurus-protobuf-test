import { Person } from '@site/src/proto/msg';
import React from 'react';

const doProtobufThing = () => {
  const p: Person = {
    name: "abc",
    id: 123n,
    years: 5
  }

  console.log("ABOUT TO CALL .toBinary()");
  const pb = Person.toBinary(p);
  console.log("DONE CALLING .toBinary()");
  console.log(pb);
}

export default function Home(): JSX.Element {

  return (
    <>
    TEST2
    <button onClick={() => doProtobufThing()} >Do Protobuf thing</button>
    </>
  );
}
