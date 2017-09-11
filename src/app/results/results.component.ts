import { Component, OnInit } from '@angular/core';
import { CandidateService, Candidate } from '../candidate.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
	candidates: Candidate[];

	constructor(
		private candidateService: CandidateService
	) {
	  
   }

  ngOnInit() {
	this.getCandidates();

  }

  getCandidates(): void {
    this.candidateService
        .getCandidates()
		.then(candidates => {
			this.candidates = candidates
		});
  }

}
