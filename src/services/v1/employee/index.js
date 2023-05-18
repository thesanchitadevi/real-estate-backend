const express = require("express");
const employeeSchema = require("./employee.schema");
const router = express.Router();

router.get(
    "/",
    employeeSchema.getAll
    /* 	
        #swagger.description = 'Get all employee list' 

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

router.get(
    "/:id",
    employeeSchema.getById
    /* 	
        #swagger.description = 'Get employee informations' 


        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.post(
    "/",
    employeeSchema.create
    /* 
        #swagger.description = 'Create a new employee' 

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
                                    "designation",
                                    "description",
                                    "image",
                                    "rank"
                                ],
                        "properties": { 
                            "firstName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "AHMED ATAUL" 
                            },
                            "lastName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "KARIM" 
                            },
                            "designation":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Director" 
                            },
                            "rank":{
                                "type": "integer", 
                                "minLength": 10, 
                                "example": "1" 
                            },
                            "description":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Mr. Ahmed Ataul Karim was born on 1st January 1974 in Feni District. He has participated in various professional training from time to time-related to his assigned job. It has increased his professional efficiency in all respects.

                                Mr. Ahmed Ataul Karim is also Director of JCX Developments Ltd, Chairman of Global Energy Ltd, Managing Director of Jams Consortium Ltd. Since his involvement with JCX Developments Ltd. as a director, he has become one of the most successful and well-renowned businessmen in the real estate sector of Bangladesh. He has travelled extensively in U.S.A, Thailand, France, Malaysia, U.K, Singapore, and many other countries." 
                            },
                            "image":{
                                "type": "string"
                            },
                            "isActive":{
                                "type": "boolean",
                                "example": "true"
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

router.patch(
    "/:id",
    employeeSchema.updateInformation
    /* 
        #swagger.description = 'Update project informations' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "properties": { 
                            "firstName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "AHMED ATAUL" 
                            },
                            "lastName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "KARIM" 
                            },
                            "description":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Mr. Ahmed Ataul Karim was born on 1st January 1974 in Feni District. He has participated in various professional training from time to time-related to his assigned job. It has increased his professional efficiency in all respects.

                                Mr. Ahmed Ataul Karim is also Director of JCX Developments Ltd, Chairman of Global Energy Ltd, Managing Director of Jams Consortium Ltd. Since his involvement with JCX Developments Ltd. as a director, he has become one of the most successful and well-renowned businessmen in the real estate sector of Bangladesh. He has travelled extensively in U.S.A, Thailand, France, Malaysia, U.K, Singapore, and many other countries." 
                            },
                            "image":{
                                "type": "string"
                            },
                            "isActive":{
                                "type": "boolean",
                                "example": "true"
                            }
                        } 
                    },
                }
            }
        }

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

router.delete(
    "/:id",
    employeeSchema.deleteById
    /* 
        #swagger.deprecated = true

        #swagger.description = 'Delete an employee' 

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