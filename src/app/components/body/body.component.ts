import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    seeblock = true;

    sentence: any = {
        message: 'A big power require a big responsibility',
        autor: 'Ben Parker'
    }

    persons: string[] = ['Wonder Woman', 'Scarllet', 'Wannda'];
}