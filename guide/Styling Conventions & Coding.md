---
pageClass: more-inf-class
---

# Styling Conventions & Coding

## External File Rules - CSS, JS, Etc
One of the most important and useful things you while coding is to make sure that your scripts, HTML, and CSS are all in seperate files whenever possible. A *huge* no-no is having inline CSS code unless it is absolutely neccisary. Yes, it is momentarily easier sometimes to just change the color of a div's text by sliding in a quick `<div style="color: #000;">` but this is poor practice. What if someone else needs to update your code later and they go to the CSS file and try to change the color of all div's text to purple but for some reason this one specific div is black? Now imagine that on a large-scale and you can see how annoying that would be to go back and change. Thus, make sure to link an external CSS file and do **all** style changes there.

This same concept goes for Javascript/other code files as well. Keep your different languages seperate and your work directories neat. It is easy to think *well, as long as it works it's fine...* but this is a short-sighted way of thinking because you *will* need to do a lot of editing later and your project *will* get messy later if you carelessly put many languages/functions in one file. Be warned!

## CSS tips
* When a value is equal to 0 do not put units after the 0. EX: **DO** `margin-top: 0;` and **NOT** `margin-top: 0px;`.

## GitHub Etiquette

## Logos & Company Assets
Working at a company comes with some legal and branding issues artists should be aware of. If the company has a specific color pallet, ask for the specific color codes and use them in your designs.
* Do not warp, unevenly scale, or distort the company logo.

## Accessibility
When making websites for a company you should keep in mind that many different kinds of people will be viewing this site and the content and not all of them may have the same physical abilities. A site is accessable when people with visual, motor, speech, auditory, or cognitive disabilities can use it. There are some basic rules that should be followed to make your site easier for more people to use!

1. Use high-contrast colors
2. All images should have and alt value that describes the image
3. Use labels instead of placeholder text
4. Remeber that some people are colorblind and so important information should not be conveyed only through colors

For more information, please read [this article](https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94). Use the Chrome extension [AxeCoconut](https://chrome.google.com/webstore/detail/axe-coconut/iobddmbdndbbbfjopjdgadphaoihpojp?hl=en) to see if your site checks all the boxes!




## Only Important Information

## Compatability Checking Your Website
It is important to remember that not all of the people visiting the site will be on the same device, browser, or screensize. A good way to check how your site looks on different devices in Chrome is to right-click and press `inspect.` This will bring up Chrome's dev tools. You can also get these by going to `View > Developer > Developer Tools`. Here you can see the source code, alter CSS, and much more. At the top of your website you will see a bar. Click on the arrow next to `responsive` and you will see a number of mobile/handheld devices to select from. This changes the dimensions of the page and you can see how your website would look on these devices.

Also remember to check how the website looks on all major browsers. Sometimes weird CSS changes can occur on different browsers so it is always a good idea to check. Simply open the website on Firefox, Chrome, Safari, Edge, etc.

## Styling For Mobile Devices

## Debugging Your Website

## Tips
* `Command + Shift + R` completely refreshes a Chrome page which is especially useful when working on CSS as sometimes when you simply refresh the page it does not update the CSS.

## Extra Handy Tools
* [ScreenToLayers: ](https://apps.apple.com/us/app/screentolayers) This app converts open windows on your desktop into pngs/PSD files and makes them look neat. It's what I use for most of the application screenshots in this guide.
* [Unsplash: ](https://unsplash.com/) This site has thousands of high-resolution, royalty free images you can use on your site.
* [Contrast: ](https://usecontrast.com/) A macOS app for quick access to WCAG color contrast ratios.
