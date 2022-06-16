# Roam Research Extension Template
    
Hey! Welcome to the wonderful world of Roam. I'm glad that you've decided to build extensions for it :)

Here's a little but of information that you should find helpful:

## File Structure
All Roam Extension code is located in `roam-extension/src`. This code is built into the `roam-extension/build` folder, and hosted statically through an ExpressJS application in `index.js`

## Usage
After you change your code, all you have to do his click "Run" at the top! You can check out the `run` property in the `.replit` file for insight into exactly [what is being done](https://docs.replit.com/programming-ide/configuring-repl). Hot refresh is not yet supported, and it may take some time for the server to start up each time. 

### Once the server is started:
First create a block with the text `{{[[roam/js]]}}` on any page in your Roam DB. Then, create a single child of this block and type three backticks. A code block should appear. Copy this code and paste it into the child code block in your graph:
```
var existing = document.getElementById("EXTENSION_ID_TO_REPLACE");
if (!existing) {
  var extension = document.createElement("script");
  extension.src = "[URL_TO_REPLACE]/main.js";
  extension.id = "EXTENSION_ID_TO_REPLACE";
  extension.async = true;
  extension.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(extension);
}
```
Where `URL_TO_REPLACE` is the hosted URL when the ExpressJS server is running (making sure to append it with `/main.js`) and `Extension_ID_TO_REPLACE` is just an arbitrary id string (for this example, it is `roam-extension`).

For this prebuilt example, you can now use `{{import roam-extension}}` anywhere in your Roam graph. It should turn into a button and log something in the console when pressed. 

You can do now do pretty much anything that regular Javascript allows for, including interface with the DOM in your Roam graph. **Please do all extension testing in a test graph!**

### Config
  If you go to the page `roam/js/[EXTENSION_ID]` you will see a dummy config UI set up for your extension. You can use this to add tokens or any other manual strings to use in your extension.

## RoamJS
For exactly what functions and APIs Roam Research offers, you can see the following links:
- https://developer.roamjs.com/
  - note: this uses the deprecated roam-client package. Instead we should use roamjs-components
- https://github.com/dvargas92495/roamjs-scripts
- https://github.com/dvargas92495/roamjs-components
- [Developer Hub](https://roamresearch.com/#/app/developer-documentation/page/49715b-M2)
      