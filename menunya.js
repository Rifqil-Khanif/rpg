require("./settings.js");
require("./jerofc.js");
const chalk2 = require("chalk");
const fs2 = require("fs");
const momentTimezone = require("moment-timezone");
const v = momentTimezone(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
const v2 = momentTimezone(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
const v3 = "0@s.whatsapp.net";
const os2 = require("os");
const v4 = momentTimezone.tz("asia/jakarta").format("HH:mm:ss");
const v5 = momentTimezone().tz("Asia/Jakarta").format("ll");
const vF = () => {
  let v6 = fs2.readFileSync("./jerofc.js").toString();
  let v7 = (v6.match(/case '/g) || []).length;
  return v7;
};
const vF2 = function (p) {
  p = Number(p);
  var v8 = Math.floor(p / 86400);
  var v9 = Math.floor(p % 86400 / 3600);
  var v10 = Math.floor(p % 3600 / 60);
  var v11 = Math.floor(p % 60);
  var v12 = v8 > 0 ? v8 + (v8 == 1 ? " day, " : " days, ") : "";
  var v13 = v9 > 0 ? v9 + (v9 == 1 ? " hour, " : " hours, ") : "";
  var v14 = v10 > 0 ? v10 + (v10 == 1 ? " minute, " : " minutes, ") : "";
  var v15 = v11 > 0 ? v11 + (v11 == 1 ? " second" : " seconds") : "";
  return v12 + v13 + v14 + v15;
};
let v16 = owner + "@s.whatsapp.net";
global.menunya = (p2, p3) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *INFO BOT* 」\n│\n│Nama Bot : " + namabot + "\n│Creator :  " + owner2 + "\n│Sponsored :  @" + v3.split("@")[0] + "\n│Memory Used : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require("os").totalmem / 1024 / 1024) + "MB\n│Hostname : " + os2.hostname() + "\n│Platform : " + os2.platform() + "\n│Runtime : " + vF2(process.uptime()) + "\n│Jam : " + v4 + "\n│Tanggal : " + v5 + "\n│Prefix : " + p2 + "\n│\n╰❒ \n\n╭─❒ 「 User Info 」 \n│\n│ Nomor : @" + m.sender.split("@")[0] + "\n│ Me : " + (m.key.fromMe ? "True" : "False") + "\n│ Creator :  @" + owner2 + "\n│\n╰❒ \n\n╭─❒ 「 *MENU ALL* 」\n│.ownermenu\n│.databasemenu\n│.groupmenu\n│.searchmenu\n│.downloadmenu\n│.stalkmenu\n│.animemenu\n│.asupanmenu\n│.othermenu\n│.stickertelemenu\n│.stickermenu\n│.menfessmenu\n│.aimenu\n│.gamesmenu\n│.cecanmenu\n│.nsfwmenu\n│.coganmenu\n│.cerpenmenu\n│.primbonmenu\n│.funmenu\n│.photoxymenu\n│.soundmenu\n│.tqto\n│\n╰❒ \n\n© " + namaowner + " 2024\n\n[ FITUR ]\n" + vF() + "\n";
};
global.ownermenu = (p6, p7) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *OWNER MENU* 」\n│\n│❒ .addprem  \n│❒ .delprem  \n│❒ .listprem  \n│❒ .block  \n│❒ .unblock  \n│❒ .public  \n│❒ .self  \n│❒ .out  \n│❒ .kosong  \n│❒ .join  \n│❒ .addsewa  \n│❒ .delsewa  \n│❒ .setnamabot  \n│❒ .setbiobot  \n│❒ .broadcastvid  \n│❒ .bctext  \n│❒ .bcimage  \n│❒ .pushkon\n│❒ .pushkonid\n│❒ .anticall [on/off]\n│❒ .setexif\n│❒ .idgrub\n│❒ .idgc\n│❒ .jadibot\n│❒ .listjadibot\n│❒ .restartbot\n│❒ .creategc\n│❒ .banned\n│❒ .listbanned\n│❒ .unbanned\n│❒ .autoread\n│❒ .autoblok212 [on/off]\n│❒ .getcase\n│❒ .setppbot\n│❒ .pppanjang\n│❒ .addowner\n│❒ .delowner\n│❒ .setbot\n│❒ .delsetbot\n│❒ .session\n│❒ .sampah\n│❒ .delsampah\n│❒ .clearsession\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.panelmenu = (p8, p9) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *PANEL MENU* 」 \n│\n│❒ .1gb\n│❒ .2gb\n│❒ .3gb\n│❒ .4gb\n│❒ .5gb\n│❒ .6gb\n│❒ .7gb\n│❒ .8gb\n│❒ .addadmin  \n│❒ .addusr  \n│❒ .listusr  \n│❒ .cekusr  \n│❒ .delusr  \n│❒ .addsrv  \n│❒ .listsrv  \n│❒ .ceksrv  \n│❒ .delsrv  \n│❒ .reinstall\n│❒ .addsuspend\n│❒ .delsuspend\n│❒ .updatesrv\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.databasemenu = (p10, p11) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *DATABASE MENU* 」\n│\n│❒ .addvn\n│❒ .listvn\n│❒ .delvn\n│❒ .addzip\n│❒ .delzip\n│❒ .listzip\n│❒ .yozip\n│❒ .sendzip\n│❒ .addapk\n│❒ .delapk\n│❒ .listapk\n│❒ .sendapk\n│❒ .addpdf\n│❒ .listpdf\n│❒ .sendpdf\n│❒ .yopdf\n│❒ .sendpdf\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.storemenu = (p12, p13) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「  *STORE MENU*  」\n│\n│❒ .list  \n│❒ .addlist  \n│❒ .updatelist  \n│❒ .dellist  \n│❒ .jeda  \n│❒ .tambah  \n│❒ .kurang  \n│❒ .kali  \n│❒ .bagi  \n│❒ .setproses  \n│❒ .changeproses  \n│❒ .delsetproses  \n│❒ .setdone  \n│❒ .changedone  \n│❒ .delsetdone  \n│❒ .proses  \n│❒ .done  \n│❒ .setwelcome  \n│❒ .changewelcome  \n│❒ .delsetwelcome  \n│❒ .setleft  \n│❒ .changeleft  \n│❒ .delsetleft  \n│❒ .opentime\n│❒ .closetime\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.groupmenu = (p14, p15) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *GROUP MENU* 」 \n│\n│❒ .antiwame  [on/off]\n│❒ .antiwame2  [on/off]\n│❒ .antilink  [on/off]\n│❒ .antilink2  [on/off]\n│❒ .welcome  [on/off]\n│❒ .goodbye  [on/off]\n│❒ .group [open/close]\n│❒ .group [close/open]\n│❒ .hidetag [ Text ? ]\n│❒ .kick  \n│❒ .linkgc  \n│❒ .resetlinkgc  \n│❒ .delete  \n│❒ .listonline  \n│❒ .setnamegc  \n│❒ .setdesc  \n│❒ .listsewa  \n│❒ .add  \n│❒ .promote  \n│❒ .demote  \n│❒ .antilinkall [on/off]\n│❒ .sendlinkgc  \n│❒ .tagall  \n│❒ .totag\n│❒ .mute [on/off]\n│❒ .nsfw [on/off]\n│❒ .setppgroup\n│❒ .antilinkallv2\n│❒ .antilinkch\n│❒ .antilinkch2\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.srch = (p16, p17) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *SEARCH MENU* 」 \n│\n│❒ .ytsearch  \n│❒ .google  \n│❒ .cariresep\n│❒ .bacaresep\n│❒ .happymod\n│❒ .ssweb\n│❒ .grupwa\n│❒ .translate\n│❒ .listbahasa\n│❒ .liriklagu\n│❒ .jadwaltv\n│❒ .sposearch\n│❒ .ttsearch\n│❒ .kuncigitar\n│❒ .cekrek\n│❒ .namapahlawan\n│❒ .kodepos\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.downmenu = (p18, p19) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *DOWNLOAD MENU* 」\n│ \n│❒ .tiktok < url >\n│❒ .tiktokvn < url >\n│❒ .tiktokaudio < url >\n│❒ .tiktok2 < url >\n│❒ .tiktokaudio2 < url >\n│❒ .spotify < url >\n│❒ .ytmp3 < url >\n│❒ .ytmp4 < url >\n│❒ .play < text >\n│❒ .tomp4\n│❒ .toaudio\n│❒ .tomp3\n│❒ .tovn\n│❒ .togif\n│❒ .igdl < url >\n│❒ .igvideo < url >\n│❒ .igimg < url >\n│❒ .ig2 < url >\n│❒ .igs < user >\n│❒ .fbdl < url >\n│❒ .facebook < url >\n│❒ .gitclone < url >\n│❒ .twiter < url >\n│❒ .apk < name >\n│❒ .threads < url >\n│❒ .douyin < url >\n│❒ .douyinslide < url >\n│❒ .getpptiktok\n│❒ .like\n│❒ .snackvid\n│❒ .getmusic\n│❒ .dl < all url >\n│❒ .capcut < url >\n│❒ .twiter2 < url >\n│❒ .soundcloud < url >\n│❒ .pindl < url >\n│❒ .snapsave < url >\n│❒ .poophd < url >\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.stalkmenu = (p20, p21) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *STALKER MENU* 」 \n│\n│❒ .ffstalk < id >\n│❒ .mlstalk\n│❒ .githubstalk < user >\n│❒ .npmstalk < user >\n│❒ .igstalk < user >\n│❒ .tiktokstalk < user >\n│❒ .tiktokstalk2 < user >\n│❒ .telestalk < user >\n│❒ .wastalk < 628 >\n│❒ .ytstalk < user >\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.animemenu = (p22, p23) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *ANIME MENU* 」 \n│\n│❒ .umaru\n│❒ .keneki\n│❒ .megumin\n│❒ .yotsuba\n│❒ .shinomiya\n│❒ .yumeko\n│❒ .Tejina\n│❒ .chiho\n│❒ .touka-chan\n│❒ .akira\n│❒ .Itori\n│❒ .kurumi\n│❒ .sagiri\n│❒ .eba\n│❒ .deidara\n│❒ .itachi\n│❒ .madara\n│❒ .ayuzawa\n│❒ .asuna\n│❒ .emilia\n│❒ .hestia\n│❒ .inori\n│❒ .ana\n│❒ .miku\n│❒ .kaori\n│❒ .shizuka\n│❒ .doraemon\n│❒ .pokemon\n│❒ .kaga\n│❒ .koturi\n│❒ .mikasa\n│❒ .akiyama\n│❒ .gremory\n│❒ .isuzu\n│❒ .shina\n│❒ .kagura\n│❒ .shinka\n│❒ .tsunade\n│❒ .sasuke\n│❒ .sakura\n│❒ .rize\n│❒ .one-piece\n│❒ .nezuko\n│❒ .boruto\n│❒ .naruto\n│❒ .erza\n│❒ .kakasih\n│❒ .minato\n│❒ .elaina\n│❒ .yuri\n│❒ .shota\n│❒ .waifu\n│❒ .waifu-2\n│❒ .loli\n│❒ .hinata\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.asupanmenu = (p24, p25) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *ASUPAN MENU* 」\n│\n│❒ .tiktokkayes  \n│❒ .tiktokgirl  \n│❒ .tiktokghea  \n│❒ .tiktokbocil  \n│❒ .tiktokukhty  \n│❒ .tiktoksantuy  \n│❒ .tiktokpanrika  \n│❒ .tiktoknotnot  \n│❒ .tiktokgabagtha  \n│\n╰❒\n\n╭─❒ 「 *ASUPAN* *2* *MENU* 」\n│\n│❒ .chika\n│❒ .delvira\n│❒ .ayu\n│❒ .bunga\n│❒ .aura\n│❒ .nisa\n│❒ .ziva\n│❒ .yana\n│❒ .viona\n│❒ .syania\n│❒ .riri\n│❒ .syifa\n│❒ .mama_gina\n│❒ .alcakenya\n│❒ .mangayutri\n│❒ .rikagusriani\n│❒ .asupan\n│❒ .bocil\n│❒ .geayubi\n│❒ .santuy\n│❒ .ukhty\n│❒ .syifa\n│❒ .douyinasupan\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.othermenu = (p26, p27) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *OTHER MENU* 」 \n│\n│❒ .afk\n│❒ .bot\n│❒ .sapa\n│❒ .remini\n│❒ .getpic\n│❒ .gtts\n│❒ .gempa\n│❒ .cuaca\n│❒ .jadwalbola\n│❒ .cekopenai\n│❒ .gmaps\n│❒ .apkinfo\n│❒ .jadwalsholat\n│❒ .meme\n│❒ .cekapi\n│❒ .cekresolusi\n│❒ .cekwr\n│❒ .jadianime\n│❒ .get\n│❒ .fetch\n│❒ .harilibur\n│❒ .carbon\n│❒ .hd2\n│❒ .ocr\n│❒ .tourl\n│❒ .shortlink\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.stickertele = (p28, p29) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *RANDOM STICKER* 」 \n│\n│❒ .patrick  \n│❒ .popoci  \n│❒ .sponsbob  \n│❒ .kawan-sponsbob  \n│❒ .awoawo  \n│❒ .chat  \n│❒ .benedict  \n│❒ .dbfly  \n│❒ .dino-kuning  \n│❒ .doge  \n│❒ .gojosatoru  \n│❒ .hope-boy  \n│❒ .jisoo  \n│❒ .kr-robot  \n│❒ .kucing   \n│❒ .lonte  \n│❒ .manusia_lidi  \n│❒ .menjamet  \n│❒ .meow  \n│❒ .nicholas  \n│❒ .tyni  \n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.stickermenu = (p30, p31) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *STICKER MENU* 」 \n│\n│❒ .sticker  \n│❒ .toimage  \n│❒ .pinterest  \n│❒ .ttp   < text >\n│❒ .smeme\n│❒ .attp < text >\n│❒ .emojimix\n│❒ .wm < text >\n│❒ .qc < text >\n│❒ .snobg\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.menfessmenu = (p32, p33) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *Anonymous MENU* 」 \n│\n│❒ .menfess\n│❒ .balasmenfess\n│❒ .stopmenfess\n│❒ .tolakmenfess\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.aimenu = (p34, p35) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *Ai Menu* 」 \n│\n│❒ .ai < text >\n│❒ .chatgpt < text >\n│❒ .gemini < text >\n│❒ .gpt < text >\n│❒ .ai2 < text >\n│❒ .chatgpt2 < text >\n│❒ .aiimg < text >\n│❒ .bingimg\n│❒ .bingai\n│❒ .simi < text >\n│❒ .turbo < text >\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.gamesmenu = (p36, p37) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *GAMES MENU* 」 \n│\n│❒ .tebakkata  \n│❒ .tebakgambar  \n│❒ .tebakbendera  \n│❒ .caklontong  \n│❒ .susunkata  \n│❒ .tebakkalimat  \n│❒ .jodohku\n│❒ .jadian\n│❒ .halah\n│❒ .hilih\n│❒ .huluh\n│❒ .heleh\n│❒ .holoh\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.cecanmenu = (p38, p39) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *CECAN MENU* 」 \n│\n│❒ .china\n│❒ .indonesia\n│❒ .malaysia\n│❒ .thailand\n│❒ .korea\n│❒ .japan\n│❒ .vietnam\n│❒ .jenni\n│❒ .jiiso\n│❒ .lisa\n│❒ .rose\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.nsfwmenu = (p40, p41) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *NSFW MENU* 」\n│\n│❒ .cry\n│❒ .kill\n│❒ .hug\n│❒ .pat\n│❒ .lick\n│❒ .kiss\n│❒ .bite\n│❒ .yeet\n│❒ .neko\n│❒ .bully\n│❒ .bonk\n│❒ .wink\n│❒ .poke\n│❒ .nom\n│❒ .slap\n│❒ .smile\n│❒ .awoo\n│❒ .wave\n│❒ .blush\n│❒ .smug\n│❒ .glomp\n│❒ .happy\n│❒ .dance\n│❒ .cringe\n│❒ .cuddle\n│❒ .highfive\n│❒ .shinobu\n│❒ .megumin\n│❒ .handhold\n│❒ .loli-waifu\n│❒ .hentaivid\n│❒ .trap\n│❒ .hentai-neko\n│❒ .gasm\n│❒ .hentai-waifu\n│❒ .milf\n│❒ .ahegao\n│❒ .bdsm\n│❒ .ass\n│❒ .blowjob\n│❒ .cuckold\n│❒ .eba\n│❒ .cum\n│❒ .ero\n│❒ .foot\n│❒ .femdom\n│❒ .glasses\n│❒ .gangbang\n│❒ .hentai\n│❒ .jahy\n│❒ .manga\n│❒ .masturbation\n│❒ .neko-hentai\n│❒ .nsfwloli\n│❒ .neko-hentai2\n│❒ .orgy\n│❒ .panties\n│❒ .pussy\n│❒ .thights\n│❒ .tentacles\n│❒ .yuri\n│❒ .zettai\n│❒ .gifblowjob\n│❒ .gifhentai\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.coganmenu = (p42, p43) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *COGAN MENU* 」 \n│\n│❒ .wuyifan\n│❒ .suga\n│❒ .parkchanyeol\n│❒ .ohsehun\n│❒ .luhan\n│❒ .kimtaehyung\n│❒ .kimseok\n│❒ .kimnanjoon\n│❒ .kimminseok\n│❒ .kimjunmyeon\n│❒ .kimjong\n│❒ .kimjondae\n│❒ .jungkook\n│❒ .jimin\n│❒ .jhope\n│❒ .huangzitao\n│❒ .dohkyungsoo\n│❒ .baekhyung\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.logomenu = (p44, p45) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *LOGO MENU* 」\n│\n│❒ .horror\n│❒ .game8bit\n│❒ .layered\n│❒ .glitch2\n│❒ .cool-graffiti\n│❒ .cool-wall-graffiti\n│❒ .realistic\n│❒ .space3d\n│❒ .glitch-tiktok\n│❒ .stone\n│❒ .marvel\n│❒ .marvel2\n│❒ .metal-rose-gold\n│❒ .pornhub\n│❒ .avengers\n│❒ .metal-rainbow\n│❒ .metal-gold\n│❒ .metal-galaxy\n│❒ .lion\n│❒ .wolf-black-white\n│❒ .wolf-galaxy\n│❒ .ninja\n│❒ .3dsteel\n│❒ .horror2\n│❒ .lava\n│❒ .bagel\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.cerpenmenu = (p46, p47) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *CERPEN MENU* 」 \n│\n│❒ .cerpen-anak\n│❒ .cerpen-bahasadaerah\n│❒ .cerpen-bahasainggris\n│❒ .cerpen-bahasajawa\n│❒ .cerpen-bahasasunda\n│❒ .cerpen-budaya\n│❒ .cerpen-cinta\n│❒ .cerpen-cintaislami\n│❒ .cerpen-cintapertama\n│❒ .cerpen-cintaromantis\n│❒ .cerpen-cintasedih\n│❒ .cerpen-cintasegitiga\n│❒ .cerpen-cintasejati\n│❒ .cerpen-galau\n│❒ .cerpen-gokil\n│❒ .cerpen-inspiratif\n│❒ .cerpen-jepang\n│❒ .cerpen-kehidupan\n│❒ .cerpen-keluarga\n│❒ .cerpen-kisahnyata\n│❒ .cerpen-korea\n│❒ .cerpen-kristen\n│❒ .cerpen-liburan\n│❒ .cerpen-malaysia\n│❒ .cerpen-mengharukan\n│❒ .cerpen-misteri\n│❒ .cerpen-motivasi\n│❒ .cerpen-nasihat\n│❒ .cerpen-nasionalisme\n│❒ .cerpen-olahraga\n│❒ .cerpen-patahhati\n│❒ .cerpen-penantian\n│❒ .cerpen-pendidikan\n│❒ .cerpen-pengalaman\n│❒ .cerpen-pengorbanan\n│❒ .cerpen-penyesalan\n│❒ .cerpen-perjuangan\n│❒ .cerpen-perpisahan\n│❒ .cerpen-persahabatan\n│❒ .cerpen-petualangan\n│❒ .cerpen-ramadhan\n│❒ .cerpen-remaja\n│❒ .cerpen-rindu\n│❒ .cerpen-rohani\n│❒ .cerpen-romantis\n│❒ .cerpen-sastra\n│❒ .cerpen-sedih\n│❒ .cerpen-sejarah\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.primbonmenu = (p48, p49) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *PRIMBON MENU* 」\n│\n│❒ .nomorhoki\n│❒ .artimimpi\n│❒ .ramalanjodoh\n│❒ .ramalanjodohbali\n│❒ .suamiistri\n│❒ .ramalancinta\n│❒ .artinama\n│❒ .cocoknama\n│❒ .pasangan\n│❒ .jadiannikah\n│❒ .sifatusaha\n│❒ .rejeki\n│❒ .pekerjaan\n│❒ .ramalnasib\n│❒ .penyakit\n│❒ .artitarot\n│❒ .fengshui\n│❒ .haribaik\n│❒ .harisangar\n│❒ .harisial\n│❒ .harinaga\n│❒ .arahrejeki\n│❒ .peruntungan\n│❒ .weton\n│❒ .sifat\n│❒ .keberuntungan\n│❒ .memancing\n│❒ .masasubur\n│❒ .shio\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.funmenu = (p50, p51) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *FUN MENU* 」 \n│\n│❒ .memek\n│❒ .bego\n│❒ .goblok\n│❒ .janda\n│❒ .perawan\n│❒ .babi\n│❒ .tolol\n│❒ .pinter\n│❒ .pintar\n│❒ .asu\n│❒ .bodoh\n│❒ .gay\n│❒ .lesby\n│❒ .bajingan\n│❒ .jancok\n│❒ .anjing\n│❒ .ngentod\n│❒ .ngentot\n│❒ .monyet\n│❒ .mastah\n│❒ .newbie\n│❒ .bangsat\n│❒ .bangke\n│❒ .sange\n│❒ .sangean\n│❒ .dakjal\n│❒ .horny\n│❒ .wibu\n│❒ .puki\n│❒ .pantex\n│❒ .pantek\n│❒ .setan\n│❒ .iblis\n│❒ .cacat\n│❒ .yatim\n│❒ .piatu\n│❒ .checkme\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.photoxymenu = (p52, p53) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *PHOTOXY MENU* 」\n│\n│❒ .shadow\n│❒ .write\n│❒ .romantic\n│❒ .burnpaper\n│❒ .smoke\n│❒ .narutobanner\n│❒ .love\n│❒ .undergrass\n│❒ .doublelove\n│❒ .coffecup\n│❒ .underwaterocean\n│❒ .smokyneon\n│❒ .starstext\n│❒ .rainboweffect\n│❒ .balloontext\n│❒ .metalliceffect\n│❒ .embroiderytext\n│❒ .flamingtext\n│❒ .stonetext\n│❒ .writeart\n│❒ .summertext\n│❒ .wolfmetaltext\n│❒ .nature3dtext\n│❒ .rosestext\n│❒ .naturetypography\n│❒ .quotesunder\n│❒ .shinetext\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.soundmenu = (p54, p55) => {
  return "Selamat " + v + "\nAda Yang Bisa " + namabot + " Bantu ?\nRuntime : ⏳ " + vF2(process.uptime()) + "\nJAM : " + v2 + "\n\n╭─❒ 「 *SOUND MENU* 」 \n│\n│❒ .sound1\n│❒ .sound2\n│❒ .sound3\n│❒ .sound4\n│❒ .sound5\n│❒ .sound6\n│❒ .sound7\n│❒ .sound8\n│❒ .sound9\n│❒ .sound10\n│❒ .sound11\n│❒ .sound12\n│❒ .sound13\n│❒ .sound14\n│❒ .sound15\n│❒ .sound16\n│❒ .sound17\n│❒ .sound18\n│❒ .sound19\n│❒ .sound20\n│❒ .sound21\n│❒ .sound22\n│❒ .sound23\n│❒ .sound24\n│❒ .sound25\n│❒ .sound26\n│❒ .sound27\n│❒ .sound28\n│❒ .sound29\n│❒ .sound30\n│❒ .sound31\n│❒ .sound32\n│❒ .sound33\n│❒ .sound34\n│❒ .sound35\n│❒ .sound36\n│❒ .sound37\n│❒ .sound38\n│❒ .sound39\n│❒ .sound40\n│❒ .sound41\n│❒ .sound42\n│❒ .sound43\n│❒ .sound44\n│❒ .sound45\n│❒ .sound46\n│❒ .sound47\n│❒ .sound48\n│❒ .sound49\n│❒ .sound50\n│❒ .sound51\n│❒ .sound52\n│❒ .sound53\n│❒ .sound54\n│❒ .sound55\n│❒ .sound56\n│❒ .sound57\n│❒ .sound58\n│❒ .sound59\n│❒ .sound60\n│❒ .sound61\n│❒ .sound62\n│❒ .sound63\n│❒ .sound64\n│❒ .sound65\n│❒ .sound66\n│❒ .sound67\n│❒ .sound68\n│❒ .sound69\n│❒ .sound70\n│❒ .sound71\n│❒ .sound72\n│❒ .sound73\n│❒ .sound74\n│❒ .sound75\n│❒ .sound76\n│❒ .sound77\n│❒ .sound78\n│❒ .sound79\n│❒ .sound80\n│❒ .sound81\n│❒ .sound82\n│❒ .sound83\n│❒ .sound84\n│❒ .sound85\n│❒ .sound86\n│❒ .sound87\n│❒ .sound88\n│❒ .sound89\n│❒ .sound90\n│❒ .sound91\n│❒ .sound92\n│❒ .sound93\n│❒ .sound94\n│❒ .sound95\n│❒ .sound96\n│❒ .sound97\n│❒ .sound98\n│❒ .sound99\n│❒ .sound100\n│\n╰❒\n\n© " + namaowner + " 2024\n";
};
global.tqtomenu = (p56, p57) => {
  return (
    "Selamat " +
    v +
    "\nAda Yang Bisa " +
    namabot +
    " Bantu?\nRuntime: ⏳ " +
    vF2(process.uptime()) +
    "\nJAM: " +
    v2 +
    "\n\n╭─❒ 「 *THANKS TO* 」 \n│\n" +
    "│ Allah Swt.\n" +
    "│ Ikky\n" +
    "│ VSL\n" +
    "╰❒\n\n" +
    "© " +
    namaowner +
    " 2024\n"
  );
};

global.fakelink = "V.S.L.xyz";
global.linkgcnya = "https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs";
let v17 = require.resolve(__filename);
fs2.watchFile(v17, () => {
  fs2.unwatchFile(v17);
  console.log(chalk2.redBright("Update " + __filename));
  delete require.cache[v17];
  require(v17);
});