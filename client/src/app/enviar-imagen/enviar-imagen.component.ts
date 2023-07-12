import { Component } from '@angular/core';
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

      this.http.post<any>('http://localhost:3001/uploadImage', formData).subscribe(
        (response) => {
          const imageUrl = response.url;
          this.imageUrl = imageUrl;
          console.log('Todo bien', response);
        },
        (error) => {
          console.error('Error al cargar la imagen:', error);
        }
      );

    }
  }

}
