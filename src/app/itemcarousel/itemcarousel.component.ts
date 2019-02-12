import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemcarousel',
  templateUrl: './itemcarousel.component.html',
  styleUrls: ['./itemcarousel.component.scss']
})
export class ItemcarouselComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    var $: any;


    $(document).ready(function(){
      $('.col-md-3').hover(
      function(){
        $(this).animate({
          marginTop: "-=1%",
        },200);
      },
      function(){
        $(this).animate({
          marginTop: "0%"
        },200);
      }
      );
  
      });

  }

}
