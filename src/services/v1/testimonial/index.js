const express = require("express");
const testimonialSchema = require("./testimonial.schema");
const router = express.Router();

router.get(
    "/",
    testimonialSchema.getAll
    /* 	
        #swagger.description = 'Get all testimonials list' 

        #swagger.parameters['search'] = {
            in: 'query',
            type: "string"
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            type: "number"
        }
        #swagger.parameters['page'] = {
            in: 'query',
            type: "number"
        }
        #swagger.parameters['sort'] = {
            in: 'query',
            type: "string"
        }

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
    testimonialSchema.create
    /* 
        #swagger.description = 'Create a new testimonial' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": [
                                    "firstName",
                                    "lastName",
                                    "testimonial"
                                ],
                        "properties": { 
                            "firstName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "PARK" 
                            },
                            "lastName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "JIMIN" 
                            },
                            "testimonial":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Trusting a company with your land is very important, and JCX Developments was the right choice as they earned our trust." 
                            }
                        } 
                    },
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
    testimonialSchema.deleteById
    /* 
        #swagger.deprecated = true

        #swagger.description = 'Delete a testimonial' 

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