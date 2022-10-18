import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit {

  logs: string[] = [];
  _vName: string
  @Input()
  get vName(){
    return this._vName
  }
  set vName(name: string){
    if (!name){
      return
    }
    if (!this._vName){
      this.logs.push(`initial version is ${name.trim()}`)
    }
    else{
      this.logs.push(`Version converted from ${this._vName.trim()} to ${name.trim()}`)
    }
    this._vName = name
  }
  constructor() { }

  ngOnInit(): void {
  }

}
