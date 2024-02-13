import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from "@angular/common";
import { ZoneOverlayComponent } from "../../components/zone-overlay/zone-overlay.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NgIf,
    ZoneOverlayComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('svgRoot') svgRoot: ElementRef<SVGElement> | undefined;
  isHovered: boolean = false;
  currentZone: { id: string, title: string, x: number, y: number } | null = null;

  constructor() { }

  highlight(circleId: string): void {
    this.isHovered = true;
    const circle = this.svgRoot?.nativeElement.querySelector(`#${circleId}`);
    if (circle) {
      const title = circle.getAttribute('data-title'); // Suppose you add data-title attribute to your circles
      const cx = circle.getAttribute('cx');
      const cy = circle.getAttribute('cy');
      this.currentZone = {
        id: circleId,
        title: title || '',
        x: parseInt(cx || '0', 10),
        y: parseInt(cy || '0', 10)
      };
    }
  }

  resetHighlight(): void {
    this.isHovered = false;
    this.currentZone = null;
  }
}
