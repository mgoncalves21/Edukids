import {Component, Input, OnChanges} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-zone-details',
  templateUrl: './zone-details.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass
  ],
  styleUrls: ['./zone-details.component.css']
})
export class ZoneDetailsComponent implements OnChanges {
  @Input() zoneData:  {
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

  // Supposons que vous voulez 5 éléments par page
  pageSize = 2;
  currentPage = 0; // Pagination commence à la page 0
  paginatedSubjects: any = [];

  ngOnChanges() {
    this.currentPage = 0
    this.paginateSubjects();
  }

  paginateSubjects() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedSubjects = this.zoneData?.subjects.slice(startIndex, endIndex);
  }
  changePage(step: number) {
    const newPage = this.currentPage + step;
    if (newPage < 0 || newPage >= this.getMaxPages()) return;
    this.currentPage = newPage;
    this.paginateSubjects();
  }

  getMaxPages() {
    return Math.ceil(this.zoneData!.subjects.length / this.pageSize);
  }

}
