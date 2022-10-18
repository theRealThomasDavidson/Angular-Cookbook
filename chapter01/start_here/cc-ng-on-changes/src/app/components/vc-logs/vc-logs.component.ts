import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit {
  @Input() vName;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges){
    const currValue = changes.vName.currentValue;
    if (changes.vName.isFirstChange()){
      this.logs.push(`initial version is ${currValue.trim()}`)
    }else{
      this.logs.push(`version changed from ${changes.vName.previousValue.trim()} to ${currValue.trim()}`)
    }
  }

}
