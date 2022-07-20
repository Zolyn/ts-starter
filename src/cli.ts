import { cac } from 'cac';
import updateNotifier from 'update-notifier';
import localPkg from '../package.json';

updateNotifier({ pkg: localPkg }).notify();

const cli = cac('ts-lib-starter');

cli.version(localPkg.version).help();

cli.parse();
