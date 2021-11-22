
<h1 align="center">SEAT : Code</h1>
<h3 align="center">Frontend Challenge- React with Typescript</h3>


## Steps to run the application 
1. Clone the repository into your local 
2. Add .env file at the root of the project with the following content:

    ```
    REACT_APP_APIURL=<api url here>
    ```
### On a terminal, in the root directory run:

3. run  
    ```
    yarn install
    ```

    This will create a node_modules folder with all the dependencies


If you don't have json-server installed run 
```
 npm install -g json-server
 ``` 

### Open a new terminal on root directory to run:
4. 
    ```
    json-server --watch <PATH>/data/db.json --port 3004
    ```
    
    `<PATH>/data/db.json` will be the path to db.json on your local computer
    Starts mocked api created with JsonServer in port 3004. 

5. 
    ```
    yarn start
    ```

    It will compile the application into the port 3000
    
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Other Available Scripts

In the project directory, you can also run:

### `yarn test`

Launches the test runner in the interactive watch mode.

