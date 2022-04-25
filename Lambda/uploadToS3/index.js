const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
    console.log(event);

    const response = {
        isBase64Encoded: false,
        statusCode: 200,
        body: JSON.stringify({ message: "Successfully uploaded file to S3" }),
    };

    try {
        // const parsedBody = event.body;
        const base64File = event.imageFile;
        const decodedFile = Buffer.from(base64File.replace(/^data:image\/\w+;base64,/, ""), "base64");
      
        const params = {
            Bucket: 'cloud-demo-images',
            Key: event.imageName,
            Body: decodedFile,
            ContentType: "image/jpeg",
        };

        const uploadResult = await s3.upload(params).promise();

        response.body = JSON.stringify({ message: "Successfully uploaded file to S3", uploadResult });
    } catch (e) {
        console.error(e);
        response.body = JSON.stringify({ message: "File failed to upload", errorMessage: e });
        response.statusCode = 500;
    }

    return response;
};

