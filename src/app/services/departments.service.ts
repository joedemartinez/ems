import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService { 

  constructor(private fs: AngularFirestore,private router: Router,private toastr: ToastrService) { }

  //new emp form submission
  submitForm(addDept:FormGroup){ 
    
    let deptData = addDept.value
    this.fs.collection('departments').add(deptData).then(ref => {
      console.log(ref)
      this.toastr.success('New Department Added Successfully', 'Success!');
      this.router.navigate(['/departments'])
    }).catch(err => {
      console.log(err)
      this.toastr.warning('Oops! Error Occured', 'Warning!');
      this.router.navigate(['/departments'])
    })
  }

  //load dept details
  loadDeptDetails(){
    return this.fs.collection('departments').snapshotChanges().pipe(
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
