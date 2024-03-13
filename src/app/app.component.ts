import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import { ZoneOverlayComponent } from "../components/zone-overlay/zone-overlay.component";
import {ZoneDetailsComponent} from "../components/zone-details/zone-details.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NgIf,
    ZoneOverlayComponent,
    ZoneDetailsComponent,
    NgStyle
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('svgRoot') svgRoot: ElementRef<SVGElement> | undefined;
  isHovered: boolean = false;
  currentZone: { id: string, title: string, x: number, y: number } | null = null;
  selectedZoneDetails: {
    title: string,
    subjects: {
      name: string,
      skills: {
        name: string,
        status: string,
        isBeingEvaluated: boolean
      }[],
      urlIcon: string
    }[]
  } | null = null;
  title: string = 'angular-svg-map';


  highlight(circleId: string): void {
    const circle = this.svgRoot?.nativeElement.querySelector(`#${circleId}`);
    const svgRect = this.svgRoot?.nativeElement.getBoundingClientRect(); // Position du SVG

    if (circle && svgRect) {
      const rect = circle.getBoundingClientRect(); // Position du cercle
      const title = circle.getAttribute('data-title');

      this.currentZone = {
        id: circleId,
        title: title || '',
        // Ajustez avec la position du SVG pour obtenir des coordonnées relatives au conteneur
        x: rect.left - svgRect.left,
        y: rect.top - svgRect.top + rect.height / 2
      };
    }
  }




  resetHighlight(): void {
    this.currentZone = null;
  }

  selectZone(circleId: string): void {
    // Trouvez les détails de la zone basée sur circleId, pour l'exemple je vais simuler les données
    const zoneDetailsMap = {
      mountainCircle: {
        title: "Mountain",
        subjects: [
          {
            name: "Géologie",
            skills: [
              { name: "Roches", status: "validé", isBeingEvaluated: false },
              { name: "Minéraux", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Érosion", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },
          {
            name: "Géologie",
            skills: [
              { name: "Roches", status: "validé", isBeingEvaluated: false },
              { name: "Minéraux", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Érosion", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },
          {
            name: "Géologie",
            skills: [
              { name: "Roches", status: "validé", isBeingEvaluated: false },
              { name: "Minéraux", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Érosion", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },
          {
            name: "Géologie",
            skills: [
              { name: "Roches", status: "validé", isBeingEvaluated: false },
              { name: "Minéraux", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Érosion", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }
        ]
      },
      forestCircle: {
        title: "Forest",
        subjects: [
          {
            name: "Biologie",
            skills: [
              { name: "Écosystèmes forestiers", status: "validé", isBeingEvaluated: false },
              { name: "Photosynthèse", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Cycle de vie des arbres", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }, {
            name: "Biologie",
            skills: [
              { name: "Écosystèmes forestiers", status: "validé", isBeingEvaluated: false },
              { name: "Photosynthèse", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Cycle de vie des arbres", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }, {
            name: "Biologie",
            skills: [
              { name: "Écosystèmes forestiers", status: "validé", isBeingEvaluated: false },
              { name: "Photosynthèse", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Cycle de vie des arbres", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }, {
            name: "Biologie",
            skills: [
              { name: "Écosystèmes forestiers", status: "validé", isBeingEvaluated: false },
              { name: "Photosynthèse", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Cycle de vie des arbres", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }, {
            name: "Biologie",
            skills: [
              { name: "Écosystèmes forestiers", status: "validé", isBeingEvaluated: false },
              { name: "Photosynthèse", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Cycle de vie des arbres", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }
        ]
      },
      beachCircle: {
        title: "Beach",
        subjects: [
          {
            name: "Biologie",
            skills: [
              { name: "Écosystèmes marins", status: "validé", isBeingEvaluated: false },
              { name: "Faune marine", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Flore marine", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },{
            name: "Biologie",
            skills: [
              { name: "Écosystèmes marins", status: "validé", isBeingEvaluated: false },
              { name: "Faune marine", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Flore marine", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },{
            name: "Biologie",
            skills: [
              { name: "Écosystèmes marins", status: "validé", isBeingEvaluated: false },
              { name: "Faune marine", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Flore marine", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },{
            name: "Biologie",
            skills: [
              { name: "Écosystèmes marins", status: "validé", isBeingEvaluated: false },
              { name: "Faune marine", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Flore marine", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },{
            name: "Biologie",
            skills: [
              { name: "Écosystèmes marins", status: "validé", isBeingEvaluated: false },
              { name: "Faune marine", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Flore marine", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          },{
            name: "Biologie",
            skills: [
              { name: "Écosystèmes marins", status: "validé", isBeingEvaluated: false },
              { name: "Faune marine", status: "en cours d'évaluation", isBeingEvaluated: true },
              { name: "Flore marine", status: "non commencé", isBeingEvaluated: false }
            ],
            urlIcon: "assets/microbe.png"
          }
        ]
      }
    };


    this.selectedZoneDetails = zoneDetailsMap[circleId as keyof typeof zoneDetailsMap] || null;
  }
}
