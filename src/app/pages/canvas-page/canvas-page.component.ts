import { Component, OnInit, HostListener } from '@angular/core';

import { Canvas } from '../../utils/canvas'

let KeyCode = {
  drums1: 'w',
  drums2: 'q',
  drums3: 'e',
  particles: ' ',
  piano1: 'p',
  piano2: 'o',
  piano3: 'i',
  piano4: 'u',
  piano5: 'ñ',
  piano6: 'l',
  piano7: 'k',
  piano8: 'j',
  text: 'n',
  text2: '¡',
  guitar: 'z',
  guitar2: 'x',
  bg: 'b',
  recursive: 'r',
}

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {

  canvas;
  text = "Fuck this shit!!"

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    ev.preventDefault();
    const key = ev.key.toLowerCase()

    if (key === KeyCode.drums1 || key == KeyCode.drums2 || key == KeyCode.drums3) {
      this.canvas.clearCanvasDrums();
    }

    if (key == KeyCode.text) {
      document.getElementById('text').style.opacity = "0";
    }

    if (key == KeyCode.recursive) {
      this.canvas.clearCanvasFace();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    ev.preventDefault();

    const key = ev.key.toLowerCase()
    if (key === KeyCode.drums1) {
      this.canvas.demoDrums(1);
    }

    if (key == KeyCode.drums2) {
      this.canvas.demoDrums(2);
    }

    if (key == KeyCode.drums3) {
      this.canvas.demoDrums(3);
    }

    if (key === KeyCode.particles) {
      this.canvas.demoParticle();
    }

    if (key == KeyCode.piano1) {
      this.canvas.demoRectangle(1);
      //this.canvas.demoCircle(1);
    }

    if (key == KeyCode.piano2) {
      this.canvas.demoRectangle(2);
      //this.canvas.demoCircle(2);

    }

    if (key == KeyCode.piano3) {
      this.canvas.demoRectangle(3);
      //this.canvas.demoCircle(3);

    }

    if (key == KeyCode.piano4) {
      this.canvas.demoRectangle(4);
      //this.canvas.demoCircle(4);

    }

    if (key == KeyCode.piano5) {
      this.canvas.demoRectangle(5);
      //this.canvas.demoCircle(5);

    }

    if (key == KeyCode.piano6) {
      this.canvas.demoRectangle(6);
      //this.canvas.demoCircle(6);

    }

    if (key == KeyCode.piano7) {
      this.canvas.demoRectangle(7);
      //this.canvas.demoCircle(7);

    }

    if (key == KeyCode.piano8) {
      this.canvas.demoRectangle(8);
      //this.canvas.demoCircle(8);
    }

    if (key === KeyCode.text) {
      document.getElementById('text').style.opacity = "1";
    }

    if (key === KeyCode.text2) {
      document.getElementById('text-thanks').style.opacity = "1";
    }

    if (key === KeyCode.guitar) {
      this.canvas.demoLines();
    }

    if (key === KeyCode.bg) {
      this.canvas.demoBg();
    }

    if (key === KeyCode.recursive) {
      this.canvas.demoRecursive();
    }
  }

  constructor() {}

  ngOnInit() {
    this.canvas = new Canvas([]);
  }
}
