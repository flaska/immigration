import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { MainModule } from './modules/main/main.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowser().bootstrapModule(MainModule)
    .catch(err => console.log(err));
});
