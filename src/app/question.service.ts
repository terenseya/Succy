import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	username: string,
	uid: string
}

@Injectable()
export class QuestionService {
	private user: user

	constructor(private afAuth: AngularFireAuth) { }


}