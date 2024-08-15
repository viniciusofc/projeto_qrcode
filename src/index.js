import prompt from "prompt"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import PromptSchemaMain from "./prompts-schema/prompt-schema-main.js";


async function main() {
    prompt.get(PromptSchemaMain, async (err, choose) => {
        if(err){
            console.log(err)
            return;
        }
        
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    });

    prompt.start();
}

main()