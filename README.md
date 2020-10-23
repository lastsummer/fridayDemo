### 提醒

### http request
- Content-Type
網頁的類型和編碼：類型常見的text/plain、application/json、application/x-www-form-urlencoded。常見的編碼有：utf8、Big-5
- Content-Encoding
網頁壓縮格式：gzip、deflate、identity


#### 指令
nodemon 可以偵測檔案是否有改變

#### 套件
http：內建模組，處理http請求
express：第三方模組，處理http請求
body-parser ：處理來自application/x-www-form-urlencoded的資料放到req.body
EJS：Embedded Javascript(EJS)是內嵌式的樣板引擎

### express
express 內建幫你取得querystring，使用方式為req.query.qstr

### 安裝nvm
``` 
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash 
export NVM_DIR="$HOME/.nvm" 
```

- 列出所有安裝node版本
``` nvm list ```
- 安裝node
``` nvm install 12 ```
- 使用node
``` nvm use 12 ```


### 安裝nginx
brew install nginx
啟動nginx：nginx
停止 nginx：nginx -s stop
重新讀取設定檔：nginx -s reload
設定檔位置：nginx -t

### nginx.conf
config 檔是由一連串的 directive 所組成的。directive 針對特定的部分作設定，分為兩種：simple directive 及 block directive。
simple directive 要以分號 ; 結尾，而 block directive 會有一組大括號 {}。
```
sudo nano /usr/local/etc/nginx/nginx.conf
``` 

### 反向代理
代理伺服器的一種。它根據用戶端的請求，從後端的伺服器（如Web伺服器）上取得資源。
前向代理作為一個媒介將網際網路上取得的資源返回給相關聯的用戶端。

### 設定host
```
sudo nano /etc/hosts
127.0.0.1 www.example.com
```

### nano
ctrl O： 儲存檔案
ctrl X： 退出nano

### HTTPS
HTTP over SSL。
SSL運用了「加密」、「訊息摘要(Message Digest)」、「數位憑證」等技術。

### 建立SSL 憑證
