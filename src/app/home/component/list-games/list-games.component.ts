import { Component, ElementRef, OnInit, Query, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  display: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDescription(event: any){

    event.preventDefault(event);

    console.log("POUET POUET")

      if(this.display == false){
        event.target.parentElement.querySelector('.game_element__description').classList.remove('display')
        this.display = true
      }
      else{
        event.target.parentElement.querySelector('.game_element__description').classList.add('display')
        this.display = false
    }
  }

}
