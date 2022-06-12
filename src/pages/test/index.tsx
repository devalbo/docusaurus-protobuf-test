import { Person } from '@site/src/proto/msg';
import React from 'react';




export default function Home(): JSX.Element {

  const p: Person = {
    name: "abc",
    id: 123n,
    years: 5
  }

  // Something happens in the Person.toBinary() call that requires a constructor
  // in prod mode, but not in dev mode.
  console.log("ABOUT TO CALL .toBinary()");
  const pb = Person.toBinary(p);
  console.log("DONE CALLING .toBinary()");
  console.log(pb);


  
  return (
    <>
    TEST
    </>
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />">
    //   <HomepageHeader />
    //   <main>
    //     <HomepageFeatures />
    //   </main>
    // </Layout>
  );
}
