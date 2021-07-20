**Peruse**
====
**Peruse** is an e-reader web app that lets you stay focused while you read online.

[Live Demo](https://peruse-reader.herokuapp.com/) 

![perusecover](https://user-images.githubusercontent.com/33171566/126246499-255c4e6c-73c7-42b0-a9ce-cf5117e6923e.png)

## Features
Peruse creates a distraction-free environment that makes reading online efficient.

There are 3 ways to read text using Peruse:
1. *Upload Text* - load a .txt file from your device
2. *Paste Text* - load text from your device's clipboard
3. *Image to Text* - load a screenshot from your device which Peruse will translate into readable text.

In Peruse, users can augment the text they're reading to improve their focus:
* *guided reading* - text begins to highlight itself to keep reader's attention.
* *dark mode* - adjust text and background to reduce eye strain
* *focus mode* - brings Peruse full screen to remove distracting tabs and external interfaces
* *text size* - adjust text size to increase readability

![peruseimg](https://user-images.githubusercontent.com/33171566/126246166-5730e835-6b4c-40c3-9aa4-8d1ff096d276.PNG)

## Technologies Used
javascript, express/node.js, npm, handlebars.js, ocrad.js, html, css, 

## Local Setup
use the package manager [npm](https://www.npmjs.com/get-npm) to install required dependencies:
```bash
npm install
```
then build the project:
```bash
npm build
```
and run the project locally:
```bash
node app.js
```
