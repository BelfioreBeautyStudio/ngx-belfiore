import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  template: `
    <mat-toolbar>
      <span>Belfiore Beauty Studio</span>
      <span class="spacer"></span>
      <button mat-icon-button routerLink="/">
        <mat-icon>home</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
