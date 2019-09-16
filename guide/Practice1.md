---
pageClass: more-inf-class
---

# Practice: Deploy a Documentation Website to Netlify

This is a bit "meta" but in this guide we will tie together some concepts from the previous pages and learn how to make a simple documentation site (like the one you are currently reading) in VuePress and how to deploy it to a free hosting service like Netlify.

Let's get started.

## Setting Up
The first thing we need to do is set up our working environment. To use VuePress we first need to install it. To do this just type `npm install -g vuePress` in your terminal. This will only work if you have [npm](https://www.npmjs.com/get-npm) installed. This will globally install VuePress on your machine.

Now that VuePress is installed we can start making our website.

Move to your Desktop in your terminal and create a new folder called `TestSite`. You can create a new folder from the terminal by typing `mkdir TestSite`. Now if you `ls` the folder will be on the desktop. Move into the folder `cd TestSite` and type `touch README.md` to create a Markdown file.

Drag the `README.md` file to your text editor and insert some content into it. For example:

```Markdown
# This is my documentation site
It's pretty *neat* huh? :star:
Well that's just thanks to [Google](google.com) searches.
```

Save the file and then type `vuepress dev` in your terminal. This will start hosting the site on [http://localhost:8080/](http://localhost:8080/) . Easy, right? Let's delve a little deeper.

## The Main Page
Our Markdown now is fine but maybe it does not look eye-catching enough. VuePress has a way to make main pages look great! In your `README.md` file erase the contents and paste:

```Markdown
---
home: true
heroImage: hero.png
actionText: Start
actionLink: /guide/
features:
- title: Feature1
  details: VuePress is easy to use and runs on Markdown
- title: Feature2
  details: Live-reloads on save!
- title: Feature3
  details: Simple learn-curve
footer: MIT Licensed
---
```
See where `heroImage: hero.png` is? This is the file of the image that will appear in the middle of the page. Images in VuePress are assumed to be in the /public/ folder.

## Config.js

## More Files

## Deploying to Netlify
