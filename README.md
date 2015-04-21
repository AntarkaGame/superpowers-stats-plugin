# superpowers-stats-plugin
StatsJS plugin for Superpowers, the extensible HTML5 2D+3D game engine.

This class provides a simple info box that will help you monitor your code performance.

* FPS Frames rendered in the last second. The higher the number the better.
* MS Milliseconds needed to render a frame. The lower the number the better.

# Documentation

### Echo FPS and MS :

```javascript
var statsFPS = new Stats();
statsFPS.setMode(0); // 0: fps, 1: ms

statsFPS.domElement.style.position = 'absolute';
statsFPS.domElement.style.left = '0px';
statsFPS.domElement.style.top = '0px';

document.body.appendChild( statsFPS.domElement );

setInterval( function () {
    statsFPS.begin();
    statsFPS.end();
}, 1000 / 60 );

var statsMS = new Stats();
statsMS.setMode(1); // 0: fps, 1: ms

statsMS.domElement.style.position = 'absolute';
statsMS.domElement.style.left = '100px';
statsMS.domElement.style.top = '0px';

document.body.appendChild( statsMS.domElement );

setInterval( function () {
    statsMS.begin();
    statsMS.end();
}, 1000 / 60 ); 
```

### Find more here : 
https://github.com/mrdoob/stats.js/

# Installation 

[Download the latest release](https://github.com/fraxken/superpowers-stats-plugin/archive/master.zip), unzip it, rename the folder to Jquery, move it inside app/plugins/fraxken/ then restart your server.
