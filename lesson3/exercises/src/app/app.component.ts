import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  
  takeOffEnabled= true;
  edgeStopUp=false;
  edgeStopDown=false;
  edgeStopLeft=false;
  edgeStopRight=false;

  

  handleTakeOff(){
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result){
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight';
      this.takeOffEnabled = false;
    }
  } 
  
  moveRocket(rocketImage, direction){
    if (direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left'){
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === 'up'){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === 'down'){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }    
  edgeWarning(){
    if(this.width > 270000){
      this.color='red';
      this.edgeStopRight=true;      
    } else if(this.width < -20000) {
      this.color='red';
      this.edgeStopLeft=true; 
    } else if(this.height < 0){
      this.color='red';
      this.edgeStopDown=true; 
    } else if (this.height > 340000){
      this.color='red';
      this.edgeStopUp=true; 
    } else {
      this.color='blue';
      this.edgeStopDown=false;
      this.edgeStopUp=false;
      this.edgeStopLeft=false;
      this.edgeStopRight=false;

    }
  }

}
