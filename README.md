# [GrapesJS file](http://grapesjs.com/demo.html)

This plugin replaces the default file


## Summary

* Plugin
  * Name: `gjs-plugin-file`
  * Options:
      * `call` Call handler
      * `btnText` Text for the button in case the custom one is not provided, default: `Add images`
        *blobs* Array of Objects, eg. [{url:'...', filename: 'name.jpeg', ...}]
        *assets* Array of inserted assets



## Download

* `npm i grapesjs-plugin-file`


## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<link href="path/to/grapesjs-plugin-file.css" rel="stylesheet"/>

<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-plugin-file.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-plugin-file'],
      pluginsOpts: {
        'gjs-plugin-file': {
          call: (result) => {

            // handler
            result(url);
          }
          /* ...options */}
      }
  });
</script>
```



## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-plugin-file.git
$ cd grapesjs-plugin-file
```

Install it

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```



## License

BSD 3-Clause
