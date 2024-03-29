---
pageClass: more-inf-class
---

# Before You Code

This section contains information that I think every web designer should know. This information may not be *directly* related to making websites but it is important to have these skills and sometimes they are necessary to know in a work environment. Even if you consider yourself more of a designer, you do not want to have to depend on the programmers in your office to do a lot of extra work because you do not know how to use GitHub, host a website on your local machine, or do something else for you that is relatively easy to learn.

::: tip
The best way to learn something is to do it, especially when it comes to coding. Please follow along with the examples in this guide.
:::

## GitHub
Before you can really delve into the actual coding of a professional-looking website, you first need a way to manage, showcase, and share your code. Many businesses use [GitHub](https://github.com), [BitBucket](https://bitbucket.org/product), or some other repository hosting service to track and manage code. Ultimately, some websites are even deployed from GitHub (like this one where the code is hosted on GitHub and served through [netlify](https://www.netlify.com/) :tada:). GitHub and BitBucket work in a similar way so it is easy to pick up one if you use the other. In this guide we will be using GitHub since it is more widely used.

Enough talk though, let's get hands-on.
If you do not have one already, make a GitHub account over at [https://github.com/join](https://github.com/join). After logging in, you should be able to create a new repository.

### Creating a New Repository
To create a new repository, simply click on the '+' sign at the top of GitHub and click on the 'New Repository' option.

<img src="/1.png" width=50% height=50% alt="Clicking on New Repository option">

A new page will open where you can enter details about your new project. Copy my values below or put your own twist on things!

<img src="/2.png" alt="Repository details entered. Name is TestRepo and the description doesn't matter for now. The add README option is selected.">

“Initialize this repository with a README” just means that GitHub will put a Markdown file called README.md in your repository on creation. This file usually contains information about what the repository contains & how to use the code. If you are interested in learning more about how to create a README.md file, hop down to the [Markdown](Before%20You%20Code.html#markdown) section for a few minutes to learn about that.

Our repository is where we will put code & files relating to our project. How do we add and track files though you ask? Simple! Well, it is once you get used to it. We will be accessing GitHub from our terminal and “pushing” code to our repository that way.

### Git
::: tip
The code in this guide works on Macs but the commands and applications may differ on Windows and Linux.
:::

First let us open our terminal. You can do this by searching for `terminal` in your Mac Spotlight Search bar. Once it opens, this is where the magic begins. To keep things simple, let us start by going to our Desktop directory. You can do this by typing `cd Desktop`. To check what files are on your desktop you can type `ls` and it will list out any files you may have there.

<img src="/7.png" width=70% height=70% alt="Typing in commands into terminal.">

On my Desktop I have four folders and a TODO.md file.

Before we can create and push files to our GitHub repository, we first have to install Git. The easiest way to do this is to install it with the package manager [Homebrew](https://brew.sh/). If you do not have Homebrew installed already, simply enter this into your terminal `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` and it will install it.

Once Homebrew is installed, you can install Git with the command `brew install git`. To verify that it is installed, try typing `git version` and if it tells you a version then it worked. Awesome! Now we are ready to clone our repository to our Desktop so that we can work on it and then push our changes back to GitHub. The good news is that you do not have to do this process every time you want to work on a project. This is really a one-time thing and now you have Homebrew and Git installed on your machine for future use.

### Cloning Repositories
Let us clone our repository now! To do this, head back to GitHub and view your repository that we created. On the right side there should be a green button that says “Clone or Download”. Copy the URL given in the box and then in your terminal type `git clone https://github.com/MysteryPuppy/TestRepo.git` but replace my repository URL with your own. When you press enter the repository folder should download to your computer. Now if you type `ls` you will see there is a new folder on your Desktop called whatever you named your repository. To enter this folder, type `cd TestRepo` (where TestRepo is whatever your repository is called) and you are in.

<img src="/8.png" width=70% height=70% alt="Typing in commands into terminal.">

Now you are in the directory of the cloned repository. If you type `ls` again you will see that it is empty aside from our README.md file. Let's get to adding files!

### Changing Files
To add a file from your terminal you can write `touch FileName.md` to create a new Markdown file with the name FileName. `ls` again and you will see that now it is in our directory. You can also view the file if you check the folder on your desktop. To put text in the file let us drag the file into a text editor. I will be using [Atom](https://atom.io/) but any text editor works. Macs come pre-installed with a text editor called TextEdit. Add anything you want into the file and then save it. Let us also do the same with README.md.

<img src="/9.png" alt="A picture of a text editor with the text 'here is a file that we'll be putting up on GitHib~ Wowza.' in it">

Change/put anything you want into the file.

### Adding, Commiting & Pushing Files

Now that we have added some files and changed the contents of others, let us push these changes to GitHub so that it saves the current state of our code. To do this type `git add .` into your terminal to add all changed files. If you only wanted to add one file you could also specify a file name instead of writing a period like so `git add README.md`. If you type `git status` you will see that the files you added/changed will appear under the text that says "changes to be committed." To commit the changes we write `git commit -m "These are our first changes!"`. Now the files are commited. All that is left to do is push them to the GitHub repository. To do this, type `git push origin master`. The terminal may ask you for your username and password here so just enter those details.

If all worked correctly, you will now be able to see the new files if you go to your GitHub repository page. Great! Now go forth and use GitHub in your future projects.

::: warning
**Never** `git add`, `git commit`, or `git push` "sensitive" information such as passwords, pin numbers, or personal user information to a remote directory.
:::

### Pulling
So now you know the basics of how to use GitHub when working on a project alone but what changes when you are working with other people? There is one big rule to follow: **Always `git pull` before working on a file that more than one person are working on.** This command retrieves changed files from the repository and downloads them to your desktop. This way you do not accidentally start coding on an old version of the code and overwrite your teammate's work. Be sure to tell your teammate if you changed a file so that they know to `git pull` if you do not usually change files that they work on.

### Branches
In GitHub there is a concept called "branches" and basically it is an isolated code development space where someone can work on their part of the code away from the main or `master` branch without changing the code in the `master` branch. It is good practice to only push finalized code to the `master` branch so when you are in a team and working with others then you should work in a branch instead of on the `master` branch.

To make a new branch, go to your GitHub repository and press on the button that says `Branch: master` and type in a name for your new branch. I called mine “working” and to create it I pressed the "Create branch: working" option. Now we have a branch...but how do we use it?

<img src="/10.png" width=70% height=70% alt="A picture of GitHub clicking on the Create branch: working option.">

Back in your terminal, type `git fetch && git checkout working` to switch to the new branch called working. Now you are in the new branch. Let us change something. I am going to add a new file with `touch NewFile.md`. Let us add this new file to the branch. To do this type `git add NewFile.md` then `git commit -m "adding a new file"` and finally type `git push origin working`. Remember to push to `working` instead of `master` this time since we are not in the master branch.

::: tip
To check which branch you are in type `git branch` at any time.
:::

To switch back to the master branch you can `git checkout master` to return. Just keep track of which branch you are in!

### Pull Requests & Merging
Once you are satisfied with your branch and think it is ready to join the final product, open a `Pull Request`. This says that you are ready for your code to be reviewed and if it is up-to-par it will then be added to the `master` branch. To open a Pull Request, go to your GitHub repository page, click on the `Pull Requests` tab at the top and click on the green `New Pull Request` button. Then the person who is in charge of the repository can choose to merge the offshoot branch with the `master` branch.

### Adding a Local Existing Project to GitHub
Sometimes we start work on a project and then want to make a GitHub repository. It can get a bit messy to make a new repository, clone it to the machine, and then copy the pre-existing code into that new cloned directory. There is a way to combat this!

First, create a new repository on GitHub like usual. However, it is best to not initialize the repository with a README.md file or any other preset files. On your machine go to the root directory of your project and type `git init` to initialize the project and tell Git that this is a Git repository.

Now we can `git add .` and `git commit -m "Adding project files"` like usual. The pushing is where things get a bit different. We type `git remote add origin https://github.com/MysteryPuppy/Test-Site.git` but replace my GitHub repository URL with your own. Now we simply type `git remote -v` and then `git push -u origin master` which will push your changes to the GitHub repository.

### Tips
* Some files should not be uploaded to GitHub like `.bashrc`, `iml`, and `.zshrc`. You can put these in your .gitignore file (or make one if you do not have one in your project directory) so that they do not get uploaded.
* It is customary to commit changes on your project every time an important contribution is made. It is suggested to commit a couple times an hour when you are actively working on the project.

That was a lot to take in, right? Take a break and feel proud that now you know how to use GitHub and the terminal 🎉

## Markdown
Markdown is not often taught and it is usually more something that one picks up after being around the coding scene for long enough. Markdown is a lightweight markup language and it is easy enough to pick up in around 5 minutes. While it may seem trivial, it can be extremely helpful when creating README.md files for repositories, making organized notes, or even for drafting blog posts. This very page was actually written in Markdown believe it or not with the static site generator [VuePress](https://vuepress.vuejs.org/). The possibilities are endless and it is so easy to learn that there really is not a reason to *not* know it.

So, how do we use Markdown? Simple! Open up your favorite text editor (mine is [Atom](https://atom.io/) but it does not matter which one you use) and create a new file. The way you create a Markdown file is simply to save it with the extension `.md` like this: `exampleFile.md`. That's it! To view the rendered version of your markup file install a plugin on your text editor if it is supported. Another way to view your markdown file is to use an online Markdown editor of which there a plethora of free ones. These include but are not limited to:

  * [Stackedit](https://stackedit.io)
  * [Dillinger](https://dillinger.io)
  * [Typora](https://www.typora.io)

These sites also usually come with an example page that reminds you about the Markdown syntax which is very helpful. Speaking of markdown syntax, in the file you have open or in the online editor let us learn about that.

### Headers

Headers are essentially titles and they can have varying font sizes. The biggest header size is H1 and this goes all the way down to size H6. To create a header, simply put a pound sign `# ` in front of the word(s) where one pound sign `# ` is H1, two pound signs `## ` is H2, three pound signs `### ` is H3, and so on. For example view this raw Markdown file:

```markdown
# This is verrrry big
## Not so big
### Getting smaller...
#### Shrinking!
##### Can you still see me?
###### So tiny!
```

This is what that file would look like rendered (using the Typora desktop application):

<img src="/3.png" alt="Rendered markdown. The titles are all bold and as the number rises the font gets smaller.">

That is the basics of headers! To write normal text you do not need to put anything special, just begin it on a new line.

```markdown
# This text is a header!
This is just normal looking body text
```

::: tip
Do not forget to put a space between the pound symbol `# ` and your words
:::

### Lists
To make a list in Markdown simply start a line with `* ` to make an unordered list or `1. ` to start an ordered list. Unordered lists can also start with a `+ ` sign or a `- ` sign. To nest a list, simply tab it in.

```markdown
* This is an
* Unordered list

1. This is an
2. Ordered list
    * This is a nested unordered list
    + This is too with a plus
    - This is too with a minus
```

How the file would look rendered:

<img src="/4.png" alt="Rendered Markdown file where there is an unordered list and an ordered list. The ordered list also has a nested unordered list in it.">

### Text Styling

Text styling is easy! To make something italic, put asterisk characters `*` around it like this `*This is italic*`. To make something bold, put two asterisk characters `**` around it like this `**This is bold**`. To strike through text, put two tilde characters `~~` around it like this `~~This is striked through~~`.

The code:
```markdown
*This is italic*
**This is bold**
***This is italic bold***
~~This is striked through~~
```

The rendered result:

<img src="/5.png" alt="Rendered Markdown file where there is italic, bold, italic bold, and strikethrough text seen without the stars and tildes around it in the rendered version.">

### Links
To add a link to a file simply put brackets `[]` around the word you want to be the link and then after the brackets put the link in parentheses `()`. For example, if I wanted to make a link to google I could write `This is a link to [Google](https://www.google.com)`. You can also link to internal headers, which act as anchors in the page. For instance, if we had a header `# Cats` we could link to it like so `Here is a link to [cats are great](#Cats)`.

### Code Blocks
Inline code blocks & highlighting is done with backticks ` `` ` around the code like ``` `this` ```. If you have a block of code then put three backticks before and after the block of code. Markdown supports code highlighting. For example:

```Python
print("This is some Python code")
if(2==2):
  print("This will always print")
```

```Java
System.out.println("This is Java Code");
```

```Markdown
This is **Markdown!** Wow it looks *cool*
```
The code:

<img src="/6.png" alt="Unrendered Markdown file that shows how to get different syntax highlighting to work. After the first three backticks, write a programming language name like python or Markdown to get the correct syntax highlighting.">

### More
There is so much more that Markdown can do but this is a solid foundation. To learn about all the wonders of Markdown, visit the [Markdown wiki](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to get a more complete list of what Markdown can do to help you create stunning and neat looking websites and files!

You have learned a lot already though, maybe consider taking a coffee break? :coffee:

## PNGs VS SVGs
This section is going to be short and sweet. It is *vital* to know the difference between a PNG and an SVG image file. PNGs are a raster image file format which means that if you the image scale up or down you will see the pixels that make up the image and the image will start to distort. An SVG is a vector image which means that no matter how you scale it, it will look the same and you will not see any pixel distortion.

An example of an PNG and SVG both scaled down to 30%.

  <img src="/ball.png" width=40% height=40% alt="An image of a ball that's a png.">
  <img src="/ball.svg" width=40% height=40% alt="An image of a ball that's a svg.">

The PNG on the left looks a lot blurrier because its pixels were distorted while the SVG on the right looks perfect. This is why logos are often SVGs. Some images work better as PNGs like photos and screenshots.
