var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1~4 \n week5~8 \n week9~12 \n week13~16 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1~4', 'text': 'week1 \n 建立倉儲\xa0 \xa0 \n week2 \n 分組作業\xa0 亂數分組 \n 先到about->grouping-> Dart source code for random grouping \n 裡面左上有三行分別是Dart Html Css \n 點Html，把第二行的網址改掉，改成 https://s1.mde.nfu.edu.tw:7443/?semester=1082&courseno=0780 乙班名單，就完成了。 \n ps:dart不支援http，記得要用https \n 可攜式升3.8.2 \n 下載:1.Windows x86-64 executable installer \n \xa0\xa0\xa0\xa0 2. full 64-bit download \n \xa0\xa0\xa0\xa0 3. msys2-x86_64-20190524.exe \n \xa0\xa0\xa0\xa0 4.64-bit Git for Windows Portable \n \xa0 \xa0\xa0\xa0建立一個資料夾cd20，在裡面再新增一個資料夾data，再新增的資料夾裡再新增一個資料夾py382 \n \xa0\xa0 \xa0\xa0把下載1扔進py382裡面，2扔去data並且改名為wscite，3丟去data裡面，在data裡面再建一個資料夾portablegit (portablegit跟py382在同一個資料夾裡)把4丟進portablegit。 \n \xa0\xa0\xa0\xa0 編譯SciTE，啟動SciTE後Options->Open Global Option File \n 開行數，把139跟300前的#去掉，在301行前加上#。 \n 用SciTE建立新的start.bat \n 建立stop.bat \n \n 到 https://bootstrap.pypa.io/get-pip.py 裡，直接另存新檔到data裡 \n 執行star.bat \n 執行這兩行指令python get-pip.py跟pip install flask bs4 lxml pelican markdown flask_cors leo \n week3 \n 一部分翻譯，在倉儲的downloads裡面 \n week4 \n \n', 'tags': '', 'url': 'week1~4.html'}, {'title': 'week5~8', 'text': 'week6 \n 小組分組 \n \n week7 \n 翻譯 DesignCollaborationBetterProducts.txt \n week8 \n vrep小車模擬 \n \n \xa0 \xa0 \xa01.先把車畫出來 \n \xa0 \xa0 \xa02.到這邊 drive.google.com/file/d/1hPSwv9J4h3P6Fh80I1mSVD3lKTEKo19z/view \n \n \xa0 \xa0 \xa0 \xa0 把裡面的東西複製貼上在你的控制程式上(舊的要刪掉) \n \xa0 \n', 'tags': '', 'url': 'week5~8.html'}, {'title': 'week9~12', 'text': 'week 9\xa0 \n ssh測試 \n \n 把上學期的鑰匙資料夾(.ssh) 拉到這學期用的資料夾data->home裡面 \n putty也要拉，更改config的指令，位置在cd2020->.git裡面 \n 把https://github.com/s40723228/cd2020改成\xa0 \xa0 \n git@github.com:s40723228/cd2020.git \n (記得是要填自己的學號) \n 用putty重新抓鑰匙位置(影片裡有) \n 更改start.bat裡的指令 \n 把16，17行前面的#字號拿掉，完成。 \n week10 \n \n API\xa0 先登入學校的信箱@gm那個 進這個網址https://console.developers.google.com 接受許可並創建Google API 啟用(上面那個有藍色+號的選項) 找尋 Google Domain API並啟用它 選擇內部或外部用戶類型並添加新的應用程序名稱 點選左上的google apis，然後往下找到"憑證"選項 建立憑證-->OAuth用戶端 ID-->網頁應用程式-->建立 用記事本把它給的用戶端ID與密存起來 點選剛剛設好的網路用戶端 1 (設置網址) 授權的JavaScript為：https：// localhost：8443 定義URI為：https：// localhost：8443 / login / google / 開啟leo更改其中得config中的scrum為自己命名的txt檔案名稱，並且修改完成之後按下save和darwROC 用小黑窗直接輸入pip install authomatic 網頁開啟https://localhost:8443 成功登入即完成 \n 翻譯 \n week11 \n 小組開會 \n \n 講解ssh與如何開模擬器，ssh步驟在上面 \n 開模擬器 \n 下在 ubuntu ， vitualbox ， coppeliasim \n 開啟vitualbox，導入老師的ubuntu \n 檔案->喜好設定->網路->綠色加號新增網路NatNetwork \n "新增"旁邊的"設定"->網路，改Nat，設定連接埠19999跟22 \n 啟動，密碼跟帳號一樣 \n 點擊左上activities->LXTerminal \n 指令xterm& \n 指令ls(查看目錄) \n 進到CoppliaSim_Edu_V4_0_0_Ubuntu18_04 \n ./coppliasim.sh(執行它) \n 開啟ttt檔，在外部用scite執行老師的檔案 \n api有做的話車應該會跑 \n week12 \n \n \xa0 \n \xa0 \n \n \n', 'tags': '', 'url': 'week9~12.html'}, {'title': 'week13~16', 'text': 'week15\xa0 filezilla設定 \n \n 1.下載filezilla -\xa0 https://portableapps.com/apps/internet/filezilla_portable 安裝它 \n 2.設定putty\xa0 \xa0 ps.X11的設定是localhost:0.0 \n 3.開啟剛剛設定的 putty\xa0 帳密都是kmol2020 \n 4.開filezilla \n 5.檔案->站台管理員->新建一個站台 \n 6.設定它，協定記得改成ssh那個 \n 7.連線 完工 \n week16 \n \n 這次連線有三個地方要設定 \n 1.virtualBox左上角檔案->喜好設定->網路->NAT網路改動->連接阜傳送 \n IPv6改動能去 主體IP ， 客體IP 找 \n 2.網路介面卡設定，在IPv6下 \n \n 3.開啟虛擬主機後，ifconfig查找自己的ipv6位子 \n \xa0 \xa0在tmp下clone自己的倉儲(記得用submodule) \n 去老地方找wsgi.py這個檔案，用指定sudo vi wsgi.py來更改它 \n 把host後面那串改成我們找到的ipv6的位子 \n 4.回cmsimde，輸入https://[2001:288:6004:17:2020:2:0:7228]:19443 \n 5.完成 \n \n', 'tags': '', 'url': 'week13~16.html'}, {'title': 'translation', 'text': '', 'tags': '', 'url': 'translation.html'}, {'title': 'DesignCollaborationBetterProducts.txt', 'text': '翻譯 DesignCollaborationBetterProducts.txt \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 通過設計協同創建更好的產品-思想，工具，過程 \n \xa0\xa0\xa0\xa0 同者: Shaun Moynihan \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 2019年7月10日 \n \xa0\xa0\xa0 \xa0 當今的數位產品比以前都來的複雜。而創建他們需要多個團隊成員，每個團隊成員都有自己的一套技能和專業知識。例如，在 Savvy ，我們的客戶與以下人員緊密合同：產品經理， UX 設計師，視覺設計師，開發人員，內容策略師和成長專家。 \xa0 \n \xa0\xa0\xa0 \xa0 我們使用設計協同來處理這種複雜的事物。如果設計得當，設計協同將使每位專家都擁有思維方式，製同過程和工具，從而團結起來，更快地構建更好的產品。我們編寫了此資源，以幫助其他應用程式創建者採用協同文化和流程。繼續閱讀以了解為什麼設計協同對於創建引人注目的產品和體驗很重要。我們還將深入探討設計協同思想和文化的要素，有效設計協同的工具，以及工同中設計協同的真實示例。 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 甚麼是 ” 設計協同 ”? \n \xa0\xa0\xa0 \xa0 在進入之前，我們需要在同一頁面上了解什麼是設計協同 …… 而什麼不是。簡單來說，設計協同就是在設計優先的環境中進行協同。但是，由於設計的本質，尤其是我們在 Savvy 所做的設計，設計協同往往會超出人們通常認為的協同範圍。通常將協同定義為兩個或兩個以上的人在共同的目標上共同努力，而設計協同則涉及更多。 \xa0 設計協同包括更多具有不同技能，更艱鉅挑戰和更大目標，影響深遠的人。 \xa0 您可能將協同視為兩個人掛在一塊藝術品上。它只需要溝通，團隊合同和四隻手。設計協同是指一組策展人精心設計訪問者的體驗。他們選擇藝術品，選擇在何處以及如何懸掛藝術品，它所居住的房間（以及房間的照明，家具），甚至是先前的房間以及整個建築物。 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 為什麼設計協同很重要 \xa0 \n \xa0\xa0\xa0 \xa0 您可以在沒有協同的情況下設計產品，但是需要一個協同設計過程才能使該產品出色。這就是設計協同如此重要的原因。 \xa0 \n \xa0\xa0\xa0 \xa0 我們不僅為客戶構建應用程序。 \xa0 Savvy 建立了多平台的體驗，複雜的內部系統，在某些情況下還建立了整個品牌和業務。為此，我們利用跨多個核心學科的專業知識：戰略，設計，開發和增長。每個項目涉及很多人，每個人都有自己的技能和專長。 \xa0 \n \xa0\xa0\xa0 \xa0 設計協同將這些思想融合在一起，結合他們各自的專業知識，共同創建解決方案，以解決共同目標的各個方面。設計協同不是從一個角度來解決問題，而是將這個問題擺在所有專家面前，迫使他們考慮新的觀點和可能性。 \xa0 \n 例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們盡快解決技術機會和局限性。這使我們可以使用養設計協作心態大有幫助 \xa0 \n 在設計過程中建立有效協作的過程中，正確的思維方式。它為誰進行協作，如何合作以及達到何種目的奠定了指導原則。 \xa0 \n \xa0\xa0\xa0 \xa0 \xa0\xa0\xa0合作\xa0 \n \xa0\xa0 \xa0 適合所有人設計師有時會認為不是設計師的人沒有資格提供良好的反饋。但是出色的設計不只是視覺效果。它涵蓋了產品的所有內容，從品牌到工程，再到發展。 \xa0 \n \xa0\xa0\xa0 \xa0 設計協作吸引了許多人，每個人都有自己的觀點和優勢。它給每個人一個聲音。這些新鮮的觀點為設計師提供了更多信息。前景使設計師能夠對可能對其他設計，開發和營銷選擇產生持久影響的選擇做出正確的決定。 \xa0 \n \xa0\xa0\xa0 \xa0 與客戶的協作與與其他設計師和團隊成員的協作一樣重要。在 Savvy ，我們讓客戶參與其產品的整個創作過程。我們花時間解釋各種選擇，並與客戶進行討論以確保我們了解他們的想法。 \xa0 \n \xa0\xa0\xa0 \xa0 這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。更大的曝光量並不是什麼大驚喜，而且沒人會第一次看到他們的作品。 \xa0 \n 客戶協作意味著可以更快地獲得更清晰的產品，而無需付出高昂的代價和不必要的會議。 \xa0 \n \xa0\xa0\xa0 \xa0 很容易陷入角色而忽略全局。通過儘早讓更多人參與進來，您可以與隊友建立更緊密的聯繫，並培養對產品成功的共同責任和興趣。您正在創建一個更加開放和透明的流程，以及一個更緊密聯繫和投入的團隊。 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 合作是相對的， \xa0 \n \xa0\xa0\xa0 \xa0 客戶面對我們時面臨著複雜的挑戰和目標。更不用說，我們將繼續與客戶合作數月甚至數年，並在過去的決策，研究和其他有價值的背景下積累大量的知識。 \xa0 通過採用上下文優先的方法，可以確保每個人都具有最高的知識水平。這樣，他們就可以在產品上做出最明智的決定。為了做到這一點，我們通過儘早召集所有團隊成員，記錄和記錄會議，建立一些重疊以及在此過程中像對待客戶一樣對待下一個團隊成員，使 Savvy 的每個人都獲得有關最新信息的最新信息。 \xa0 \n 在個案協作的基礎上，上下文也同樣重要。請遵循以下準則以保持協作中的上下文優先： \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 在顯示您的工作之前提供上下文。在提供背景信息的情況下，如果您的作品出現在屏幕上，那麼您可能會失去聽眾的注意力。 \xa0 \n 描述您要解決的問題或要達到的目標。 \n 介紹與當前問題相關的工作。說明您的想法以及做出某些決定的原因。 \xa0 \n 請具體說明您要反饋的內容。 \xa0 \n 合作是開放，誠實和無畏的 \xa0 \n 將工作（和您自己）放在外面並不容易。情緒會阻礙您提供坦誠的反饋，尤其是當您擔心會傷害對方的感覺時。 \xa0 \n 這並不意味著在協作中沒有情感的位置。在設計中，讓您感覺如何很重要。我們為人們 ... 思考並為他們創建解決方案 ... 有情感並在決策中使用情感的人。在對話中留下情感可能會縮短潛在的想法或解決方案。充其量，僅就事實和數據進行務實的討論將無法提供全面的信息。在最壞的情況下，它可能是鯡魚或提供虛假的敘述。 \xa0 \n 在 Savvy ，我們使我們的團隊對收到反饋 “ 無所畏懼 ” 。這意味著放開對我們所創造的東西進行判斷的任何焦慮。這也意味著了解我們在一起更加強大，更有機會創造偉大的事物。在無所畏懼的情況下，我們會更好地相互信任和相互賦予能力，以提供誠實和周到的反饋。 \xa0 \n 我們的團隊還相信，不要害怕提供反饋。這意味著要了解需要解決的問題以及客戶的品牌和目標。這也意味著問很多問題，以發現相關的思想或幫助指導決策。 \xa0 \n 嘗試以探索性和指導性的方式提出反饋意見，目的是建立和改進工作，而不是拆散工作。到 Twitter\xa0 \n 您的反饋應該是建設性的。與其說您不喜歡某些東西，不如說出您的反饋意見以指出您要幫助解決的問題。提供可行的步驟來改進工作，或者至少提供您思考背後的理由。並且不要忘了表達您喜歡什麼以及為什麼。 \xa0 \n 協作不僅僅是新的想法 \xa0 \n 開放和接受協作反饋是一回事，解析這些想法並將其用作激發自己的想法是另一回事。隨著時間的推移，這是一項更高級的技能。一種實踐方法是成為更好的聽眾。 \xa0 \n 通常，在與他人交談時，我們會更多地考慮接下來要說的內容，而不是別人在說什麼。這會影響反饋過程，尤其是在設計過程中，因為在聽到其他意見或解決方案之前，我們通常會知道我們要說的話。 \xa0 \n 當您選擇先聆聽然後再做出反應時，它可以使您完全理解其他人的反饋，並讓您更深入地了解他們所使用的觀點以及他們來自何處？很有可能這是您在創建過程中未曾考慮過的觀點。通過聽取並理解所收到反饋背後的上下文和推理，您可以以更多的方式來審視，思考和體驗設計。然後，您可以針對要設計的挑戰，目標和用例來測試這些新觀點，以查看它們是否更適合用戶。 \xa0 \n 當所有協作者都在積極聆聽時，更容易接受反饋。最終，提供良好反饋的技能來自學習如何獲得反饋。當我們努力成為更好的聽眾時，我們也發現自己變得越來越謙虛，去成為我們認為的， \xa0 更好的設計師。 \xa0 \n 查找和使用正確的設計協作工具 \xa0 \n 正確的工具在增強團隊的設計協作思想方面大有幫助。在本節中，您將學習在協作工具中尋找什麼。我們還根據自己的經驗推薦工具。 \xa0 \n 選擇正確的工具 \xa0 \n 有效的協作工具消除了合作者快速便捷地訪問工作並與之交互的所有障礙。這將重點放在提供反饋上。它們還允許其他人在不破壞原始設計的情況下進行協作。 \xa0 \n 過去，我們使用依賴於提供基本版本控製而不是真正的協作功能的工具。例如，設計人員將保存一個 Sketch 文件並將其上傳到 Dropbox 。然後，另一個團隊成員將下載它，進行處理，然後重新上傳。當文件在另一個人手中時，沒有簡單的方法進行更改。我們使用 Github 嘗試了類似的方法，該工具被證明非常適合管理代碼庫，但對於迭代設計工作卻沒有太多幫助。不用說，這些版本控製過程使我們的協作更加耗時，混亂並且非常不協作。 \xa0 \n 現在，我們根據要實現的協作類型從各種更高級的工具中進行選擇。 \n FIGMA\xa0 \n 這是一個協作優先的共享工作區工具。 \xa0 Figma 非常適合在設計文件的同一區域中包含多個人。您可以實時觀看隊友的設計或在同一個設計上一起工作。 \xa0 \n 好處： \xa0 \n Figma 降低了某人在筒倉中工作的能力。 \xa0 \n 無需添加不必要的修飾或創建靜態可交付結果即可實現協作。因此，您無需更改工作流程即可展示設計。 \xa0 \n 可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整。 \xa0 \n 使用時間：流程文檔，高保真線框，即時協作，以及引導客戶瀏覽一系列屏幕，以解釋並獲取有關設計方向的反饋。 \xa0 \n MARVEL\xa0 \n 雖然 FIGMA 容易感到更自由的形式和靈活，奇蹟允許合作的一個更加規範的形式。這也使我們的客戶可以輕鬆地與我們合作。 \xa0 \n 好處： \xa0 \n Marvel 是一個更清潔，更規範和專注的空間，非常適合與非設計團隊成員進行協作。 \xa0 \n 它消除了客戶為帳戶付款或對工具進行深入了解的所有需求。 \xa0 \n 客戶可以下載屏幕，並通過 Marvel 應用程序在設備環境中查看它們的運行情況。 \xa0 \n 使用時間：與客戶和開發人員一起呈現更多最終設計工作。 （了解 Marvel 與其他原型工具的比較。） \xa0 \n 其他協作工具 \xa0 \n Zeplin 是有用的傳遞工具，使開發人員可以深入研究設計工作的細節。 （我們在這裡更深入地討論 Zeplin 。） \xa0 \n Quip 是一個集思廣益和產品 / 過程文檔的絕佳平台。我們使用它來記錄和組織團隊成員在項目上需要了解的所有上下文和知識。對於集思廣益而不是視覺關注的新想法也很有用。 \xa0 \n 請注意，還有許多其他工具可以為協作增加與上面列出的類似的好處。此列表代表了在我們日常合作中對我們有效的工具，但並不表示所有可能對您的團隊有效的選項。 \xa0 \n Savvy 的設計協作過程在實踐中 \xa0 \n 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們如何在現實生活中融合在一起。我們將使用 Press Play 應用程序中的實時繪圖經驗來演示設計協作的重要性。這種經驗涉及多個學科領域的團隊成員之間的重大協作，其中包括視覺設計師， UX 設計人員，開發人員，產品經理，當然還有客戶。 \xa0 \n 上下文和挑戰 \xa0 \n Press Play 是包含每日，每周和每月圖紙的抽獎應用程序。用戶通過觀看廣告賺取門票，並通過選擇五個表情符號輸入圖紙。然後，根據獲獎者的選擇與繪畫中隨機選擇的表情符號匹配的方式來獎勵獲獎者。這項特殊任務使我們為等待現場繪畫結果的用戶創造了一種有趣而激動人心的現場體驗。 \xa0 \n 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。我們特別想在屏幕上喚起用戶的嬉戲感和期待感，讓用戶看到他們選擇的表情符號與抽獎活動圖上的表情符號相匹配。 \xa0 \n 就是說，我們需要注意動畫所需的複雜程度及其對整體產品時間表和成本的影響。我們的目標是在合理的時間內提高保真度，而又不顯著影響項目預算。 \xa0 \n 協作過程 \xa0 \n 階段 1 ：線框和頭腦風暴 \xa0 \n 首先，精明的 UX 設計師創建了 Press Play 的整體 UX 和線框，確定需要哪些屏幕以及每個屏幕的時間安排。她還為實時繪畫動畫整理了一個粗略的概念（如右圖所示），根據客戶的需求和項目已建立的用戶體驗表達了初步的想法。 \xa0 \n 她向產品經理和視覺設計師展示了線框和粗糙的動畫。然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 \n 第 2 階段：研究和環境 \n 精明的視覺設計師負責創建實際的實時繪圖動畫，而他們的眼睛新鮮，並且對 Press Play 產品沒有太多的了解。為了加快速度，他與 UX 設計師和產品經理進行了深入交流。他還花費額外的研究時間來了解總體產品目標，挑戰並熟悉迄今為止的工作。如前所述，他是線框演示的一部分，並向客戶提出反饋。 \xa0 \n 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和挑戰。他查看了具有類似體驗和保真度的其他應用，並參考了粗糙的動畫以了解最終動畫到底需要顯示什麼（在這種情況下，是獲勝的表情符號和用戶的表情符號選擇）。在過於依賴解決方案之前，他會見了一位精明的 iOS 開發人員，以了解技術限制和注意事項。 \xa0 \n 然後，我們的視覺設計師和 UX 設計師集思廣益，對視覺效果至關重要。他們一致認為，需要為用戶增加懸念 / 期望，這需要緩慢的揭示。 \xa0 \n 階段 3 ：迭代和反饋 \xa0 \n 當我們的視覺設計師通過多個不同的方向工作時，他邀請 UX 設計師來討論他在 Figma 中的進度和設計。 。通過討論工作，他們激發了更多的想法和迭代，同時確保它們符合客戶的期望。有了更多可靠的選擇，他再次與 iOS 開發人員會面，以確保從技術角度來看一切都符合要求。 \xa0 \n 階段 4 ：客戶反饋和開發 \xa0 \n 當我們獲得多個最終版本的體驗時，視覺設計師使用 Figma 與客戶一起進行了體驗。 \xa0 Press Play 的產品經理和 UX 設計師也提供了反饋和指導。 \xa0 \n 一旦他們都了解了引起客戶興趣的東西，視覺設計師便著手使視覺效果最大化，並為開發做好準備。他繼續與 iOS 開發人員合作，以在技術層面上充分利用該概念。 \xa0 \n 最終結果 \xa0 \n Press Play 的實時繪圖動畫是工作中設計協作的一個例子。一支跨學科專家團隊，共同解決具有更大影響的設計和開發挑戰。沒有設計協作，我們將找不到用戶體驗，視覺和技術之間的理想交匯處。 \xa0 \n 當客戶在他的應用程序中看到動畫生動時，他稱其為 “ 開創性的 ” 。 \xa0 \n 此外，這種 Press Play 體驗的研究，協作和創造幫助我們發現了產品用戶旅程中的空白。最初，實時繪圖的目的是將結果顯示給用戶的一種有趣的方式。在我們進行設計過程的過程中，我們意識到，如果用戶沒有觀看實時圖形而迷路了，他們就無法體驗到該圖形的用戶旅程。 \xa0 \n 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們在 “ 獲勝者圈子 ” 中添加了一個 “ 結果 / 實時繪圖 ” 元素，並在該應用程序的 “ 用戶詳細信息 ” 端添加了 “ 失敗記錄 ” 部分。最後，設計協作使我們能夠實現用戶體驗中這一未滿足的需求。 \xa0 \n 結論說明 \xa0 \n 需要進行設計合作，以解決構建出色產品和體驗所伴隨的複雜，關鍵問題。通過利用跨學科的多個團隊成員的專業知識，設計協作可確保團隊從各個角度應對挑戰並尋求更好的解決方案。通過正確的思維方式，工具和流程，設計協作使團隊能夠通過創造性思維和迭代來更深入。 \xa0 \n 我們希望本指南為您提供一個良好的基礎，您可以以此為基礎建立自己的有效設計協作流程。您可以在 Savvy 博客上了解有關設計和產品策略的更多信息，也可以隨時在 Savvy Apps 網站上與我們聯繫以獲取幫助。 \n', 'tags': '', 'url': 'DesignCollaborationBetterProducts.txt.html'}, {'title': 'MSModelingAndTFApproaches無英文版', 'text': 'https://github.com/s40723228/cd2020/blob/master/downloads/MSModelingAndTFApproaches%E7%84%A1%E8%8B%B1%E6%96%87%E7%89%88.pdf \n \n \n', 'tags': '', 'url': 'MSModelingAndTFApproaches無英文版.html'}, {'title': 'problem', 'text': '我所碰到的問題，跟解決方法 \n 1. \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'problem.html'}]};