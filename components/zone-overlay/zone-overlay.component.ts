import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-zone-overlay',
  templateUrl: './zone-overlay.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./zone-overlay.component.css']
})
export class ZoneOverlayComponent {
  @Input() zone: { id: string, title: string, x: number, y: number } | null = null;

  // Exemple de structure de données mappant les titres de zones aux listes de matières
  zoneSubjects = {
    Mountain: ['Géologie', 'Écologie', 'Astronomie'],
    Forest: ['Biologie', 'Conservation', 'Botanique'],
    Beach: ['Biology', 'Écologie', 'Géographie']
  };

  // Obtenir les matières pour la zone actuelle
  get subjectsForCurrentZone(): string[] {
    if (!this.zone) return [];
    return this.zoneSubjects[this.zone.title as keyof typeof this.zoneSubjects] || [];
  }
}
