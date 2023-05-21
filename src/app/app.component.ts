import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { signalRservices } from './Core/Srvices/SignalRservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private SignalRservices:signalRservices){

  }
  ngOnInit(): void {
   // this.SignalRservices.startConnection();
  }
  title = 'PTP-Web';
}
