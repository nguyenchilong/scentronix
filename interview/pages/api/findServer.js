
const axios = require('axios');
const { isUndefined } = require('lodash');
const serverList = [
    {
        "url": "https://does-not-work.perfume.new",
        "priority": 1
    },
    {
        "url": "https://gitlab.com",
        "priority": 4
    },
    {
        "url": "http://app.scnt.me",
        "priority": 3
    },
    {
        "url": "https://offline.scentronix.com",
        "priority": 2
    }
];

const findServer = () => {
    let priorityTmp = serverList[0].priority;
    return new Promise((resolve, reject) => {
        serverList.map((item, i) => {
            axios.get(item.url, {timeout: 5000}).then(response => {
                const _server = (response.status >= 200 && response.status <= 299) ? item : undefined;
                if (!isUndefined(_server) && (_server.priority > priorityTmp)) {
                    priorityTmp = _server.priority;
                    resolve(_server);
                }
            }).catch(error => {
                if(i === serverList.length) {
                    reject('Not have any server online');
                }
            });
        });
    });
}

module.exports = {
    findServer
}
