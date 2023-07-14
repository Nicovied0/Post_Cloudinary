import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enviar-imagen',
  templateUrl: './enviar-imagen.component.html',
  styleUrls: ['./enviar-imagen.component.scss']
})
export class EnviarImagenComponent {

  public imageUrl: string | undefined;
  public fileToUpload: File | undefined;


  constructor(private http: HttpClient) { }

  onFileSelected(event: any): void {
    this.fileToUpload = event.target.files[0];
  }

  uploadImage(): void {
    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('image', this.fileToUpload);

      this.http.post('https://back-post-cloudinary.vercel.app/uploadImage', formData, { responseType: 'text' }).subscribe(
        (response) => {
          const responseObject = JSON.parse(response); // Analiza la respuesta JSON en un objeto
          const imageUrl = responseObject.url; // Obtiene la URL de la imagen del objeto de respuesta
          this.imageUrl = imageUrl;
          console.log('Todo bien', imageUrl);
        },
        (error) => {
          console.error('Error al cargar la imagen:', error);
        }
      );

    }
  }


  @ViewChild('imageUrlValue', { static: false })
  imageUrlValueRef!: ElementRef;

  copyToClipboard() {
    if (this.imageUrl) {
      const el = document.createElement('textarea');
      el.value = this.imageUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
}
