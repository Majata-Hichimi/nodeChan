/**
 * Node JS & Typescript project creation CLI
 * Implemented in node.js
 * by Majata Hichimi 
 * 21/01/2025
 * creates generic directories,installs dependancies and creates file structure
 */

/**
 * modual importation
 */
import figlet from "figlet";
import { intro,outro } from "@clack/prompts";
import { confirm } from "@clack/prompts";
import { select } from "@clack/prompts";
import { multiselect } from '@clack/prompts';
import { isCancel, cancel, text } from '@clack/prompts';
import chalk from "chalk";

/**
 * function defines main execution point of all program conponents
 * starts the app
 */
async function appStarter() {
    //object containing a series of messages
    const userMessages = new Object ({
        //app ASCII name
        appName:'nodeChan',
        //intro message after app starts
        introMessage:'Hello talented,Javascript developer',
        //user proceed prompts
        readyToGo:'Are you ready to build?',

        //user option prompts
        languageOfChoice:{
            languageOne:'Javascript',
            languageTwo:'TypeScript'
        },
        //operation cancellation messages
        operationCancel: 'user ecaped task'
    })

    //colored task exit
   
    

    //display for ASCII appName
  console.log(figlet.textSync("nodeChan."));
    
    //welcome user prompt
    intro(`${userMessages.introMessage}`);


    //confirmation if process should continue
    const ifProceed = await confirm({
        message:  `${userMessages.readyToGo}`,
    }) 


  if (isCancel(ifProceed) || !ifProceed) {
    cancel(userMessages.operationCancel);
    process.exit(0);
  }


    //prompts user to choose options
    const selectLanguage =  await select({
        message: 'Please choose your prefered language',
        options:[
            {value:'ts',label:'TypeScript'},
            {value:'js',label:'Javascript'}
        ]

    });




  if (isCancel(selectLanguage)) {
    cancel("Language selection cancelled");
    process.exit(0);
  }    

    //second layer prompts
    const selectRuntimeEnvironment = await  multiselect({
        message:'Select Project Run Time',
        options:[
            {value:'Node',label:'node js',hint:'recommended'},
            {value:'Bun',label:'bun'},
            {value:'deno',label:'deno'}
        ],
        required:false,

    });

if (isCancel(selectRuntimeEnvironment)) {
    cancel("Runtime selection cancelled");
    process.exit(0);
  }



    //end of task message for the users prompt
    outro(`All done boss,happy programming`);

}


    
/**
 * app start
 */appStarter();


