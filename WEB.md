### 实验环境 
操作系统:MacOS10.13.6 
node:v10.8.0  
微信开发者工具:Stable v1.02.1910120  


### 前置准备
需要安装pc端模拟器工具可以选择网易MuMu,或者其它模拟器
模拟器设置中配置共享文件夹   
下载反编译工具 
①wxappUnpacker 原作  
https://github.com/qwerty472123/wxappUnpacker  
②wxappUnpacker 博主修复版  
https://github.com/xuedingmiaojun/wxappUnpacker  


### 模拟器内软件安装
需要安装以下两个软件


- RE文件管理器(查看小程序压缩包)
- 微信(使用微信打开小程序以下载小程序包)


### 获取小程序包

1.使用自己手机上的微信打开"中银E路通"小程序,可以添加到"我的小程序"  
2.打开模拟器的微信并登录  
3.在模拟器微信的下拉小程序最近使用历史中打开"中银E路通",如果历史记录中没有就在我的小程序中找一找  
4.打开小程序等待加载之后就可以去找源码包了  
5.打开RE文件管理器,进入到以下路径查找源码包(可以根据下载时间区分出你想要的源码包)  

`/data/data/com.tencent.mm/MicroMsg/4c8188dbf07eec893d0ac90974657aeb/appbrand/pkg`  

