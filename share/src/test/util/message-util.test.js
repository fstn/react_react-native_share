//@flow
import jsc from 'jsverify';
import MessageUtil from '../../util/message-util.share';

declare var expect: any;
declare var describe: any;
declare var it: any;

describe('Message Util', function () {
  it('should return only date', async (done) => {
    // $FlowFixMe
    await jsc.checkForall(jsc.datetime, async (date) => {
      await new Promise((resolve) => {
        const message = {ts: date};
        const messageWithDate = MessageUtil.extractOnlyDate(message);
        expect(messageWithDate.date).toBe(date.getDate() + "" + date.getMonth() + "" + date.getFullYear());
        resolve();
      });
    });
    done();
  });
  it('should not crash with null', async (done) => {
    // $FlowFixMe
    const message = {};
    const messageWithDate = MessageUtil.extractOnlyDate(message);
    expect(messageWithDate.date).toBe(undefined);
    done();
  });
});
