import { Component, OnInit } from '@angular/core';
import { CandidateService, Candidate } from '../candidate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  	constructor(
	  	private candidateService: CandidateService,
		private router: Router
  	) { }

  	ngOnInit() {
  	}

  	submitCandidates(fname, lname) {
		this.candidateService.create(fname,lname)
			.then(candidate => {
				this.router.navigate(['/results']); 
			});
  	}

}
