import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  osInfo: string;

  constructor() {
    this.osInfo = this.getOSInfo();
  }

  getOSInfo(): string {
    const userAgent = window.navigator.userAgent;
    let os = 'Unknown OS';

    if (userAgent.indexOf('Win') !== -1) os = 'Windows';
    else if (userAgent.indexOf('Mac') !== -1) os = 'MacOS';
    else if (userAgent.indexOf('X11') !== -1) os = 'UNIX';
    else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';

    return os;
  }
}
