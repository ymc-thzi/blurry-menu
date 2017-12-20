Blurry Menu
===
A blurry menu for all kind of websites. The blur effect is added dynamically and context sensitive
to all displayed web-contents like images, texts and even background-images.
This script uses existing scripts like html2canvas and Superfast Blur.

See it in action:
<a target="_blank" href="http://ymc-thzi.github.io/blurry-menu/">BLURRY MENU LIVE DEMO</a>

<img src="https://camo.githubusercontent.com/28f9995b01c218f6ac3b62f2fa55e0635e684a5a/687474703a2f2f6d756c7469736974652e77702e796d632e63682f77702d636f6e74656e742f75706c6f6164732f323031362f31302f626c757272792d6d656e752e676966">

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
* Superfast Blur v0.5
* html2canvas 0.5.0-alpha
