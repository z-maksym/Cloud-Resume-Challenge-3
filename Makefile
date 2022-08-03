.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec my-user --no-session sam deploy

deploy-site:
	aws-vault exec my-user --no-session aws s3 sync ./crc-frontend s3://crc-mz

invoke-put:
	sam build && aws-vault  exec acloudguru-sandbox --no-session -- sam local invoke PutFunction