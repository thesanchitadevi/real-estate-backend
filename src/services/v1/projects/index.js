const express = require("express");
const projectsSchema = require("./projects.schema");
const router = express.Router();

/* to get all list */
router.get(
    "/",
    projectsSchema.getAll
    /* 	
        #swagger.description = 'Get all projects list' 

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

/* to create new project */
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
                            "city":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Dhaka"
                            },
                            "area":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Uttara"
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
                                "enum": ["construction", "residential"],
                                "example": "residential"
                            },
                            "status": { 
                                "type": "array", 
                                "enum": ["ongoing", "upcoming", "completed"],
                                "example": "ongoing"
                            },
                            "orientation": { 
                                "type": "array", 
                                "enum": ["north", "south", "east", "west"],
                                "example":"north"
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

/* get all banner list */
router.get(
    "/:id/banner",
    projectsSchema.getBanners
    /* 	
        #swagger.description = 'Get Banner Images' 

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
)

/* to get single project information */
router.get(
    "/:id",
    projectsSchema.getById
    /* 	
        #swagger.description = 'Get project informations' 


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
;

/* to update single project details */
router.patch(
    "/:id",
    projectsSchema.updateInformation
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
                            "projectName": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "JCX Residential" 
                            },
                            "address": { 
                                "type": "string", 
                                "minLength": 100, 
                                "example": "Shamoli, Dhaka" 
                            },
                            "architect": { 
                                "type": "string", 
                                "minLength": 40, 
                                "example": "AR Rahman" 
                            },
                            "city":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Dhaka"
                            },
                            "area":{
                                "type": "string", 
                                "minLength": 10, 
                                "example": "Uttara"
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
                                "example": "120 sq/ft" 
                            },
                            "apartmentSize": { 
                                "type": "string", 
                                "minLength": 10, 
                                "example": "150 sq/ft" 
                            },
                            "types": { 
                                "type": "array", 
                                "enum": ["construction", "residential"],
                                "example": "residential"
                            },
                            "status": { 
                                "type": "array", 
                                "enum": ["ongoing", "upcoming", "completed"],
                                "example": "upcoming"
                            },
                            "orientation": { 
                                "type": "array", 
                                "enum": ["north", "south", "east", "west"],
                                "example":"north"
                            },
                            "handOverDate": { 
                                "type": "string",
                                "pattern": "YYYY-MM-DD",
                                "example": "2023-04-29" 
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

/* delete a project */
router.delete(
    "/:id",
    projectsSchema.deleteById
    /* 
        #swagger.deprecated = true

        #swagger.description = 'Delete a project' 

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


router.post(
    "/:id/banner",
    projectsSchema.uploadBanner
    /* 
        #swagger.description = 'Upload Banner' 

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
    "/:id/banner/:id",
    projectsSchema.deleteBanner
    /* 
        #swagger.description = 'delete banner image' 

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