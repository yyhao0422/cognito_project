## Introduction

This is a simple react login page for authentication using AWS Cognito User Pool. You can use it as a reference on how to implement a authentication using AWS SDK: Javascript. AWS Cognito User Pool provide you an identity database and authentication flow. As a basic usage, you will need to create Cognito User Pool along with Cognito App Client to integrate it into your react application.

## Prerequisite

In order to follow along with, you need to have a

- AWS account with an IAM User Access Key and Secret Access Key
- [Terraform CLI Installed](https://developer.hashicorp.com/terraform/install)
- [AWS CLI Installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Code Editor](https://code.visualstudio.com/Download)

## Run Locally

Clone the project. Open terminal to follow.

```bash
  git clone https://github.com/yyhao0422/cognito_project.git
```

Setup AWS Credentials

```bash
  aws configure
  [ACCESS KEY]
  [SECRET ACCESS KEY]
  us-east-1
```

Create AWS Cognito User Pool and Cognito App Client using Terraform

```bash
   cd cognito_project\terraform
   terraform init
   terraform plan
   terraform apply -auto-approve
```

You should get your unique user pool id and client id to indicate that you created successfully.

```bash
Outputs:

cognito_user_pool_client_id = "xxxxxxxxxxxxxxxx"
cognito_user_pool_id = "xxxxxxxxxxx"
```

Create config.json on cognito_project directory and fill in user pool and client id.

```bash
{
  "region": "us-east-1",
  "userPoolId": "[COGNITO_USER_POOL_ID]",
  "clientId": "[COGNITO_USER_CLIENT_ID]"
}

```

Install dependancy and run the react page.

```bash
  npm install
  npm run dev
```

## Reference

- [AWS Cognito Documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-test-application-react.html)
