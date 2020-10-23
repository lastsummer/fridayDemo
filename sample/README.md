### Express 路由

### method
- GET
- POST
- all (不論是GET或是POST都會接到)

### path
可以使用正規表示式
變數的格式為 :param

### middleware
可以處理多個function，如果要繼續執行下一個則需要使用next()
next 用來控制流程

### 回應方式
- res.download()
- res.end() 結束回應程序
- res.json() 傳送 JSON 回應。
- res.jsonp() 傳送 JSON 回應，並支援 JSONP。
- res.redirect() 將要求重新導向。
- res.render() 呈現視圖範本。
- res.send() 傳送各種類型的回應。
- res.sendFile() 以八位元組串流形式傳送檔案。
- res.sendStatus() 設定回應狀態碼，並以回應內文形式傳送其字串表示法。

### 錯誤處理
next(err) 或是被throw error，就會略過所有 regular middleware 直到找到 error-handling middleware
express 中的兩種 middleware：
Regular middleware function (req, res, next)：處理正常流程
Error-handling middleware function (err, req, res, next)：處理錯誤流程