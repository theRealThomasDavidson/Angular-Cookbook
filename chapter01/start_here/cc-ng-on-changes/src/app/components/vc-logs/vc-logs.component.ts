import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges {
  @Input() vName;
  logs: string[] = [];

  has_ngOnChanges_ran = false

  constructor() { }

  ngOnInit(): void {

    console.log(`Did ngOnChanges run before ngOnInit? ${this.has_ngOnChanges_ran ? "yes" : "no"}`)

  }

  ngOnChanges(changes: SimpleChanges){

    this.has_ngOnChanges_ran = true

    const currValue = changes.vName.currentValue;
    if (changes.vName.isFirstChange()){
      this.logs.push(`initial version is ${currValue.trim()}`)
    }else{
      this.logs.push(`version changed from ${changes.vName.previousValue.trim()} to ${currValue.trim()}`)
    }
  }
}
