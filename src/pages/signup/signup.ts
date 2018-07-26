import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  signup() {
    if(this.name == "" || this.email == "" || this.password == "") {
      alert("Do not make fields empty");
      return;
    }

    //Here, creating new user
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((data) => {
      //if user created we update user's profile
      let newUser: firebase.User = data.user;
      newUser.updateProfile({
        displayName: this.name,
        photoURL: ""
      }).then((res) => {
        this.alertCtrl.create({
          title: "Account created",
          message: "Your account has been created successfully",
          buttons: [
            {
              text: "OK",
              handler: () => {
                //Navigate to the feedspage
                this.navCtrl.setRoot(FeedPage); 
              }
            }
          ]
        }).present();
        
      }).catch((err) => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000
        }).present();
      });
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).present();
    });
  }

  goBack() {
    this.navCtrl.pop();
  }
}
