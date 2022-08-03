import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Visitors_count')
def lambda_handler(event, context):
    response = table.get_item(Key={
            'vs':'0'
    })
    visitors_count = response['Item']['visitors_count']
    visitors_count += 1
    response = table.put_item(Item={
            'vs':'0',
            'visitors_count': visitors_count
    })
    response = table.get_item(Key={
            'vs':'0'
    })
    return response['Item']['visitors_count']