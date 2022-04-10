import { Firebot } from "firebot-custom-scripts-types";

interface Params {
  message: string;
}

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name: "Starter Custom Script",
      description: "A starter custom script for build",
      author: "SomeDev",
      version: "1.0",
      firebotVersion: "5",
    };
  },
  getDefaultParameters: () => {
    return {
      message: {
        type: "string",
        default: "Hello World!",
        description: "Message",
        secondaryDescription: "Enter a message here",
      },
    };
  },
  run: (runRequest) => {
    console.log("Test")
    const { logger } = runRequest.modules;
    logger.info(runRequest.parameters.message);

    const axios = require('axios');

    axios.post('http://localhost:8080/', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then(function (response: any) {

      console.log(response)
    })

    .catch(function (error: any){
      console.log(error)
    })
  },
};

export default script;
