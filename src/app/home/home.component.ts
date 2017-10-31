import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CandidateService, Candidate } from '../candidate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	candidateForm = new FormGroup ({
		fname: new FormControl(),
		lname: new FormControl(),
		phone: new FormControl()
	})

  	constructor(
	  	private candidateService: CandidateService,
		private router: Router
  	) { }

  	ngOnInit() {
  	}
  	onSubmit() {
		  this.candidateForm.controls.fname.value
		//this.form
		this.candidateService.create(this.candidateForm)
			.then(candidate => {
				this.router.navigate(['/results']); 
			});
  	}

}

