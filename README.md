# jQuery serialflex - Equal height elements

## About jQuery serialflex
This plugin adds the same height (maximum) to all elligible elements if they have the same offset top value. Basically, it offers the same feature as a display:flex, this is why the use of this plugin should be avoided as much as possible, however, in some (very few) specific cases, a JavaScript option can mandatory. Note that jQuery serialflex is shared for inspirational and development purpose.

## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialflex/) for a demonstration.


## Compatibility
jQuery serialflex has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialflex/archive/master.zip) and save one of two available files to include serialflex to your page, either the [development](https://github.com/kevinmeunier/jquery-serialflex/blob/main/dist/jquery.serialflex.js) or the [minified](https://github.com/kevinmeunier/jquery-serialflex/blob/main/dist/jquery.serialflex.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialflex/) to copy what you need.
```HTML
<script src="jquery.serialflex.min.js"></script>
```

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialflex. 


## Basic Usage
The basic usage of serialflex is pretty easy, just start using jQuery serialflex by calling it after page load. It works form radio, checkbox, and select.
```HTML
<ul>
  <li><p data-serialflex="customname">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
  <li><p data-serialflex="customname">Sit amet consectetur adipiscing elit.</p></li>
  <li><p data-serialflex="customname">Cras porta finibus ullamcorper pellentesque ut purus purus nam convallis dapibus ullamcorper.</p></li>
  <li><p data-serialflex="customname">Ipsum dolor sit amet.</p></li>
  <li><p data-serialflex="customname">Lorem ipsum dolor sit amet consectetur adipiscing elitras porta finibus ullamcentesque ut purus convallis dapibus ullamcorper.</p></li>
  <li><p data-serialflex="customname">Porta finibus ullamcentesque ut purus convallis dapibus ullamcorper</p></li>
</ul>
```
```JS
$(document).ready(function(){
  // jquery.serialflex initialisation
  $('[data-serialflex]').serialflex();
});
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
forceRefresh       | *string*   | *false*                             | Force the refresh every 50ms instead of on resize

The manual refresh of the plugin can be trigger with this external function below.
```JS
$.serialflex.refresh();
```


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialflex/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialflex/issues) for new features directly on GitHub.


## License
jQuery serialflex is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
