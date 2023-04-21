import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { getAuth, User } from 'firebase/auth';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users!: User[];

  constructor(private auth: AngularFireAuth, private fs: AngularFirestore,private router: Router,private toastr: ToastrService) { }

  //load dept details
  loadUserDetails(){
    // const listAllUsers = (nextPageToken) => {
    //   // List batch of users, 1000 at a time.
    //   getAuth()
    //     .listUsers(1000, nextPageToken)
    //     .then((listUsersResult) => {
    //       listUsersResult.users.forEach((userRecord) => {
    //         console.log('user', userRecord.toJSON());
    //       });
    //       if (listUsersResult.pageToken) {
    //         // List next batch of users.
    //         listAllUsers(listUsersResult.pageToken);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log('Error listing users:', error);
    //     });
    // };
    // // Start listing users from the beginning, 1000 at a time.
    // listAllUsers();
  }

  //load dept details
  

}
