# Front End Starter Kit

We needed a place to start our front-end work on projects and this is it. It takes our favourite elements of various frameworks, and pulls them all into one place.

# Getting Started

This project is a guide to start developing static sites in the simplest and most efficient way possible, focusing on consistency and optimisation.

## What it includes

[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/), [watch files](https://gulpjs.com/docs/en/getting-started/watching-files/), [browsersync](https://browsersync.io/docs/gulp), [imagemin](https://www.npmjs.com/package/gulp-imagemin) to minify images, [postcss](https://www.npmjs.com/package/gulp-postcss) to extend Css syntaxes, [fileinclude](https://www.npmjs.com/package/gulp-file-include) to include html files inside other files.

## Prerequisites

npm, the Node.js package manager versions >= 0.8.0

## Installation

```jsx
cd my-project
```

```jsx
npm install --global gulp-cli
```

```jsx
gulp watch
```

```jsx
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:300X
    External: http://172.16.0.106:300X
```

## Common mistakes

Using tailwind @apply if the class is not correctly written you will see the error at the terminal, and  you will have to run gulp again.

```jsx
	18 | .foo {
> 19 |  @apply bg-red-5000 w-24 h-24
     |         ^
  20 | }
```

## Where to start

When you run the gulp watch command a welcome screen will appear in your browser, and you can start editing the assets/html/index.html and assets/styles/main.css files. Each time one of these files is saved the browser will be refreshed.
