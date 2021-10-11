import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  upvote: number = 0;
  downvote: number = 0;
  upvoteButtonClick() {
    this.upvote++;
  }
  downvoteButtonClick(){
    this.downvote++;
  }
    completeQuote(complete:boolean){
      this.isComplete.emit(complete);
    }
  
    deleteQuote(complete:boolean){
      this.isComplete.emit(complete);
    }
  
   
    constructor() { }
  
    ngOnInit() {
    }

  constructor() { }

  ngOnInit(): void {
  }

}
