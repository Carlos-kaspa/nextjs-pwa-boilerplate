# Boilerplate NextJS = PWA

[Default Next Config walkthrough](https://github.com/Carlos-kaspa/boilerplate-nextjs-kaspa/blob/master/README.md)

A pre-configured frontend enviroment for PWA's using NextJs.

## What are PWA's ?

Progressive Web Applications (PWAs) are apps built with web technologies that we probably all know and love, like HTML, CSS, and JavaScript. But they have the feel and functionality of an actual native app.
PWAs are built with the capabilities like push notifications and the ability to work offline. They are also built on and enhanced with modern APIs which makes it easy to deliver improved capabilities along with reliability and the ability to install them on any device.

## Manifest

Start by adding your own configurations to the manifest file, located in `public/manifest.json`

Add Icons of fixed sizes to both your public directory and describe them in your `manifest.json` following the example already in it.

## Running the PWA

Run `npm run build`
Check that `sw.js` and `workbox-*.js` have been added your public files
Run `npm start` and check the right corner of your address bar, there should be a download button.
Congrats, you are running your PWA app.

## Future Versions

Add service workers for notifications.
Add mobile usage examples, like camera, geolocation and such.

> Last Updated - January 29 2023

##### Setup by Carlos-kaspa