6.拷贝小程序包至模拟器共享文件夹,为了方便解包重命名为zyel
![image](https://user-images.githubusercontent.com/20290762/156769958-ebbcd3df-771a-4ce7-b4fb-456aa6415867.png)

获取完毕。

### 开始解包
### 解包流程
1.进入克隆下来的反编译工具根目录  
 
如果没有安装过npm包就先执行安装  

`npm install` 

2.解包

`node wuWxapkg.js <path/to/zyel.wxapkg>`

可以看到命令行输出如下提示
```

Unpack file zyel2.wxapkg...

Header info:
  firstMark: 0xbe
  unknownInfo:  0
  infoListLength:  1547
  dataLength:  971189
  lastMark: 0xed

File list info:
  fileCount:  42
{ name: '/components/home/images/home-icon1.png',
  off: 1561,
  size: 2969 }
{ name: '/components/home/images/home-load-btn.png',
  off: 4530,
  size: 235 }
{ name: '/components/key/imgs/back.png', off: 4765, size: 4369 }
{ name: '/images/arrow-right.png', off: 9134, size: 223 }
{ name: '/images/detailsCoins-btn1-ac.png',
  off: 9357,
  size: 1180 }
{ name: '/images/detailsCoins-btn1.png', off: 10537, size: 614 }
{ name: '/images/detailsCoins-btn2-ac.png',
  off: 11151,
  size: 936 }
{ name: '/images/detailsCoins-btn2.png', off: 12087, size: 546 }
{ name: '/images/home-ac.png', off: 12633, size: 2281 }
{ name: '/images/home.png', off: 14914, size: 1565 }
{ name: '/images/mine-ac.png', off: 16479, size: 2324 }
{ name: '/images/mine-icon1.png', off: 18803, size: 1115 }
{ name: '/images/mine-icon3.png', off: 19918, size: 852 }
{ name: '/images/mine-icon4.png', off: 20770, size: 1038 }
{ name: '/images/mine-icon5.png', off: 21808, size: 1039 }
{ name: '/images/mine-icon6.png', off: 22847, size: 9137 }
{ name: '/images/mine-icon7.png', off: 31984, size: 1796 }
{ name: '/images/mine.png', off: 33780, size: 1682 }
{ name: '/images/ranking-one.png', off: 35462, size: 4883 }
{ name: '/images/ranking-three.png', off: 40345, size: 4993 }
{ name: '/images/ranking-two.png', off: 45338, size: 4928 }
{ name: '/images/shop-ac.png', off: 50266, size: 2393 }
{ name: '/images/shop.png', off: 52659, size: 1807 }
{ name: '/app-config.json', off: 54466, size: 18010 }
{ name: '/app-service.js', off: 72476, size: 728734 }
{ name: '/pages/CSR/CSR.html', off: 801210, size: 3759 }
{ name: '/pages/card/card.html', off: 804969, size: 5518 }
{ name: '/pages/coinRecord/coinRecord.html',
  off: 810487,
  size: 3832 }
{ name: '/pages/coinShop/coinShop.html', off: 814319, size: 469 }
{ name: '/pages/detailsCoins/detailsCoins.html',
  off: 814788,
  size: 4498 }
{ name: '/pages/home/home.html', off: 819286, size: 5043 }
{ name: '/pages/integralDec/integralDec.html',
  off: 824329,
  size: 3153 }
{ name: '/pages/integralTask/integralTask.html',
  off: 827482,
  size: 5007 }
{ name: '/pages/login/login.html', off: 832489, size: 1649 }
{ name: '/pages/mine/mine.html', off: 834138, size: 2429 }
{ name: '/pages/orderList/orderList.html',
  off: 836567,
  size: 5701 }
{ name: '/pages/ranking/ranking.html', off: 842268, size: 4388 }
{ name: '/pages/share/share.html', off: 846656, size: 5327 }
{ name: '/pages/shop/creditBuy.html', off: 851983, size: 2730 }
{ name: '/pages/shop/shop.html', off: 854713, size: 3175 }
{ name: '/pages/welfare/welfare.html', off: 857888, size: 751 }
{ name: '/page-frame.html', off: 858639, size: 114111 }
Saving files...
Unpack done.
Split app-service.js and make up configs & wxss & wxml & wxs...
Decompile ./pages/CSR/CSR.wxml...
Decompile success!
Decompile ./pages/card/card.wxml...
Decompile success!
Decompile ./pages/coinRecord/coinRecord.wxml...
Decompile success!
Decompile ./pages/coinShop/coinShop.wxml...
Decompile success!
Decompile ./pages/detailsCoins/detailsCoins.wxml...
Decompile success!
Decompile ./pages/home/home.wxml...
Decompile success!
Decompile ./pages/integralDec/integralDec.wxml...
Decompile success!
Decompile ./pages/integralTask/integralTask.wxml...
Decompile success!
Decompile ./pages/login/login.wxml...
Decompile success!
Decompile ./pages/mine/mine.wxml...
Decompile success!
Decompile ./pages/orderList/orderList.wxml...
Decompile success!
Decompile ./pages/ranking/ranking.wxml...
Decompile success!
Decompile ./pages/share/share.wxml...
Decompile success!
Decompile ./pages/shop/creditBuy.wxml...
Decompile success!
Decompile ./pages/shop/shop.wxml...
Decompile success!
Decompile ./pages/welfare/welfare.wxml...
Decompile success!
Guess wxss(first turn)...
Splitting "/Users/gangxue/demo/wxappUnpacker/zyel/app-service.js" done.
Import count info: {}
Guess wxss(first turn) done.
Generate wxss(second turn)...
Generate wxss(second turn) done.
Save wxss...
Split and make up done.
Delete files...
Deleted.

File done.
Total use: 3148.983ms
```

3.如果想单独执行config、js、wxml、wxss的反编译可以在解包时加-o参数不做后续操作  

### 工具用法
- node wuConfig.js <files...> 将 app-config.json 中的内容拆分到各个文件对应的 .json 和 app.json , 并通过搜索 app-config.json 所在文件夹下的所有文件尝试将 iconData 还原为 iconPath 。
- node wuJs.js <files...> 将 app-service.js (或小游戏中的 game.js ) 拆分成一系列原先独立的 javascript 文件，并使用 Uglify-ES 美化，从而尽可能还原编译前的情况。
- node wuWxml.js [-m] <files...> 将编译/混合到 page-frame.html ( 或 app-wxss.js ) 中的 wxml 和 wxs 文件还原为独立的、未编译的文件。如果加上-m指令，就会阻止block块自动省略，可能帮助解决一些相关过程的 bug 。
- node wuWxss.js <dirs...> 通过获取文件夹下的 page-frame.html ( 或 app-wxss.js ) 和其他 html 文件的内容，还原出编译前 wxss 文件的内容。
- node wuWxapkg.js [-o] [-d] [-s=<Main Dir>] <files...> 将 wxapkg 文件解包，并将包中上述命令中所提的被编译/混合的文件自动地恢复原状。如果加上-o指令，表示仅解包，不做后续操作。如果加上-d指令，就会保留编译/混合后所生成的新文件，否则会自动删去这些文件。同时，前面命令中的指令也可直接加在这一命令上。而如果需要解压分包，请先解压主包，然后执行node wuWxapkg.js [-d] -s=<Main Dir> <subPackages...>，其中Main Dir为主包解压地址。除-d与-s外，这些指令两两共存的后果是未定义的（当然，是不会有危险的）。
### 导入开发者工具
打开微信开发者工具,导入项目即可
