import { Component, OnInit } from '@angular/core';
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public faQuoteLeft = faQuoteLeft;
  public faQuoteRight = faQuoteRight;

  constructor() { }

  ngOnInit(): void {
  }

}
