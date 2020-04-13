# Simple Landing page using KOFU JS

# Kofujs
![kofulogo](https://user-images.githubusercontent.com/38284764/74117680-78a4f980-4b86-11ea-9e8c-fc42cc1a676a.png)
#### KofuJS a slightly opinionated and elegant JS framework

## Use Kofu in your app
  - If you want to use the official Kofu starter app
```
      npm i -g create-kofujs-app gulp-cli yarn
```
  - If you want to create your own app from scratch create an npm project and run
  ```
      yarn add kofujs
  ```
  ### or
  ```
      npm i kofujs
  ```


## Live demo
  - [__Kofu Demo__](https://kofujs-demo.herokuapp.com/)

## Starter Generator (a la create-react-app )
  - [__Create-KofuJS-APP__](https://github.com/arthurbernierjr/create-kofujs-app)

## Frontend Framework using

  - Virtual Dom with Snabbdom
  - JSX
  - CSS-in-JS
  - Lodash ( map , filter and reduce)
  - RXJS ( The whole point is out of box Observables from the ground up)

## Starter Kit Contains
	- KofuJS
	- Vanilla Router
	- Webpack
	- BrowserSync
	- Babel
	- Gulp
	- Gulp-Nodemon

## Usage information
```
The `ko` object contains rxjs and will be further filtered down used to use Observables for Application Stae Management
The `fu`  object contains map, filter and reduce from lodash as well as the jss library for css in jss but note: CSS In JS is built into the Komponent class with the setStyles method
```

## What is in it Now
```JavaScript
  /*Komponent*/

  import {
    Komponent,
    render
  } from "kofujs";

  export class HelloWorld extends Komponent {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
    }

    komponentDidMount () {
      console.log('up')
    }
    handleClick() {
      console.log('hi')
    }

    render() {
      return <div className="container m-t"
      onClick={ this.handleClick }
      >
        <h1>Hello World</h1>
        </div>;
    }

  };

  render(<HelloWorld />, document.getElementById("app"));

```

```JavaScript

import {
  Komponent,
  render
} from "kofujs";

export class HelloWorld extends Komponent {
  constructor(props) {
    super(props);
    const styles = {
      mainHeader : {
        backgroundImage: `url('/assets/img/bg3.jpg')`
      }
    }
    // Adds the created CSS Classes to this
    // JSS is installed by default and can be used with the this.setStyles function
    const { classes } = this.setStyles(styles)
    this.classes = classes
    // User this.state or this.data or both
    this.state = {
      reactive: " this data must be updated with SetState"
    }
    this.data = {
      unReactive: "this is available also and this will be just an object and previous data is unreachable after a key is overwritten"
    }
    // Bind Functions if necessary
    this.handleClick = this.handleClick.bind(this)
  }
  komponentGenesis(){
    console.log('genesis')
  }
  komponentDidMount () {
    console.log('mounted')
  }
  handleClick() {
    console.log('hi')
    alert('On Click Works')
  }
// This is where you put the jsx that you want to render or present it is called present so that it doesn't get confused by the render method outsided the class
  present() {
    console.log('rendering')
    return (
      <div>
        <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100">
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#">
              KofuJS </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
              onClick={this.handleClick}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="material-icons">apps</i> Template
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`page-header header-filter ${this.classes.mainHeader}`}
        data-parallax="true"
        >
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="brand text-center">
                <h1>Hello World</h1>
                <h3 className="title text-center">It works</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <h2 className="title">KofuJS Concept Page</h2>
          </div>
        </div>
      </div>
      <footer className="footer footer-default">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://kofujs.io/">
                  Built with KofuJS
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
              { new Date().getFullYear() }, made with <i className="material-icons">favorite</i> by{' '}
            <a href="https://arthurbernierjr.com/" target="blank">Arthur Bernier Jr.</a> for a better web.
          </div>
        </div>
        </footer>
      </div>
    )
  }

};

render(<HelloWorld />, document.getElementById("app"));


```
```JavaScript
import { Komponent , render, fu} from '../../kofujs'

/*  Using fu.mapElements to display data from a list*/

const styles = {
  mainPageHeading: {
    backgroundColor: 'red'
  }
}

class Child extends Komponent {
  constructor (props)  {
    super (props)
  }
  present () {
    return( <h3>I am a child</h3>)
  }
}

class Example extends Komponent{
  constructor (props)  {
    super (props)
    this.classes = this.setStyles(styles).classes
  }

  komponentDidMount () {
    console.log('Hello world')
  }
    present () {
    const g = [1,2,3,4,5]

    return (
        <div>
        <h1 className={`${this.classes.mainPageHeading}`}> Hello World</h1>
          <div>{fu.mapElements( g, (item, i) => <li><Child /></li>)}</div>
        </div>
    )
  }
}

render(<Example />, document.getElementById('app'))

```
```
Not listed but included : import {ko} in your file and you can use all Rx.js methods ko contains all rx js methods, import {fu} and a simple utilities are included
export var fu = {
  map: map, // lodash map
  filter: filter, // lodash filter
  reduce: reduce, // lodash reduce
  css: jss, // jss is exported as fu.css
  preset: preset, // jss preset default
  color: color // color npm package
};

Coming Soon .kofu files with templates
Computed properties coming soon
```


# Getting started developing
  ``` bash
  git clone git@github.com:arthurbernierjr/kofujs.git
  cd kofujs
  ```
  ``` bash
  npm i -g gulp-cli
  ```
  ``` bash
  npm i
  ```
  ```bash
  npm run compile
  npm run watch
  ```
