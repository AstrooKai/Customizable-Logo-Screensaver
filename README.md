# Customizable-Logo-Screensaver
Do you want to have a bouncing logo screensaver like <a href="https://th.kyle9.repl.co/">this</a>? Yea its like the DVD boucing logo but their color is not the same as the DVD one *(well atleast we have a bouncing logo lol)*. Well then you are in the right place! This repository gives you the codes needed to have your own bouncing logo! Just follow the guide below to set it set and working properly!

1. Git clone or import this repository to your project.
2. Edit the title and og tagd in the head of the `page.html` file with your own settings, this is for the web title and URL preview.
3. Upload your logo to your project.
4. Add the file name of your logo in this part in `sketch.js`.
```js
function preload() {
  logo = loadImage('filename.format'); //Example: logo.png
}
```
Thats it! Now run your project and see your own bouncing logo, Amazing!


*Codes in this repository are derived and revised from <a href="https://github.com/CodingTrain/website/tree/main/CodingChallenges/CC_131_BouncingDVDLogo/P5">CodingTrain/website/CodingChallenges/CC_131_BouncingDVDLogo/P5/</a> repository
Credits to @gruselhaus & @CodingTrain*
