//Binding general Events for menu behaviour
jQuery(document).ready(function () {

    //Preloading for performance reason. Here the complete page will be rendered
    //as a screenshot and the image will be blurred after rendering
    BlurryMenu.preloadMenu();

    //Just close the menu when window gets resized to avoid some display bugs
    $(window).resize(function () {
        BlurryMenu.closeMenu();
    });

    //Click on everything closes the menu except clicks on the menu itself
    $(document).bind('click', function (e) {
        if ($(e.target).closest('#menu').length === 0) {
            BlurryMenu.closeMenu();
        }
    });

});

//BlurryMenu action
var BlurryMenu = function () {

    //configure the menu style
    self.menuWidth = 300;
    self.animationDuration = 500;
    self.animationStyle = "easeOutQuart";
    self.blurStrength = 16;

    //checkvar for the displaying state
    self.menuOpened = false;

    return {
        //animate closing the menu and the menu content
        closeMenu: function () {
            if (self.menuOpened) {
                $("#menu").animate({
                    width: 0

                }, {
                    duration: self.animationDuration,
                    specialEasing: {
                        width: self.animationStyle
                    }
                });

                $("#menu-content").animate({
                    width: 0
                }, {
                    duration: self.animationDuration,
                    specialEasing: {
                        width: self.animationStyle
                    },
                    complete: function () {
                        $("#menu-content").css("position", "relative");
                        self.menuOpened = false;
                    }
                });

            }
        },
        //preloading, save page to canvas to image to blurred image
        preloadMenu: function () {
            html2canvas(document.body, {
                onrendered: function (canvas) {
                    var context = canvas.getContext('2d');
                    var dataURL = canvas.toDataURL();
                    $("#captured-image").attr('src', dataURL);
                    setTimeout(function () {
                        boxBlurImage('captured-image', 'blurred-bg-canvas', this.blurStrength, false, 2);
                    }, 200);

                }
            });

        },
        //animate opening the menu and the menu content
        openMenu: function () {
            if (!self.menuOpened) {
                $("#menu-content").css("position", "fixed");
                $("#menu-content").css("width", 0);
                $("#menu").height($(document).height());

                $("#menu-content").animate({
                    width: self.menuWidth
                }, {
                    duration: self.animationDuration,
                    specialEasing: {
                        width: self.animationStyle
                    }

                });

                $("#menu").animate({
                    width: self.menuWidth
                }, {
                    duration: self.animationDuration,
                    specialEasing: {
                        width: self.animationStyle
                    },
                    complete: function () {
                        self.menuOpened = true;
                    }
                });
            }
        }

    };

}();