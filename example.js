var FoscamModule = require('./foscam.js');

HOST = 'HOST';
PORT = 'PORT';
USER = 'USER';
PASS = 'PASS';
PATH = 'PATH'

function check(cmd, result) {

    if (result && result.result == '0') {
        console.log('TEST ' + cmd + '............ OK');
    } else {
        console.log('TEST ' + cmd + '............ Failed');
    };
};

mycam = FoscamModule.Foscam.Init(HOST, PORT, USER, PASS, PATH);

mycam.getAlarmRecordConfig(check);

mycam.getLocalAlarmRecordConfig(check);

mycam.getH264FrmRefMode(check);

mycam.getScheduleRecordConfig(check);

mycam.snapPicture2(check);

mycam.mirrorVideo(0, check);
mycam.mirrorVideo(1, check);

mycam.flipVideo(0, check);
mycam.flipVideo(1, check);
