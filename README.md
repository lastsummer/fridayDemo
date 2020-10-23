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
- curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
- export NVM_DIR="$HOME/.nvm"

列出所有安裝node版本
nvm list
安裝node
nvm install 12
使用node
nvm use 12
