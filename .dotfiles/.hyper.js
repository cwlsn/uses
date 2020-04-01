// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: "stable",
    // default font weight: 'normal' or 'bold'
    fontWeight: "normal",
    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: "bold",
    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,
    // custom CSS to embed in the main window
    css: "",
    // custom CSS to embed in the terminal window
    termCSS: "",
    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: false,
    // for environment variables
    env: {},
    // set to `false` for no bell
    bell: false,
    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,
    webGLRenderer: true,
    fontSize: 16,
    windowSize: [1080, 720],
    fontFamily: '"Operator Mono Lig", "Inconsolata for Powerline", monospace',
    cursorShape: "BLOCK",
    wickedBorder: false,
    wickedBorderColor: "#ffc600",
    padding: "0px",
    shell: "/bin/zsh"

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ["hyperterm-cobalt2-theme"],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
