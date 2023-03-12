// ~/amplify-react-sample/amplify-infra/lib/amplify-infra-stack.ts

import * as cdk from "aws-cdk-lib";
import * as contructs from 'constructs'
import * as amplify from "@aws-cdk/aws-amplify-alpha";

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: contructs.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Part 2 - Creation of the Amplify Application
    const amplifyApp = new amplify.App(this, "sample-react-app ", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "Saruniks",
        repository: "cdk-amplifyapp",
        oauthToken: cdk.SecretValue.secretsManager('my-github-token'),
      }),
    });
    const masterBranch = amplifyApp.addBranch("main");
  }
}
