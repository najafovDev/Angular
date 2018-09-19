import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FooterComponent } from './footer/footer.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { UserComponent } from './user/user.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BreadcrumbComponent,
      ToolboxComponent,
      FooterComponent,
      SearchboxComponent,
      UserComponent,
      CourseListingComponent,
      CourseItemComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
 