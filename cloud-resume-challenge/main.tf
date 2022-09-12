 terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.29.0"
    }
  }
  backend "s3" {
      bucket = "crc-terraform-mz"
      key    = "default-infrastructure"
      region = "us-east-1"
    }
}
 provider "aws" {
    region = "us-east-1"
    }
  
#  terraform {
#   
# }

# provider "aws" {
#   region  = "us-east-1"
#   access_key = "my-access-key" #Secrets to be set up
#   secret_key = "my-secret-key" #Secrets to be set up
# }
#Resource to create s3 bucket

resource "aws_s3_bucket" "terraform-bucket"{
  bucket = "crc-terraform-mz"
}

resource "aws_s3_bucket_versioning" "terraform_state" {
  bucket = "crc-terraform-mz"

  versioning_configuration {
    status = "Enabled"
  }
}