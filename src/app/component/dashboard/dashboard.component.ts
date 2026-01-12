import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public introParagraphs = [
    'Transform the way your office works with smarter tools, seamless automation, and effortless control.',
    'Steamline Your workplace with our Office Management System -a powerfull, all-in-one platform desiged to simplify daily Operations,Enhance productivity,and keep your organization running smoothly.',
    "Let'stransform your workspace with technology.",
  ];
  public country = ['All', 'Singapore', 'Myanmar', 'Thailand'];
  public holidays = [
    {
      holiday_name: "New Year's Day",
      start_date: '01-Jan-2026',
      country: 'Thailand',
    },
    {
      holiday_name: 'Independence Day',
      start_date: '04-Jan-2026',
      country: 'Myanmar',
    },
    {
      holiday_name: 'Union Day',
      start_date: '12-Feb-2026',
      country: 'Myanmar',
    },
    {
      holiday_name: 'Chinese New Year',
      start_date: '17-Feb-2026',
      country: 'Singapore',
    },
    {
      holiday_name: 'Makha Bucha Day',
      start_date: '03-Mar-2026',
      country: 'Thailand',
    },
    {
      holiday_name: 'Hari Raya Puasa',
      start_date: '21-Mar-2026',
      country: 'Singapore',
    },
    {
      holiday_name: 'Chakri Memorial Day',
      start_date: '06-Apr-2026',
      country: 'Thailand',
    },
    {
      holiday_name: 'Thingyan Water Festival',
      start_date: '13-Apr-2026',
      country: 'Myanmar',
    },
    {
      holiday_name: 'Songkran Festival',
      start_date: '13-Apr-2026',
      country: 'Thailand',
    },
    {
      holiday_name: 'Labour Day',
      start_date: '01-May-2026',
      country: 'Singapore',
    },
  ];
  public users = [
    {
      id: 1,
      name: 'Alex Thompson',
      birthday: '1992-05-14',
      role: 'Administrator',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      birthday: '1988-11-23',
      role: 'Project Manager',
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      birthday: '1995-02-08',
      role: 'Lead Developer',
    },
    {
      id: 4,
      name: 'Jordan Smith',
      birthday: '2000-07-19',
      role: 'UI/UX Designer',
    },
    {
      id: 5,
      name: 'Elena Petrova',
      birthday: '1991-12-30',
      role: 'Quality Assurance',
    },
    {
      id: 6,
      name: 'David Kwong',
      birthday: '1985-04-03',
      role: 'DevOps Engineer',
    },
    {
      id: 7,
      name: 'Maya Patel',
      birthday: '1997-09-12',
      role: 'Data Analyst',
    },
  ];
  public todoList = [
    {
      task_name: 'Renew Passport and Visa',
      start_date: '05-Jan-2026',
      done: true,
    },
    {
      task_name: 'Book hotel for Chinese New Year',
      start_date: '15-Jan-2026',
      done: false,
    },
    {
      task_name: 'Submit Q1 Tax Returns',
      start_date: '15-Mar-2026',
      done: false,
    },
    {
      task_name: 'Purchase water-proof bags for Songkran',
      start_date: '10-Apr-2026',
      done: false,
    },
    {
      task_name: 'Finalize Q2 Marketing Budget',
      start_date: '30-Jun-2026',
      done: false,
    },
    {
      task_name: 'Attend Marina Bay Tech Conference',
      start_date: '12-Sep-2026',
      done: false,
    },
    {
      task_name: 'Buy gifts for Thadingyut Festival',
      start_date: '20-Oct-2026',
      done: false,
    },
    {
      task_name: 'Renew Annual Work Permit',
      start_date: '15-Nov-2026',
      done: false,
    },
    {
      task_name: 'Complete Medical Check-up',
      start_date: '22-Nov-2026',
      done: false,
    },
    {
      task_name: 'Organize Year-end Party',
      start_date: '05-Dec-2026',
      done: false,
    },
    {
      task_name: 'Back up Cloud Storage Data',
      start_date: '28-Dec-2026',
      done: false,
    },
    {
      task_name: 'Review 2027 Strategic Goals',
      start_date: '31-Dec-2026',
      done: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
