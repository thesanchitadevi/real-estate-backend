const express = require("express");
const landownerScema = require("./landowner.scema");
const router = express.Router();

router.post(
  "/",
  landownerScema.create
  /* 
        #swagger.description = 'Create a new landowner' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": [
                                     "landownerName",
                                     "landownerEmail",
                                     "phoneNumber",
                                     "alterLandownerName",
                                     "locality",
                                     "fullAddress",
                                     "landSize",
                                     "width",
                                     "category",
                                     "attractiveFeature",
                                     "orientation",  
                                ],
                        "properties": { 
                            "landownerName": { 
                                "type": "string", 
                                "minLength":10, 
                                "example": "Farjana Moon" 
                            },
                            "landownerEmail": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "farjanamoon@gmail.com" 
                            },
                            "phoneNumber": { 
                                "type": "string", 
                                "minLength": 11,
                                "example": "01234567891" 
                            },
                            "alterLandownerName": {
                                "type": "string",
                                "miniLength": 10,
                                "example": "Utsha Khan"
                            },
                            "locality": { 
                                "type": "string", 
                                "example": "Uttara"
                            },
                            "fullAddress": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Hazibari, Uttara, Dhaka"
                            },
                            "landSize": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "100 sq/ft" 
                            },
                            "width": { 
                                "type": "string", 
                                "minLength": 5, 
                                "example": "100 sq/ft" 
                            },
                            "category": { 
                                "type": "string", 
                                "enum": ["freehold", "leasehold"],
                                "example": "freehold"
                            },
                            "attractiveFeature": { 
                                "type": "string", 
                                "enum": ["Lakeside","Cornerplot","Mainroad","Parkview","Others"],
                                "example": "Lakeside"
                            },
                            "orientation": { 
                                "type": "string",
                                "enum": ["East","West","North","South"],
                                "example": "North" 
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

router.get(
    "/",
    landownerScema.getAll
    /* 	
        #swagger.description = 'Get all landowner list' 

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