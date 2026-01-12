import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzCardModule }from 'ng-zorro-antd/card'
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MenubarComponent } from './component/component/menubar/menubar.component';
import { BirthdayListComponent } from './component/component/birthday-list/birthday-list.component';
import { HolidayListComponent } from './component/component/holiday-list/holiday-list.component';
import { TodoListComponent } from './component/component/todo-list/todo-list.component';
import { CardComponent } from './component/component/card/card.component';
import { HeaderComponent } from './component/component/header/header.component';
import { ListWrapperComponent } from './component/component/list-wrapper/list-wrapper.component';



registerLocaleData(en);

@NgModule({
  declarations: [ AppComponent, LoginComponent, DashboardComponent, MenubarComponent, BirthdayListComponent, HolidayListComponent, TodoListComponent, CardComponent, HeaderComponent, ListWrapperComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    NzCardModule,
    NzImageModule,
    NgbModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
