import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/Modules/Front/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
