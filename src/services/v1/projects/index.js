const express = require("express");
const projectsSchema = require("./projects.schema");
const router = express.Router();

router.post(
    "/",
    projectsSchema.create
    /* 
        #swagger.description = 'Create a new project' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": [
                                    "projectName",
                                    "types",
                                    "status",
                                    "orientation",
                                    "architect",
                                    "address",
                                    "landSize",
                                    "numberUnits",
                                    "apartmentSize",
                                    "numberFloors",
                                    "numberParkings",
                                    "handOverDate",
                                ],
                        "properties": { 
                            "projectName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "JCX PARK" 
                            },
                            "address": { 
                                "type": "string", 
                                "minLength": 100, 
                                "example": "Dhanmondi, Dhaka" 
                            },
                            "architect": { 
                                "type": "string", 
                                "minLength": 40, 
                                "example": "AR Rahman" 
                            },
                            "numberFloors": { 
                                "type": "integer", 
                                "minLength": 20, 
                                "example": 10
                            },
                            "numberParkings": { 
                                "type": "integer", 
                                "minLength": 20, 
                                "example": 10
                            },
                            "numberUnits": { 
                                "type": "integer", 
                                "minLength": 10, 
                                "example": 3 
                            },
                            "landSize": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "100 sq/ft" 
                            },
                            "apartmentSize": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "100 sq/ft" 
                            },
                            "types": { 
                                "type": "array", 
                                "example": ["construction", "residential"]
                            },
                            "status": { 
                                "type": "array", 
                                "example": ["ongoing", "upcoming", "completed"]
                            },
                            "orientation": { 
                                "type": "array", 
                                "example": ["ongoing", "upcoming", "completed"]
                            },
                            "handOverDate": { 
                                "type": "string",
                                "pattern": "YYYY-MM-DD",
                                "example": "2023-01-19" 
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

module.exports = router;