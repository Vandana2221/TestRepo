import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation : String;
  Username: String;
  NoofTeamMembers : number;
  TotalCostofProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;
  
  Clients: String[];
  TeamMemberSummary=[];

  ngOnInit(): void 
  {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoofTeamMembers = 10;
    this.TotalCostofProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 54003;
    this.AvailableFunds= 34567;
    this.Clients = ["ABC Infotech", "My Fav Firm", "STAR labs"];

    this.TeamMemberSummary=[
      { Region:"East", Teammembercount:10, TempUnavailablemember:4},
      { Region:"West", Teammembercount:15, TempUnavailablemember:2},
      { Region:"North", Teammembercount:20, TempUnavailablemember:5},
      { Region:"South", Teammembercount:12, TempUnavailablemember:3}
    ]
    }

    onProjectchange($event){
      console.log($event.target.innerHTML);
    }
}
