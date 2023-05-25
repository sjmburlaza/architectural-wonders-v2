import { Component, OnInit } from '@angular/core';
import { ARCH_DATA } from '../shared/data';
import { ArchDataModel } from '../shared/models';
import { groupData, sortAlphabetical } from '../shared/utils-helper';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  archData: ArchDataModel[] = [];
  groups!: any;

  constructor() {}

  ngOnInit() {
    this.archData = sortAlphabetical(ARCH_DATA, 'continent');
    this.groups = groupData(this.archData, 'continent');
  }
}
