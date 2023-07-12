package com.tuorganizacion.backend.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImageController {
    @PostMapping("/api/images/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) {
        // Implementa aquí la lógica para enviar el archivo a Cloudinary y devuelve la URL de la imagen cargada
        return "URL de la imagen cargada desde Cloudinary";
    }
}
