import { Directive, 
  effect, 
  ElementRef, HostListener, 
  inject, input, 
  OnInit, Renderer2,  } from '@angular/core';
import {TooltipStyleConfig} from "./types/tooltip-style-config"
@Directive({
  selector: '[appMyTooltip]'
})
export class MyTooltip implements OnInit {

  
  //this.viewContainerRef.createEmbeddedView(this.templateRef)/clear();

  renderer = inject(Renderer2);
  host = inject(ElementRef);
  hasEffectRun: boolean = false;
  tooltip: HTMLDivElement = this.renderer.createElement('div');
  wrapper: HTMLDivElement = this.renderer.createElement('div');
  content: HTMLElement = this.renderer.createElement('p');
  readonly myTooltipText = input<string>();
  readonly styles = input<TooltipStyleConfig>();
  readonly verticalOffset = input<number>();


  constructor() {
    effect(() => {
       if (!this.hasEffectRun) {
        this.hasEffectRun = true;
       }
       else{
         this.renderer.removeChild(this.tooltip, this.content);
         this.createContent();
       }
    })
  }
  ngOnInit(): void {
    this.createTooltip();
    this.setStyle();
  }
  @HostListener("mouseenter") show(): void{
    this.showEl();
  }
  @HostListener("mouseleave") hide(): void{
    this.hideEl();
  }

  showEl(): void{
      setTimeout(() => {
      this.renderer.setStyle(this.tooltip, 'opacity', '1');
    }, 10);
  }
  hideEl(): void{
    this.renderer.setStyle(this.tooltip, 'opacity', '0');
  }

  createTooltip(): void{
    this.renderer.appendChild(this.host.nativeElement, this.wrapper);
    this.renderer.appendChild(this.wrapper, this.tooltip);
    this.createContent();
  }
  createContent(): void{
    this.renderer.appendChild(this.content, this.renderer.createText(this.myTooltipText()!))
    this.renderer.appendChild(this.tooltip, this.content);
  }
  setStyle(): void{
    this.setStyleWrapper();
    this.setStyleToolTip();
    this.setStyleContent();
  }
  setStyleToolTip(): void{
  
    this.renderer.setStyle(this.tooltip, 'background-color', this.styles()?.['background-color'])
    this.renderer.setStyle(this.tooltip, 'border', this.styles()?.border)
    this.renderer.setStyle(this.tooltip, 'opacity', this.styles()?.opacity)
    this.renderer.setStyle(this.tooltip, 'border-radius', this.styles()?.['border-radius'] )
    this.renderer.setStyle(this.tooltip, 'transition', 'opacity 0.3s ease-in-out');
  }
  setStyleWrapper(): void{
     this.renderer.setStyle(this.wrapper, 'position', 'absolute')
     this.renderer.setStyle(this.wrapper, 'z-index', '1000');
     this.setPosition();
  }
  setStyleContent(): void{
      this.renderer.setStyle(this.content, 'color', this.styles()?.color)
    this.renderer.setStyle(this.content, 'font-size', this.styles()?.['font-size'])
    this.renderer.setStyle(this.content, 'font-family', this.styles()?.['font-family'])
    this.renderer.setStyle(this.content, 'font-weight', this.styles()?.['font-weight']);
  }
  setPosition(): void {
  
    const hostRect = this.host.nativeElement.getBoundingClientRect();
    const tooltipRect = this.host.nativeElement.getBoundingClientRect();

    console.log("v offset:" + this.verticalOffset )

    const top = hostRect.top - window.scrollY - tooltipRect.height + this.verticalOffset()!; 

    



    const left = hostRect.left - window.scrollX + (hostRect.width / 2) - (tooltipRect.width / 2);
    this.renderer.setStyle(this.wrapper, 'top', `${top}px`);
    this.renderer.setStyle(this.wrapper, 'left', `${left}px`);

  }
}
