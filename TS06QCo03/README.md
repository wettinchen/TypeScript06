## TypeScript 06
## Chapter 06: Classes
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Starter Code

###  4. Basic Class
        設定 class 的名稱為 Coder，name 的類別為 string，
        constructor建構子 參數為 name，使用 this關鍵字回傳 name

###  5. Larger Class
        設定 class 的名稱為 Coder，
        name 的類別為 string，
        music 的類別為 string，
        age 的類別為 number，
        language 的類別為 string，
        constructor 參數為 name, music, age 和 language，
        使用 this關鍵字回傳 name, music, age 和 language

###  6. Visibility Modifiers / Parameter Properties
        使用修飾符 / 類成員，
        public公開 或 readonly唯讀, private私人, protected受保護，
        this關鍵字可以省略不用
        實行 Do not Repeat Yourself

###  7. Definite Assignment Assertion Operator
        使用 Assertion Operator，
        設定 secondLanguage 的類別 string

###  8. Private & Protected Examples
        (1)使用 Coder 類，使用四個參數宣告 Dave
        (2)使用 Coder 類，使用三個參數宣告 Dave，
        第四個參數設定為預設值
        使用 public，
        設定 getAge 可以在控制台載入回傳的模板
        (3)使用 private 和 protected 未使用 public，
        無法在控制台載入回傳的模板

###  9. Compiling & Running Code
        無法正常運行

### 10. Extends for Subclasses
        (1)設定 class 的名稱為 WebDev，由 Coder 擴充，
        使用 super關鍵字回傳 name, music, age
        super關鍵字必須在this關鍵字前，
        否則會顯示錯誤
        (2)使用 WebDev 類，使用四個參數宣告 Sara，
        使用 public，
        設定 getLanguage 可以在控制台載入回傳的模板
        (3)使用 private 和 protected 未使用 public，
        無法在控制台載入回傳的模板

### 11. Implements for Interfaces
        設定 Musician 介面，
        name 和 instument 的類別為 string，
        play 方法 的類別為 string；
        設定 class 的名稱為 Guitarist，由 Musician 作為工具，
        name 和 instument 為 constructor 的參數，
        play 方法回傳文字模板；
        使用 Guitarist 類，使用兩個參數宣告 Page；
        在控制台載入 play方法 回傳的模板

### 12. Static Class Members
        (1)設定 class 的名稱為 Peeps
        設定 static類成員
        count 的類別為 number，預設值為 0
        設定 static類成員
        getCount方法的類別為 number
        回傳 Peeps.count
        設定 public公開類成員，id 的類別為 number
        constructor建構子參數為 name，類別為 string，並設定 public類成員
        使用 this關鍵字設定 id 從 0 開始遞增
        (2)使用 Peeps 類，宣告 John, Steve, Amy
        在控制台顯示 Peeps.count 的數值
        (3)在控制台顯示 John, Steve, Amy 的 id

### 13. Getters & Setters
        (1)設定 class 的名稱為 Bands，
        設定 private類成員 dataState 的類別為有string 元素的陣列，
        建構子使用this關鍵字，設定 dataState，
        Getters 和 Setters，使用 private類成員，data方法的類別為有string 元素的陣列
        (2)使用 ifelse迴圈設定 Type Guard，確認參數 value 為 陣列且元素為 string，確認資料在控制台回傳結果
