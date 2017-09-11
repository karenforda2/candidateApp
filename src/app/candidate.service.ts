import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
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

	create(firstName: string, lastName: string): Promise<Candidate> {
  		return this.http
		.post(this.heroesUrl, JSON.stringify({firstName: firstName, lastName: lastName}))
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
}