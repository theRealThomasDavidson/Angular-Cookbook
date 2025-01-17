import { Component, OnInit, Input, ComponentFactoryResolver,
  ViewChild, ViewContainerRef, SimpleChanges} from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  @Input() type: SocialCardType;
  @ViewChild('vrf', {read: ViewContainerRef})vrf: ViewContainerRef;
  cardTypes = SocialCardType;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  ngOnchanges(changes: SimpleChanges){
    if (changes.type.currentValue !== undefined){
      console.log("ngOnchanges success")
      this.loadDynamicComponent (changes.type.currentValue)
    }
    console.log("ngOnchanges failed")
  }
  loadDynamicComponent(type:SocialCardType){
    console.log(`card type changed to:
                ${type}`)
    let component
    switch (type){
      case SocialCardType.Facebook:
        component=FbCardComponent
        break
      case SocialCardType.Twitter:
        component=TwitterCardComponent
        break
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.vrf.clear();
    this.vrf.createComponent(componentFactory)
  }
}
