## HKT48 宮脇咲良「AKB48 37th選抜総選挙」応援サイト

This project is a cheering web page for HKT48 member [宮脇咲良](http://www.hkt48.jp/profile/sakura_miyawaki.html) with [2014 AKB48 第六回選抜総選挙](https://ja.wikipedia.org/wiki/AKB48_37th%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E9%81%B8%E6%8A%9C%E7%B7%8F%E9%81%B8%E6%8C%99)

![cover](http://i.imgur.com/g0qRXUq.jpg)

### [http://sakura.tpe48.com.tw](http://sakura.tpe48.com.tw)

[![Build Status](https://travis-ci.org/amowu/sakura.svg?branch=develop)](https://travis-ci.org/amowu/sakura)

## Project Structure

Overview

```
├── app                  - Client
│   ├── data             - Static data files
│   ├── i18n             - Language files
│   ├── images
│   ├── scripts
│   │   ├── app.js	       - Main Application Script
│   │   ├── controllers  - AngularJS Controller
│   │   └── directives   - AngularJS Directive
│   ├── styles
│   │   └── main.scss    - Sass CSS
│   └── views
│       ├── index.html   - Main Application Page
│       └── partials     - AngularJS Partial Page
│
└── lib                  - Server
 
```

## Development

### Install Yeoman [http://yeoman.io/](http://yeoman.io/)

![logo](http://i.imgur.com/BlX7ugv.png)

```
$ npm install -g yo
```

### Install AngularJS Full-Stack generator [GitHub](https://github.com/DaftMonk/generator-angular-fullstack)

```
$ npm install -g generator-angular-fullstack
```

### Quick Start

#### Cloning The GitHub Repository

```
$ git clone https://github.com/amowu/sakura.git
```

This will clone the latest version of the project repository to a `sakura` folder.

```
$ cd sakura
```

#### Quick Install

Once you've installed yeoman, you're just a few steps away from starting to develop you application.

```
$ npm install
```

This command does a few things:

- First it will install the dependencies needed for the application to run.
- If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.

Finally, use bower installcommand to install all the front-end modules needed for the application

```
$ bower install
```

#### Running Your Application

Preview the app (with Livereload).

```
$ grunt serve
```

![result]()

Run the unit tests for the app.

```
$ grunt test
```

#### Deploy Your Application

Build an optimized, production-ready version of your app to `dist` folder.

```
$ grunt build
```

![end](http://i.imgur.com/6D2U2Gy.png)