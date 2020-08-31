$("#image-selector").change(function () {
    
    console.log( "Selecting Image...");
    let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
 		$("#prediction-list").empty();
	}
	
	let file = $("#image-selector").prop('files')[0];
	reader.readAsDataURL(file);
});


$("#predict-button").click(async function () {
//  
    
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:557905a9-218b-4e68-95cf-e8141aca5ebb',
    });
    
    const buffer = require('buffer');
	let image = $('#selected-image').get(0);
    
    console.log(image);
	

	// Pre-process the image
	console.log( "Loading image..." );
	let tensor = tf.browser.fromPixels(image, 1)
		.resizeNearestNeighbor([256, 256]) // change the image size

        
                    
    var sagemakerruntime = new AWS.SageMakerRuntime({region:'us-east-2',});
    
    var params = {
        Body: image['src'].split(",")[1], /* Strings will be Base-64 encoded on your behalf */ /* required */
        EndpointName: 'pytorch-inference-2020-08-25-19-48-21-336', /* required */
        Accept: 'application/json',
        ContentType: 'application/x-image'

    };
    sagemakerruntime.invokeEndpoint(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);
                                    
            $("#prediction-list").append(new TextDecoder("utf-8").decode(data['Body']));
            // !! This string is the prediction !!
            console.log($("#prediction-list"));
    });
    
        
});


