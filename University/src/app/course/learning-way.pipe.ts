import { Pipe, PipeTransform } from '@angular/core';
import { LearningWay } from '../../Entities/Course.model';

@Pipe({
  name: 'learningWay',
  standalone: true
})
export class LearningWayPipe implements PipeTransform {

  transform(value: LearningWay, src: string[]): string {
    if (value == LearningWay.Zoom)
      return "bi bi-tv-fill";
    else
    return "bi bi-people-fill";
  }

}
