import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) {
    }

    public transform(img: string): any {
        const domImg = `background-image: url('${img}')`;
        console.log(domImg);
        return this.domSanitizer.bypassSecurityTrustStyle(domImg);
    }

}
