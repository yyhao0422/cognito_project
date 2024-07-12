terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.50.0"
    }
  }
}

provider "aws" {
  # Configuration options
  region  = "us-east-1"
  profile = "default"
}

# terraform apply -var="region=us-east-1"
variable "region" {
  type    = string
  default = "us-east-1"
}

variable "cognito_user_pool_name" {
  type    = string
  default = "my-user-pool"
}

resource "aws_cognito_user_pool" "cognito-user-pool" {
  name                     = var.cognito_user_pool_name
  alias_attributes         = ["preferred_username"]
  auto_verified_attributes = ["email"]
  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }
}

resource "aws_cognito_user_pool_client" "cognito-user-pool-client" {
  name                = "${var.cognito_user_pool_name}-client"
  user_pool_id        = aws_cognito_user_pool.cognito-user-pool.id
  explicit_auth_flows = ["ALLOW_REFRESH_TOKEN_AUTH", "ALLOW_USER_SRP_AUTH", "ALLOW_USER_PASSWORD_AUTH"]
  generate_secret     = false
}


output "cognito_user_pool_id" {
  value = aws_cognito_user_pool.cognito-user-pool.id
}

output "cognito_user_pool_client_id" {
  value = aws_cognito_user_pool_client.cognito-user-pool-client.id
}
