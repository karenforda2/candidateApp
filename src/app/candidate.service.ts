import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CandidateService {

	private heroesUrl = 'api/candidates';  // URL to web api
  	constructor(private http: Http) { }

  	getCandidates(): Promise<Candidate[]> {
	 	return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Candidate[])
             .catch(this.handleError);
	}

	create(formGroup: FormGroup): Promise<Candidate> {
  		return this.http
		.post(this.heroesUrl, JSON.stringify({firstName: formGroup.controls.fname.value, lastName: formGroup.controls.lname.value, phoneNumber: formGroup.controls.phone.value}))
		.toPromise()
		.then(res => res.json().data as Candidate)
		.catch(this.handleError);
	}
			
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}
}

export class Candidate {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}