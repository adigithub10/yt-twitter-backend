import {v2 as cloudinary} from cloudinary;
import fs from fs;

cloudinary.config({
    cloud_names :process.env.CLOUDDINARY_CLOUD_NAME,
    api_key :process.env.CLOUDINARY_API_KEY,
    ap_secret:process.env. "Gheju1Z4iiLDX3yWKvUVGywF6dE"
})


(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: '', 
        api_key: '156475457147486', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
})