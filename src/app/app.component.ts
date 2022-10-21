import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from './Interface/PeriodicElement';


//import { MenuItem, PrimeIcons } from 'primeng/api';


const ELEMENT_DATA: PeriodicElement[]= 
[
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  {os: 54322, local: 'BERURI', destino: 'E.E SÃO SEBASTIÃO', lider: 'ALAN ROMANIER', inicio: '10/08', termino: '12/08', tempo: '1D 2H', status: 'ATRASADO'},
  
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  
  title = 'orderservice';
  displayedColumns: string[]=['os', 'local', 'destino', 'lider', 'inicio', 'termino', 'tempo', 'status']
  dataSource=ELEMENT_DATA;
  //status: string = 'EXECUÇÃO';
  execucao: boolean = false;

  clickedRows = new Set<PeriodicElement>();
  
  //INFORMA O HORÁRIO EM TEMPO REAL:
  //data1 = new Date('2021-04-23T12:00:00.000');
  today=new Date();
  h=this.today.getHours();
  m=this.today.getMinutes();
  
  time(){
  const TIME = (document.getElementById("time")as HTMLFormElement).innerHTML= this.h+":"+this.m;
  setTimeout('time()',500);
  }

  //Instância abaixo altera o ICON de report_problem:
  emergencia: boolean = true;
  ngOnInit() {
    
}
}


