import { exec } from "child_process";
import { build } from "./src/build";
import { watch } from "chokidar";

type Command = "build";

function buildOnAnotherProcess(): void {
  exec("npx tsx bin.ts build");
}

async function main(): Promise<void> {
  const command = process.argv[2] as Command | undefined;

  switch (command) {
    case "build":
      {
        const isWatch =
          process.argv.includes("--watch") || process.argv.includes("-w");

        if (isWatch) {
          watch("src").on("all", (event, path) => {
            console.log(`[${event}] ${path}`);
            buildOnAnotherProcess();
          });
        } else {
          await build();
        }
      }
      break;
    default:
      console.error(`Unknown command: ${command as any}`);
      process.exit(1);
  }
}

void main();
