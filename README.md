# backstop-dxportal
This project contains the configuration file for backstop testing of the entire mom-dxplus site.

## Project setup
Install backstop
```
npm install -g backstop
```
In `config.js` change the `connectionUrl` string to the url of mom-dxplus site to test
and the `referenceUrl` string to the url of the mom-dxplus site to be referenced from.

### To run the test
Run backstop and set `--config` to the `config.js` file in this project 
```
backstop test --config="config.js"
```
