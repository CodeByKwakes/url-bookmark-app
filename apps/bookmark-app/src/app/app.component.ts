import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterAnimation } from '@phantom/util/animations';
@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouterAnimation],
})
export class AppComponent {
  /**
   * @description function to allow angular routing animations
   * @author Kwakes Prempeh
   * @param {RouterOutlet} outlet
   * @returns
   * @memberof AppComponent
   */
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
