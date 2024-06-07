from httpx import Client

with Client() as client:
    # Get the prediction for image cocoa.jpg passed as a binary file in the request body
    response_multi = client.post(
        url="https://api-test.openepi.io/crop-health/predictions/multi-HLT",
        body=open("cocoa.jpg", "rb").read(),
    )

    data_multi= response_multi.json()
    print(data_multi["HLT"])