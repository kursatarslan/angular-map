import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    public starWidth: number;
    @Input() rating: number;
    @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClick.emit(this.rating.toString());
    }
    constructor() {
    }
}
