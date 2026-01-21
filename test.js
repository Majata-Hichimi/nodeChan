import figlet from "figlet";
import { intro, outro, confirm, select, multiselect, isCancel, cancel } from "@clack/prompts";
import chalk from "chalk";

async function appStarter() {
  const userMessages = {
    appName: "nodeChan",
    introMessage: "Hello talented JavaScript developer",
    readyToGo: "Are you ready to build?",
    operationCancel: "User escaped task",
  };

  // ASCII banner (sync to preserve order)
  console.log(figlet.textSync("nodeChan."));

  // Intro
  intro(userMessages.introMessage);

  // Confirm
  const ifProceed = await confirm({
    message: userMessages.readyToGo,
  });

  if (isCancel(ifProceed) || !ifProceed) {
    cancel(userMessages.operationCancel);
    process.exit(0);
  }

  // Language select
  const selectLanguage = await select({
    message: "Please choose your preferred language",
    options: [
      { value: "ts", label: "TypeScript" },
      { value: "js", label: "JavaScript" },
    ],
  });

  if (isCancel(selectLanguage)) {
    cancel("Language selection cancelled");
    process.exit(0);
  }

  // Runtime select
  const selectRuntimeEnvironment = await multiselect({
    message: "Select Project Runtime",
    options: [
      { value: "node", label: "Node.js", hint: "recommended" },
      { value: "bun", label: "Bun" },
      { value: "deno", label: "Deno" },
    ],
    required: false,
  });

  if (isCancel(selectRuntimeEnvironment)) {
    cancel("Runtime selection cancelled");
    process.exit(0);
  }

  outro("All done boss, happy programming 🚀");
}

// Start app
await appStarter();
