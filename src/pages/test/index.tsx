import { Person } from '@site/src/proto/msg';
import React from 'react';




export default function Home(): JSX.Element {

  const p: Person = {
    name: "abc",
    id: 123n,
    years: 5
  }

  const pb = Person.toBinary(p);
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
