const IP_ADDRESS = '35.171.144.234'; // replace with the IP address you want to monitor
                  const INTERVAL = 10 * 60 * 1000; // interval in milliseconds (10 minutes)
                  const RESPONSE_HISTORY_LENGTH = 12;
              
                  let responseHistory = [];
              
                  function updateResponseHistory(responseTime) {
                    responseHistory.push({timestamp: new Date().toLocaleString(), responseTime: responseTime});
                    if (responseHistory.length > RESPONSE_HISTORY_LENGTH) {
                      responseHistory.shift();
                    }
                    updateTable();
                  }
              
                  function updateTable() {
                    const tableBody = document.getElementById('responseHistory');
                    tableBody.innerHTML = '';
                    for (let i = responseHistory.length - 1; i >= Math.max(responseHistory.length - RESPONSE_HISTORY_LENGTH, 0); i--) {
                      const item = responseHistory[i];
                      const row = document.createElement('tr');
                      const timestamp = document.createElement('td');
                      const responseTime = document.createElement('td');
                      timestamp.innerHTML = item.timestamp;
                      responseTime.innerHTML = item.responseTime !== null ? `${item.responseTime}ms` : 'No response';
                      row.appendChild(timestamp);
                      row.appendChild(responseTime);
                      if (item.responseTime === null || item.responseTime > 300) {
                        row.style.backgroundColor = 'red';
                      } else if (item.responseTime > 200) {
                        row.style.backgroundColor = 'yellow';
                      } else {
                        row.style.backgroundColor = 'green';
                      }
                      tableBody.appendChild(row);
                    }
                  }

              
                  function pingAddress() {
                    const IP_ADDRESS = '35.171.144.234'; // replace with the IP address you want to monitor
                    const PING_TIMEOUT = 5000; // 5 seconds
                    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

                    const xhr = new XMLHttpRequest();
                    xhr.timeout = PING_TIMEOUT;
                    xhr.onload = function() {
                      const responseTime = new Date().getTime() - startTime;
                      console.log(`Response time: ${responseTime}ms`);
                      updateResponseHistory(responseTime);
                    };
                    xhr.onerror = function() {
                      console.log('No response');
                      updateResponseHistory(null);
                    };
                    const startTime = new Date().getTime();
                    xhr.open('GET', `${CORS_PROXY}http://${IP_ADDRESS}`, true);
                    xhr.send();
                  }

              
                  setInterval(pingAddress, INTERVAL);