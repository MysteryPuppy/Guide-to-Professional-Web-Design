---
pageClass: more-inf-class
---

# Styling Conventions & Coding

## HTML Rules & Tips
* If you have a `<br>` tag, do not close it and also return the text after it to a new line in your code. Example:
```HTML
<p>
  This is a line of text before a <br>
  This is where I continue writing after
</p>
```
* Do **not** use `<br>` tags to put space between text and images/other elements. `<br>` should be exclusively used to create line breaks between text. It is very bad practice to have something like this:
```html
Some text
<br>
<br>
<br>
<img src="cat.png">
```
The same goes for using "cheats" like `&nbsp;` or making empty tags `<li class="divider"></li>` to add padding or space unless absolutely needed. Use CSS instead to add space.
* Install an HTML formatter like [Prettify](https://atom.io/packages/atom-prettify) or [Beautify](https://atom.io/packages/atom-beautify) on your text editor if possible to automatically format your code and make it look organized and neat. If your editor does not have that kind of functionality, an online formatter works as well.
* **Do not use inline CSS styling unless <mark>absolutely</mark> necessary.**
* Links to local pages should not use the full URL but instead use a relative URL. Example:
```HTML
<!--Don't do this-->
<a href="https://ExampleSite.com/about.html">Link to local about.html page</a>

<!--Do this-->
<a href="about.html">Link to local about.html page</a>
```
* Indent HTML code with 2 spaces, not with tabs. This applies to CSS code as well. Keep in mind that your text editor tabs might be 2 spaces by default. In applications not specifically made for coding the tabs will usually be eight spaces.
```html
<!--Indented with tab-->
<div>
       <h3>This gets messy fast</h3>
       <p>Yes it does</p>
</div>
<!--Indented with 2 spaces-->
<div>
  <h3>This is great</h3>
  <p>Yes it is</p>
</div>
```
* Put double quotes `class="hide-mobile"` around attribute values, not single quotation marks `class='hide-mobile'`.
* Only use id `<div id="unique-header">` when the id will not be used on the page again. It marks a unique element.
* Always have alt text on images.
* Use tags in a way that matches their semantic purpose. For example, if a list is an ordered list use `<ol>` instead of `<ul>` even if the style type is none. Use header tags for titles even if you *could* use a `<p>` with the same styling.

To learn more, view [Google's styleguide](https://google.github.io/styleguide/htmlcssguide.html).


## CSS Rules & Tips
* When a value is equal to 0 do not put units after the 0. EX: **DO** `margin-top: 0;` and **NOT** `margin-top: 0px;`. Also omit leading "0"s in values. For example `font-size: 0.4rem;` should be `font-size: .4rem;`
* `Command + Shift + R` completely refreshes a Chrome page which is especially useful when working on CSS as sometimes when you simply refresh the page it does not update the CSS.
* It is possible to write comments in CSS with ```/* This is a comment */```
* Use shorthand properties when you can so that code is more legiable. For example:

```CSS
/* This is inefficient */
margin-top: 30px;
margin-right: 40px;
margin-bottom: 20px;
margin-left: 14px;

/* This is clean */
/* Note that the colors go in clockwise order: top, right, bottom, left */
margin: 30px 40px 20px 14px;

/* Keep in mind that if you define 1 value it applies to sides */
/* If you define 2 values the first value defines top&bottom and the second value defines left&right sides. */
```
You can read more about many different shorthand properties [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties).
* In class and id names do not use capitals or underscores. Use hyphens instead to indicate two different words. Example:
```CSS
/* Do not do this */
.VideoSquare {}

.Second_form {}

/* Instead do this */
.video-square {}

.second-form {}
```
* Ideally, CSS rules should be in alphabetical order.
* Put a space between the property and its value to make the CSS more readable. Example: `h3 { font-size: 30px; }`. Also put a line between rules. Example:
```CSS
body {
  color: white;
}

div {
  color: blue;
}
```
* To make your CSS more elegant it is advised to learn how to use Flexbox. [Here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a good guide to learning Flexbox and [here](http://flexboxfroggy.com/) is a fun game to hone your Flexbox skills.
* After you think you are done with your CSS code, go back and make sure that you do not redefine something in the same block. It is easy to accidentally write something like this:
```CSS
margin: 0 10px; /* margin being defined */
color: black;
margin-right: 10px;  /* margin being defined again */
```

To learn more, view [Google's styleguide](https://google.github.io/styleguide/htmlcssguide.html#CSS)

## General Concepts

### External Files
One of the most important and useful things you can do while coding is to make sure that your scripts, HTML, and CSS are all in seperate files whenever possible. A *huge* no-no is having inline CSS code unless it is absolutely neccisary. Yes, it is momentarily easier sometimes to just change the color of a div's text by sliding in a quick `<div style="color: #000;">` but this is poor practice. What if someone else needs to update your code later and they go to the CSS file and try to change the color of all div's text to purple but for some reason this one specific div is black? Now imagine that on a large-scale and you can see how annoying that would be to go back and change. Thus, make sure to link an external CSS file and do **all** style changes there.

This same concept goes for Javascript/other code files as well. Keep your different languages seperate and your work directories neat. Do not put all your Javascript/other language code into one big file. Instead, seperate the code by functionality. It is easy to think *well, as long as it works it's fine...* but this is a short-sighted way of thinking because you *will* need to do a lot of editing later and your project *will* get messy later if you carelessly put many languages/functions in one file. Be warned!

There is a rule that most software developers follow that is called "DRY" or  "Don't repeat yourself." It basically means that you should never write the same code twice because if you have to go back and alter something then it will take a lot longer to change every instance where you repeated yourself. It also makes code neater, more functional, and easier to maintain.

### Company Assets, Legality & Accessibility
Working at a company comes with some legal and branding issues artists should be aware of. If the company has a specific color pallet, ask for the specific color codes and use them in your designs. Do not warp, unevenly scale, or distort the company logo. Changing up the logo/colors too much can cause people to not be able to recognize the company.

If you use another person's assets that your company does not own then make sure that the assets are royalty free, that you give the right attribution, or that you pay for the asset. If you do not know the license of an asset then do not use it! It is better to be safe than sorry.

When making websites for a company you should keep in mind that many different kinds of people will be viewing this site and the content and not all of them may have the same physical abilities. A site is accessable when people with visual, motor, speech, auditory, or cognitive disabilities can use it.

For more information, please read [this article](https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94). Use the Chrome extension [AxeCoconut](https://chrome.google.com/webstore/detail/axe-coconut/iobddmbdndbbbfjopjdgadphaoihpojp?hl=en) to see if your site checks all the boxes!

### Only Important Information
This idea is perhaps a little harder to grasp but it is the idea that only content that *adds meaning* should be in the html files of your projects. As a mentor of mine said when I put an image directly in my html file.

> We should always consider the semantic value against the contents when we put an image in the contents...[the image] looks [like it is just a] cosmetic object.

Since the image did not contain any new information and was just there to look nice, it was not really "important" in the sense that it added something new to the page. To remedy this it was suggested to put the image in the CSS file instead of the HTML file.

Instead of referencing the image in the HTML file:

```HTML
<img src="../images/questionmark.jpg"></a href="google.com">See this link if you're confused</a>
```

We would do something like this instead in the CSS file:

```CSS
a::before {
  background: url("../images/questionmark.jpg") 0 0 no-repeat;
}
```

### Compatability Checking Your Website
It is important to remember that not all of the people visiting the site will be on the same device, browser, or screen size. A good way to check how your site looks on different devices in Chrome is to right-click and press `inspect`. This will bring up Chrome's dev tools. You can also get these by going to `View > Developer > Developer Tools`. Here you can see the source code, alter CSS, and much more. At the top of your website you will see a bar. Click on the arrow next to `responsive` and you will see a number of mobile/handheld devices to select from. This changes the dimensions of the webpage and you can see how your website would look on these devices.

<img width=70% height=70% src="/11.png" alt="A picture of the different screen size options.">

Also remember to check how the website looks on all major browsers. Sometimes weird CSS changes can occur on different browsers so it is always a good idea to check. Simply open the website on Firefox, Chrome, Safari, Edge, etc.

### Styling For Mobile Devices
Nowadays the internet is not only accessed through computers with landscape oriented screens but also from mobile devices which have portrait oriented screens. When designing a website it is important to make sure that your website

1. looks good on both kinds of devices
2. is usable on both kinds of devices.

Sometimes websites forget that to mobile users navigation bars can become nightmares to use and buttons are difficult to touch. Make sure to use the developer tools to see how your site will look on mobile devices throughout the process of making the website.

In CSS it is also possible to specify specific styles that should happen only when the screen width is smaller/larger than a specific number. For instance, if we wanted our body font color to be black but **only on screens with a width smaller than 720px** then we would write this:

```CSS
@media only screen and (max-width: 720px) {
  body {
    color: black;
  }
}
```
On the other hand, if we wanted to make all div's font color pink when the screen was larger than 720px wide then we would write:

```CSS
@media only screen and (min-width: 720px) {
  div {
    color: pink;
  }
}
```

For more information about size-specific styling, view [this tutorial](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp).

### Debugging Your Website
Sometimes while working on your website some things may not look the way you thought they would and you just can not figure out how to fix it. When you hit a bump open the `Developer Tools` again on your browser and under the `Elements` tab view your site's HTML and CSS code. It is possible to add, remove, and edit styles in this view and the live editing makes it easier to find out how best to fix an issue.

<img src="/12.png" alt="A picture of the HTML and CSS of a website in Google Chrome's Developer Tools.">

You can then use an HTML linter to check if your HTML file/s are formatted correctly.

Keep in mind that Google and [StackOverflow](https://stackoverflow.com/) are great places to turn to if a problem can not be fixed alone. There is no shame in not knowing something as long as you are learning.

## Good to Know
Below is a list of libraries, languages, tools, etc. that it could benefit any webdesigner/frontend dev to know. By no means is every one of them necessary to know but it never hurts to learn more.
* [VuePress: ](https://vuepress.vuejs.org/) VuePress is a "Vue-powered Static Site Generator" and is what was used to make this very site. It makes making documentation & blog sites a breeze to set up and you just write in Markdown so if you followed the tutorial in the first section you are basically good to go.
* [SASS: ](https://sass-lang.com) Repeating code is not fun and there is almost nothing more frustrating than having to go through CSS code and manually change a value thirty times. SASS is a more advanced CSS that allows you to store variables, has superior visual hierarchy, lets you import other SCSS files, and will make you wonder why CSS was not created like this is the first place.
* [EJS: ](https://ejs.co/) EJS is a "simple templating language that lets you generate HTML markup with plain JavaScript." Gone are the days of putting the same header and footer code on every new page. Just put in one line of EJS code!
* [Sketch, ](https://www.sketch.com) [Adobe XD, ](https://www.adobe.com/uk/products/xd.html) or [Figma: ](https://www.figma.com/) Whether or not you are a designer, it is a good idea to know how to mockup a website. These tools are the best in the trade at the moment and will have you making professional looking websites faster than you would think possible.
* [Netlify ](https://www.netlify.com/) or [Heroku: ](https://dashboard.heroku.com/apps/ikou-learn/deploy/heroku-git) Hosting a site has never been easier than with Netlify and Heroku. Both these services allow users to deploy websites for free from GitHub/GitLab/Bitbucket. This site is hosted on Netlify.

## Extra Handy Tools
* [ScreenToLayers: ](https://apps.apple.com/us/app/screentolayers) This app converts open windows on your desktop into pngs/PSD files and makes them look neat. It is what I use for most of the application screenshots in this guide.
* [Unsplash: ](https://unsplash.com/) This site has thousands of high-resolution, royalty free images you can use on your site.
* [Contrast: ](https://usecontrast.com/) A macOS app for quick access to WCAG color contrast ratios.
* [Colorpicker: ](https://github.com/Toinane/colorpicker) A macOS app that lets you use a color picker to select colors off your desktop screen.
* [Code & Design: ](https://designcode.io/courses) Online classes that are the best I have found in teaching the newest frontend libraries and strategies. The only downside is that the site is subscription-based and not free.
