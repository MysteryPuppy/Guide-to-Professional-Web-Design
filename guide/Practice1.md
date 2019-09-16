---
pageClass: more-inf-class
---

# Practice: Deploy a Documentation Website to Netlify

This is a bit "meta" but in this guide we will tie together some concepts from the previous pages and learn how to make a simple documentation site (like the one you are currently reading) in VuePress and how to deploy it to a free hosting service like Netlify.

Let's get started!

## Setting Up
The first thing we need to do is set up our working environment. To use VuePress we first need to install it. To do this just type `npm install -g vuePress` in your terminal. This will only work if you have [npm](https://www.npmjs.com/get-npm) installed. This will globally install VuePress on your machine.

Now that VuePress is installed we can start making our website.

Move to your Desktop in your terminal and create a new folder called `TestSite`. You can create a new folder from the terminal by typing `mkdir TestSite`. Now if you `ls` the folder will be on the Desktop. Move into the folder `cd TestSite` and type `touch README.md` to create a Markdown file.

Drag the `README.md` file to your text editor and insert some content into it. For example:

```Markdown
# This is my documentation site
It's pretty *neat* huh? :star:
Well that's just thanks to [Google](google.com) searches.
```

The Markdown you learned earlier is now very applicable because pages on a VuePress site are written in Markdown. Save the file and then type `vuepress dev` in your terminal. This will start hosting the site on [http://localhost:8080/](http://localhost:8080/) . Easy, right? Let's delve a little deeper.

## The Main Page
Our Markdown now is fine but maybe it does not look eye-catching enough. VuePress has a way to make main pages look great! In your `README.md` file erase the contents and paste:

```Markdown
---
home: true
heroImage: hero.png
actionText: Start
actionLink: /pages/
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
See where `heroImage: hero.png` is? This is the file of the image that will appear in the middle of the page. Images in VuePress are assumed to be in the `.vuepress/public/` folder. Make the fodlers and put a png file called hero.png there or simply put `heroImage: https://vuepress.vuejs.org/hero.png` to use the default VuePress image.

::: tip
If you do not see the .vuepress folder it probably means that hidden files are not viewable (makes sense, right?). Go to your terminal and type `defaults write com.apple.Finder AppleShowAllFiles true` then press enter and type `killall Finder`. This will show the hidden files.
:::

How the site should look:
<img src="/13.png" alt="The locally deployed website.">

## Config.js
Before making more pages we should set up the `config.js` file. If you have not already, create a folder called .vuepress `mkdir vuepress` and then make a file called config.js `touch config.js`. Put the following code into the file:

```Javascript
module.exports = {
 title: 'Test Site',
 description: 'Learning how to document right!'
}
```

This defines the title and description for every page on the website. We will do more with the config.js file later but for now let us move on!

## More Files
To add more files we will create a new folder in the root directory called `pages`. We call it this because in our original README.md file we wrote `actionLink: /pages/` so VuePress will be looking inside a folder called `pages`. Move into that folder `cd pages` and create another README.md file `touch README.md`. Drag this file into your text editor and enter some more content into it. Example:

```Markdown
# This is a new page~!
We can add **anything** we want into here and VuePress will probably make it look alright.

## Vuepress is cool, right?
I think so.
```

Now let us make another Markdown file in the same directory but let us call it `Extra.md`. Open this file and fill it with what you want. I will simply put `# This is an extra file`. Great, now we know how to make more files. How do we see them on the site though? That is where the config.js file comes into play again!

Open your `config.js` file again and modify it so it is like this:

```Javascript
module.exports = {
 title: 'Test Site',
 description: 'Learning how to document right!',
 themeConfig:{
      sidebar: {
           '/pages/': [
               '',
               'Extra'
           ]
       }
    }
}
```
Now you should be able to navigate the pages you created! Whenever a new Markdown file is created in the folder just add the name of it to the config.js file like we just did.

## Deploying to Netlify
### GitHub
Netlify actually deploys from GitHub so we should push our code to GitHub. Try to make a new repository yourself like how we learned in the first section of this guide and add, commit, and push your code to the repository. It is a little tricky since we already made the code and now we want to add existing code to a new repository.

::: tip
Do not initialize your repository with a README.md file since we already made a README.md file.
:::

Brief walkthrough of how to push code to GitHub:
1. Make a new repository on GitHub without a README.md file
2. Type `git init` in your project directory
3. Type `git add .`
4. Type `git commit -m "Adding base website files"`
5. Type `git remote add origin https://github.com/MysteryPuppy/Test-Site.git` but change the GitHub URL with your own.
6. Type `git remote -v`
7. Type `git push -u origin master` which will push your changes to the GitHub repository.

Great! Now the code is on GitHub. Note that you do not need to type `git init` or `git remote add origin https://github.com/MysteryPuppy/Test-Site.git` every time.

### Package.json
This is perhaps the most difficult/potentially frustrating part of the process. We must create a file called `package.json` in the root of our project. Copy & paste the below content into your file and alter the GitHub links to your own repository.

```Json
{
  "name": "Test-Site",
  "version": "1.0.0",
  "description": "Learning how to document right!",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:build": "vuepress build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MysteryPuppy/Test-Site.git"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/MysteryPuppy/Test-Site.git/issues"
  },
  "homepage": "https://github.com/MysteryPuppy/Test-Site#readme",
  "dependencies": {
    "vuepress": "^1.0.0"
 }
}
```

### Deploying
Now let's host this site for other people to see! If you have not already, create a free account on [Netlify](https://www.netlify.com/). Once logged in, select `New site from Git` and click on the GitHub button. It will then show you a list of GitHub repositories. If you do not see any repositories or the one that you want to deploy then click on the "Configure the Netlify app on GitHub" link and allow the repositories to be accessed. Once a repository is selected it will take you to the next page.

Under Build command type `npm run docs:build` and under Publish directory type `.vuepress/dist`.

<img src="/14.png" alt="View of how the Netlify page should look with all the values filled in.">

Press the Deploy Site button and Netlify will build your project and then publish the site. The URL will probably be something crazy but it can be altered under the site settings! Congrats, your page is now set up! This does not mean that you cannot keep working on the site however. Git add, commit, and push and Netlify will deploy the site automatically. How handy is that?

This is the end of our quick VuePress guide but remember that VuePress can do a lot more than what I have shown you. To learn more about what you can do with VuePress, I recommend reading through their [site guide](https://vuepress.vuejs.org/guide).
