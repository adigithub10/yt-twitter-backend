import {v2 as cloudinary} from cloudinary;
import fs from fs;
//this code is incomplete!!need to complete this soon

cloudinary.config({
    cloud_names :process.env.CLOUDDINARY_CLOUD_NAME,
    api_key :process.env.CLOUDINARY_API_KEY,
    ap_secret:process.env. Gheju1Z4iiLDX3yWKvUVGywF6dE
})


(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: '', 
        api_key: '156475457147486', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    
})
  // Upload an image 
  const uploadResult = await cloudinary.uploader
  .upload(
      'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
          public_id: 'shoes',
      }
  )
  .catch((error) => {
      console.log(error);
  });

console.log(uploadResult);