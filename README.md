#Prerequisites 

* Install node package manager (npm)


```
    sudo apt-get install nodejs npm
```


* Install bower and grunt

```
    npm install -g yo grunt-cli bower
```


# Application Set up

* Clone the applciation

```
    git clone https://github.com/psahni/AngularTestLg.git
```

* Install dependencies 

```
npm install

``` 

```
( if permission issue occurs, do sudo npm install)
```

Then,

```
bower install
```

## Start Server

```
grunt server
```

## Access the application at 

```
http://localhost:9000
```

## Run test cases

```
grunt karma
```
