# RESTy (Lab 26)

## Project: RESTy REST Client

### Author: Tyler Bennett

### Problem Domain  

Use react to create a postman-lite service called RESTy

### Links and Resources

- [ci/cd](https://github.com/tyler-bennett52/resty/actions) (GitHub Actions)
- [Sandbox (main)](https://jbds38-3000.csb.app/)
- [Sandbox (state)](https://jfbbg1-3000.csb.app/)
- [Sandbox (class-26)](https://m8ce6t-3000.csb.app/)
- [Sandbox (effect-hook)](https://75nqbr-3000.csb.app)

### Setup

#### How to initialize/run your application (where applicable)

- npm i to install dependencies
- npm start to open page
- alternatively access the app at this url <https://jbds38-3000.csb.app/>

#### Features / Routes

Right now only mocks data. Press the GO button to see the appearance and locaition of mocked JSON data.

#### Tests

npm test - Component level tests are fine, but I am still struggling to get axios to work. For whatever reason it doesn't like my axios import. I considered a rewrite to fetch, but I don't know how to pull non-body info out of there so I am stuck with axios for now. 

#### UML

![Lab-26 UML](./public/resty-day1-UML%20(1).png)

#### Attribution

Built from starter code. Used chatGPT to generate sample tests which showed me the getByText and getByLabelText methods. Used that format for the majority of my tests.
