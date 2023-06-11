const express = require("express");
const buyerScema = require("./buyer.scema");
const router = express.Router();

router.post(
  "/",
  buyerScema.create
  /* 
        #swagger.description = 'Create a new buyer' 

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": [
                                     "buyerName",
                                     "buyerEmail",
                                     "buyerProfession",
                                     "phoneNumber",
                                     "handoverDate",
                                     "orientation",
                                     "preferredLocation",
                                     "preferredSize",
                                     "preferredFloor",
                                     "attractiveFeature",
                                     "numberofBathroom",  
                                     "numberofBedroom",
                                     "parkingSize",
                                     
                                ],
                        "properties": { 
                            "buyerName": { 
                                "type": "string", 
                                "minLength":10, 
                                "example": "Farjana Moon"  
                            },
                            "buyerEmail": { 
                                "type": "string", 
                                "minLength": 5, 
                                "example":"khan@gmail.com" 
                            },
                            "buyerProfession":{
                                "type": "string", 
                                "minLength": 3, 
                                "example": "progrommer" 
                            },
                            "phoneNumber": { 
                                "type": "string", 
                                "minLength": 11,
                                "example": "01234567891" 
                            },
                            "handoverDate": {
                                "type": "date",
                                "pattern": "YYYY-MM-DD",
                                "example": "2023-01-19"
                            },
                            "preferredLocation": { 
                                "type": "string", 
                                "minLength": 5, 
                                "example": "Hazibari, Uttara, Dhaka"
                            },
                            "preferredSize": { 
                                "type": "string", 
                                "minLength": 05, 
                                "example": "100 sq/ft" 
                            },
                            "preferredFloor": { 
                                "type": "integer",  
                                "example": 5
                            },
                            "numberofBathroom": { 
                                "type": "integer", 
                                "example": 3
                            },
                            "numberofBedroom": { 
                                "type": "integer", 
                                "example": 5
                            },
                            "attractiveFeature": { 
                                "type": "string", 
                                "example": "Lakeside"
                            },
                            "orientation": { 
                                "type": "string",
                                "enum": ["East","West","North","South"],
                                "example": "North" 
                            },
                            "parkingSize": { 
                                "type": "integer", 
                                "example": 10
                            },
                            "isRead" : {
                                "type": "boolean",
                                "example": "false"
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
  buyerScema.getAll
  /* 	
        #swagger.description = 'Get all buyer list' 

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

router.put(
    "/:id",
    buyerScema.markAsRead
    /* 
        #swagger.description = 'Update as read' 

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
