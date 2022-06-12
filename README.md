# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

It exists to demonstrate an issue using Protocol Buffer serialization and deserialization from `@protobuf-ts/plugin`. Note that you can use the command `npx protoc --ts_out ./src/proto --proto_path protos protos/msg.proto` to recreate the contents of `src/proto` after modifying the contents of the `protos` directory.

To reproduce this issue, perform the following steps:
* Clone the repo and run `npm install` from its directory
* Run `npm run start` and navigate to [localhost](http://localhost:3000/test). If you open the dev tools, you will see that there are no issues.
* run `npm run build` and then `npm run serve`. Open the browser dev tools and navigate to [localhost](http://localhost:3000/test). You will see that an error like the one below shows up in the console.
```
Uncaught (in promise) TypeError: class constructors must be invoked with 'new'
    a http://localhost:3000/assets/js/46169e7c.eaa30263.js:1
    5568 http://localhost:3000/assets/js/46169e7c.eaa30263.js:1
    o http://localhost:3000/assets/js/runtime~main.9bc87d77.js:1
    promise callback*723/u["46169e7c"]< http://localhost:3000/assets/js/main.45756f3d.js:2
    d http://localhost:3000/assets/js/main.45756f3d.js:2
    f http://localhost:3000/assets/js/main.45756f3d.js:2
    f http://localhost:3000/assets/js/main.45756f3d.js:2
    h http://localhost:3000/assets/js/main.45756f3d.js:2
    preload http://localhost:3000/assets/js/main.45756f3d.js:2
    N http://localhost:3000/assets/js/main.45756f3d.js:2
    N http://localhost:3000/assets/js/main.45756f3d.js:2
    9383 http://localhost:3000/assets/js/main.45756f3d.js:2
    o http://localhost:3000/assets/js/runtime~main.9bc87d77.js:1
    <anonymous> http://localhost:3000/assets/js/main.45756f3d.js:2
    O http://localhost:3000/assets/js/runtime~main.9bc87d77.js:1
    <anonymous> http://localhost:3000/assets/js/main.45756f3d.js:2
    t http://localhost:3000/assets/js/runtime~main.9bc87d77.js:1
    <anonymous> http://localhost:3000/assets/js/main.45756f3d.js:2
46169e7c.eaa30263.js:1:238

​```