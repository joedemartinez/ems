import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private fs: AngularFirestore,private router: Router,private toastr: ToastrService) { }

  //new emp form submission
  submitForm(addEmp:FormGroup){
    
    let empData = addEmp.value
    this.fs.collection('employees').add(empData).then(ref => {
      console.log(ref)
      this.toastr.success('Employee Added Successfully', 'Success!');
      this.router.navigate(['/employees'])
    }).catch(err => {
      console.log(err)
      this.toastr.warning('Oops! Error Occured', 'Warning!');
      this.router.navigate(['/employees'])
    })
  }

  //load emp details
  loadEmpDetails(){
    return this.fs.collection('employees').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data}
        })
      })
    )
  }
}
