# 1. Carleton University Fencing Club Website

[GatsbyJS](https://www.gatsbyjs.org) site with [NetlifyCMS](https://www.netlifycms.org). Styled using [TailwindCSS](https://tailwindcss.com).


# 2. Development setup

## 2.1. Prerequisites

* [Git](https://git-scm.com/)
* [Node.JS](https://nodejs.org/en/) x64, version `>= 12.x` 

## 2.2. Setup
* Install dependencies
  ```
  npm install
  ```
* Start gatsby site locally
  ```
  npm start
  ```
## 2.3. Project structure
### 2.3.1. Content
All the content is written in markdown and exists in `src/content`. If you want to update news either use NetlifyCMS or go to `src/content/news` use existing news posts as templates for new post.

### 2.3.2. Images
All the images are in `src/images` and organized using sub-directories.
  * `coaches`: Filename should start with a number to define the order of images. Follow this format -> `XX FirstName LastName.jpg`. If you update coach image then rename it whatever it was before to avoid any errors in bio of respective coach. <sup>1</sup>
 * `news`: This is further divided into subdirectories in order to organize them better. Relative paths are then used to get images in `src/content/news/*`. For reference check [`src/content/news/2018/Successful Beginners Challenge.md`](src/content/news/2018/Successful%20Beginners%20Challenge.md)
 * `programs`: Filename should start with a number to define the order of images. Follow this format -> `XX programName.jpg`. <sup>1</sup>
 * `slideshow`: Filename should start with a number to define the order of images (not necessary, but good to have). You can add `n` number of images but is it not a great idea so don't go beyond 5-6 images.
 * `tournaments`: Filename should start with a number to define the order of images. Follow this format -> `XX tournamentName.jpg`. <sup>1</sup>

---
<sup>1</sup> If you are adding a new item checkout how it is done now and use that as a template. Reason: Images are separate from content and they are stitched together later on and source of truth is filename. So you need to keep the naming consistent between image names and content file names.

### 2.3.3. File uploads
If you want to serve pdf files or other types of files. Just add it to `static/uploads` and you can get on website by going to `/uploads/fileName`. I would suggest removing any spaces or special characters for filenames to make it easier. To learn more about static folder checkout [gatsby docs](https://www.gatsbyjs.org/docs/static-folder/).

### 2.3.4. Netlify CMS
NetlifyCMS config file in `static/admin`. If you want to update it or add new things checkout [NetlifyCMS docs](https://www.netlifycms.org/docs/configuration-options/).

### 2.3.5. Remaining 
Rest of directories are used to organize code.

## 2.4. Helpful Resources
* https://www.gatsbyjs.org/docs/
* https://www.netlifycms.org/docs/
* https://tailwindcss.com/docs/
* https://reactjs.org/
