export class Quote {
    public showAuthor: boolean;
    likes!: number;
    dislikes!: number;
    showYourName: any;
    constructor(public id: number, public yourName: string, public name: string,public author: string,  public completeDate: Date){
      this.showAuthor=false;
    }
}
