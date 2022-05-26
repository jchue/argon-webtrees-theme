[![GitHub release (latest by date)](https://img.shields.io/github/v/release/jchue/argon-webtrees-theme)](https://github.com/jchue/argon-webtrees-theme/releases/latest)
[![webtrees major version](https://img.shields.io/badge/webtrees-v2.1.x-9cf)](https://webtrees.net/download)

# Argon Theme for webtrees

A theme for the [webtrees](https://github.com/fisharebest/webtrees) online geneology application based on the [Argon Dashboard](https://github.com/creativetimofficial/argon-dashboard). Since webtrees is templated with Bootstrap, this theme applies Argon styles in the majority of places but adapts where necessary.

## Screenshots

**Tree Home**

![Screenshot of Tree Home](assets/tree-home.png)

**Individual Page**

![Screenshot of Individual Page](assets/individual.png)

**Interactive Tree Chart**

![Screenshot of Interactive Tree Chart](assets/interactive-tree.png)

## Compatibility

webtrees 2.1.x (see [prior releases](https://github.com/jchue/argon-webtrees-theme/releases) for older versions)

## Installation

1. Download the .zip file of the [latest release](https://github.com/jchue/argon-webtrees-theme/releases/latest).
2. Unzip the package.
3. Ensure the folder is named `argon`.
4. Upload the folder into the `modules_v4` directory of the webtrees installation on your web server.
5. Ensure the theme is enabled in your Control panel.

## Structure

Because webtrees 2 is built with Bootstrap by default, the majority of this theme is just a matter of applying the Argon stylesheet. 

Additionally, there are a handful of opinionated changes, mostly regarding sizing and spacing, requiring some views to be overwritten. Most of these are achieved with a simple replacement function to add/remove/modify classes and elements. Therefore, when a change is introduced in the webtrees codebase, these views should adopt them accordingly unless there is a drastic change to the template.

There are, however, a few cases that require the entire view to be rebuilt/reorganized, due to either a completely different template or a change in the PHP code. These views are:

- `::layouts/default`
- `::modules/faq/show`
- `::modules/lifespans-chart/chart`
- `::modules/recent_changes/changes-list`
- `::modules/stories/tab`

When change is made to these views in the webtrees codebase, it needs to be incorporated in the corresponding Argon view.

## Develop and Build

**Prerequisites:**

- Node.js
- webtrees

**Clone repository**

Unfortunately, only `leaflet` and `tom-select` are available in the npm Registry. `argon-dashboard` and `BeautifyMarker` must be sourced as Git submodules.

Therefore, you must pass the `--recurse-submodules` flag when cloning the repository in order for their contents to be populated:

```
git clone --recurse-submodules git@github.com:jchue/argon-webtrees-theme.git
```

**Install dependencies and run in watch mode**

To keep things simple, webtrees itself is not included nor is it enforced as a dependency. Just place the entire repository in the `modules_v4/` directory of webtrees, then run:

```sh
npm install
npm run dev
```

To support Sass and ECMAScript, the stylesheets and scripts are developed in their respective directories under `src/`. When a change is detected, they are compiled/transpiled to `resources/`, from which webtrees serves the theme. The PHP views themselves are housed directly under the `resources/` directory already.

**Build and package**

```sh
npm run build
```

This will compile/transpile the stylsheets/scripts and package them, along with the PHP views, in a `dist/` directory.