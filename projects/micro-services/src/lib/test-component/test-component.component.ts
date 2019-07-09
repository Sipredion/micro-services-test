import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mbl-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
