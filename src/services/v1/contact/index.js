const express = require("express");
const contactScema = require("./contact.scema");
const router = express.Router();

router.post(
  "/",
  contactScema.create
  /* 
        #swagger.description = 'Create a new contact' 

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": [
                                     "contactName",
                                     "Email",
                                     "phoneNumber",
                                     "message"
                                      
                                ],
                        "properties": { 
                            "contactName": { 
                                "type": "string", 
                                "minLength":10, 
                                "example": "Farjana" 
                            },
                            "Email": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "farjana@gmail.com" 
                            },
                            "phoneNumber": { 
                                "type": "string", 
                                "minLength": 11,
                                "example": "01234567891" 
                            },
                             "messsage": { 
                                "type": "string", 
                                "minLength": 5,
                                "example": "build my building carefully" 
                            },
                           
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

router.get(
    "/",
    contactScema.getAll
    /* 	
        #swagger.description = 'Get all contact list' 

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

module.exports = router;
