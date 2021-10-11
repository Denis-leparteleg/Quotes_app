import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Denis Leparteleg',  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.','Martin Fowler', new Date(2021,10,10)),
    new Quote(2, 'Denis Leparteleg', 'First, solve the problem. Then, write the code.','John Johnson', new Date(2021,10,10)),
    new Quote(3, 'Denis Leparteleg', 'Simplicity is the soul of efficiency.', 'Austin Freeman', new Date(2021,10,10))
  ];
  
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  toggleDetails(index:  number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor ;
    this.quotes[index].showYourName = !this.quotes[index].showYourName ;
  }
  deleteQuote(isComplete: any, index: number){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].name}"?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
