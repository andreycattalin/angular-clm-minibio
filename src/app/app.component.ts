import { Component, Renderer2 } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  moon = faMoon
  sun = faSun
  isNightMode = false

  socialNetworks = [
    {
      link: "http://github.com/andreycattalin",
      image: faGithub,
      title: "Mis proyectos de github"
    },
    {
      link: "https://twitter.com/andreycattalin",
      image: faTwitter,
      title: "Este es mi twitter"
    },
    {
      link: "https://attomic.es",
      image: faGlobeEurope,
      title: "La web de attomic"
    },
    {
      link: "https://www.linkedin.com/in/andreymarin",
      image: faLinkedin,
      title: "Mi linkedin"
    }
  ]

  constructor(private renderer: Renderer2) {

  }

  nightMode() {
    this.isNightMode = !this.isNightMode
    if(this.isNightMode) {
      this.renderer.addClass(document.body, 'night');
    } else {
      this.renderer.removeClass(document.body, 'night');
    }
  }

}
