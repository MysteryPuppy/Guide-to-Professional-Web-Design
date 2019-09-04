---
pageClass: more-inf-class
---

# Before You Code

Before you can really delve into the actual coding of a professional looking website, you first need a way to manage, showcase, and share your code. Many businesses use [GitHub](https://github.com), [BitBucket](https://bitbucket.org/product), or some other repository hosting service to track and manage code. Ultimately, some websites are even deployed from GitHub (like this one where the code is hosted on GitHub and served through [netlify](https://www.netlify.com/) :tada:). GitHub and BitBucket work in a similar way so it is easy to pick up one if you use the other. In this guide we'll be using GitHub since it is more commonly used.

Enough talk though, let's get hands-on.

::: tip
The best way to learn something is to do it, especially when it comes to coding. Please follow along with the examples in this guide.
:::

## GitHub
If you don't have one already, make a GitHub account over at [https://github.com/join](https://github.com/join). After logging in, you should be able to create a new repository.

### Creating a Repository
Simply click on the '+' sign at the top of GitHub and click on the 'New Repository' option.

<img src="/1.png" width=50% height=50%>

A new page will open where you can enter details about your new project. Copy my values below or put your own twist on things!

<img src="/2.png">

"Initialize this repository with a README" just means that GitHub will put a Markdown file called README.md in your repository on creation. This file usually contains information about what the repository contains. If you're interested in learning more about how to create a README.md file, hop down to the [Markdown](Before%20You%20Code.html#markdown) section for a few minutes to learn about that.

Our repository is where we will put code relating to our project. How do we add and track code though, you ask? Simple! Well, once you get used to it. We will be accessing GitHub through from our command line and "pushing" code to our repository that way.

### Adding Code to Your Repository
::: tip
The code in this guide works on Macs but the commands and applications may differ on Windows and Linux.
:::

First let us open our... [Continue]

That was kind of a lot to take in, wasn't it? Take a break and feel proud that now you know how to use GitHub and the terminal.

## Markdown
Markdown isn't often taught and it's usually more something that one picks up after being around the coding scene for long enough. Markdown is a "lightweight markup language" and it's easy enough to pick up in around 5 minutes. While it may seem trivial, it can be extremely helpful when creating README.md files for repositories, making organized notes, or even for drafting blog posts. This very page was actually written in Markdown belive it or not with the static site generator [VuePress](https://vuepress.vuejs.org/). The possiblities are endless and it's so easy to learn that there really isn't a reason to *not* know it.

So, how do we use Markdown? Simple! Open up your favorite text editor (mine is [Atom](https://atom.io/) but it doesn't matter which one you use) and create a new file. The way you create a Markdown file is simply to save it with the extension `.md` like this: `exampleFile.md`. That's it! To view the rendered version of your markup file install a plugin on your text editor if it's supported. Another way to view your markdown file is to use an online Markdown editor which there a plethora of free ones. These include but not limited to:

  * [Stackedit](https://stackedit.io)
  * [Dillinger](https://dillinger.io)
  * [Typora](https://www.typora.io)

These sites also usually come with an example page that reminds you about the Markdown syntax which is very helpful. Speaking of markdown syntax, in the file you have open or in the online editor let's learn about that.

### Headers
::: tip
Don't forget to put a space between the pound symbol `# ` and your words
:::
Headers are essentially titles and they can have varying font sizes.. The biggest header size is H1 and this goes all the way down to size H6. To create a header, simply put a pound sign `# ` in front of the word(s) where one pound sign `# ` is H1, two pound signs `## ` is H2, three pound signs `### ` is H3, and so on. For example view this raw Markdown file:

```markdown
# This is verrrry big
## Not so big
### Getting smaller...
#### Shrinking!
##### Can you still see me?
###### So tiny!
```

This is what that file would look like rendered (using the Typora desktop application):

<img src="/3.png">

That's headers! To write normal text you don't need to put anything special, just begin it on a new line.

```markdown
# This text is a header!
This is just normal looking body text
```

### Lists
To make a list in Markdown simply start a line with `* ` to make an unordered list or `1. ` to start an ordered list. Unordered lists can also start with a `+ ` sign or a `- ` sign. To nest a list, simply tab it in.

```markdown
* This is an
* Unordered list

1. This is an
2. Ordered list
    * This is a nested unordered list
```
How the file would look rendered:

<img src="/4.png">

### Text Styling

### Links

### Code Blocks
Inline code highlighting is done with backticks ` `` ` around the code like ``` `this` ```. If you have a block of code then put three backticks before and after the block of code. Markdown also supports code highlighting.


### More
There's so much more that Markdown can do but this is a solid foundation. To learn about all the wonders of Markdown, visit the [Markdown wiki](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to get a more complete list of what Markdown can do to help you creaate stunning and neat looking websites and files!

## Extra Handy Tools
* [ScreenToLayers: ](https://apps.apple.com/us/app/screentolayers) This app converts open windows on your desktop into pngs/PSD files and makes them look neat. It's what I use for most of the application screenshots in this guide.
