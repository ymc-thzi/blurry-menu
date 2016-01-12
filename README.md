Blurry Menu
===
A blurry menu for all kind of websites. The blur effect is added dynamically and context sensitive
to all displayed web-contents like images, texts and even background-images.
This script uses existing scripts like html2canvas and Superfast Blur.

See it in action:
<a target="_blank" href="http://www.ymc.ch/sandbox/blurry-menu/index.html">BLURRY MENU LIVE DEMO</a>

<img src="http://www.ymc.ch/wp-content/uploads/2014/12/blurry-menu.gif">

HowTo
===
Simply bind a js event like a click for example to trigger the menu.
* BlurryMenu.openMenu();

JQuery example:
```
$( "#menu" ).click(function() {
  BlurryMenu.openMenu();
});
```

Dependencies
===
* jQuery 
* jQuery UI 
* Superfast Blur v0.5 (built-in)
* html2canvas 0.5.0-alpha (built-in)
