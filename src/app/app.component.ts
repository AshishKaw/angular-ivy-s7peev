import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  employeeDetails = [];
  filteredemployeeDetails = [];
  searchValue:string;
  gender:string;
  in_gender:string;
  ifirst_name:string;
  ilast_name:string;
  iemail:string;
  igender:string='Male';
  id=1;
  empObj={};

  checkEmployee(){
    
    this.filteredemployeeDetails=[];
    for(let empl in this.employeeDetails){
     
      if((this.employeeDetails[empl]['first_name']+this.employeeDetails[empl]['last_name']+ this.employeeDetails[empl]['email']).indexOf(this.searchValue)>-1){
      this.filteredemployeeDetails.push(this.employeeDetails[empl]);
      console.log("---");
      console.log(this.employeeDetails[empl]);
     }
    }
  }

  addEmployee(){
    if(this.ifirst_name!=null &&this.ilast_name!=null &&this.iemail!=null &&this.gender!=null ){
      this.id++;
      this.empObj={};
      this.empObj['id']=this.id;
      this.empObj['first_name']=this.ifirst_name;
      this.empObj['last_name']=this.ilast_name;
      this.empObj['email']=this.iemail;
      this.empObj['gender']=this.gender;
      this.employeeDetails.push(this.empObj);
      this.filteredemployeeDetails=this.employeeDetails;
      console.log(this.employeeDetails);
      alert("Employee Added");
    }else{
      alert("Enter All Fields")
    }
   

  }
}
