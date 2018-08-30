//@flow
import {EventService} from '../../index.js';
import jsc from 'jsverify';

declare var expect: any;
declare var describe: any;
declare var it: any;
var re = /^[a-z|A-Z|0-9]+$/i;

describe('Event service', function () {
  it('should register listener', async (done) => {
    // $FlowFixMe
    await jsc.checkForall(jsc.asciinestring, async (eventName) => {
      if (eventName.match(re)) {
        await new Promise((resolve) => {
          EventService.addListener(eventName, () => {
            resolve();
          });
          EventService.emitEvent(eventName);
        });
      }
    });
    done();
  });
  it('should register listener and get the data', async (done) => {
    // $FlowFixMe
    await jsc.checkForall(jsc.asciinestring, async (eventName) => {
      if (eventName.match(re)) {
        console.log("cool" + eventName);
        await new Promise((resolve) => {
          EventService.addListener(eventName, (data) => {
            expect(data.test === 1).toBeTruthy();
            resolve();
          });
          EventService.emitEvent(eventName, {test: 1});
        });
      }
    });
    done();
  });
  it('should do nothing', async (done) => {
    // $FlowFixMe
    await jsc.checkForall(jsc.asciinestring, async (eventName) => {
      if (eventName.match(re)) {
        console.log("cool" + eventName);
        await new Promise((resolve) => {
          EventService.emitEvent(eventName);
          resolve();
        });
      }
    });
    done();
  });
});
