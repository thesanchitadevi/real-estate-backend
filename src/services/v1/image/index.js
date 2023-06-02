const express = require("express");
const router = express.Router();
const schema = require("./image.schema");

router.get(
	"/",
	schema.getBanner
	/* 	
        #swagger.description = 'Get Gallery Images' 

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.post(
	"/",
	schema.uploadBanner
	/* 
        #swagger.description = 'Upload gallery image' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.consumes = ['multipart/form-data']  
        
        #swagger.requestBody = {
            content: {
                "multipart/form-data": {
                    schema: {
                        required: ["File"],
                        properties: {
                            File: {
                                type: "string",
                                format: "binary"
                            }
                        }
                    }
                }
            }
        }

        #swagger.responses[201] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.delete(
	"/:id",
	schema.deleteBanner
	/* 
        #swagger.description = 'delete gallery image' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

module.exports = router;