import { Component } from '@angular/core';
import { ThemeService } from '../Services/Theme.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private themeService: ThemeService) { }
  public themeLocal: boolean | null = null

  toggleTheme() {
    this.themeService.toggleTheme();
    this.themeService.theme$.subscribe(theme => {
      if (theme === "claro") {
        this.themeLocal = true;
      }
      if (theme === "oscuro") {
        this.themeLocal = false;
      }
    });
  }
}
