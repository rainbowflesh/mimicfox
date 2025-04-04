// 'Doubleclick on tab reloads tab' script for Firefox 126+ by Aris
var DoubleClickOnTabReloadTab = {
  init: function () {
    try {
      gBrowser.tabContainer.addEventListener(
        "dblclick",
        function abcde(e) {
          if (e.button == 0) {
            BrowserCommands.reload();
            e.stopPropagation();
            e.preventDefault();
          }
        },
        false
      );
    } catch (e) {}
  },
};

setTimeout(function () {
  DoubleClickOnTabReloadTab.init();
}, 500);

// Enables the userChrome.css and userContent.css files.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Allows the theme's SVG icons to be coloured properly.
user_pref("svg.context-properties.content.enabled", true);
// Allows colours used in the theme to be mixed with others.
user_pref("layout.css.color-mix.enabled", true);
// Allows theme to use different colours for light/dark mode.
user_pref("layout.css.light-dark.enabled", true);
// Enables the CSS :has() selector, required for hide tabs toolbar tweak.
user_pref("layout.css.has-selector.enabled", true);
// Enables browser transparent
user_pref("browser.tabs.allow_transparent_browser", true);
