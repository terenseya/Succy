import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'
import { AngularFireFunctions } from '@angular/fire/functions'

interface question {
	title: string,
	one: string,
	two: string,
	three: string,
	four: string,
	five: string
}

@Injectable()
export class QuestionService {
	private question: question

	constructor(private aff: AngularFireFunctions, private afAuth: AngularFireAuth) {}

	firestoreData() {
		const getFeed = this.aff.httpsCallable("getFeed")
		getFeed({}).subscribe(data => {
		console.log(data)
		})

		
	}

}