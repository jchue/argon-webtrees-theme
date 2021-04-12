![Latest Release](https://img.shields.io/badge/release-v0.14.1-blue)

# Argon Theme for webtrees

A theme for the [webtrees](https://github.com/fisharebest/webtrees) online geneology application based on the [Argon Design System](https://github.com/creativetimofficial/argon-design-system). Since webtrees is templated with Bootstrap, this theme applies Argon styles in the majority of places but adapts where necessary.

## Screenshots

**Tree Home**

![Screenshot of Tree Home](assets/tree-home.png)

**Individual Page**

![Screenshot of Individual Page](assets/individual.png)

**Interactive Tree Chart**

![Screenshot of Interactive Tree Chart](assets/interactive-tree.png)

## Compatibility

webtrees 2.0.14 (see [prior releases](https://github.com/jchue/argon-webtrees-theme/releases) for older versions)

## Installation

1. Download the .zip file of the [latest release](https://github.com/jchue/argon-webtrees-theme/releases/latest).
2. Unzip the package.
3. Ensure the folder is named `argon`.
4. Upload the folder into the `modules_v4` directory of the webtrees installation on your web server.
5. Ensure the theme is enabled in your Control panel.

## Develop and Build

**Prerequisites:**

- Node.js
- gulp
- webtrees

To support Sass and ECMAScript, the stylesheets and scripts are developed in their respective directories under `src/`. They then need to be compiled/transpiled to `resources/`, from which webtrees serves the theme. The views themselves are housed directly under the `resources/` directory already.

To keep things simple, webtrees itself is not included nor is it enforced as a dependency. In fact, the entire repository can just be placed in the `modules_v4/` directory of webtrees, and the theme should work fine, as long as the Sass and JavaScript are transpiled. Gulp just makes it easier by compiling `src/*.scss` into `resources/css/*.css` and transpiling `src/js/*.js` into `resources/js/*.js`.

For automatic compiling/transpiling during development:
```sh
npx gulp watch
```

To build and package:
```sh
npx gulp build
```
This will compile/transpile the stylsheets/scripts and package them, along with the views, in a `dist/` directory.