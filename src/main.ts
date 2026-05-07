/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import 'bootstrap';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
