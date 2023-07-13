package com.example.demo.services;

import com.cloudinary.Cloudinary;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.HashMap;

@Service
public class CloudinaryImageService implements ImageService {

  private final Cloudinary cloudinary;

  public CloudinaryImageService() {
    Map<String, Object> config = new HashMap<>();
    config.put("cloud_name", "dylweuvjp");
    config.put("api_key", "353855474687689");
    config.put("api_secret", "j_fvWQQFRAC8Q0UNSr7VQVVEiAQ");
    this.cloudinary = new Cloudinary(config);
  }
 

  @Override
@SuppressWarnings("unchecked")
public String uploadImage(MultipartFile file) throws Exception {
    Map<String, Object> uploadResult = cloudinary.uploader().upload(file.getBytes(), new HashMap<>());
    return (String) uploadResult.get("secure_url");
}


}
