# No-Code Preference Center React App

## Requirements

For development, you will only need Node.js installed on your environement.

Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.16.0

    $ npm --version
    6.9.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/horizontalintegration/ncpc-react-app.git
    $ cd PROJECT

### Install Node Dependencies

    $ npm install

### Start Web Service Proxy

When running locally, a proxy must be set up to avoid cross-domain issues when requesting data from web service endpoints.
(SEE: [https://www.npmjs.com/package/local-cors-proxy](https://www.npmjs.com/package/local-cors-proxy))

    $ lcp --proxyUrl http://horizontal-ncpc-dev.herokuapp.com

### Start and Watch

    $ npm start

  NOTE: The NCPC React app requires valid user ID and language/business unit query string parameters exist; e.g. http://horizontal-ncpc-dev.herokuapp.com/?id=0032E00002jqqM5QAI&langBU=EN-US

## Build for Production

    $ parcel build src/index.html

---

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.

### JavaScript

- [Parcel](https://parceljs.org) is used to build, run and watch the project locally.
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [SASS](https://sass-lang.com) is used to write futureproof CSS.