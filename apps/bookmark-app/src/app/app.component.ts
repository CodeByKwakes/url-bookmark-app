import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterAnimation } from './animations';
@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouterAnimation],
})
export class AppComponent {
  title = 'bookmark-app';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
