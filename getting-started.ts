import {PersianCalendarService} from 'url/persian-calendar-service/persian-calendar-service';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html',
  providers: [PersianCalendarService]
})

export class GettingStartedPage {
  today: Date = new Date();
  farsiDate: string = null;
  
  constructor(public persianCalendarService: PersianCalendarService) {
    this.FaDate(this.today);
    
  }

  FaDate(date) {
    var ConvertedDate = this.persianCalendarService.PersianCalendar(date);
    this.farsiDate = ConvertedDate;
    console.log(this.farsiDate);
  }

}
