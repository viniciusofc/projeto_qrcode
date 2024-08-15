import prompt from "prompt";
import handle from './handle.js'
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";

async function createQRCode() {
    prompt.get(promptSchemaQRCode, handle);

    prompt.start();
}

export default createQRCode;