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
      this.router.navigate(['/manage-departments'])
    }).catch(err => {
      console.log(err)
      this.toastr.warning('Oops! Error Occured', 'Warning!');
      this.router.navigate(['/manage-departments'])
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

  //load 1 dept details
  loadDeptDetail(id){
    //return this.fs.collection('employees').doc(id).valueChanges();//
    return this.fs.doc(`departments/${id}`).valueChanges()
  }

  //update 1 emp details
  updateDeptDetail(id, data){
    return this.fs.doc(`departments/${id}`).update(data).then(()=>{
      this.toastr.success('Department Details has been updated successfully')
      this.router.navigate(['/manage-departments'])
    }).catch(err => {
      this.toastr.warning('Oops!! Error occured!')
      this.router.navigate(['/manage-departments'])
    })
  }

  //deleteDept
  deleteDept(id){
    this.fs.doc(`departments/${id}`).delete().then(() => {
      this.toastr.success('Department has been deleted successfully')
      this.router.navigate(['/manage-departments'])
    }).catch(err => {
      this.toastr.warning('Oops!! Error occured!')
      this.router.navigate(['/manage-departments'])
    })
  }

  //employees count
  countDept(){
    return this.fs.collection('departments').get().pipe(
      map((count) => {
        return count.size
      })
    )
  }
  
}
