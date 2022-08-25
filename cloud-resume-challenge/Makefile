.PHONY: build
.SILENT: intergation-test

build:
	sam build

create-json-config:
	HOSTED_ZONE=$$(aws-vault exec exec my-user --no-session -- aws route53 list-hosted-zones | jq .HostedZones[0].Id | cut -d "\"" -f 2 | cut -d "/" -f3); \
	DOMAIN_NAME=$$(aws-vault exec exec my-user --no-session -- \
		aws route53 list-resource-record-sets \
				--hosted-zone $$HOSTED_ZONE | \
				jq '.ResourceRecordSets[] | select(.Type == "NS") | .Name ' | \
				cut -d "\"" -f2 \
				| sed 's/.$$//'); \
	echo "{ \"HOSTED_ZONE\": \"$$HOSTED_ZONE\", \"DOMAIN_NAME\": \"$$DOMAIN_NAME\"  }" > config.json

integration-test:
	DOMAIN_NAME=$$(cat config.json | jq .DOMAIN_NAME -r); \
	FIRST=$$(curl -s "https://api.$$DOMAIN_NAME/get" | jq ".count| tonumber"); \
	curl -s "https://api.$$DOMAIN_NAME/put"; \
	SECOND=$$(curl -s "https://api.$$DOMAIN_NAME/get" | jq ".count| tonumber"); \
	echo "Comparing if first count ($$FIRST) is less than (<) second count ($$SECOND)"; \
	if [[ $$FIRST -le $$SECOND ]]; then echo "PASS"; else echo "FAIL";  fi

end-to-end-test:
	node end-to-end-test/index.js

deploy-infra:
	sam build && aws-vault exec my-user --no-session sam deploy

deploy-site:
	aws-vault exec my-user --no-session aws s3 sync ./resume-site s3://crc-bucket-3

invoke-put: 
	sam build && aws-vault  exec my-user --no-session -- sam local invoke PutFunction