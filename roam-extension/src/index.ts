import toConfigPageName from "roamjs-components/util/toConfigPageName";
import runExtension from "roamjs-components/util/runExtension";
import { createConfigObserver } from "roamjs-components/components/ConfigPage";
import getBasicTreeByParentUid from "roamjs-components/queries/getBasicTreeByParentUid";
import getSettingValueFromTree from "roamjs-components/util/getSettingValueFromTree";
import getUidsFromButton from "roamjs-components/dom/getUidsFromButton";
import createBlock from "roamjs-components/writes/createBlock";

const extensionId = "roam-extension"
const CONFIG = toConfigPageName(extensionId);
const configUI = {
  title: CONFIG,
  config: {
    tabs: [
      {
        id: "home",
        fields: [
          {
            title: "token",
            description: "An example token for you",
            type: "text",
          },
        ],
      },
    ],
  } as any,
}


const clickEventListener =
  (
    targetCommand: string,
    token: string
  ) =>
    (e: MouseEvent) => {
      const htmlTarget = e.target as HTMLElement;
      if (
        htmlTarget &&
        htmlTarget.tagName === "BUTTON" &&
        htmlTarget.innerText
          .toUpperCase()
          .trim()
          .startsWith(targetCommand.toUpperCase())
      ) {
        if(token){
          console.log("here is your token: "+ token)
        }
        else{
          console.log("you didn't put a token but I still work!")
        }

        const {blockUid} = getUidsFromButton(htmlTarget as HTMLButtonElement)
        
        createBlock({parentUid: blockUid, node: {text: "Example write", children: [{text: "example child 1"}, {text:"example child 2"}]}})
        
      }
    };


const addButtonListener = (
  shortcut: string,
  token: string
) => {
  document.addEventListener("click",  clickEventListener(shortcut, token));
};


runExtension({
  extensionId,
  run: async() => {
    const { pageUid } = await createConfigObserver(configUI);
      const config = getBasicTreeByParentUid(pageUid)
      const token = getSettingValueFromTree({ tree: config, key: "token" });
    addButtonListener("import roam-extension", token)
  },
  unload: () => { },

});

