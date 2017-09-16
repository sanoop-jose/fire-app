import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = null;
  firebaseObj: FirebaseObjectObservable<any>;

  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }
  
  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user ? user.displayName : null);
      console.log('User: ', this.user);
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  testDB() {
    this.firebaseObj = this.db.object('/adminDetails');
  }
}
