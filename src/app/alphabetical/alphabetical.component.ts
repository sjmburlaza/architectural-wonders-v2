import { Component } from '@angular/core';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.scss']
})
export class AlphabeticalComponent {

  archData: ArchDataModel[] = [];
  groups!: any;

  constructor() {}

  ngOnInit() {
    this.archData = sortAlphabetical(ARCH_DATA, 'name');
    this.groups = groupData(this.archData, 'name');
  }
}
