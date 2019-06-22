import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  @Input() receptor: string;
  vector=[1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
