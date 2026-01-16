import { Component, OnInit } from '@angular/core';
import { HolidayFilterPipe } from 'src/app/pipe/holiday-filter/holiday-filter.pipe';

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
  public country = [
    { key: 'All', active: true },
    { key: 'Singapore', active: false },
    { key: 'Myanmar', active: false },
    { key: 'Thailand', active: false },
  ];
  public filterKey: string = 'All';
  public filterClick(key:string){
    this.country.map((data,index)=> {
      if(data.key !== key ){
        data.active = false
      }else{
        data.active = true
        this.filterKey = data.key
      }
    })
  }

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
  public TempHolidays: any[] = [];
  public users = [
    {
      id: 1,
      name: 'Alex Thompson',
      birthday: '1992-Jan-13',
      role: 'Administrator',
      img: 'avatar1',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      birthday: '1988-Jan-23',
      role: 'Project Manager',
      img: 'avatar2',
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      birthday: '1995-Feb-08',
      role: 'Lead Developer',
      img: 'avatar3',
    },
    {
      id: 4,
      name: 'Jordan Smith',
      birthday: '2000-Mar-19',
      role: 'UI/UX Designer',
      img: 'avatar4',
    },
    {
      id: 5,
      name: 'Elena Petrova',
      birthday: '1991-May-30',
      role: 'Quality Assurance',
      img: 'avatar5',
    },
    {
      id: 6,
      name: 'David Kwong',
      birthday: '1985-June-03',
      role: 'DevOps Engineer',
      img: 'avatar1',
    },
    {
      id: 7,
      name: 'Maya Patel',
      birthday: '1997-July-12',
      role: 'Data Analyst',
      img: 'avatar2',
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
