
import { Component } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[AlertService],

})
export class AppComponent {
  constructor( private alertService: AlertService){
  }
  title = 'ytest';
  Form: FormGroup;
  
  OrientationOptions = ["N" , "E" , "W" , "S"];
  selectedItems: string[];
  public mode: string;
  public filterPlaceholder: string;
  public popHeight: string = '350px';
  public localWaterMark: string = 'Select Orientation';
  showdiv : boolean = false
  message: any;
  private subscription: Subscription;
  grids=[];
    x : number
    y : number
     Posx : number
     Posy : number
     or : string
    inst : string
    ResPx : number;
    ResPy : number;
    ResN : string;
    path : string;



    ngOnInit() {
    
      this.Form = new FormGroup({
        x: new FormControl(''),
        y: new FormControl(''),
        Posx: new FormControl(''),
        Posy: new FormControl(''),
        Orientation: new FormControl(''),
        instructions: new FormControl('')
      });
      
      this.path ="" ;
      

      this.subscription = this.alertService.getAlert().subscribe((message) => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            break;
        }
  
        this.message = message;
      } );
    }
  

   chunk (arr, len) {

      var chunks = [],
          i = 0,
          n = arr.length;
    
      while (i < n) {
        chunks.push(arr.slice(i, i += len).reverse());
      }
      return chunks;
    }
    
 
    onSubmit() {
    this.grids= []
  
    this.x = this.Form.get('x').value;
    this.y = this.Form.get('y').value;
    this.Posx = this.Form.get('Posx').value;
    this.Posy = this.Form.get('Posy').value;
    this.inst = this.Form.get('instructions').value;
    this.or = this.Form.get('Orientation').value;
    this.path  = "(" + this.Posx +"," + this.Posy + ")" ;

   
    

  

// grid initialisation
    for ( let i=1 ; i<= this.x*this.y ; i++){
      this.grids.push(i);
     
   
     }
     this.grids=this.grids.reverse()

     this.grids= this.chunk(this.grids , this.x) ;
     
   
     
     for( let i=0 ; i< this.inst.length ; i++){
       if ( this.inst[i] == 'D'){
      
      if (this.or == "N") {
          this.or = "E" ;}


          else  if (this.or == "E") {
            this.or = "S" ;}
            else  if (this.or == "W") {
              this.or = "N" ;}
          
              else  if (this.or == "S") {
                this.or = "W" ;}
         
          
            
      
    }
    else if ( this.inst[i] == 'G'){
      if (this.or == "N") {
        this.or = "W" ;}
    
        else  if (this.or == "E") {
          this.or = "N" ;}
        
          else  if (this.or == "W") {
            this.or = "S" ;}
          
            else  if (this.or == "S") {
              this.or = "E" ;}
            }
  
    
          
            
    else if ( this.inst[i] == "A"){
 
      if(this.or =="N") {
         if(this.Posy != this.y){
         this.Posy = this.Posy +1 ;
         this.alertService.success('chemin possible!', true);
         }else {
           this.alertService.error('chemin impossible!', true);
           break;
         }
        
      
      }

          if(this.or =="E") {
            if(this.Posx != this.x){
          this.Posx = this.Posx +1 ;
          this.alertService.success('chemin possible!', true);
         }
         else{
          this.alertService.error('chemin impossible!', true);
           break;
         }}
         
         
          if(this.or =="W") { 
            if(this.Posy !=0){
              this.alertService.success('chemin possible!', true);
          this.Posx = this.Posx - 1 ;
         }else{
          this.alertService.error('chemin impossible!', true);
          break;

         }
        }
    
         if(this.or =="S") { 
           if(this.Posx!=0){
          this.Posy = this.Posy - 1 ;
          this.alertService.success('chemin possible!', true);}
          else  {
            this.alertService.error('chemin impossible!', true);
          break;
          }
            
      }
      this.path = this.path + "-> (" + this.Posx +"," + this.Posy + ")"
     }
     
    }
  
     this.ResN = this.or;
     this.ResPx = this.Posx;
     this.ResPy = this.Posy;
     this.showdiv = true

    }
  }