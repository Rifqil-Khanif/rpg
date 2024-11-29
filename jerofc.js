'use strick';

process.on("uncaughtException", console.error);
require("./settings");
require("./menunya");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
  MessageType,
  WAMessageContent,
  WAMessageKey,
  AnyMessageContent,
  fetchLatestWaWebVersion,
  fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys");
const fs2 = require("fs");
const os2 = require("os");
const util2 = require("util");
const chalk2 = require("chalk");
const axios2 = require("axios");
const cheerio2 = require("cheerio");
const momentTimezone = require("moment-timezone");
const ms2 = require("ms");
const parseMs = require("parse-ms");
const nodeVm = require("node:vm");
const {
  Configuration,
  OpenAIApi
} = require("openai");
const formData = require("form-data");
const ms3 = require("ms");
const {
  fromBuffer
} = require("file-type");
const RANDOMSCRAPERScraper = require("./RANDOM/SCRAPER/scraper");
const {
  fetchBuffer
} = require("./lib/myfunc2");
const nodeFetch = require("node-fetch");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const fsExtra = require("fs-extra");
const {
  uptotelegra
} = require("./lib/upload");
const {
  Primbon
} = require("scrape-primbon");
const v = new Primbon();
const crypto2 = require("crypto");
const hxzApi = require("hxz-api");
const RANDOMSCRAPERPhotooxy = require("./RANDOM/SCRAPER/photooxy");
const performanceNow = require("performance-now");
const request2 = require("request");
const qs2 = require("qs");
const https2 = require("https");
const awesomePhonenumber = require("awesome-phonenumber");
const path2 = require("path");
const jimp2 = require("jimp");
const child_process = require("child_process");
const {
  promisify
} = require("util");
const {
  sizeFormatter
} = require("human-readable");
const fluentFfmpeg = require("fluent-ffmpeg");
const {
  formatp,
  formatDate,
  getTime,
  clockString,
  logic,
  generateProfilePicture,
  parseMention,
  makeid
} = require("./lib/myfunc");
let vSizeFormatter = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (p, p2) => p + " " + p2 + "B"
});
const {
  FajarNews,
  BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme,
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");
const {
  UploadImg,
  UploadFileUgu
} = require("./lib/uploader");
const {
  jadibot,
  alphas
} = require("./RANDOM/JADIBOT/jadibot");
let v2 = JSON.parse(fs2.readFileSync("./database/afk.json"));
const libAfk = require("./lib/afk");
const {
  stalkml
} = require("./RANDOM/STALKER/stalk-ml");
const RANDOMSTALKERNpmstalk = require("./RANDOM/STALKER/npmstalk");
const RANDOMSTALKERGithubstalk = require("./RANDOM/STALKER/githubstalk");
const {
  cerpen
} = require("./RANDOM/CERPEN/cerpen");
const {
  uploadImage
} = require("./lib/uploadImage");
const {
  getBannedData,
  saveBannedData,
  getRemainingTime,
  banUser,
  unbanUser,
  isUserBanned
} = require("./lib/banned");
let v3 = [];
let v4 = [];
const v5 = {};
const v6 = {};
const v7 = {};
const v8 = {};
const v9 = {};
const v10 = {};
const v11 = {};
const v12 = {};
const v13 = {};
const v14 = {};
const v15 = {};
const v16 = {};
const v17 = {};
const v18 = {};
const similarity2 = require("similarity");
const v19 = 0.72;
const vF = p3 => {
  return " " + p3 + " \n\nJawaban Benar \nSelamat Kamu Ga Dapet Apa-Apa🗿";
};
const vF2 = p4 => {
  return "Waktu Habis\nJawaban:  " + p4;
};
const vF3 = function (p5) {
  p5 = Number(p5);
  var v20 = Math.floor(p5 / 86400);
  var v21 = Math.floor(p5 % 86400 / 3600);
  var v22 = Math.floor(p5 % 3600 / 60);
  var v23 = Math.floor(p5 % 60);
  var v24 = v20 > 0 ? v20 + (v20 == 1 ? " day, " : " days, ") : "";
  var v25 = v21 > 0 ? v21 + (v21 == 1 ? " hour, " : " hours, ") : "";
  var v26 = v22 > 0 ? v22 + (v22 == 1 ? " minute, " : " minutes, ") : "";
  var v27 = v23 > 0 ? v23 + (v23 == 1 ? " second" : " seconds") : "";
  return v24 + v25 + v26 + v27;
};
async function f() {
  let v28 = 0;
  let v29 = 0;
  for (let v30 of await require("node-os-utils").netstat.stats()) {
    v28 += parseInt(v30.inputBytes);
    v29 += parseInt(v30.outputBytes);
  }
  return {
    download: vSizeFormatter(v28),
    upload: vSizeFormatter(v29)
  };
}
const vF4 = p6 => {
  return Math.floor(p6);
};
this.game = this.game ? this.game : {};
let v31 = Object.values(this.game).find(p7 => p7.id && p7.game && p7.state && p7.id.startsWith("tictactoe") && [p7.game.playerX, p7.game.playerO].includes(m.sender) && p7.state == "PLAYING");
if (v31) {
  let v32;
  let v33 = !1;
  let v34 = !1;
  let v35 = !1;
  if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) {
    return;
  }
  v35 = !/^[1-9]$/.test(m.text);
  if (m.sender !== v31.game.currentTurn) {
    if (!v35) {
      return !0;
    }
  }
  if (!v35 && (v32 = v31.game.turn(m.sender === v31.game.playerO, parseInt(m.text) - 1)) < 1) {
    reply({
      "-3": "Game telah berakhir",
      "-2": "Invalid",
      "-1": "Posisi Invalid",
      0: "Posisi Invalid"
    }[v32]);
    return !0;
  }
  if (m.sender === v31.game.winner) {
    v33 = true;
  } else if (v31.game.board === 511) {
    v34 = true;
  }
  let v36 = v31.game.render().map(p8 => {
    return {
      X: "",
      O: "",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9"
    }[p8];
  });
  if (v35) {
    v31.game._currentTurn = m.sender === v31.game.playerX;
    v33 = true;
  }
  let v37 = v35 ? v31.game.currentTurn : v31.game.winner;
  let v38 = "Room ID: " + v31.id + "\n\n" + v36.slice(0, 3).join("") + "\n" + v36.slice(3, 6).join("") + "\n" + v36.slice(6).join("") + "\n\n" + (v33 ? "@" + v37.split("@")[0] + " Menang!" : v34 ? "Game berakhir" : "Giliran " + ["", ""][v31.game._currentTurn * 1] + " (@" + v31.game.currentTurn.split("@")[0] + ")") + "\n: @" + v31.game.playerX.split("@")[0] + "\n: @" + v31.game.playerO.split("@")[0] + "\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan";
  if ((v31.game._currentTurn ^ v35 ? v31.x : v31.o) !== m.chat) {
    v31[v31.game._currentTurn ^ v35 ? "x" : "o"] = m.chat;
  }
  if (v31.x !== v31.o) {
    alpha.sendText(v31.x, v38, m, {
      mentions: parseMention(v38)
    });
  }
  alpha.sendText(v31.o, v38, m, {
    mentions: parseMention(v38)
  });
  if (v34 || v33) {
    delete this.game[v31.id];
  }
}
let v39 = JSON.parse(fs2.readFileSync("./database/set_bot.json"));
const {
  smsg,
  fetchJson,
  getBuffer
} = require("./lib/simple");
const {
  updateResponList,
  delResponList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
  addSetClose,
  removeSetClose,
  changeSetClose,
  getTextSetClose,
  isSetDone,
  addSetDone,
  removeSetDone,
  changeSetDone,
  getTextSetDone,
  isSetLeft,
  addSetLeft,
  removeSetLeft,
  changeSetLeft,
  getTextSetLeft,
  isSetOpen,
  addSetOpen,
  removeSetOpen,
  changeSetOpen,
  getTextSetOpen,
  isSetProses,
  addSetProses,
  removeSetProses,
  changeSetProses,
  getTextSetProses,
  isSetWelcome,
  addSetWelcome,
  removeSetWelcome,
  changeSetWelcome,
  getTextSetWelcome,
  addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  expiredCheck,
  checkSewaGroup,
  addPay,
  getTextSetBot,
  isSetBot,
  addSetBot,
  removeSetBot,
  changeSetBot,
  updatePay,
  renameList,
  updateSewaDatabase,
  extendSewaGroup
} = require("./lib/store");
async function f2(p9) {
  let v40 = [];
  for (let v41 of p9) {
    if (v41.admin === "superadmin") {
      v40.push(v41.id);
    } else if (v41.admin === "admin") {
      v40.push(v41.id);
    } else {
      "";
    }
  }
  return v40 || [];
}
const libPremium = require("./lib/premium");
const libPanel = require("./lib/panel");
let v42 = JSON.parse(fs2.readFileSync("./database/premium.json"));
let v43 = JSON.parse(fs2.readFileSync("./database/expired.json"));
let v44 = JSON.parse(fs2.readFileSync("./database/antilinkall.json"));
let v45 = JSON.parse(fs2.readFileSync("./database/nsfw.json"));
const v46 = JSON.parse(fs2.readFileSync("./database/mute.json"));
const v47 = JSON.parse(fs2.readFileSync("./database/vnadd.json"));
const v48 = JSON.parse(fs2.readFileSync("./database/docu.json"));
const v49 = JSON.parse(fs2.readFileSync("./database/zip.json"));
const v50 = JSON.parse(fs2.readFileSync("./database/apk.json"));
let v51 = [];
if (fs2.existsSync("./database/banned.json")) {
  v51 = JSON.parse(fs2.readFileSync("./database/banned.json"));
}
const v52 = JSON.parse(fs2.readFileSync("./database/grubonly.json"));
let v53 = JSON.parse(fs2.readFileSync("./database/antilink.json"));
let v54 = JSON.parse(fs2.readFileSync("./database/registered.json"));
let v55 = JSON.parse(fs2.readFileSync("./database/antilinkallv2.json"));
let v56 = JSON.parse(fs2.readFileSync("./database/antilinkch.json"));
let v57 = JSON.parse(fs2.readFileSync("./database/antilinkch2.json"));
let v58 = 100;
const v59 = ["", "", ""];
const v60 = "\n";
function f3(p10, p11) {
  let v61 = new Date(p10 + " " + p11 + ", 2023 00:00:00").getTime();
  let v62 = Date.now();
  let v63 = v61 - v62;
  let v64 = Math.floor(v63 / 86400000);
  let v65 = Math.floor(v63 % 86400000 / 3600000);
  let v66 = Math.floor(v63 % 3600000 / 60000);
  let v67 = Math.floor(v63 % 60000 / 1000);
  return v64 + "Hari " + v65 + "Jam " + v66 + "Menit " + v67 + "Detik";
}
function f4(p12) {
  temp = p12;
  days = Math.floor(p12 / 86400000);
  daysms = p12 % 86400000;
  hours = Math.floor(daysms / 3600000);
  hoursms = p12 % 3600000;
  minutes = Math.floor(hoursms / 60000);
  minutesms = p12 % 60000;
  sec = Math.floor(minutesms / 1000);
  return days + " Days " + hours + " Hours " + minutes + " Minutes";
}
const vF5 = p13 => {
  return p13.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
};
const vF6 = async p14 => {
  return new Promise(p15 => setTimeout(p15, p14));
};
const vF7 = p16 => {
  return "" + Math.floor(Math.random() * 10000) + p16;
};
const vF8 = p17 => {
  return JSON.stringify(p17, null, 2);
};
const vF9 = () => {
  let v68 = fs2.readFileSync("./jerofc.js").toString();
  let v69 = (v68.match(/case '/g) || []).length;
  return v69;
};
async function f5(p18, p19 = {}) {
  const {
    ext: _0x5694ca
  } = (await fromBuffer(p18)) || p19.ext;
  var v70 = new formData();
  v70.append("file", p18, "tmp." + _0x5694ca);
  let v71 = await nodeFetch("https://tenaja.zeeoneofc.repl.co/upload", {
    method: "POST",
    body: v70
  }).then(p20 => p20.json());
  return v71;
}
const vF10 = p21 => {
  myMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum’at", "Sabtu"];
  var v72 = new Date(p21);
  var v73 = v72.getDate();
  bulan = v72.getMonth();
  var v75 = v72.getDay();
  var v75 = myDays[v75];
  var v76 = v72.getYear();
  var v77 = v76 < 1000 ? v76 + 1900 : v76;
  const v78 = momentTimezone.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
  let v79 = new Date();
  let v80 = "id";
  let v81 = new Date(0).getTime() - new Date("1 January 1970").getTime();
  let v82 = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((v79 * 1 + v81) / 84600000) % 5];
  return v75 + ", " + v73 + " - " + myMonths[bulan] + " - " + v77;
};
module.exports = alpha = async (p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40) => {
  try {
    var v83 = p23.mtype === "conversation" ? p23.message.conversation : p23.mtype == "imageMessage" ? p23.message.imageMessage.caption : p23.mtype == "videoMessage" ? p23.message.videoMessage.caption : p23.mtype == "extendedTextMessage" ? p23.message.extendedTextMessage.text : p23.mtype == "buttonsResponseMessage" && p23.message.buttonsResponseMessage.selectedButtonId ? p23.message.buttonsResponseMessage.selectedButtonId : p23.mtype == "listResponseMessage" && p23.message.listResponseMessage.singleSelectReply.selectedRowId ? p23.message.listResponseMessage.singleSelectReply.selectedRowId : p23.mtype == "templateButtonReplyMessage" && p23.message.templateButtonReplyMessage.selectedId ? p23.message.templateButtonReplyMessage.selectedId : p23.mtype == "interactiveResponseMessage" && JSON.parse(p23.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(p23.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : p23.mtype == "messageContextInfo" ? p23.message.buttonsResponseMessage?.selectedButtonId || p23.message.listResponseMessage?.singleSelectReply.selectedRowId || p23.text : "";
    var v84 = typeof p23.text == "string" ? p23.text : "";
    const v85 = /^[���׶������_=|~!?#/$%^&.+-,\\\�^]/.test(v83);
    const v86 = v85 ? v84[0] : "";
    const v87 = v85 ? v83.slice(1).trim().split(" ").shift().toLowerCase() : "";
    const v88 = v83.replace(v86, "").trim().split(/ +/).shift().toLowerCase();
    const v89 = v83.trim().split(/ +/).slice(1);
    const v90 = p23.pushName || "No Name";
    const v91 = await p22.decodeJid(p22.user.id);
    const v92 = ["6283852406727@s.whatsapp.net", v91, ...global.owner].map(p41 => p41.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(p23.sender);
    const v93 = ["6283852406727@s.whatsapp.net", v91, ...global.seller].map(p42 => p42.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(p23.sender);
    const v94 = q = v89.join(" ");
    const v95 = momentTimezone(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const v96 = p23.quoted ? p23.quoted : p23;
    const v97 = (v96.msg || v96).mimetype || "";
    const v98 = /image|video|sticker|audio/.test(v97);
    const v99 = p23.isGroup ? await p22.groupMetadata(p23.chat) : "";
    const v100 = p23.isGroup ? await v99.participants : "";
    const v101 = p23.key.remoteJid;
    const v102 = p23.isGroup ? v44.includes(v101) : false;
    const v103 = p23.isGroup ? v45.includes(v101) : false;
    const v104 = p23.isGroup ? await f2(v100) : "";
    const v105 = libPremium.checkPremiumUser(p23.sender, v42);
    const v106 = libPanel.checkPremiumUser(p23.sender, v43);
    const v107 = v83.slice(0).trim().split(/ +/).shift().toLowerCase();
    const v108 = p23.isGroup ? v104.includes(v91) : false;
    const v109 = p23.isGroup ? v104.includes(p23.sender) : false;
    const vCheckSewaGroup = checkSewaGroup(p23.chat, p37);
    const v110 = p27.includes(p23.chat) ? true : false;
    const v111 = p28.includes(p23.chat) ? true : false;
    const v112 = p29.includes(p23.chat) ? true : false;
    const v113 = v55.includes(p23.chat) ? true : false;
    const v114 = v56.includes(p23.chat) ? true : false;
    const v115 = v57.includes(p23.chat) ? true : false;
    const v116 = p30.includes(p23.chat) ? true : false;
    const v117 = p38.includes(p23.chat);
    const v118 = p39.includes(p23.chat);
    const v119 = v46.includes(p23.chat) ? true : false;
    const v120 = v52.includes(p23.chat) ? true : false;
    const v121 = v53.includes(v101) ? true : false;
    const v122 = [...new Set([...(p23.mentionedJid || []), ...(p23.quoted ? [p23.quoted.sender] : [])])];
    const v123 = libAfk.checkAfkUser(p23.sender, v2);
    const v124 = p23.quoted ? "true" : "false";
    const v125 = p23.isGroup ? v99.subject : "";
    const v126 = v51.includes(p23.sender);
    const vF11 = async p43 => {
      return await p22.sendFakeLink(p23.chat, p43, v95, v90, p23);
    };
    const v127 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        ...(v101 ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      message: {
        contactMessage: {
          displayName: "V.S.L\n",
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;alphaBot,;;;\nFN:" + v90 + ",\nitem1.TEL;waid=" + p23.sender.split("@")[0] + ":" + p23.sender.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://telegra.ph/file/33e79ab21ec0446cc3e4f.jpg"
          }
        }
      }
    };
    function f6(p44 = "") {
      return [...p44.matchAll(/@([0-9]{5,16}|0)/g)].map(p45 => p45[1] + "@s.whatsapp.net");
    }
    async function f7(p46) {
      try {
        let v128 = await p22.groupMetadata(p46);
        return v128.subject;
      } catch (_0x291c6f) {
        return "-";
      }
    }
    if (p23.message && !p23.key.fromMe) {
      console.log(chalk2.black(chalk2.bgWhite("[ PESAN ]")), chalk2.black(chalk2.bgGreen(new Date())), chalk2.black(chalk2.bgBlue(v84 || p23.mtype)) + "\n" + chalk2.magenta("=> From"), chalk2.green(v90), chalk2.yellow(p23.sender) + "\n" + chalk2.blueBright("=> In"), chalk2.green(p23.isGroup ? v90 : "Chat Pribadi", p23.chat));
    }
    if (p23.isGroup) {
      expiredCheck(p22, p37);
    }
    function f8(p47) {
      return p47[Math.floor(Math.random() * p47.length)];
    }
    const v129 = momentTimezone(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
    const v130 = momentTimezone(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
    const v131 = momentTimezone(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
    const v132 = momentTimezone.tz("Asia/Kolkata").format("DD/MM/YYYY");
    if (global.autoTyping) {
      if (p23.chat) {
        p22.sendPresenceUpdate("composing", p23.chat);
        await vF6(1000);
      }
    }
    if (v87) {
      if (p23.isGroup && v119 && !v109 && !v92) {
        return;
      }
    }
    try {
      ppuser = await p22.profilePictureUrl(p23.sender, "image");
    } catch {
      ppuser = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
    }
    let v133 = await getBuffer(ppuser);
    if (!p23.isGroup && !v92 && global.onlygrub2) {
      return;
    }
    if (!v92 && global.onlypc && p23.isGroup) {
      return vF11("Halo Kak, Jika Mau Gunakan Bot Ini Silahkan Chat Ke Pribadi Bot");
    }
    if (fs2.existsSync("./database/casino/" + p23.chat + ".json")) {
      var vSetCasino2 = setCasino("" + p23.chat);
      if (p23.sender == "" + vSetCasino2.Y && v84.toLowerCase() == "n") {
        p22.sendMessage(p23.chat, {
          text: " Game Casino Rejected \n\n� @" + vSetCasino2.Y.split("@")[0] + " Membatalkan Game",
          mentions: [vSetCasino2.Y]
        }, {
          quoted: p23
        });
        deleteCasino(p23.chat);
      }
      if (p23.sender == "" + vSetCasino2.Y && v84.toLowerCase() == "y") {
        var vRandomNomor = randomNomor(10, 20);
        var vRandomNomor2 = randomNomor(10, 20);
        if (vRandomNomor > vRandomNomor2) {
          v752 = " Casino Game \n\n� @" + vSetCasino2.Z + " --> " + vRandomNomor + " \n� @" + vSetCasino2.Y.split("@")[0] + " --> " + vRandomNomor2 + " \n\nPemenangnya adalah [ @" + vSetCasino2.Z + " ]\nMendapatkan: $ " + vF4(vSetCasino2.nominal);
          p22.sendMessage(p23.chat, {
            text: v752,
            mentions: [vSetCasino2.Z + "@s.whatsapp.net", vSetCasino2.Y]
          }, {
            quoted: p23
          });
          addBalance(vSetCasino2.Z + "@s.whatsapp.net", vF4(vSetCasino2.nominal), balance);
          kurangBalance("" + vSetCasino2.Y, vF4(vSetCasino2.nominal), balance);
          deleteCasino(p23.chat);
        } else if (vRandomNomor < vRandomNomor2) {
          v752 = " Casino Game \n\n� @" + vSetCasino2.Z + " --> " + vRandomNomor + " \n� @" + vSetCasino2.Y.split("@")[0] + " --> " + vRandomNomor2 + " \n\nPemenangnya adalah [ @" + vSetCasino2.Y.split("@")[0] + " ]\nMendapatkan: $ " + vF4(vSetCasino2.nominal);
          p22.sendMessage(p23.chat, {
            text: v752,
            mentions: [vSetCasino2.Z + "@s.whatsapp.net", vSetCasino2.Y]
          }, {
            quoted: p23
          });
          addBalance("" + vSetCasino2.Y, vF4(vSetCasino2.nominal), balance);
          kurangBalance(vSetCasino2.Z + "@s.whatsapp.net", vF4(vSetCasino2.nominal), balance);
          deleteCasino(p23.chat);
        } else if (vRandomNomor = vRandomNomor2) {
          v752 = " Casino Game \n\n� @" + vSetCasino2.Z + " --> " + vRandomNomor + " \n� @" + vSetCasino2.Y.split("@")[0] + " --> " + vRandomNomor2 + " \n\nGames Draw, Tidak Ada Pemenang";
          p22.sendMessage(p23.chat, {
            text: v752,
            mentions: [vSetCasino2.Z + "@s.whatsapp.net", vSetCasino2.Y]
          }, {
            quoted: p23
          });
          deleteCasino(p23.chat);
        }
      }
    }
    const vF12 = p48 => {
      p22.sendMessage(v101, {
        document: p48,
        mimetype: "application/vnd.android.package-archive"
      }, {
        quoted: p23
      });
      vF11("Rusak Bodoh !! Yang Bener Contoh : Yoapk DIN WA");
    };
    for (let v134 of v50) {
      if (v84.ikalii) {
        let v135 = fs2.readFileSync("./database/apk/" + v134 + ".apk");
        vF12(v135);
      }
    }
    const vF13 = p49 => {
      p22.sendMessage(v101, {
        document: p49,
        mimetype: "application/zip"
      }, {
        quoted: p23
      });
      vF11("Rusak Bodoh !! Yang Bener Contoh : Yozip DIN WA");
    };
    for (let v136 of v49) {
      if (v84.ikali) {
        let v137 = fs2.readFileSync("./database/zip/" + v136 + ".zip");
        vF13(v137);
      }
    }
    let v138 = require("@whiskeysockets/baileys").proto.Message.ReactionMessage.create({
      key: p23.key,
      text: ""
    });
    const vF14 = p50 => {
      p22.sendMessage(v101, {
        document: p50,
        mimetype: "application/pdf"
      }, {
        quoted: p23
      });
      vF11("Rusak Bodoh !! Yang Bener Contoh : Yopdf  DIN WA");
    };
    for (let v139 of v48) {
      if (v84.ikal) {
        let v140 = fs2.readFileSync("./database/Docu/" + v139 + ".pdf");
        vF14(v140);
      }
    }
    const vF15 = p51 => {
      p22.sendMessage(v101, {
        audio: p51,
        mimetype: "audio/mp4",
        ptt: true
      }, {
        quoted: p23
      });
    };
    const vF16 = async p52 => {
      try {
        const {
          youtubedlMp3: _0x4228ef
        } = require("@bochilteam/scraper");
        let v141 = await _0x4228ef(p52);
        const v142 = v141.audio["128kbps"].download();
        await p22.sendMessage(p23.chat, {
          audio: {
            url: v142
          },
          mimetype: "audio/mp4",
          ptt: true
        }, {
          quoted: p23
        });
      } catch (_0x21e1e0) {
        p23.reply("" + _0x21e1e0);
      }
    };
    if (v110) {
      if (v84.match("chat.whatsapp.com")) {
        vF11("*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !");
        if (!v108) {
          return vF11("Upsss... gajadi, bot bukan admin");
        }
        let v143 = "https://chat.whatsapp.com/" + (await p22.groupInviteCode(p23.chat));
        let v144 = new RegExp(v143, "i");
        let v145 = v144.test(p23.text);
        if (v145) {
          return vF11("Upsss... gak jadi, untung link gc sendiri");
        }
        if (v109) {
          return vF11("Upsss... gak jadi, kasian adminnya klo di kick");
        }
        if (v92) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        if (p23.key.fromMe) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        await p22.sendMessage(p23.chat, {
          delete: {
            remoteJid: p23.chat,
            fromMe: false,
            id: p23.key.id,
            participant: p23.key.participant
          }
        });
        p22.groupParticipantsUpdate(p23.chat, [p23.sender], "remove").then(p53 => p23.reply("Yahaha Mampus Gw kick, Mangkanya Jangan Kirim Link Grub !")).catch(p54 => p23.reply("❎vTerjadi kesalahan"));
      }
    }
    if (v112) {
      if (v84.match("chat.whatsapp.com")) {
        if (!v108) {
          return;
        }
        let v146 = "https://chat.whatsapp.com/" + (await p22.groupInviteCode(p23.chat));
        let v147 = new RegExp(v146, "i");
        let v148 = v147.test(p23.text);
        if (v148) {
          return;
        }
        if (v109) {
          return;
        }
        if (v92) {
          return;
        }
        if (p23.key.fromMe) {
          return;
        }
        await p22.sendMessage(p23.chat, {
          delete: {
            remoteJid: p23.chat,
            fromMe: false,
            id: p23.key.id,
            participant: p23.key.participant
          }
        });
      }
    }
    if (v111) {
      if (v84.match("wa.me/")) {
        vF11("*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !");
        if (!v108) {
          return vF11("Upsss... gajadi, bot bukan admin");
        }
        if (v109) {
          return vF11("Upsss... gak jadi, kasian adminnya klo di kick");
        }
        if (v92) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        if (p23.key.fromMe) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        await p22.sendMessage(p23.chat, {
          delete: {
            remoteJid: p23.chat,
            fromMe: false,
            id: p23.key.id,
            participant: p23.key.participant
          }
        });
        p22.groupParticipantsUpdate(p23.chat, [p23.sender], "remove");
      }
    }
    if (v116) {
      if (v84.match("wa.me/")) {
        if (!v108) {
          return;
        }
        if (v109) {
          return;
        }
        if (v92) {
          return;
        }
        if (p23.key.fromMe) {
          return;
        }
        await p22.sendMessage(p23.chat, {
          delete: {
            remoteJid: p23.chat,
            fromMe: false,
            id: p23.key.id,
            participant: p23.key.participant
          }
        });
      }
    }
    if (v111) {
      if (v84.includes("Wa.me/" || "Wa.me/")) {
        vF11("*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !");
        if (!v108) {
          return vF11("Upsss... gajadi, bot bukan admin");
        }
        if (v109) {
          return vF11("Upsss... gak jadi, kasian adminnya klo di kick");
        }
        if (v92) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        if (p23.key.fromMe) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        p22.groupParticipantsUpdate(p23.chat, [p23.sender], "remove");
      }
    }
    if (isAlreadyResponList(p23.isGroup ? p23.chat : v91, v83.toLowerCase(), p40)) {
      var vGetDataResponList = getDataResponList(p23.isGroup ? p23.chat : v91, v83.toLowerCase(), p40);
      if (vGetDataResponList.isImage === false) {
        p22.sendMessage(p23.chat, {
          text: sendResponList(p23.isGroup ? p23.chat : v91, v83.toLowerCase(), p40)
        }, {
          quoted: p23
        });
      } else {
        p22.sendMessage(p23.chat, {
          image: await getBuffer(vGetDataResponList.image_url),
          caption: vGetDataResponList.response
        }, {
          quoted: p23
        });
      }
    }
    libPremium.expiredCheck(p22, v42);
    libPanel.expiredCheck(p22, v43);
    if (v102) {
      if (v84.includes("https://" || "http://")) {
        vF11("*「 ANTILINK ALL 」*\n\nAntilink All detected, maaf kamu akan di kick !");
        if (!v108) {
          return vF11("Upsss... gajadi, bot bukan admin");
        }
        if (v109) {
          return vF11("Upsss... gak jadi, kasian adminnya klo di kick");
        }
        if (v92) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        if (p23.key.fromMe) {
          return vF11("Upsss... gak jadi, kasian owner ku klo di kick");
        }
        p22.groupParticipantsUpdate(p23.chat, [p23.sender], "remove");
      }
    }
    if (v5.hasOwnProperty(p23.sender.split("@")[0]) && !v85) {
      v4 = true;
      jawaban = v5[p23.sender.split("@")[0]][0];
      hadiah = v5[p23.sender.split("@")[0]][1];
      if (v84.toLowerCase() == jawaban) {
        p22.sendButtonText(p23.chat, [{
          buttonId: ".math medium",
          buttonText: {
            displayText: "Kuis Math"
          },
          type: 1
        }], "  Kuis Matematika\n\nJawaban Benar \n\n+$" + hadiah + " Balance\n\nKirim perintah .math untuk bermain lagi ", namabot, p23);
        await addBalance(p23.sender, hadiah, balance);
        delete v5[p23.sender.split("@")[0]];
      } else {
        vF11(" Jawaban salah");
      }
    }
    if ("family100" + p23.chat in v6 && !v85) {
      v4 = true;
      let v149 = v6["family100" + p23.chat];
      let v150 = v84.toLowerCase().replace(/[^\w\s\-]+/, "");
      let v151 = /^((me)?nyerah|surr?ender)$/i.test(p23.text);
      if (!v151) {
        let v152 = v149.jawaban.findIndex(p55 => p55.toLowerCase().replace(/[^\w\s\-]+/, "") === v150);
        if (v149.terjawab[v152]) {
          return !0;
        }
        v149.terjawab[v152] = p23.sender;
      }
      let v153 = v149.terjawab.length === v149.terjawab.filter(p56 => p56).length;
      let v154 = ("\nJawablah Pertanyaan Berikut :\n" + v149.soal + "\n\n\nTerdapat " + v149.jawaban.length + " Jawaban " + (v149.jawaban.find(p57 => p57.includes(" ")) ? "(beberapa Jawaban Terdapat Spasi)" : "") + "\n" + (v153 ? "Semua Jawaban Terjawab" : v151 ? "Menyerah!" : "") + "\n" + Array.from(v149.jawaban, (p58, p59) => {
        if (v151 || v149.terjawab[p59]) {
          return ("(" + (p59 + 1) + ") " + p58 + " " + (v149.terjawab[p59] ? "@" + v149.terjawab[p59].split("@")[0] : "")).trim();
        } else {
          return false;
        }
      }).filter(p60 => p60).join("\n") + "\n" + (v151 ? "" : "")).trim();
      p22.sendTextWithMentions(p23.chat, v154, p23).then(p61 => {
        return v6["family100" + p23.chat].pesan = mesg;
      }).catch(p62 => p62);
      if (v153 || v151) {
        delete v6["family100" + p23.chat];
      }
    }
    if (v7[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v7[p23.chat][0].key.id) {
        let v155 = JSON.parse(JSON.stringify(v7[p23.chat][1]));
        jawaban = v155.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Tebakgambar", v7[p23.chat][2]) + "\n\nKirim perintah .tebakgambar untuk bermain lagi");
          clearTimeout(v7[p23.chat][3]);
          delete v7[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .tega untuk bantuan dan .ytega untuk menyerah ");
        }
      }
    }
    if (v8[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v8[p23.chat][0].key.id) {
        let v156 = JSON.parse(JSON.stringify(v8[p23.chat][1]));
        jawaban = v156.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Tebak Kata", v8[p23.chat][2]) + "\n\nKirim perintah .tebakkata untuk bermain lagi");
          clearTimeout(v8[p23.chat][3]);
          delete v8[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\n.teka -- _Bantuan_\n.yteka -- _Nyerah_");
        }
      }
    }
    if (v9[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v9[p23.chat][0].key.id) {
        let v157 = JSON.parse(JSON.stringify(v9[p23.chat][1]));
        jawaban = v157.name.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Tebak Bendera", v9[p23.chat][2]) + "\n\nKirim perintah .tebakbendera untuk bermain lagi");
          clearTimeout(v9[p23.chat][3]);
          delete v9[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .tebe untuk bantuan dan .ytebe untuk menyerah ");
        }
      }
    }
    if (v12[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v12[p23.chat][0].key.id) {
        let v158 = JSON.parse(JSON.stringify(v12[p23.chat][1]));
        jawaban = v158.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Cak Lontong", v12[p23.chat][2]) + "\n\nKirim perintah .caklontong untuk bermain lagi");
          clearTimeout(v12[p23.chat][3]);
          delete v12[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .telo untuk bantuan dan .ytelo untuk menyerah");
        }
      }
    }
    if (v13[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v13[p23.chat][0].key.id) {
        let v159 = JSON.parse(JSON.stringify(v13[p23.chat][1]));
        jawaban = v159.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Susun Kata", v13[p23.chat][2]) + "\n\nKirim perintah .susunkata untuk bermain lagi");
          clearTimeout(v13[p23.chat][3]);
          delete v13[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .tesuka untuk bantuan dan .ytesuka untuk menyerah");
        }
      }
    }
    if (v11[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v11[p23.chat][0].key.id) {
        let v160 = JSON.parse(JSON.stringify(v11[p23.chat][1]));
        jawaban = v160.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Tebak Kalimat", v11[p23.chat][2]) + "\n\nKirim perintah .tebakkalimat untuk bermain lagi");
          clearTimeout(v11[p23.chat][3]);
          delete v11[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .tekatu untuk bantuan dan .ytekatu untuk menyerah");
        }
      }
    }
    if (v10[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v10[p23.chat][0].key.id) {
        let v161 = JSON.parse(JSON.stringify(v10[p23.chat][1]));
        jawaban = v161.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Tebak Siapa", v10[p23.chat][2]) + "\n\nKirim perintah .tebaksiapa untuk bermain lagi");
          clearTimeout(v10[p23.chat][3]);
          delete v10[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .tesi untuk bantuan dan .ytesi untuk menyerah");
        }
      }
    }
    if (v14[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v14[p23.chat][0].key.id) {
        let v162 = JSON.parse(JSON.stringify(v14[p23.chat][1]));
        jawaban = v162.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Teka Teki", v14[p23.chat][2]) + "\n\nKirim perintah .tekateki untuk bermain lagi");
          clearTimeout(v14[p23.chat][3]);
          delete v14[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .tete untuk bantuan dan .ytete untuk menyerah");
        }
      }
    }
    if (v16[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v16[p23.chat][0].key.id) {
        let v163 = JSON.parse(JSON.stringify(v16[p23.chat][1]));
        jawaban = v163.unsur.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Teka Kimia", v16[p23.chat][2]) + "\n\nKirim perintah .tebakkimia untuk bermain lagi");
          clearTimeout(v16[p23.chat][3]);
          delete v16[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .teki untuk bantuan dan .yteki untuk menyerah ");
        }
      }
    }
    if (v17[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v17[p23.chat][0].key.id) {
        let v164 = JSON.parse(JSON.stringify(v17[p23.chat][1]));
        jawaban = v164.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Teka Lirik", v17[p23.chat][2]) + "\n\nKirim perintah .tebaklirik untuk bermain lagi ", namabot, p23);
          clearTimeout(v17[p23.chat][3]);
          delete v17[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .teli untuk bantuan dan .yteli untuk menyerah");
        }
      }
    }
    if (v18[p23.chat] && !v85 && p23.quoted) {
      if (p23.quoted.id == v18[p23.chat][0].key.id) {
        let v165 = JSON.parse(JSON.stringify(v18[p23.chat][1]));
        jawaban = v165.jawaban.toLowerCase().trim();
        if (p23.text.toLowerCase() == jawaban) {
          vF11(vF("Teka Tebakan", v18[p23.chat][2]) + "\n\nKirim perintah .tebaktebakan untuk bermain lagi ", namabot, p23);
          clearTimeout(v18[p23.chat][3]);
          delete v18[p23.chat];
        } else if (similarity2(p23.text.toLowerCase(), jawaban) >= v19) {
          vF11("_Ya, Dikit Lagi!_");
        } else {
          vF11("❌ Jawaban salah\n\nKirim perintah .teteb untuk bantuan dan .yteteb untuk menyerah ");
        }
      }
    }
    const v166 = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(v101 ? {
          remoteJid: "6283136505591-1614953337@g.us"
        } : {})
      },
      message: {
        contactMessage: {
          displayName: "" + v90,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;" + v90 + ",;;;\nFN:" + v90 + ",\nitem1.TEL;waid=" + p23.sender.split("@")[0] + ":" + p23.sender.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: pp_bot,
          thumbnail: pp_bot,
          sendEphemeral: true
        }
      }
    };
    const vF17 = async (p63, p64, p65) => {
      return new Promise(async (p66, p67) => {
        let jimp3 = require("jimp");
        var v167 = await jimp3.read(p63);
        var v168 = await v167.resize(p64, p65).getBufferAsync(jimp3.MIME_JPEG);
        p66(v168);
      });
    };
    let v169 = new Intl.DisplayNames(["en"], {
      type: "region"
    });
    if (!p23.key.fromMe && global.autoread) {
      const v170 = {
        remoteJid: p23.chat,
        id: p23.key.id,
        participant: p23.isGroup ? p23.key.participant : undefined
      };
      await p22.readMessages([v170]);
    }
    p22.sendPresenceUpdate("available", p23.chat);
    if (p23.sender.startsWith("212") && global.autoblok212 === true) {
      return p22.updateBlockStatus(p23.sender, "block");
    }
    if (p23.isGroup && !p23.key.fromMe) {
      let v171 = [...new Set([...(p23.mentionedJid || []), ...(p23.quoted ? [p23.quoted.sender] : [])])];
      for (let v172 of v171) {
        if (libAfk.checkAfkUser(v172, v2)) {
          let v173 = libAfk.getAfkId(v172, v2);
          let v174 = libAfk.getAfkReason(v173, v2);
          let v175 = Date.now() - libAfk.getAfkTime(v173, v2);
          let vParseMs = parseMs(v175);
          vF11("Jangan tag, dia sedang afk\n\n*Reason :* " + v174 + "\n*Sejak :* " + vParseMs.hours + " jam, " + vParseMs.minutes + " menit, " + vParseMs.seconds + " detik yg lalu\n");
        }
      }
      if (libAfk.checkAfkUser(p23.sender, v2)) {
        let v176 = libAfk.getAfkId(p23.sender, v2);
        let v177 = libAfk.getAfkReason(v176, v2);
        let v178 = Date.now() - libAfk.getAfkTime(v176, v2);
        let vParseMs2 = parseMs(v178);
        v2.splice(libAfk.getAfkPosition(p23.sender, v2), 1);
        fs2.writeFileSync("./database/afk.json", JSON.stringify(v2));
        p22.sendTextWithMentions(p23.chat, "@" + p23.sender.split("@")[0] + " telah kembali dari afk\n\n*Reason :* " + v177 + "\n*Selama :* " + vParseMs2.hours + " jam " + vParseMs2.minutes + " menit " + vParseMs2.seconds + " detik\n", p23);
      }
    }
    if (!p23.isGroup && !p23.key.fromMe && global.autorespon) {
      simi = await fetchJson("https://api.simsimi.net/v2/?lc=id&cf=false&text=" + v87);
      vF11("_" + simi.success + "_");
    }
    async function f9() {
      let v179 = "Command " + (v86 + v87) + " is being processed";
      p22.sendMessage(v101, {
        text: v179,
        mentions: [p23.sender],
        contextInfo: {
          forwardingScore: 999999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: " V.S.L | WhatsApp",
            newsletterJid: "https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs"
          }
        }
      }, {
        quoted: p23
      });
    }
    async function f10() {
      let v180 = "Halo @" + p23.sender.split("@")[0] + " Fitur Tersebut Hanya Bisa Di Akses Khusus Member Premium !\n\nHubungi Owner Ku Yang Di Kirim Lewat Pribadi Chat Untuk Membeli Premium";
      vF11(v180);
      await vF6(200);
      p22.sendContact(p23.sender, global.owner, p23);
    }
    async function f11() {
      let v181 = "Halo Kak @" + p23.sender.split("@")[0] + ", Kamu Belum Terdaftar Di Database Bot, Mohon Daftar Dulu Sebelum Menggunakan Fitur " + (v86 + v87) + " !\n\nUntuk MenDaftar Silahkan Ketik .daftar";
      p22.sendButton3(v101, null, v181, null, [["DAFTAR", v86 + "daftar"]], p23);
    }
    if (v98 && p23.msg.fileSha256 && p23.msg.fileSha256.toString("base64") in global.db.data.sticker) {
      let v182 = global.db.data.sticker[p23.msg.fileSha256.toString("base64")];
      let {
        text: _0xf61e3c,
        mentionedJid: _0x39ed11
      } = v182;
      let v183 = await generateWAMessage(v101, {
        text: _0xf61e3c,
        mentions: _0x39ed11
      }, {
        userJid: p22.user.id,
        quoted: p23.quoted && p23.quoted.fakeObj
      });
      v183.key.fromMe = areJidsSameUser(p23.sender, p22.user.id);
      v183.key.id = p23.key.id;
      v183.pushName = p23.pushName;
      if (p23.isGroup) {
        v183.participant = p23.sender;
      }
      let v184 = {
        ...p24,
        messages: [proto.WebMessageInfo.fromObject(v183)],
        type: "append"
      };
      p22.ev.emit("messages.upsert", v184);
    }
    if (v84.startsWith("�")) {
      try {
        return p23.reply(JSON.stringify(eval("" + v89.join(" ")), null, "\t"));
      } catch (_0x215ebc) {
        p23.reply(_0x215ebc);
      }
    }
    if (v121) {
      if (p23.isBaileys && p23.fromMe) {
        return true;
      }
      let v185 = global.db.data.chats[p23.chat];
      let v186 = global.db.data.users[p23.sender];
      let v187 = p23.key.participant;
      let v188 = p23.key.id;
      if (p23.isBaileys && !p23.fromMe) {
        if (v109 || !v108) {
          vF11("*Bot Lain Terdeteksi*\n\nMaaf Kak, saya harus mengeluarkan bot ini karena admin mengaktifkan fitur Anti Bot.");
          return await p22.groupParticipantsUpdate(p23.chat, [p23.sender], "remove");
        }
        return true;
      }
    }
    if (v113) {
      const v189 = /(https?:\/\/[^\s]+)/g;
      if (v189.test(v84)) {
        if (!v108 || v109 || v92 || p23.key.fromMe) {
          return;
        }
        await vF11("*[ ANTILINK ALL ]*\n\nAntilink All detected, maaf link yang kamu kirim akan dihapus!");
        await p22.sendMessage(p23.chat, {
          delete: {
            remoteJid: p23.chat,
            fromMe: false,
            id: p23.key.id,
            participant: p23.key.participant
          }
        });
      }
    }
    if (v114) {
      if (v84.match("whatsapp.com/channel")) {
        if (!v108 || v109 || v92 || p23.key.fromMe) {
          return;
        }
        await vF11("*[ ANTILINK CHANNEL ]*\n\nAntilink Channel detected, maaf link yang kamu kirim akan dihapus!");
        await p22.groupParticipantsUpdate(p23.chat, [p23.sender], "remove");
      }
    }
    if (v115) {
      if (v84.match("whatsapp.com/channel")) {
        if (!v108 || v109 || v92 || p23.key.fromMe) {
          return;
        }
        await vF11("*[ ANTILINK CHANNEL ]*\n\nAntilink Channel detected, maaf link yang kamu kirim akan dihapus!");
        await p22.sendMessage(p23.chat, {
          delete: {
            remoteJid: p23.chat,
            fromMe: false,
            id: p23.key.id,
            participant: p23.key.participant
          }
        });
      }
    }
    async function f12() {
      const v190 = await getBannedData();
      const v191 = v190.find(p68 => p68.id === p23.sender);
      const vGetRemainingTime = getRemainingTime(v191.bannedAt);
      return vF11("*[ NO ACCESS ]*\n\nAnda telah *dilarang* oleh sistem bot karena melanggar ketentuan layanan yang berlaku.\n\nAnda bisa menggunakan bot kembali dalam waktu: " + vGetRemainingTime + "\n\nTerima kasih atas pengertiannya.");
    }
    if (global.antispam && !v92) {
      if (v87) {
        if (isUserBanned(p23.sender)) {
          return f12();
        }
        ;
        const v192 = global.db.data.users;
        this.spam = this.spam || {};
        this.spam[p23.sender] = this.spam[p23.sender] || {
          count: 0,
          lastspam: 0
        };
        const v193 = performance.now();
        const v194 = 15000;
        const v195 = v193 - this.spam[p23.sender].lastspam;
        if (v195 < v194) {
          this.spam[p23.sender].count++;
          if (this.spam[p23.sender].count === 3) {
            const v196 = Math.ceil((v194 - v195) / 1000);
            return vF11("*[ SPAM TERDETEKSI ]*\n\nMohon Jangan Spam atau Gunakan Bot dalam " + v196 + " Detik Lagi.");
          }
          if (this.spam[p23.sender].count >= 4) {
            if (banUser(p23.sender)) {
              banUser(p23.sender);
            }
            return vF11("*[ BANNED ]*\n\nAnda telah di-banned karena spam berlebihan.");
          }
        } else {
          this.spam[p23.sender].count = 0;
        }
        this.spam[p23.sender].lastspam = v193;
      }
    }
    let vF18 = (p69, p70) => {
      let v197 = false;
      if (global.onlydaftar) {
        Object.keys(v54).forEach(p71 => {
          if (v54[p71].id == p70) {
            v197 = p71;
          }
        });
        if (v197 === false) {
          return "Kamu harus mendaftar terlebih dahulu.";
        }
      }
      Object.keys(v54).forEach(p72 => {
        if (v54[p72].id == p70) {
          v197 = p72;
        }
      });
      if (v197 !== false) {
        if (p69 == "id") {
          return v54[v197].id;
        }
        if (p69 == "name") {
          return v54[v197].name;
        }
        if (p69 == "seri") {
          return v54[v197].seri;
        }
        if (p69 == "premium") {
          return v54[v197].premium;
        }
      }
      if (v197 == false) {
        return null;
      }
    };
    if (v87) {
      if (!p23.isGroup && !v92 && !v105 && global.onlygrub) {
        return await p22.sendMessage(p23.chat, {
          text: "*MAAF BOT TIDAK DAPAT DI GUNAKAN DI PRIBADI CHAT*\n\nKETIK sewa *( TIDAK USAH MENGGUNAKAN TITIK )* JIKA INGIN MELAKUKAN SEWABOT\n\nADA KEBUTUHAN LAIN ? CONTACT MY OWNER",
          contextInfo: {
            isForwarded: true,
            mentionedJid: [p23.sender],
            externalAdReply: {
              title: "ADA KEBUTUHAN DI BOT ? CHAT OWNER",
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: true,
              body: "HUBUNGI OWNER KU DI BAWAH INI",
              mediaType: 1,
              thumbnail: v133,
              sourceUrl: "https://wa.me/" + owner2
            }
          }
        }, {
          quoted: p23
        });
      }
    }
    switch (v87) {
      case "owner":
      case "own":
      case "creator":
        {
          p22.sendContact(p23.sender, global.owner, p23);
        }
        break;
      case "menu":
      case "help":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          try {
            ppuser = await p22.profilePictureUrl(p23.sender, "image");
          } catch {
            ppuser = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
          }
          let v198 = await getBuffer(ppuser);
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + menunya(v86, v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: v198,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "infomenu":
      case "menuinfo":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + infomenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuowner":
      case "ownermenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + ownermenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "pandadaelmenu":
      case "manupadadanel":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + panelmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menudatabase":
      case "databasemenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + databasemenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menustore":
      case "storemenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + storemenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menugroup":
      case "groupmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + groupmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menusearch":
      case "searchmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + srch(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "downmenu":
      case "menudown":
      case "downloadmenu":
      case "menudownload":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + downmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menustalk":
      case "stalkmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + stalkmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuanime":
      case "animemenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + animemenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuasupan":
      case "asupanmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + asupanmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuother":
      case "othermenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + othermenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menustickertele":
      case "stickertelemenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + stickertele(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menusticker":
      case "stickermenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + stickermenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menumenfess":
      case "menfessmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + menfessmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menustickertele":
      case "stickertelemenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + stickertele(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuai":
      case "aimenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + aimenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menugames":
      case "gamesmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + gamesmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menucecan":
      case "cecanmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + cecanmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterName: "V.S.L | WhatsApp",
                newsletterJid: "https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs"
              },
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menunsfw":
      case "nsfwmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + nsfwmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menucogan":
      case "coganmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + coganmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menucerpen":
      case "cerpenmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + cerpenmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuprimbon":
      case "primbonmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + primbonmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menufun":
      case "funmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + funmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menuphotoxy":
      case "photoxymenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + photoxymenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "menusound":
      case "soundmenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + soundmenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
      case "tqto":
      case "tqtomenu":
      case "tqtomenu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          p22.sendMessage(v101, {
            text: "Halo Kak @" + p23.sender.split("@")[0] + "\n" + tqtomenu(v90),
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: namabot,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: pp_bot,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          }, {
            quoted: p23
          });
        }
        break;
        break;
      case "dellist":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin & owner!");
          }
          if (p40.length === 0) {
            return vF11("Belum ada list message di database");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *key*\n\n_Contoh_\n\n" + (v86 + v87) + " hello");
          }
          if (!isAlreadyResponList(p23.isGroup ? p23.chat : v91, q.toLowerCase(), p40)) {
            return vF11("List respon dengan key *" + q + "* tidak ada di database!");
          }
          delResponList(p23.isGroup ? p23.chat : v91, q.toLowerCase(), p40);
          vF11("Sukses delete list message dengan key *" + q + "*");
        }
      case "hapuslist":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin & owner!");
          }
          delResponList(p23.chat, q, p40);
          vF11("Sukses delete list message dengan key *" + q + "*");
        }
        break;
      case "updatelist":
      case "update":
        if (!p23.isGroup) {
          return p23.reply("Fitur Khusus Group!");
        }
        if (!v109) {
          return p23.reply("Fitur Khusus admin!");
        }
        var v788 = q.split("|")[0].toLowerCase();
        var v789 = q.split("|")[1];
        if (!q.includes("|")) {
          return p23.reply("Gunakan dengan cara " + (v86 + v87) + " *key|response*\n\n_Contoh_\n\n" + (v86 + v87) + " tes|apa");
        }
        if (!isAlreadyResponListGroup(p23.chat, p40)) {
          return p23.reply("Maaf, untuk key *" + v788 + "* belum terdaftar di group ini");
        }
        if (/image/.test(v97)) {
          let v201 = await v96.download();
          const v202 = await UploadImg(v201);
          updateResponList(p23.chat, v788, v789, true, "" + v202, p40);
          vF11("Sukses update respon list dengan key *" + v788 + "*");
          if (fs2.existsSync(v201)) {
            fs2.unlinkSync(v201);
          }
        } else {
          updateResponList(p23.chat, v788, v789, false, "-", p40);
          vF11("Sukses update respon list dengan key *" + v788 + "*");
        }
        break;
      case "jeda":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Jadikan bot sebagai admin terlebih dahulu");
          }
          if (!v94) {
            return vF11("kirim " + v87 + " waktu\nContoh: " + v87 + " 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari");
          }
          p26[p23.chat] = {
            id: p23.chat,
            time: Date.now() + ms3(v94)
          };
          fs2.writeFileSync("./database/opengc.json", JSON.stringify(p26));
          p22.groupSettingUpdate(p23.chat, "announcement").then(p73 => vF11("Sukses, group akan dibuka " + v94 + " lagi")).catch(p74 => vF11("Error"));
        }
        break;
      case "tambah":
        {
          if (!v94.includes("+")) {
            return vF11("Gunakan dengan cara " + v87 + " *angka* + *angka*\n\n_Contoh_\n\n" + v87 + " 1+2");
          }
          arg = v89.join(" ");
          atas = arg.split("+")[0];
          bawah = arg.split("+")[1];
          var vNumber7 = Number(atas);
          var vNumber8 = Number(bawah);
          vF11("" + (vNumber7 + vNumber8));
        }
        break;
      case "kurang":
        {
          if (!v94.includes("-")) {
            return vF11("Gunakan dengan cara " + v87 + " *angka* - *angka*\n\n_Contoh_\n\n" + v87 + " 1-2");
          }
          arg = v89.join(" ");
          atas = arg.split("-")[0];
          bawah = arg.split("-")[1];
          var vNumber7 = Number(atas);
          var vNumber8 = Number(bawah);
          vF11("" + (vNumber7 - vNumber8));
        }
        break;
      case "kali":
        {
          if (!v94.includes("*")) {
            return vF11("Gunakan dengan cara " + v87 + " *angka* * *angka*\n\n_Contoh_\n\n" + v87 + " 1*2");
          }
          arg = v89.join(" ");
          atas = arg.split("*")[0];
          bawah = arg.split("*")[1];
          var vNumber7 = Number(atas);
          var vNumber8 = Number(bawah);
          vF11("" + vNumber7 * vNumber8);
        }
        break;
      case "bagi":
        {
          if (!v94.includes("/")) {
            return vF11("Gunakan dengan cara " + v87 + " *angka* / *angka*\n\n_Contoh_\n\n" + v87 + " 1/2");
          }
          arg = v89.join(" ");
          atas = arg.split("/")[0];
          bawah = arg.split("/")[1];
          var vNumber7 = Number(atas);
          var vNumber8 = Number(bawah);
          vF11("" + vNumber7 / vNumber8);
        }
        break;
      case "setproses":
      case "setp":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks*\n\n_Contoh_\n\n" + (v86 + v87) + " Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetProses(p23.isGroup ? p23.chat : v91, p33)) {
            return vF11("Set proses already active");
          }
          addSetProses(v94, p23.isGroup ? p23.chat : v91, p33);
          vF11("SUKSES");
        }
        break;
      case "changeproses":
      case "changep":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks*\n\n_Contoh_\n\n" + (v86 + v87) + " Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetProses(p23.isGroup ? p23.chat : v91, p33)) {
            changeSetProses(v94, p23.isGroup ? p23.chat : v91, p33);
            vF11("SUKSES");
          } else {
            addSetProses(v94, p23.isGroup ? p23.chat : v91, p33);
            vF11("SUKSES");
          }
        }
        break;
      case "delsetproses":
      case "delsetp":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!isSetProses(p23.isGroup ? p23.chat : v91, p33)) {
            return vF11("Belum ada set proses di gc ini");
          }
          removeSetProses(p23.isGroup ? p23.chat : v91, p33);
          vF11("SUKSES");
        }
        break;
      case "setdone":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks*\n\n_Contoh_\n\n" + (v86 + v87) + " Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetDone(p23.isGroup ? p23.chat : v91, p34)) {
            return vF11("Udh set done sebelumnya");
          }
          addSetDone(v94, p23.isGroup ? p23.chat : v91, p34);
          vF11("Sukses set done!");
          break;
        }
      case "changedone":
      case "changed":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks*\n\n_Contoh_\n\n" + (v86 + v87) + " Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) ");
          }
          if (isSetDone(p23.isGroup ? p23.chat : v91, p34)) {
            changeSetDone(v94, p23.isGroup ? p23.chat : v91, p34);
            vF11("Sukses ubah set done!");
          } else {
            addSetDone(v94, p23.isGroup ? p23.chat : v91, p34);
            vF11("Sukses ubah set done!");
          }
        }
        break;
      case "delsetdone":
      case "delsetd":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!isSetDone(p23.isGroup ? p23.chat : v91, p34)) {
            return vF11("Belum ada set done di gc ini");
          }
          removeSetDone(p23.isGroup ? p23.chat : v91, p34);
          vF11("Sukses delete set done");
        }
        break;
      case "p":
      case "proses":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!p23.quoted) {
            return vF11("Reply pesanan yang akan proses");
          }
          let v203 = p23.quoted ? v96.text : v96.text.split(v89[0])[1];
          let v204 = "「 *TRANSAKSI PENDING* 」\n\n```📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending```\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!";
          const vGetTextSetProses = getTextSetProses(p23.isGroup ? p23.chat : v91, p33);
          if (vGetTextSetProses !== undefined) {
            var v1332 = vGetTextSetProses.replace("@pesanan", v203 ? v203 : "-").replace("@user", "@" + p23.quoted.sender.split("@")[0]).replace("@jam", v129).replace("@tanggal", vF10(new Date())).replace("@user", "@" + p23.quoted.sender.split("@")[0]);
            p22.sendTextWithMentions(p23.chat, v1332, p23);
          } else {
            p22.sendTextWithMentions(p23.chat, v204.replace("@pesanan", v203 ? v203 : "-").replace("@user", "@" + p23.quoted.sender.split("@")[0]).replace("@jam", v129).replace("@tanggal", vF10(new Date())).replace("@user", "@" + p23.quoted.sender.split("@")[0]), p23);
          }
        }
        break;
      case "d":
      case "done":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin!");
          }
          if (!p23.quoted) {
            return vF11("Reply pesanan yang telah di proses");
          }
          let v206 = p23.quoted ? v96.text : v96.text.split(v89[0])[1];
          let v207 = "「 *TRANSAKSI BERHASIL* 」\n\n```📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil```\n\nTerimakasih @user Next Order ya🙏";
          const vGetTextSetDone = getTextSetDone(p23.isGroup ? p23.chat : v91, p34);
          if (vGetTextSetDone !== undefined) {
            var v1332 = vGetTextSetDone.replace("@pesanan", v206 ? v206 : "-").replace("@user", "@" + p23.quoted.sender.split("@")[0]).replace("@jam", v129).replace("@tanggal", vF10(new Date())).replace("@user", "@" + p23.quoted.sender.split("@")[0]);
            p22.sendTextWithMentions(p23.chat, v1332, p23);
          } else {
            p22.sendTextWithMentions(p23.chat, v207.replace("@pesanan", v206 ? v206 : "-").replace("@user", "@" + p23.quoted.sender.split("@")[0]).replace("@jam", v129).replace("@tanggal", vF10(new Date())).replace("@user", "@" + p23.quoted.sender.split("@")[0]), p23);
          }
        }
        break;
      case "setopen":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92) {
            return vF11("Fitur Khusus owner!");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks open*\n\n_Contoh_\n\n" + (v86 + v87) + " Halo Semuanya, group sudah buka");
          }
          if (isSetOpen(p23.chat, p35)) {
            return vF11("Set open sudah ada sebelumnya");
          }
          addSetOpen(v94, p23.chat, p35);
          vF11(" Done set open!");
        }
        break;
      case "changeopen":
      case "changesetopen":
        if (!p23.isGroup) {
          return vF11("Fitur Khusus Group!");
        }
        if (!v92) {
          return vF11("Fitur Khusus owner!");
        }
        if (!v94) {
          return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks open*\n\n_Contoh_\n\n" + (v86 + v87) + " Halo Semuanya, group sudah buka");
        }
        if (isSetOpen(p23.chat, p35)) {
          changeSetOpen(v94, p23.chat, p35);
          vF11("Sukses ubah set open teks!");
        } else {
          addSetOpen(v94, p23.chat, p35);
          vF11("Sukses ubah set open teks!");
        }
        break;
      case "delsetopen":
        if (!p23.isGroup) {
          return vF11("Fitur Khusus Group!");
        }
        if (!v92) {
          return vF11("Fitur Khusus owner!");
        }
        if (!isSetOpen(p23.chat, p35)) {
          return vF11("Belum ada set open di sini..");
        }
        removeSetOpen(p23.chat, p35);
        vF11("Sukses delete set open");
        break;
      case "setclose":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92) {
            return vF11("Fitur Khusus owner!");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks close*\n\n_Contoh_\n\n" + (v86 + v87) + " Halo Semuanya, group close dulu ya");
          }
          if (isSetClose(p23.chat, p36)) {
            return vF11("Set close sudah ada sebelumnya");
          }
          addSetClose(v94, p23.chat, p36);
          vF11(" Done set close!");
        }
        break;
      case "changeclose":
      case "changesetclose":
        if (!p23.isGroup) {
          return vF11("Fitur Khusus Group!");
        }
        if (!v92) {
          return vF11("Fitur Khusus owner!");
        }
        if (!v94) {
          return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks close*\n\n_Contoh_\n\n" + (v86 + v87) + " Halo Semuanya, group close dulu ya");
        }
        if (isSetClose(p23.chat, p36)) {
          changeSetClose(v94, p23.chat, p36);
          vF11("Sukses ubah set close teks!");
        } else {
          addSetClose(v94, p23.chat, p36);
          vF11("Sukses ubah set close teks!");
        }
        break;
      case "delsetclose":
        if (!p23.isGroup) {
          return vF11("Fitur Khusus Group!");
        }
        if (!v92) {
          return vF11("Fitur Khusus owner!");
        }
        if (!isSetClose(p23.chat, p36)) {
          return vF11("Belum ada set close di sini..");
        }
        removeSetClose(p23.chat, p36);
        vF11("Sukses delete set close");
        break;
      case "welcome":
        {
          if (global.welcome || v117) {}
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (v89[0] === "on") {
            if (v117) {
              return vF11("Udah on");
            }
            p38.push(p23.chat);
            fs2.writeFileSync("./database/welcome.json", JSON.stringify(p38, null, 2));
            vF11("SUKSES MENGAKTIFKAN WELCOME");
          } else if (v89[0] === "off") {
            if (!v117) {
              return vF11("Udah off");
            }
            let v209 = p38.indexOf(p23.chat);
            p38.splice(v209, 1);
            fs2.writeFileSync("./database/welcome.json", JSON.stringify(p38, null, 2));
            vF11("SUKSES MENONAKTIFKAN WELCOME");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "left":
      case "goodbye":
        {
          if (global.left || v118) {}
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (v89[0] === "on") {
            if (v118) {
              return vF11("Udah on");
            }
            p39.push(p23.chat);
            fs2.writeFileSync("./database/left.json", JSON.stringify(p39, null, 2));
            vF11("Sukses mengaktifkan goodbye di grup ini");
          } else if (v89[0] === "off") {
            if (!v118) {
              return vF11("Udah off");
            }
            let v210 = p39.indexOf(p23.chat);
            p39.splice(v210, 1);
            fs2.writeFileSync("./database/welcome.json", JSON.stringify(p39, null, 2));
            vF11("Sukses menonaktifkan goodbye di grup ini");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "setwelcome":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92 && !v109) {
            return vF11("Fitur Khusus Admin !");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + v87 + " *teks_welcome*\n\n_Contoh_\n\n" + v87 + " Halo @user, Selamat datang di @group");
          }
          if (isSetWelcome(p23.chat, p31)) {
            return vF11("Masih Ada Setwelcome Sebelumnya, Untuk Mengubah Setwelcome " + v86 + "ubahsetwelcome\n\nUntuk Menghapus Dan Menggunakan Bawaan Dari Bot Gunakan Cara " + v86 + "delsetwelcome");
          }
          addSetWelcome(v94, p23.chat, p31);
          vF11("Successfully set welcome!");
        }
        break;
      case "ubahsetwelcome":
      case "changewelcome":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92 && !v109) {
            return vF11("Fitur Khusus Admin !");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + v87 + " *teks_welcome*\n\n_Contoh_\n\n" + v87 + " Halo @user, Selamat datang di @group");
          }
          if (isSetWelcome(p23.chat, p31)) {
            changeSetWelcome(q, p23.chat, p31);
            vF11("Sukses change set welcome teks!");
          } else {
            addSetWelcome(q, p23.chat, p31);
            vF11("Sukses change set welcome teks!");
          }
        }
        break;
      case "delsetwelcome":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92 && !v109) {
            return vF11("Fitur Khusus Admin !");
          }
          if (!isSetWelcome(p23.chat, p31)) {
            return vF11("Belum ada set welcome di sini..");
          }
          removeSetWelcome(p23.chat, p31);
          vF11("Sukses delete set welcome");
        }
        break;
      case "setleft":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92 && !v109) {
            return vF11("Fitur Khusus Admin !");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks_left*\n\n_Contoh_\n\n" + (v86 + v87) + " Halo @user, Selamat tinggal dari @group");
          }
          if (isSetLeft(p23.chat, p32)) {
            return vF11("Set left already active");
          }
          addSetLeft(q, p23.chat, p32);
          vF11("Successfully set left!");
        }
        break;
      case "changeleft":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92 && !v109) {
            return vF11("Fitur Khusus Admin !");
          }
          if (!v94) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *teks_left*\n\n_Contoh_\n\n" + (v86 + v87) + " Halo @user, Selamat tinggal dari @group");
          }
          if (isSetLeft(p23.chat, p32)) {
            changeSetLeft(q, p23.chat, p32);
            vF11("Sukses change set left teks!");
          } else {
            addSetLeft(q, p23.chat, p32);
            vF11("Sukses change set left teks!");
          }
        }
        break;
      case "delsetleft":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v92 && !v109) {
            return vF11("Fitur Khusus Admin !");
          }
          if (!isSetLeft(p23.chat, p32)) {
            return vF11("Belum ada set left di sini..");
          }
          removeSetLeft(p23.chat, p32);
          vF11("Sukses delete set left");
        }
        break;
      case "antiwame":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Jadikan bot sebagai admin terlebih dahulu");
          }
          if (v89[0] === "on") {
            if (v111) {
              return vF11("Udah aktif");
            }
            p28.push(p23.chat);
            fs2.writeFileSync("./database/antiwame.json", JSON.stringify(p28, null, 2));
            vF11("Successfully Activate Antiwame In This Group");
          } else if (v89[0] === "off") {
            if (!v111) {
              return vF11("Udah nonaktif");
            }
            let v211 = p28.indexOf(p23.chat);
            p28.splice(v211, 1);
            fs2.writeFileSync("./database/antiwame.json", JSON.stringify(p28, null, 2));
            vF11("Successfully Disabling Antiwame In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "antilink":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot harus menjadi admin");
          }
          if (v89[0] === "on") {
            if (v110) {
              return vF11("Udah aktif");
            }
            p27.push(p23.chat);
            fs2.writeFileSync("./database/antilink.json", JSON.stringify(p27, null, 2));
            vF11("Successfully Activate Antilink In This Group");
          } else if (v89[0] === "off") {
            if (!v110) {
              return vF11("Udah nonaktif");
            }
            let v212 = p27.indexOf(p23.chat);
            p27.splice(v212, 1);
            fs2.writeFileSync("./database/antilink.json", JSON.stringify(p27, null, 2));
            vF11("Successfully Disabling Antilink In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "antibot":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot harus menjadi admin");
          }
          if (v89[0] === "on") {
            if (p23.isBaileys && p23.fromMe) {
              return true;
            }
            if (v121) {
              return vF11("Udah aktif");
            }
            v53.push(p23.chat);
            fs2.writeFileSync("./database/antibot.json", JSON.stringify(v53, null, 2));
            vF11("Successfully Activate AntiBot In This Group");
          } else if (v89[0] === "off") {
            if (p23.isBaileys && p23.fromMe) {
              return false;
            }
            if (!v121) {
              return vF11("Udah nonaktif");
            }
            let v213 = v53.indexOf(p23.chat);
            v53.splice(v213, 1);
            fs2.writeFileSync("./database/antibot.json", JSON.stringify(v53, null, 2));
            vF11("Successfully Disabling AntiBot In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "h":
      case "hidetag":
        {
          if (!p23.isGroup) {
            return vF11("Khusus grup");
          }
          if (!v109 && !v92) {
            return vF11("Fitur khusus admin");
          }
          let v214 = p23.quoted ? v96.text : v94 ? v94 : "";
          p22.sendMessage(p23.chat, {
            text: v214,
            mentions: v100.map(p75 => p75.id)
          }, {
            quoted: p23
          });
        }
        break;
      case "qrdsasis":
      case "dondsadsasi":
      case "dondsddsate":
        {
          p22.sendMessage(p23.chat, {
            image: qris,
            caption: "*------- DONATE  -------*\n\nHai kak \nKalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi\n\nBerapapun donasi kalian akan sangat berarti \nThanks!\n\nContact person Owner:\nwa.me/" + owner2
          }, {
            quoted: p23
          });
        }
        break;
      case "q":
        {
          vF11("On Kok Kak Bot Nya");
        }
        break;
      case "kick":
        {
          if (!p23.isGroup) {
            return vF11("Hanya Dapat Di Gunakan Di Group");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          let v215 = p23.mentionedJid[0] ? p23.mentionedJid[0] : p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await p22.groupParticipantsUpdate(p23.chat, [v215], "remove").then(p76 => p23.reply("Yahaha Mampus Gw kick, Done Ga bang ✅")).catch(p77 => p23.reply("❎vTerjadi kesalahan"));
        }
        break;
      case "kontolplerkontol":
        {
          if (!p23.isGroup) {
            return vF11("Hanya Dapat Di Gunakan Di Group");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          let v216 = p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await p22.groupParticipantsUpdate(p23.chat, [v216], "add").then(p78 => p23.reply(" Sukses add member")).catch(p79 => p23.reply(" Terjadi kesalahan, mungkin nmr nya privat"));
        }
        break;
      case "promote":
        {
          if (!p23.isGroup) {
            return vF11("Hanya Dapat Di Gunakan Di Group");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          let v217 = p23.mentionedJid[0] ? p23.mentionedJid[0] : p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await p22.groupParticipantsUpdate(p23.chat, [v217], "promote").then(p80 => p23.reply("DONE ✅\n\nSELAMAT @" + p23.sender.split("@")[0] + " SEKARANG SUDAH MENJADI ADMIN GROUP")).catch(p81 => p23.reply("❎vTerjadi kesalahan"));
        }
        break;
      case "demote":
        {
          if (!p23.isGroup) {
            return vF11("Hanya Dapat Di Gunakan Di Group");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          let v218 = p23.mentionedJid[0] ? p23.mentionedJid[0] : p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await p22.groupParticipantsUpdate(p23.chat, [v218], "promote").then(p82 => p23.reply("DONE ✅\n\nMAAF KAK @" + p23.sender.split("@")[0] + " JABATAN KAMU YANG SEBELUM MYA SEBAGAI ADMIN DI TURUNKAN MENJADI MEMBER")).catch(p83 => p23.reply("❎vTerjadi kesalahan"));
        }
        break;
      case "sc":
      case "script":
        {
          vF11("Mau Sc Nya Ya kak?,Cek di sini : https://www.youtube.com/@jerofcc\n\nCreator : https://wa.me/6283136394680");
        }
        break;
      case "tqto":
      case "thanksto":
        {
          vF11("\n╭─❒ 「 THANKS TO 」 \n│○ Allah Swt.\n│○ Myparents\n│○ Hads\n│○ VinzDev\n│○ Misel\n│○ Fatih Arridho\n│○ Ferdiz\n│○ Zeeoneofc\n│○ JerOfc\n│○ All Creator Bot\n╰❒\n");
        }
        break;
      case "join":
        {
          if (!v92) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Owner");
          }
          if (!v94) {
            return vF11("Masukan Link Group !");
          }
          if (!vF5(v89[0]) && !v89[0].includes("whatsapp.com")) {
            return vF11("Link Eror !");
          }
          await f9();
          let v219 = v89[0].split("https://chat.whatsapp.com/")[1];
          await p22.groupAcceptInvite(v219).then(p84 => p23.reply("SUKSES BERGABUNG KE GRUB TERSEBUT ✅")).catch(p85 => p23.reply("❎vTerjadi kesalahan"));
        }
        break;
      case "tiktok3":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Url Nya Mana Kak?\n\nContoh : " + (v86 + v87) + " https://vt.tiktok.com/ZSF8Cowr3/");
          }
          if (!v89[0].match(/tiktok/gi)) {
            return vF11("URL INVALID");
          }
          let jerApi = require("jer-api");
          await f9();
          try {
            const v220 = await jerApi.jertiktok2(v89[0]);
            if (v220) {
              let v221 = "\n╭─❒ 「 *TIKTOK DOWN* 」 \n│\n│ *NAME:* " + v220.author.name + "\n│ *USERNAME:* " + v220.author.unique_id + "\n│ *BIO:* " + v220.author.signature + "\n│ *CREATE:* " + v220.created_at + "\n│ *URL:* " + v220.url + "\n│ *DURATION:* " + v220.video.durationFormatted + "\n│ *QUALITY:* " + v220.video.ratio + "\n│ *LIKE:* " + v220.stats.likeCount + "\n│ *COMMENT:* " + v220.stats.commentCount + "\n│ *SAVE:* " + v220.stats.saveCount + "\n│ *SHARE:* " + v220.stats.shareCount + "\n│ *VIEWS:* " + v220.stats.playCount + "\n│ *ID VID:* " + v220.id + "\n│ *DESC:* " + v220.title + "\n│\n╰❒\n\n╭─❒ 「 *MUSIC INFO* 」\n│\n│ *TITLE:* " + v220.music.title + "\n│ *AUTHOR:* " + v220.music.author + "\n│ *DURATION:* " + v220.music.durationFormatted + "\n│ *MUSIC URL:* " + v220.music.play_url + "\n│\n╰❒\n\nFILE AUDIO SEDANG DI KIRIM . . .\n";
              await p22.sendFile(p23.chat, v220.video.noWatermark, null, v221, p23);
              p22.sendMessage(p23.chat, {
                audio: {
                  url: v220.music.play_url
                },
                mimetype: "audio/mpeg"
              }, {
                quoted: p23
              });
            }
          } catch (_0x38fb39) {
            console.log(_0x38fb39);
            vF11("" + _0x38fb39);
          }
        }
        break;
      case "ttaudio":
      case "tiktokaudio":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Example : " + (v86 + v87) + " link");
          }
          if (!v89[0]) {
            return vF11("Kirim perintah:\n" + (v86 + v87) + " link tiktok video\n\nContoh penggunaan:\n" + (v86 + v87) + " https://vt.tiktok.com/ZS8bq76jP/");
          }
          await f9();
          let jerApi2 = require("jer-api");
          const v222 = await jerApi2.jertiktok(v89[0]);
          const {
            music_title: _0x279250,
            album: _0x2d55a5,
            audio: _0x572041
          } = v222.music_info;
          p22.sendMessage(p23.chat, {
            audio: {
              url: _0x572041
            },
            mimetype: "audio/mp4"
          }, {
            quoted: p23
          });
        }
        break;
      case "ttdocument":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Example : " + (v86 + v87) + " link");
          }
          if (!v89[0]) {
            return vF11("Kirim perintah:\n" + (v86 + v87) + " link tiktok video\n\nContoh penggunaan:\n" + (v86 + v87) + " https://vt.tiktok.com/ZS8bq76jP/");
          }
          await f9();
          let jerApi3 = require("jer-api");
          const v223 = await jerApi3.jertiktok(v89[0]);
          const {
            nowm: _0x3d618b,
            wm: _0x359dfe,
            wm_hdplay: _0x1759b4
          } = v223.url;
          p22.sendMessage(p23.chat, {
            document: {
              url: _0x3d618b
            },
            caption: "NIH VERSI DOCUMENT LEBIH HD",
            mimetype: "video/mp4",
            fileName: "V.S.L.mp4"
          }, {
            quoted: p23
          });
        }
        break;
      case "patrick":
      case "popoci":
      case "sponsbob":
      case "kawan-sponsbob":
      case "awoawo":
      case "chat":
      case "benedict":
      case "dbfly":
      case "dino-kuning":
      case "doge":
      case "gojosatoru":
      case "hope-boy":
      case "jisoo":
      case "kr-robot":
      case "kucing":
      case "lonte":
      case "manusia-lidi":
      case "menjamet":
      case "meow":
      case "nicholas":
      case "tyni":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          let v224 = await nodeFetch(global.api("btz", "/api/sticker/" + v87, {}, "apikey"));
          if (!v224.ok) {
            throw await v224.text();
          }
          let v225 = await v224.buffer();
          let v226 = await p22.sendImageAsSticker(p23.chat, v225, p23, {
            packname: packname,
            author: author
          });
          await fs2.unlinkSync(v226);
        }
        break;
      case "ttp":
      case "attp":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("Kirim perintah:\n" + (v86 + v87) + " teks\n\nContoh penggunaan\n" + (v86 + v87) + " saya robok anda goblok");
          }
          let v227 = await nodeFetch("https://api.cafirexos.com/api/maker/attp?text=" + v94);
          if (!v227.ok) {
            throw await v227.text();
          }
          let v228 = await v227.buffer();
          let v229 = await p22.sendMediaAsSticker(p23.chat, v228, p23, {
            packname: global.packname,
            author: author
          });
          await fs2.unlinkSync(v229);
        }
        break;
      case "linkgroup":
      case "linkgc":
      case "gclink":
      case "grouplink":
        {
          if (!p23.isGroup) {
            vF11("Fitur Ini Khusus Group");
          }
          if (!v108) {
            vF11("Bot Bukan Admin");
          }
          await f9();
          let v230 = await p22.groupInviteCode(p23.chat);
          p22.sendText(p23.chat, "https://chat.whatsapp.com/" + v230 + "\n\nGroup Link : " + v99.subject, p23, {
            detectLink: true
          });
        }
        break;
      case "revoke":
      case "resetlink":
      case "resetlinkgrup":
      case "resetlinkgroup":
      case "resetlinkgc":
        {
          if (!p23.isGroup) {
            vF11("Fitur Ini Khusus Group");
          }
          if (!v108) {
            vF11("Bot Bukan Admin");
          }
          if (!v109 && !v92) {
            return vF11("Fitur Ini Khusus Admin !");
          }
          await f9();
          p22.groupRevokeInvite(p23.chat);
          vF11("Done Reset Link Gc Nya Kak");
        }
        break;
      case "kosong":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner");
          }
          vF11("\n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         \n         ");
        }
        break;
      case "out":
        {
          if (!p23.isGroup) {
            vF11("Fitur Ini Khusus Group");
          }
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner");
          }
          let v231 = "OKE BOT AKAN KELUAR DALAM WAKTU 3 DETIK";
          await vF6(3000);
          await p22.groupLeave(p23.chat).then(p86 => vF11(vF8(p86))).catch(p87 => vF11(vF8(p87)));
          vF11(v231);
        }
        break;
      case "listonline":
      case "onlinelist":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!p23.isGroup) {
            return vF11("Fitur khusus group");
          }
          if (!v109) {
            return vF11("Khusus admin");
          }
          let v232 = v89 && /\d+\-\d+@g.us/.test(v89[0]) ? v89[0] : p23.chat;
          let v233 = [...Object.keys(p25.presences[v232]), v91];
          p22.sendText(p23.chat, "List Online:\n\n" + v233.map(p88 => "⭔ @" + p88.replace(/@.+/, "")).join`\n`, p23, {
            mentions: v233
          });
        }
        break;
      case "public":
        {
          if (!v92) {
            return "Fitur Ini Khusus Owner";
          }
          p22.public = true;
          vF11("*Sukses Ganti Bot Ke Mode Public*");
        }
        break;
      case "self":
        {
          if (!v92) {
            return "Fitur Ini Khusus Owner";
          }
          p22.public = false;
          vF11("*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*");
        }
        break;
      case "tiktokkayes":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v234 = [{
            buttonId: "grubbot",
            buttonText: {
              displayText: "GROUP BOT"
            },
            type: 1
          }];
          var v235 = JSON.parse(fs2.readFileSync("./RANDOM/kayes.json"));
          var vF810 = f8(v235);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktokgirl":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v236 = JSON.parse(fs2.readFileSync("./RANDOM/tiktokgirl.json"));
          var vF810 = f8(v236);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktokghea":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v237 = JSON.parse(fs2.readFileSync("./RANDOM/gheayubi.json"));
          var vF810 = f8(v237);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktokbocil":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v238 = JSON.parse(fs2.readFileSync("./RANDOM/bocil.json"));
          var vF810 = f8(v238);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktokukhty":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v239 = JSON.parse(fs2.readFileSync("./RANDOM/ukhty.json"));
          var vF810 = f8(v239);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktoksantuy":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v240 = JSON.parse(fs2.readFileSync("./RANDOM/santuy.json"));
          var vF810 = f8(v240);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktokpanrika":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v241 = JSON.parse(fs2.readFileSync("./RANDOM/panrika.json"));
          var vF810 = f8(v241);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktoknotnot":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v242 = JSON.parse(fs2.readFileSync("./RANDOM/notnot.json"));
          var vF810 = f8(v242);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "tiktokgabagtha":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          var v243 = JSON.parse(fs2.readFileSync("./RANDOM/tiktokgabagtha.json"));
          var vF810 = f8(v243);
          p22.sendMessage(p23.chat, {
            caption: "Jangan Lupa Bilang Makasih !",
            video: {
              url: vF810.url
            },
            footer: namabot
          }, {
            quoted: p23
          });
        }
        break;
      case "block":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner");
          }
          if (!v94) {
            return vF11("Penggunaan Salah\n\nContoh : " + (v86 + v87) + " 6283136394680");
          }
          let v244 = p23.mentionedJid[0] ? p23.mentionedJid[0] : p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await p22.updateBlockStatus(v244, "block").then(p89 => vF11(vF8(p89))).catch(p90 => vF11(vF8(p90)));
        }
        break;
      case "unblock":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner");
          }
          if (!v94) {
            return vF11("Penggunaan Salah\n\nContoh : " + (v86 + v87) + " 6283136394680");
          }
          let v245 = p23.mentionedJid[0] ? p23.mentionedJid[0] : p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await p22.updateBlockStatus(v245, "unblock").then(p91 => vF11(vF8(p91))).catch(p92 => vF11(vF8(p92)));
        }
        break;
      case "setnamegc":
      case "setnamagc":
        {
          if (!p23.isGroup) {
            return "Fitur Ini Khusus Group";
          }
          if (!v108) {
            return "Bot Bukan Admin";
          }
          if (!v109) {
            return "Fitur Ini Khusus Admin !";
          }
          if (!v94) {
            return vF11("Text Nya ?");
          }
          await p22.groupUpdateSubject(p23.chat, v94).then(p93 => vF11("Sukses Ngab")).catch(p94 => vF11(vF8(p94)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!p23.isGroup) {
            return "Fitur Ini Khusus Group";
          }
          if (!v108) {
            return "Bot Bukan Admin";
          }
          if (!v109) {
            return "Fitur Ini Khusus Admin !";
          }
          if (!v94) {
            return vF11("Text Nya ?");
          }
          await p22.groupUpdateDescription(p23.chat, v94).then(p95 => vF11("Sukses Ngab")).catch(p96 => vF11(vF8(p96)));
        }
        break;
      case "gitclone":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89[0]) {
            return vF11("Mana link nya?\nContoh :\n" + v86 + v87 + " https://github.com/JER-OFC/");
          }
          if (!vF5(v89[0]) && !v89[0].includes("github.com")) {
            return vF11("Eror Bang Link Nya");
          }
          let v246 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          let [, v247, v248] = v89[0].match(v246) || [];
          v248 = v248.replace(/.git$/, "");
          let v249 = "https://api.github.com/repos/" + v247 + "/" + v248 + "/zipball";
          let v250 = (await nodeFetch(v249, {
            method: "HEAD"
          })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
          p22.sendMessage(p23.chat, {
            document: {
              url: v249
            },
            fileName: v250 + ".zip",
            mimetype: "application/zip"
          }, {
            quoted: p23
          }).catch(p97 => vF11("Sukses"));
        }
        break;
      case "developer":
      case "dev":
        {
          vF11("JER-BOTZ DEVELOPER\n\n\n2022-2023 JER BOTZ MD.\n\nWhatshapp\nJER: wa.me/6283136394680\n\nYOUTUBE:\nV.S.L");
        }
        break;
      case "delprem":
      case "unprem":
      case "delpremium":
        {
          if (!v92) {
            return "Emank Lu Owner Gua Kah ?";
          }
          if (!v94) {
            return vF11("*Kek gini bang*\n\n• " + (v86 + v87) + " number\n*Contoh:* " + (v86 + v87) + " 6283136394680\n\natau\n\n• " + (v86 + v87) + " @tag\n*Contoh:* " + (v86 + v87) + " @6283136394680");
          }
          var v663 = v89.join(" ");
          var v664 = v663.split("|")[0];
          let v253 = v664 + "@s.whatsapp.net";
          let v254 = p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (v254) {
            v42.splice(libPremium.getPremiumPosition(v254, v42), 1);
            fs2.writeFileSync("./database/premium.json", JSON.stringify(v42));
            vF11("NOMOR : @" + v253.split("@")[0] + " BUKAN LAGI USER PREMIUM");
          } else {
            var v280 = await p22.onWhatsApp(v89[0] + "@s.whatsapp.net");
            if (v280.length == 0) {
              return vF11("Nomor " + v89[0] + " tidak terdaftar di WhatsApp");
            }
            v42.splice(libPremium.getPremiumPosition(v89[0] + "@s.whatsapp.net", v42), 1);
            fs2.writeFileSync("./database/premium.json", JSON.stringify(v42));
            vF11("SUKSES \n\nNOMOR : @" + v253.split("@")[0] + " BUKAN LAGI USER PREMIUM");
          }
        }
        break;
      case "addprem":
        {
          if (!v92) {
            return "Emank Lu Owner Gua Kah ?";
          }
          var v663 = v89.join(" ");
          var v664 = v663.split("|")[0];
          let v258 = v664 + "@s.whatsapp.net";
          let v259 = v94.split("|")[0];
          const v260 = v89.join(" ");
          const v261 = v260.split("|")[0];
          const v262 = v260.split("|")[1];
          if (!v261 || !v262) {
            return vF11("Penggunaan :\n*" + v86 + "addprem* @tag|waktu\n*" + v86 + "addprem* nomor|waktu\n\nContoh : " + v87 + " 6288227606701|30d");
          }
          let v263 = p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (v263) {
            libPremium.addPremiumUser((v261.replace("@", "") + "@s.whatsapp.net").replace(" @", "@"), v262, v42);
            vF11("NOMOR : @" + v258.split("@")[0] + " SUKSES MENJADI PREMIUM");
            p22.sendMessage(v259 + "@s.whatsapp.net", {
              text: "Halo Kak Nomor Kamu Sudah Menjadi User Premium\n\nSelama: " + v262 + "\n\nSilahkan Ketik " + v86 + "cekprem Untuk Melihat Lebih Lanjut Masa Aktif Premium Kamu"
            });
          } else {
            var v264 = await p22.onWhatsApp(v261 + "@s.whatsapp.net");
            if (v264.length == 0) {
              return vF11("Nomor " + v261 + " tidak terdaftar di WhatsApp");
            }
            libPremium.addPremiumUser((v261.replace("@", "") + "@s.whatsapp.net").replace(" @", "@"), v262, v42);
            vF11("NOMOR : @" + v258.split("@")[0] + " SUKSES MENJADI PREMIUM");
            p22.sendMessage(v259 + "@s.whatsapp.net", {
              text: "Halo Kak Nomor Kamu Sudah Menjadi User Premium\n\nSelama: " + v262 + "\n\nSilahkan Ketik " + v86 + "cekprem Untuk Melihat Lebih Lanjut Masa Aktif Premium Kamu\n\n� " + namaowner
            });
          }
        }
        break;
      case "addexpired":
      case "addexp":
        {
          if (!v92) {
            return "Emank Lu Owner Gua Kah ?";
          }
          var v663 = v89.join(" ");
          var v664 = v663.split("|")[0];
          let v267 = v664 + "@s.whatsapp.net";
          let v268 = v94.split("|")[0];
          const v269 = v89.join(" ");
          const v270 = v269.split(",")[0];
          const v271 = v269.split(",")[1];
          const v272 = v269.split(",")[2];
          const v273 = v269.split(",")[3];
          if (!v270 || !v271 || !v272 || !v273) {
            return vF11("Penggunaan :\n*" + (v86 + v87) + "* nomor,username,id user,waktu\n\nContoh : " + v87 + " 6283852406727,V.S.L,1,30d\n\n*CATATAN:*\nd = hari (day)\nm = menit(minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)");
          }
          if (!v273) {
            return vF11("Waktu Nya Mana ?");
          }
          let v274 = p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (v274) {
            libPanel.addPremiumUser((v270.replace("@", "") + "@s.whatsapp.net").replace(" @", "@"), v271, v272, v273, v43);
            vF11("NOMOR @" + v267.split("@")[0] + " SUKSES DI TAMBAHKAN DENGAN DATA BERIKUT\n\nNOMOR : " + v270 + "\nUSERNAME : " + v271 + "\nID USER : " + v272 + "\nWAKTU : " + v273);
            p22.sendMessage(v268 + "@s.whatsapp.net", {
              text: "Halo Kak @" + p23.sender.split("@")[0] + " Panel Kamu Expired Akan Expired\n\nSelama: " + v273 + "\n\nSilahkan Ketik " + v86 + "cekexp Untuk Melihat Lebih Lanjut Masa Aktif Panel Kamu"
            });
          }
        }
        break;
      case "cekdadaexp":
      case "cekdadaexpired":
        {
          if (!v106) {
            return vF11("Kamu bukan user panel  V.S.L , kirim perintah *" + v86 + "buypanel* untuk membeli panel");
          }
          if (libPanel.getPremiumExpired(p23.sender, v43) == "PERMANENT") {
            return p23.reply("PERMANENT");
          }
          let vParseMs3 = parseMs(libPanel.getPremiumExpired(p23.sender, v43) - Date.now());
          let v275 = "*Expire :* " + vParseMs3.days + " day(s) " + vParseMs3.hours + " hour(s) " + vParseMs3.minutes + " minute(s) " + vParseMs3.seconds + " seconds(s)";
          vF11(v275);
        }
        break;
      case "delexp":
      case "delexpired":
        {
          if (!v92) {
            return "Emank Lu Owner Gua Kah ?";
          }
          if (!v94) {
            return vF11("*Kek gini bang*\n\n• " + (v86 + v87) + " number\n*Contoh:* " + (v86 + v87) + " 6283852406727\n\natau\n\n• " + (v86 + v87) + " @tag\n*Contoh:* " + (v86 + v87) + " @6283852406727");
          }
          var v663 = v89.join(" ");
          var v664 = v663.split("|")[0];
          let v278 = v664 + "@s.whatsapp.net";
          let v279 = p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (v279) {
            v43.splice(libPanel.getPremiumPosition(v279, v43), 1);
            fs2.writeFileSync("./database/expired.json", JSON.stringify(v43));
            vF11("NOMOR : @" + v278.split("@")[0] + " BUKAN LAGI USER PREMIUM");
          } else {
            var v280 = await p22.onWhatsApp(v89[0] + "@s.whatsapp.net");
            if (v280.length == 0) {
              return vF11("Nomor " + v89[0] + " tidak terdaftar di WhatsApp");
            }
            v43.splice(libPremium.getPremiumPosition(v89[0] + "@s.whatsapp.net", v43), 1);
            fs2.writeFileSync("./database/expired.json", JSON.stringify(v43));
            vF11("SUKSES \n\nNOMOR : @" + v278.split("@")[0] + " BUKAN LAGI USER PREMIUM");
          }
        }
        break;
      case "listexp":
      case "listexpired":
        {
          if (!v92) {
            return;
          }
          await f9();
          let v281 = "";
          let v282 = [];
          for (let v283 of v43) {
            v282.push(v283.id);
            v281 += "*🆔 ID:* @" + v283.id.split("@")[0] + "\n";
            if (v283.expired === "PERMANENT") {
              let v284 = "PERMANENT";
              v281 += "*⏰ Expired:* PERMANENT\n\n";
            } else {
              let v285 = v283.expired - Date.now();
              v281 += "*⏰ Expired:* " + f4(v285) + "\n";
            }
          }
          p22.sendMessage(p23.chat, {
            text: "「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : " + v42.length + " user*\n\n" + v281 + "\n"
          }, {
            mentions: v282,
            quoted: p23
          });
        }
        break;
      case "listpremium":
      case "listprem":
        {
          if (!v92) {
            return;
          }
          await f9();
          let v286 = "";
          let v287 = [];
          for (let v288 of v42) {
            v287.push(v288.id);
            v286 += "*🆔 ID:* @" + v288.id.split("@")[0] + "\n";
            if (v288.expired === "PERMANENT") {
              let v289 = "PERMANENT";
              v286 += "*⏰ Expired:* PERMANENT\n\n";
            } else {
              let v290 = v288.expired - Date.now();
              v286 += "*⏰ Expired:* " + f4(v290) + "\n";
            }
          }
          p22.sendMessage(p23.chat, {
            text: "「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : " + v42.length + " user*\n\n" + v286 + "\n"
          }, {
            mentions: v287,
            quoted: p23
          });
        }
        break;
      case "buyprem":
        {
          p22.sendContact(p23.chat, global.owner);
          let v291 = "BUY PREM CHAT OWNER";
          await vF6(50);
          vF11(v291);
        }
        break;
      case "renewsewa":
        {
          if (!v92) {
            return p23.reply("Fitur khusus owner!");
          }
          if (v89.length < 2) {
            return p23.reply("Gunakan dengan cara " + (v86 + v87) + " *idgc waktu*\n\nContoh : " + v87 + " 120363207271598246@g.us 30d\n\n*CATATAN:*\nd = hari (day)\nm = menit (minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)");
          }
          let v292 = v89[0];
          if (!v89[1]) {
            return p23.reply("Waktunya?");
          }
          const vGetSewaPosition = getSewaPosition(v292, p37);
          if (vGetSewaPosition !== null) {
            const v293 = Date.now() + ms2(v89[1]);
            p37[vGetSewaPosition].expired = v293;
            updateSewaDatabase(p37);
            const vVF10 = vF10(v293);
            return p23.reply("*Sukses renew sewa grup !*\nExpired : " + vVF10);
          } else {
            const v294 = {
              id: v292,
              expired: Date.now() + ms2(v89[1]),
              status: true
            };
            p37.push(v294);
            updateSewaDatabase(p37);
            const v295 = Date.now() + ms2(v89[1]);
            const vVF102 = vF10(v295);
            return p23.reply("*Sukses menambahkan sewa grup berwaktu!*\n\nExpired : " + vVF102);
          }
        }
        break;
      case "delsewa2":
        {
          if (!v92) {
            return p23.reply("Fitur khusus owner!");
          }
          if (v89.length === 0 && vCheckSewaGroup) {
            const v296 = p23.chat;
            const vGetSewaPosition2 = getSewaPosition(v296, p37);
            if (vGetSewaPosition2 !== null) {
              p37.splice(vGetSewaPosition2, 1);
              fs2.writeFileSync("./database/sewa.json", JSON.stringify(p37, null, 2));
              return p23.reply("Sukses menghapus sewa di grup ini\n\nBot Akan Keluar Dalam Waktu 3 Detik");
              await vF6(3000);
              p22.groupLeave(p23.chat).then(p98 => vF11(vF8(p98))).catch(p99 => vF11(vF8(p99)));
            } else {
              return p23.reply("Tidak dapat menemukan sewa untuk grup ini");
            }
          } else if (v89.length === 1) {
            const v297 = v89[0];
            const vGetSewaPosition3 = getSewaPosition(v297, p37);
            if (vGetSewaPosition3 !== null) {
              p37.splice(vGetSewaPosition3, 1);
              fs2.writeFileSync("./database/sewa.json", JSON.stringify(p37, null, 2));
              return p23.reply("Sukses menghapus sewa di grup dengan ID: " + v297);
              await vF6(3000);
              p22.groupLeave(p23.chat).then(p100 => vF11(vF8(p100))).catch(p101 => vF11(vF8(p101)));
            } else {
              return p23.reply("Tidak dapat menemukan sewa untuk grup dengan ID: " + v297);
            }
          } else {
            return p23.reply("Gunakan dengan cara: " + v86 + "delsewa [idgroup]");
          }
        }
        break;
      case "delsewa":
        {
          if (!v92) {
            return vF11("Fitur khusus owner!");
          }
          if (!p23.isGroup) {
            return vF11("Perintah ini hanya bisa dilakukan di Grup yang menyewa bot");
          }
          if (!vCheckSewaGroup) {
            return vF11("Bot tidak disewa di Grup ini");
          }
          p37.splice(getSewaPosition(p23.chat, p37), 1);
          fs2.writeFileSync("./database/sewa.json", JSON.stringify(p37, null, 2));
          vF11("SUKSES BOT AKAN KELUAR DARI GRUB INI, DALAM WAKTU 2 DETIK");
          await vF6(2000);
          p22.groupLeave(p23.chat).then(p102 => vF11(vF8(p102))).catch(p103 => vF11(vF8(p103)));
        }
        break;
      case "listsewa":
        {
          if (!v92) {
            return;
          }
          let v298 = "*LIST SEWA*\n\n*Total:* " + p37.length + "\n\n";
          let v299 = [];
          for (let v300 of p37) {
            v298 += "*Name:* " + (await f7(v300.id)) + "\n*ID :* " + v300.id + "\n";
            if (v300.expired === "PERMANENT") {
              let v301 = "PERMANENT";
              v298 += "*Expire :* PERMANENT\n\n";
            } else {
              let v302 = v300.expired - Date.now();
              v298 += "*Expired :* " + f4(v302) + "\n\n";
            }
          }
          p22.sendMessage(p23.chat, {
            text: v298
          }, {
            quoted: p23
          });
        }
        break;
      case "ceksewa":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!vCheckSewaGroup) {
            return vF11("Bot tidak di sewa group ini!");
          }
          let vParseMs4 = parseMs(getSewaExpired(p23.chat, p37) - Date.now());
          let v303 = "*Expired :* " + vParseMs4.days + " Hari " + vParseMs4.hours + " Jam " + vParseMs4.minutes + " Menit";
          vF11(v303);
        }
        break;
      case "cekprem":
      case "cekpremium":
        {
          if (!v105 && !v92) {
            return vF11("Kamu bukan user premium, kirim perintah *" + v86 + "buyprem* untuk membeli premium");
          }
          if (libPremium.getPremiumExpired(p23.sender, v42) == "PERMANENT") {
            return p23.reply("PERMANENT");
          }
          let vParseMs5 = parseMs(libPremium.getPremiumExpired(p23.sender, v42) - Date.now());
          let v304 = "*Expire :* " + vParseMs5.days + " day(s) " + vParseMs5.hours + " hour(s) " + vParseMs5.minutes + " minute(s)";
          vF11(v304);
        }
        break;
      case "gpt":
      case "chatgpt":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("Chat dengan AI.\n\nContoh:\n" + v86 + v87 + " Apa Itu Bot WhatsApp");
          }
          await f9();
          try {
            let v305 = await nodeFetch("https://api.vihangayt.com/ai/gpt?q=" + v94);
            let v306 = await v305.json();
            vF11(v306.data);
          } catch (_0xe67b8a) {
            console.log(_0xe67b8a);
            vF11("Terjadi kesalahan dalam menjawab pertanyaan");
          }
        }
        break;
      case "gpt2":
      case "chatgpt2":
        {
          if (!v89[0]) {
            return vF11("Masukan Text yang ingin di tanya ke ai");
          }
          await f9();
          try {
            let v307 = await axios2.get("https://api.vihangayt.com/ai/gpt4-v2?q=" + v89[0]);
            vF11(v307.data.data);
          } catch (_0x5503bd) {
            console.log(_0x5503bd);
            vF11("Terjadi kesalahan dalam menjawab pertanyaan");
          }
        }
        break;
      case "gpt3":
      case "chatgpt3":
        {
          if (!v89[0]) {
            return vF11("Masukan Text Yang ingin di tanya ke ai");
          }
          await f9();
          try {
            let v308 = await axios2.get("https://api.maher-zubair.tech/ai/chatgpt3?q=" + v89[0]);
            vF11(v308.data.result);
          } catch (_0x3ee941) {
            consoe.log(_0x3ee941);
            vF11("Terjadi kesalahan dalam menjawab pertanyaan");
          }
        }
        break;
      case "aiturbo":
      case "turboai":
      case "turbo":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("Chat dengan AI.\n\nContoh:\n" + v86 + v87 + " Apa Itu Bot WhatsApp");
          }
          await f9();
          try {
            let v309 = await nodeFetch("https://aemt.uk.to/turbo?text=" + v94);
            let v310 = await v309.json();
            vF11(v310.result);
          } catch (_0x829195) {
            console.log(_0x829195);
            vF11("" + _0x829195);
          }
        }
        break;
      case "ai5":
      case "chatgpt5":
        try {
          if (global.jeropenai === "ISI_APIKEY_DIGITAL OCEAN_DISINI") {
            return vF11("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file settings.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
          }
          if (!v94) {
            return vF11("Chat dengan AI.\n\nContoh:\n" + v86 + v87 + " Apa Itu Bot WhatsApp");
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          const v311 = new Configuration({
            apiKey: global.jeropenai
          });
          const v312 = new OpenAIApi(v311);
          const v313 = await v312.createCompletion({
            model: "text-davinci-003",
            prompt: v94,
            temperature: 0,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0.3,
            presence_penalty: 0
          });
          vF11("" + v313.data.choices[0].text);
        } catch (_0x202231) {
          if (_0x202231.response) {
            console.log(_0x202231.response.status);
            console.log(_0x202231.response.data);
            console.log(_0x202231.response.status + "\n\n" + _0x202231.response.data);
          } else {
            console.log(_0x202231);
            vF11("Maaf, sepertinya ada yang error :" + _0x202231.message);
          }
        }
        break;
      case "antiwame2":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Jadikan bot sebagai admin terlebih dahulu");
          }
          if (v89[0] === "on") {
            if (v116) {
              return vF11("Udah aktif");
            }
            p30.push(p23.chat);
            fs2.writeFileSync("./database/antiwame2.json", JSON.stringify(p30, null, 2));
            vF11("Successfully Activate antiwame2 In This Group");
          } else if (v89[0] === "off") {
            if (!v116) {
              return vF11("Udah nonaktif");
            }
            let v314 = p30.indexOf(p23.chat);
            p30.splice(v314, 1);
            fs2.writeFileSync("./database/antiwame2.json", JSON.stringify(p30, null, 2));
            vF11("Successfully Disabling antiwame2 In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "antilink2":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot harus menjadi admin");
          }
          if (v89[0] === "on") {
            if (v112) {
              return vF11("Udah aktif");
            }
            p29.push(p23.chat);
            fs2.writeFileSync("./database/antilink2.json", JSON.stringify(p29, null, 2));
            vF11("Successfully Activate antilink2 In This Group");
          } else if (v89[0] === "off") {
            if (!v112) {
              return vF11("Udah nonaktif");
            }
            let v315 = p29.indexOf(p23.chat);
            p29.splice(v315, 1);
            fs2.writeFileSync("./database/antilink2.json", JSON.stringify(p29, null, 2));
            vF11("Successfully Disabling antilink2 In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "groupbot":
      case "grubbot":
      case "grupbot":
        {
          vF11(grubbot);
        }
        break;
      case "google":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Contoh : " + (v86 + v87) + " jerofc");
          }
          await f9();
          let googleIt = require("google-it");
          googleIt({
            query: v94
          }).then(p104 => {
            let v316 = "Google Search From : " + v94 + "\n\n";
            for (let v317 of p104) {
              v316 += "*Title* : " + v317.title + "\n";
              v316 += "*Description* : " + v317.snippet + "\n";
              v316 += "*Link* : " + v317.link + "\n\nIni Hasil Nya Kak\n\n";
            }
            vF11(v316);
          });
        }
        break;
      case "tes":
      case "runtime":
        {
          vF11("Runtime : " + vF3(process.uptime()));
        }
        break;
      case "antilinkall":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109 && !v92) {
            return vF11("Fitur Ini Khusus Admin !");
          }
          if (v89[0] === "on") {
            if (v102) {
              return vF11("Already activated");
            }
            v44.push(v101);
            fs2.writeFileSync("./database/antilinkall.json", JSON.stringify(v44));
            vF11("Success in turning on all antilink in this group");
            var v650 = await p22.groupMetadata(v101);
            var v651 = v650.participants;
            var v652 = [];
            v651.map(async p105 => {
              v652.push(p105.id.replace("c.us", "s.whatsapp.net"));
            });
          } else if (v89[0] === "off") {
            if (!v102) {
              return vF11("Already deactivated");
            }
            let v321 = v44.indexOf(v101);
            v44.splice(v321, 1);
            fs2.writeFileSync("./database/antilinkall.json", JSON.stringify(v44));
            vF11("Success in turning off all antilink in this group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "ping":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          const v322 = process.memoryUsage();
          const v323 = os2.cpus().map(p106 => {
            p106.total = Object.keys(p106.times).reduce((p107, p108) => p107 + p106.times[p108], 0);
            return p106;
          });
          const v324 = v323.reduce((p109, p110, p111, {
            length: _0x1c64b3
          }) => {
            p109.total += p110.total;
            p109.speed += p110.speed / _0x1c64b3;
            p109.times.user += p110.times.user;
            p109.times.nice += p110.times.nice;
            p109.times.sys += p110.times.sys;
            p109.times.idle += p110.times.idle;
            p109.times.irq += p110.times.irq;
            return p109;
          }, {
            speed: 0,
            total: 0,
            times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0
            }
          });
          let vPerformanceNow = performanceNow();
          let v325 = performanceNow() - vPerformanceNow;
          let v326 = performance.now();
          let v327 = performance.now();
          let v328 = ("\nKecepatan Respon " + v325.toFixed(4) + " _Second_ \n " + (v327 - v326) + " _miliseconds_\n\nRuntime : " + vF3(process.uptime()) + "\n Info Server\nRAM: " + formatp(os2.totalmem() - os2.freemem()) + " / " + formatp(os2.totalmem()) + "\n_NodeJS Memory Usaage_\n" + Object.keys(v322).map((p112, p113, p114) => p112.padEnd(Math.max(...p114.map(p115 => p115.length)), " ") + ": " + formatp(v322[p112])).join("\n") + "\n" + (v323[0] ? "_Total CPU Usage_\n" + v323[0].model.trim() + " (" + v324.speed + " MHZ)\n" + Object.keys(v324.times).map(p116 => "- *" + (p116 + "*").padEnd(6) + ": " + (v324.times[p116] * 100 / v324.total).toFixed(2) + "%").join("\n") + "\n_CPU Core(s) Usage (" + v323.length + " Core CPU)_\n" + v323.map((p117, p118) => p118 + 1 + ". " + p117.model.trim() + " (" + p117.speed + " MHZ)\n" + Object.keys(p117.times).map(p119 => "- *" + (p119 + "*").padEnd(6) + ": " + (p117.times[p119] * 100 / p117.total).toFixed(2) + "%").join("\n")).join("\n\n") : "") + "\n                ").trim();
          vF11(v328);
        }
        break;
      case "ytmp4":
      case "ytvideo":
        {
          if (!v89[0]) {
            return vF11("Link??\n\nContoh : " + (v86 + v87) + " https://youtu.be/c8ciDyBMZ6M?si=ak8FJrzhVVKQM9Qx");
          }
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          if (p23.isGroup) {
            vF11("Video akan di kirim di pribadi chat");
          }
          try {
            const {
              ytmp4: _0x11d785
            } = require("ruhend-scraper");
            const v329 = await _0x11d785(v89[0]);
            let v330 = "*[ YTMP4 DOWN ]*\n\n";
            v330 += "*TITLE :* " + v329.title + "\n";
            v330 += "*AUTHOR :* " + v329.author + "\n";
            v330 += "*VIEWS :* " + v329.views + "\n";
            v330 += "*DURATION :* " + v329.duration + "\n\n";
            v330 += "> MEDIA AKAN DI KIRIM DI PRIBADI CHAT";
            p22.sendFile(p23.chat, v329.thumbnail, null, v330, p23);
            const v331 = await v329.video;
            await p22.sendMessage(p23.sender, {
              document: {
                url: v331
              },
              mimetype: "video/mp4",
              fileName: v329.title + ".mp4",
              caption: v330
            }, {
              quoted: p23
            });
          } catch (_0x21284d) {
            console.log(_0x21284d);
            try {
              const v332 = await axios2.get("https://jerofc.xyz/api/ytmp4?url=" + v89[0]).then(p120 => {
                p22.sendMessage(p23.sender, {
                  document: {
                    url: p120.data.data.mp4
                  },
                  mimetype: "video/mp4",
                  fileName: p120.data.data.FileName_mp4,
                  caption: "SUCCESS"
                }, {
                  quoted: p23
                });
              });
            } catch (_0x1f8012) {
              console.log(_0x1f8012);
              vF11("GAGAL DOWNLOAD VIDEO");
            }
          }
        }
        break;
      case "pin":
      case "pinterest":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89[0]) {
            return vF11("Contoh Penggunaan : .pinterest Freya JKT48");
          }
          await f9();
          let jerApi4 = require("jer-api");
          let v333 = await jerApi4.pinterest(v89[0]);
          let v334 = Math.floor(Math.random() * v333.length);
          let v335 = v333[v334];
          let v336 = "\n╭─❒ 「 *PINTEREST* 」 \n│\n│ *NAME:* " + v335.fullname + "\n│ *USERNAME:* " + v335.username + "\n│ *FOLLOWER:* " + v335.follower + "\n│ *CREATE:* " + v335.createAt + "\n│ *ID:* " + v335.id + "\n│ *DESC:* " + v335.title + "\n│ *IMAGE:* " + v335.images + "\n│\n╰❒\n";
          p22.sendMessage(p23.chat, {
            image: {
              url: v335.images
            },
            caption: v336
          }, {
            quoted: p23
          });
        }
        break;
      case "bctext":
      case "broadcasttext":
      case "broadcast":
        if (!v92) {
          return vF11("Fitur khusus owner!");
        }
        if (!v94) {
          return vF11("Mana Text Nya ?");
        }
        let v337 = await p25.chats.all();
        for (let v338 of v337) {
          p22.sendMessage(v338.id, {
            text: namaowner + "'s Broadcast\n\nMessage : " + q
          });
          await vF6(1000);
        }
        break;
      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
      case "stiker":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("*Reply Video/Image With Caption* " + (v86 + v87));
          }
          if (/image/.test(v97)) {
            await f9();
            let v339 = await v96.download();
            let v340 = await p22.sendImageAsSticker(p23.chat, v339, p23, {
              packname: global.packname,
              author: global.author
            });
            await fs2.unlinkSync(v340);
          } else if (/video/.test(v97)) {
            if ((v96.msg || v96).seconds > 11) {
              return vF11("*Maximum 10 seconds!*");
            }
            let v341 = await v96.download();
            let v342 = await p22.sendVideoAsSticker(p23.chat, v341, p23, {
              packname: global.packname,
              author: global.author
            });
            await fs2.unlinkSync(v342);
          } else {
            vF11("Kirim/reply gambar/video/gif dengan caption " + (v86 + v87) + "\nDurasi Video/Gif 1-9 Detik");
          }
        }
        break;
      case "setnamabot":
      case "setnamebot":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (!v94) {
            return vF11("Contoh : " + (v86 + v87) + " WhatsApp ✅");
          }
          let v343 = await p22.updateProfileName(v94);
          vF11("Successfully renamed bot to " + v343);
        }
        break;
      case "setstatus":
      case "setbiobot":
      case "setbotbio":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (!v94) {
            return vF11("this is a WhatsApp Bot named JerOfc");
          }
          let v344 = await p22.updateProfileStatus(v94);
          vF11("Successfully changed bot bio status to ${name}");
        }
        break;
      case "song":
      case "ytvid":
      case "play":
      case "ytplay":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Example : " + (v86 + v87) + " Pesan Terakhir - Speed Up");
          }
          await f9();
          let youtubeYts = require("youtube-yts");
          let v345 = await youtubeYts("" + v94);
          let v346 = "*YOUTUBE SEARCH*\n\nID : " + v345.all[0].videoId + "\nTitle : " + v345.all[0].title + "\nViews : " + v345.all[0].views + "\nDuration : " + v345.all[0].timestamp + "\nChannel : " + v345.all[0].author.name + "\nChannel : " + v345.all[0].ago + "\nUpload : " + v345.all[0].ago + "\nURL Video : " + v345.videos[0].url + "\nDescription : " + v345.videos[0].description + "\n\nExample Download Audio/Video :\n\nDownload Audio : " + v86 + "ytmp3 " + v345.videos[0].url + "\n\nDownload Video : " + v86 + "ytmp4 " + v345.videos[0].url + "\n";
          p22.sendMessage(p23.chat, {
            image: {
              url: v345.all[0].image
            },
            caption: v346,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
        }
        break;
      case "ytmp3":
        {
          if (!v89[0]) {
            return vF11("Silahkan Input Url Dari Youtube\n\n" + (v86 + v87) + " https://youtu.be/c8ciDyBMZ6M?si=ak8FJrzhVVKQM9Qx");
          }
          await f9();
          if (p23.isGroup) {
            await vF11("Audio akan di kirim di pribadi chat");
          }
          try {
            const {
              ytmp3: _0x47d167
            } = require("ruhend-scraper");
            const v347 = await _0x47d167(v89[0]).then(p121 => {
              p22.sendMessage(p23.sender, {
                audio: {
                  url: p121.audio
                },
                mimetype: "audio/mpeg",
                ptt: false,
                contextInfo: {
                  externalAdReply: {
                    title: p121.title,
                    body: "YOUTUBE DOWNLOAD MP3",
                    previewType: "PHOTO",
                    thumbnailUrl: p121.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: v89[0]
                  }
                }
              }, {
                quoted: p23
              });
            });
          } catch (_0x48ed1f) {
            console.log(_0x48ed1f);
            try {
              const v348 = await axios2.get("https://api.betabotz.eu.org/api/download/ytmp3?url=" + v89[0] + "&apikey=" + btz).then(p122 => {
                p22.sendMessage(p23.sender, {
                  audio: {
                    url: p122.data.result.mp3
                  },
                  mimetype: "audio/mpeg",
                  ptt: false,
                  contextInfo: {
                    externalAdReply: {
                      title: p122.data.result.title,
                      body: "YOUTUBE DOWNLOAD MP3",
                      previewType: "PHOTO",
                      thumbnailUrl: p122.data.result.thumb,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                      sourceUrl: v89[0]
                    }
                  }
                }, {
                  quoted: p23
                });
              });
            } catch (_0x39fcf1) {
              console.log(_0x39fcf1);
              try {
                const v349 = await axios2.get("https://aemt.uk.to/download/ytdl?url=" + v89[0]).then(p123 => {
                  p22.sendMessage(p23.sender, {
                    audio: {
                      url: p123.data.result.mp3
                    },
                    mimetype: "audio/mpeg",
                    ptt: false,
                    contextInfo: {
                      externalAdReply: {
                        title: p123.data.result.title,
                        body: "YOUTUBE DOWNLOAD MP3",
                        previewType: "PHOTO",
                        thumbnailUrl: p123.data.result.thumb,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        sourceUrl: v89[0]
                      }
                    }
                  }, {
                    quoted: p23
                  });
                });
              } catch (_0x53450d) {
                console.log(_0x53450d);
                try {
                  const v350 = await axios2.get("https://api.agatz.xyz/api/ytmp3?url=" + v89[0]).then(p124 => {
                    p22.sendMessage(p23.chat, {
                      audio: {
                        url: p124.data.download
                      },
                      mimetype: "audio/mpeg",
                      ptt: true
                    }, {
                      quoted: p23
                    });
                  });
                } catch (_0x438230) {
                  console.log(_0x438230);
                  vF11("Gagal download audio");
                }
              }
            }
          }
        }
        break;
      case "smeme":
      case "stickmeme":
      case "stikmeme":
      case "stickermeme":
      case "stikermeme":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!v94) {
          return vF11("Send/Reply Photo With Caption " + (v86 + v87) + " *text*");
        }
        if (/image/.test(v97)) {
          try {
            await f9();
            mee = await v96.download();
            mem = await uptotelegra(mee);
            meme = "https://api.memegen.link/images/custom/-/" + v94 + ".png?background=" + mem;
            p22.sendImageAsSticker(p23.chat, meme, p23, {
              packname: global.packname,
              author: global.author
            });
          } catch (_0x31f34f) {
            console.log(_0x31f34f);
            vF11(_0x31f34f + "\n\nKIRIM FOTO / STICKER DENGAN COMMAND " + (v86 + v87));
          }
        }
        break;
      case "emojimix":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          let [v351, v352] = v94.split`+`;
          if (!v351) {
            return vF11("Contoh : " + (v86 + v87) + " 😅+🤔");
          }
          if (!v352) {
            return vF11("Contoh : " + (v86 + v87) + " 😅+🤔");
          }
          await f9();
          let v353 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(v351) + "_" + encodeURIComponent(v352));
          for (let v354 of v353.results) {
            let v355 = await p22.sendImageAsSticker(p23.chat, v354.url, p23, {
              packname: global.packname,
              author: global.author,
              categories: v354.tags
            });
            await fs2.unlinkSync(v355);
          }
        }
        break;
      case "emojimix2":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Contoh : " + (v86 + v87) + " 😅");
          }
          await f9();
          let v356 = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(v94));
          for (let v357 of v356.results) {
            let v358 = await p22.sendImageAsSticker(p23.chat, v357.url, p23, {
              packname: global.packname,
              author: global.author,
              categories: v357.tags
            });
            await fs2.unlinkSync(v358);
          }
        }
        break;
      case "ffstalk":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Kirim perintah " + (v86 + v87) + " id\nContoh: " + (v86 + v87) + " 12345678");
          }
          const v359 = v94.split(" ")[0];
          if (!v359) {
            return vF11("ID wajib di isi");
          }
          let jerApi5 = require("jer-api");
          jerApi5.ffstalk(v359).then(p125 => {
            if (p125.status !== 200) {
              return vF11(p125.msg);
            }
            vF11("*CEK NICK FF*\n\n*ID*: " + v359 + "\n*Nickname:* " + p125.nickname);
          });
        }
        break;
      case "mlstalk":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Kirim perintah " + (v86 + v87) + " id|zone\nContoh: " + (v86 + v87) + " 1234578|1234");
          }
          let v360 = q.split("|")[0];
          var v361 = q.split("|")[1];
          if (!v360) {
            return vF11("ID wajib di isi");
          }
          if (!v361) {
            return vF11("ZoneID wajib di isi");
          }
          let jerApi6 = require("jer-api");
          jerApi6.stalkml(v360, v361).then(p126 => {
            if (p126.status !== 200) {
              return vF11("Terjadi Kesalahan!!\nid/zone tidak ditemukan");
            }
            vF11("*STALKER ML*\n\t\t\nID: " + v360 + "\nZone: " + v361 + "\nNickname: " + p126.nickname);
          });
        }
        break;
      case "sendlinkgc":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin Cuy");
          }
          var v663 = v89.join(" ");
          var v664 = v663.split("|")[0];
          let v364 = v664 + "@s.whatsapp.net";
          if (!v89[0]) {
            return vF11("Penggunaan " + (v86 + v87) + " nomor\nContoh " + (v86 + v87) + " 6283852406727");
          }
          await f9();
          bnnd = v94.split("|")[0] + "@s.whatsapp.net";
          let v365 = await p22.groupInviteCode(v101);
          p22.sendText(bnnd, "https://chat.whatsapp.com/" + v365 + "\n\nLink Group : " + v99.subject, p23, {
            detectLink: true
          });
          p22.sendMessage(p23.chat, {
            text: "Link Sukses Terkirim\nKe @" + v364.split("@")[0],
            mentions: [v364]
          }, {
            quoted: p23
          });
        }
        break;
      case "assalamualaikum":
        {
          vF11("Waalaikumsalam");
        }
        break;
      case "broadcastvid":
      case "bcimage":
      case "broadcastvideo":
      case "broadcastvid":
        {
          if (!v92) {
            return vF11("Fitur khusus owner!");
          }
          if (!v94) {
            return vF11("Mana Text Nya ?");
          }
          let v366 = await p22.groupFetchAllParticipating();
          let v367 = Object.entries(v366).slice(0).map(p127 => p127[1]);
          let v368 = v367.map(p128 => p128.id);
          vF11(" Broadcasting in " + v368.length + " Group Chat, in " + v368.length * 1.5 + " seconds");
          for (let v369 of v368) {
            let v370 = namaowner + "'s Broadcast\n\nMessage : " + v94;
            if (/image/.test(v97)) {
              let v371 = await v96.download();
              await p22.sendMessage(v369, {
                image: v371,
                caption: v370,
                mentions: v100.map(p129 => p129.id)
              });
            }
            if (/video/.test(v97)) {
              let v372 = await v96.download();
              await p22.sendMessage(v369, {
                video: v372,
                caption: v370,
                mentions: v100.map(p130 => p130.id)
              });
            }
          }
          vF11("Sukses Broadcast");
        }
        break;
      case "tagall":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin Cuy");
          }
          let v373 = "╚» Tag All «╝ \n\t\n🌿 *Message : " + (q ? q : "empty") + "*\n\n";
          for (let v374 of v100) {
            v373 += "@" + v374.id.split("@")[0] + "\n";
          }
          p22.sendMessage(p23.chat, {
            text: v373,
            mentions: v100.map(p131 => p131.id)
          }, {
            quoted: p23
          });
        }
        break;
      case "china":
      case "indonesia":
      case "malaysia":
      case "thailand":
      case "korea":
      case "japan":
      case "vietnam":
      case "jenni":
      case "jiiso":
      case "lisa":
      case "rose":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          let v375 = await nodeFetch(global.api("alfa", "/api/cecan/" + v87, {}, "apikey"));
          if (!v375.ok) {
            throw await v375.text();
          }
          let v376 = await v375.buffer();
          p22.sendFile(p23.chat, v376, "cecan.jpg", "CANTIK KAN BANG ISTRI KITA ?", p23);
        }
        break;
      case "tebakgambar":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v7[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v7[p23.chat][0]
            });
          }
          let v377 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json");
          let v378 = v377[Math.floor(Math.random() * v377.length)];
          console.log("Jawaban: " + v378.jawaban);
          v7[p23.chat] = [await p22.sendMessage(p23.chat, {
            image: {
              url: v378.img
            },
            caption: "Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : " + v378.deskripsi + "\nWaktu : " + 120 .toFixed(2) + " detik"
          }, {
            quoted: p23
          }), v378, 250, setTimeout(() => {
            if (v7[p23.chat]) {
              vF11(vF2(v378.jawaban) + "\n\nkirim perintah .tebakgambar untuk bermain lagi!");
              delete v7[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "tega":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v7)) {
            return;
          }
          let v379 = v7[p23.chat][1];
          vF11("```" + v379.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "ytega":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v7)) {
            return;
          }
          clearTimeout(v7[p23.chat][3]);
          delete v7[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebakkata":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v8[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v8[p23.chat][0]
            });
          }
          let v380 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json");
          let v381 = v380[Math.floor(Math.random() * v380.length)];
          console.log("Jawaban: " + v381.jawaban);
          v8[p23.chat] = [await p22.sendText(p23.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + v381.soal + "\nWaktu : " + 120 .toFixed(2) + " detik", p23), v381, 250, setTimeout(() => {
            if (v8[p23.chat]) {
              vF11(vF2(v381.jawaban) + "\n\nkirim perintah .tebakkata untuk bermain lagi!");
              delete v8[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "teka":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v8)) {
            return;
          }
          let v382 = v8[p23.chat][1];
          vF11("```" + v382.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "yteka":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v8)) {
            return;
          }
          clearTimeout(v8[p23.chat][3]);
          delete v8[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebakbendera":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v9[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v9[p23.chat][0]
            });
          }
          let v383 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json");
          let v384 = v383[Math.floor(Math.random() * v383.length)];
          console.log("Jawaban: " + v384.name);
          v9[p23.chat] = [await p22.sendMessage(p23.chat, {
            image: {
              url: v384.img
            },
            caption: "Gambar diatas adalah bendera negara?\n\nWaktu : " + 120 .toFixed(2) + " detik"
          }, {
            quoted: p23
          }), v384, 250, setTimeout(() => {
            if (v9[p23.chat]) {
              vF11(vF2(v384.jawaban) + "\n\nkirim perintah .tebakbendera untuk bermain lagi!");
              delete v9[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "tebe":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v9)) {
            return;
          }
          let v385 = v9[p23.chat][1];
          vF11("```" + v385.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "ytebe":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v9)) {
            return;
          }
          clearTimeout(v9[p23.chat][3]);
          delete v9[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebakkalimat":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v11[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v11[p23.chat][0]
            });
          }
          let v386 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json");
          let v387 = v386[Math.floor(Math.random() * v386.length)];
          console.log("Jawaban: " + v387.jawaban);
          v11[p23.chat] = [await p22.sendText(p23.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + v387.soal + "\nWaktu : " + 120 .toFixed(2) + " detik", p23), v387, 250, setTimeout(() => {
            if (v11[p23.chat]) {
              vF11(vF2(v387.jawaban) + "\n\nkirim perintah .tebakkalimat untuk bermain lagi!");
              delete v11[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "tekatu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v11)) {
            return;
          }
          let v388 = v11[p23.chat][1];
          vF11("```" + v388.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "ytekatu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v11)) {
            return;
          }
          clearTimeout(v11[p23.chat][3]);
          delete v11[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebaksiapa":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v10[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v10[p23.chat][0]
            });
          }
          let v389 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json");
          let v390 = v389[Math.floor(Math.random() * v389.length)];
          console.log("Jawaban: " + v390.jawaban);
          v10[p23.chat] = [await p22.sendText(p23.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + v390.soal + "\nWaktu : " + 120 .toFixed(2) + " detik", p23), v390, 250, setTimeout(() => {
            if (v10[p23.chat]) {
              vF11(vF2(v390.jawaban) + "\n\nkirim perintah .tebaksiapa untuk bermain lagi!");
              delete v10[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "tesi":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v10)) {
            return;
          }
          let v391 = v10[p23.chat][1];
          vF11("```" + v391.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "ytesi":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v10)) {
            return;
          }
          clearTimeout(v10[p23.chat][3]);
          delete v10[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebakkimia":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v16[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v16[p23.chat][0]
            });
          }
          let v392 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json");
          let v393 = v392[Math.floor(Math.random() * v392.length)];
          console.log("Jawaban: " + v393.unsur);
          v16[p23.chat] = [await p22.sendText(p23.chat, "Apa Arti Dari Simbol : *" + v393.lambang + "*?\nWaktu : " + 120 .toFixed(2) + " detik", p23), v393, 250, setTimeout(() => {
            if (v16[p23.chat]) {
              vF11(vF2(v393.unsur) + "\n\nkirim perintah .tebakkimia untuk bermain lagi!");
              delete v16[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "teki":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v16)) {
            return;
          }
          let v394 = v16[p23.chat][1];
          vF11("```" + v394.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "yteki":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v16)) {
            return;
          }
          clearTimeout(v16[p23.chat][3]);
          delete v16[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebaklirik":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v17[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v17[p23.chat][0]
            });
          }
          let v395 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json");
          let v396 = v395[Math.floor(Math.random() * v395.length)];
          console.log("Jawaban: " + v396.jawaban);
          v17[p23.chat] = [await p22.sendText(p23.chat, "Ini Adalah Lirik Dari Lagu? : *" + v396.soal + "*?\nWaktu : " + 120 .toFixed(2) + " detik", p23), v396, 250, setTimeout(() => {
            if (v17[p23.chat]) {
              vF11(vF2(v396.jawaban) + "\n\nkirim perintah .tebaklirik untuk bermain lagi!");
              delete v17[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "teli":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v17)) {
            return;
          }
          let v397 = v17[p23.chat][1];
          vF11("```" + v397.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "yteli":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v17)) {
            return;
          }
          clearTimeout(v17[p23.chat][3]);
          delete v17[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tebaktebakan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v18[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v18[p23.chat][0]
            });
          }
          let v398 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json");
          let v399 = v398[Math.floor(Math.random() * v398.length)];
          console.log("Jawaban: " + v399.jawaban);
          v18[p23.chat] = [await p22.sendText(p23.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + v399.soal + "\nWaktu : " + 120 .toFixed(2) + " detik", p23), v399, 250, setTimeout(() => {
            if (v18[p23.chat]) {
              vF11(vF2(v399.jawaban) + "\n\nkirim perintah .tebaktebakan untuk bermain lagi!");
              delete v18[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "teteb":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v18)) {
            return;
          }
          let v400 = v18[p23.chat][1];
          vF11("```" + v400.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "yteteb":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v18)) {
            return;
          }
          clearTimeout(v18[p23.chat][3]);
          delete v18[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "susunkata":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v13[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v13[p23.chat][0]
            });
          }
          let v401 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json");
          let v402 = v401[Math.floor(Math.random() * v401.length)];
          console.log("Jawaban: " + v402.jawaban);
          v13[p23.chat] = [await p22.sendText(p23.chat, "*Jawablah Pertanyaan Berikut :*\nSoal : " + v402.soal + "\nTipe : " + v402.tipe + "\nWaktu : " + 120 .toFixed(2) + " detik", p23), v402, 250, setTimeout(() => {
            if (v13[p23.chat]) {
              vF11(vF2(v402.jawaban) + "\n\nkirim perintah .susunkata untuk bermain lagi!");
              delete v13[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "tesuka":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v13)) {
            return;
          }
          let v403 = v13[p23.chat][1];
          vF11("```" + v403.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "ytesuka":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v13)) {
            return;
          }
          clearTimeout(v13[p23.chat][3]);
          delete v13[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "tekateki":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (v14[p23.chat]) {
            return p22.sendMessage(p23.chat, {
              text: "Soal ini belum selesai"
            }, {
              quoted: v14[p23.chat][0]
            });
          }
          let v404 = await fetchJson("https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json");
          let v405 = v404[Math.floor(Math.random() * v404.length)];
          console.log("Jawaban: " + v405.jawaban);
          v14[p23.chat] = [await p22.sendText(p23.chat, "Silahkan Jawab Pertanyaan Berikut\n\n" + v405.soal + "\nWaktu : " + 120 .toFixed(2) + " detik", p23), v405, 250, setTimeout(() => {
            if (v14[p23.chat]) {
              vF11(vF2(v405.jawaban) + "\n\nkirim perintah .tekateki untuk bermain lagi!");
              delete v14[p23.chat];
            }
          }, 120000)];
        }
        break;
      case "tete":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v14)) {
            return;
          }
          let v406 = v14[p23.chat][1];
          vF11("```" + v406.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "_") + "```\n\nDah Lah Nyerah Aja Lu");
        }
        break;
      case "ttete":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!(p23.chat in v14)) {
            return;
          }
          clearTimeout(v14[p23.chat][3]);
          delete v14[p23.chat];
          return vF11("Payah lu, gitu aja nyerah");
        }
        break;
      case "swm":
      case "stickerwm":
      case "wm":
      case "take":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89.join(" ")) {
            return vF11("Contoh :\n" + (v86 + v87) + " V.S.L");
          }
          await f9();
          try {
            const v407 = v89.join(" ");
            const v408 = v407.split("|")[0];
            const v409 = v407.split("|")[1];
            if (p23.quoted.isAnimated === true) {
              p22.downloadAndSaveMediaMessage(v96, "gifee");
              p22.sendMessage(v101, {
                sticker: fs2.readFileSync("gifee.webp")
              }, {
                quoted: p23
              });
            } else if (/image/.test(v97)) {
              let v410 = await v96.download();
              let v411 = await p22.sendImageAsSticker(p23.chat, v410, p23, {
                packname: v408,
                author: global.atnm
              });
              await fs2.unlinkSync(v411);
            } else if (/video/.test(v97)) {
              if ((v96.msg || v96).seconds > 11) {
                return vF11("Maximum 10 seconds!");
              }
              let v412 = await v96.download();
              let v413 = await p22.sendVideoAsSticker(p23.chat, v412, p23, {
                packname: v408,
                author: v409
              });
              await fs2.unlinkSync(v413);
            } else {
              vF11("Send Image/Video With Caption " + (v86 + v87) + "\nVideo Duration 1-9 Seconds");
            }
          } catch (_0x577014) {
            console.log(_0x577014);
            vF11(_0x577014 + "\n\nMANA STICKER YANG MAU DI UBAH WM NYA KAK?");
          }
        }
        break;
      case "wuyifan":
      case "suga":
      case "parkchanyeol":
      case "ohsehun":
      case "luhan":
      case "kimtaehyung":
      case "kimseok":
      case "kimnanjoon":
      case "kimminseok":
      case "kimjunmyeon":
      case "kimjong":
      case "kimjondae":
      case "jungkook":
      case "jimin":
      case "jhope":
      case "huangzitao":
      case "dohkyungsoo":
      case "baekhyung":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          let v414 = await nodeFetch(global.api("alfa", "/api/cogan/" + v87, {}, "apikey"));
          if (!v414.ok) {
            throw await v414.text();
          }
          let v415 = await v414.buffer();
          p22.sendFile(p23.chat, v415, "cogan.jpg", "GANTENG GA KA ?", p23);
        }
        break;
      case "close":
      case "tutup":
        {
          if (!p23.isGroup) {
            return p23.reply("Fitur Khusus Group!");
          }
          if (!v109) {
            return p23.reply("Fitur Khusus admin!");
          }
          if (!v108) {
            return p23.reply("Bot bukan admin");
          }
          p22.groupSettingUpdate(p23.chat, "announcement");
          const v416 = await getTextSetClose(p23.chat, p36);
          vF11(v416 || "Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini");
        }
        break;
      case "open":
      case "buka":
        {
          if (!p23.isGroup) {
            return p23.reply("Fitur Khusus Group!");
          }
          if (!v109) {
            return p23.reply("Fitur Khusus admin!");
          }
          if (!v108) {
            return p23.reply("Bot bukan admin");
          }
          p22.groupSettingUpdate(p23.chat, "not_announcement");
          const v417 = await getTextSetOpen(p23.chat, p35);
          vF11(v417 || "Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini");
        }
        break;
      case "group":
      case "grup":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Jadikan bot sebagai admin terlebih dahulu");
          }
          if (v89[0] === "close") {
            await p22.groupSettingUpdate(p23.chat, "announcement").then(p132 => vF11("*Successfully Closed The Group*")).catch(p133 => vF11(vF8(p133)));
          } else if (v89[0] === "open") {
            await p22.groupSettingUpdate(p23.chat, "not_announcement").then(p134 => vF11("*Successfully Opened The Group*")).catch(p135 => vF11(vF8(p135)));
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " open/close\n\nContoh: " + (v86 + v87) + " open");
          }
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          Jer_dev = await getBuffer("https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/" + v87 + ".mp3");
          await p22.sendMessage(p23.chat, {
            audio: Jer_dev,
            mimetype: "audio/mp4",
            ptt: true
          }, {
            quoted: p23
          });
        }
        break;
      case "pushkon":
      case "push":
      case "pushkontak":
        {
          if (!v92 && !p23.key.fromMe) {
            return vF11("Fitur khusus owner!");
          }
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          if (!v94) {
            return vF11("Kirim perintah:\n" + (v86 + v87) + "\n\nContoh : Sve Jer Nama Mu Siapa Biar Ku Back?");
          }
          let v418 = await v100.filter(p136 => p136.id.endsWith(".net")).map(p137 => p137.id);
          for (let v419 of v418) {
            p22.sendMessage(v419, {
              text: q
            });
            await vF6(20000);
          }
          p22.sendMessage(p23.chat, {
            text: "Sukses Push Kontak Nya Kak, Semoga Banyak Yang Sve Back"
          }, {
            quoted: v127
          });
        }
        break;
      case "anticall":
        {
          if (!p23.key.fromMe && !v92) {
            return vF11("Fitur khusus owner!");
          }
          if (v89[0] === "on") {
            if (global.anticall === true) {
              return vF11("Sudah Di Aktifkan Sebelumnya");
            }
            global.anticall = true;
            vF11("Berhasil Mengaktifkan Anticall");
          } else if (v89[0] === "off") {
            if (global.anticall === false) {
              return vF11("Sudah Di Nonaktifkan Sebelumnya");
            }
            global.anticall = false;
            vF11("Sukses Nonaktifkan Anticall");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "nomerhoki":
      case "nomorhoki":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!Number(v94)) {
            throw "Contoh : " + (v86 + v87) + " 6283852406727";
          }
          let v420 = await v.nomer_hoki(Number(v94));
          if (v420.status == false) {
            return vF11(v420.message);
          }
          p22.sendText(p23.chat, " *Nomor HP :* " + v420.message.nomer_hp + "\n *Angka Shuzi :* " + v420.message.angka_shuzi + "\n *Energi Positif :*\n- Kekayaan : " + v420.message.energi_positif.kekayaan + "\n- Kesehatan : " + v420.message.energi_positif.kesehatan + "\n- Cinta : " + v420.message.energi_positif.cinta + "\n- Kestabilan : " + v420.message.energi_positif.kestabilan + "\n- Persentase : " + v420.message.energi_positif.persentase + "\n *Energi Negatif :*\n- Perselisihan : " + v420.message.energi_negatif.perselisihan + "\n- Kehilangan : " + v420.message.energi_negatif.kehilangan + "\n- Malapetaka : " + v420.message.energi_negatif.malapetaka + "\n- Kehancuran : " + v420.message.energi_negatif.kehancuran + "\n- Persentase : " + v420.message.energi_negatif.persentase, p23);
        }
        break;
      case "artimimpi":
      case "tafsirmimpi":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " belanja";
          }
          let v421 = await v.tafsir_mimpi(v94);
          if (v421.status == false) {
            return vF11(v421.message);
          }
          p22.sendText(p23.chat, " *Mimpi :* " + v421.message.mimpi + "\n *Arti :* " + v421.message.arti + "\n *Solusi :* " + v421.message.solusi, p23);
        }
        break;
      case "ramalanjodoh":
      case "ramaljodoh":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005, Novia, 16, 11, 2004";
          }
          let [v422, v423, v424, v425, v426, v427, v428, v429] = v94.split`,`;
          let v430 = await v.ramalan_jodoh(v422, v423, v424, v425, v426, v427, v428, v429);
          if (v430.status == false) {
            return vF11(v430.message);
          }
          p22.sendText(p23.chat, " *Nama Anda :* " + v430.message.nama_anda.nama + "\n *Lahir Anda :* " + v430.message.nama_anda.tgl_lahir + "\n *Nama Pasangan :* " + v430.message.nama_pasangan.nama + "\n *Lahir Pasangan :* " + v430.message.nama_pasangan.tgl_lahir + "\n *Hasil :* " + v430.message.result + "\n *Catatan :* " + v430.message.catatan, p23);
        }
        break;
      case "ramalanjodohbali":
      case "ramaljodohbali":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005, Novia, 16, 11, 2004";
          }
          let [v431, v432, v433, v434, v435, v436, v437, v438] = v94.split`,`;
          let v439 = await v.ramalan_jodoh_bali(v431, v432, v433, v434, v435, v436, v437, v438);
          if (v439.status == false) {
            return vF11(v439.message);
          }
          p22.sendText(p23.chat, " *Nama Anda :* " + v439.message.nama_anda.nama + "\n *Lahir Anda :* " + v439.message.nama_anda.tgl_lahir + "\n *Nama Pasangan :* " + v439.message.nama_pasangan.nama + "\n *Lahir Pasangan :* " + v439.message.nama_pasangan.tgl_lahir + "\n *Hasil :* " + v439.message.result + "\n *Catatan :* " + v439.message.catatan, p23);
        }
        break;
      case "suamiistri":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005, Novia, 16, 11, 2004";
          }
          let [v440, v441, v442, v443, v444, v445, v446, v447] = v94.split`,`;
          let v448 = await v.suami_istri(v440, v441, v442, v443, v444, v445, v446, v447);
          if (v448.status == false) {
            return vF11(v448.message);
          }
          p22.sendText(p23.chat, " *Nama Suami :* " + v448.message.suami.nama + "\n *Lahir Suami :* " + v448.message.suami.tgl_lahir + "\n *Nama Istri :* " + v448.message.istri.nama + "\n *Lahir Istri :* " + v448.message.istri.tgl_lahir + "\n *Hasil :* " + v448.message.result + "\n *Catatan :* " + v448.message.catatan, p23);
        }
        break;
      case "ramalancinta":
      case "ramalcinta":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005, Novia, 16, 11, 2004";
          }
          let [v449, v450, v451, v452, v453, v454, v455, v456] = v94.split`,`;
          let v457 = await v.ramalan_cinta(v449, v450, v451, v452, v453, v454, v455, v456);
          if (v457.status == false) {
            return vF11(v457.message);
          }
          p22.sendText(p23.chat, " *Nama Anda :* " + v457.message.nama_anda.nama + "\n *Lahir Anda :* " + v457.message.nama_anda.tgl_lahir + "\n *Nama Pasangan :* " + v457.message.nama_pasangan.nama + "\n *Lahir Pasangan :* " + v457.message.nama_pasangan.tgl_lahir + "\n *Sisi Positif :* " + v457.message.sisi_positif + "\n *Sisi Negatif :* " + v457.message.sisi_negatif + "\n *Catatan :* " + v457.message.catatan, p23);
        }
        break;
      case "artinama":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika Ardianta";
          }
          let v458 = await v.arti_nama(v94);
          if (v458.status == false) {
            return vF11(v458.message);
          }
          p22.sendText(p23.chat, " *Nama :* " + v458.message.nama + "\n *Arti :* " + v458.message.arti + "\n *Catatan :* " + v458.message.catatan, p23);
        }
        break;
      case "kecocokannama":
      case "cocoknama":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005";
          }
          let [v459, v460, v461, v462] = v94.split`,`;
          let v463 = await v.kecocokan_nama(v459, v460, v461, v462);
          if (v463.status == false) {
            return vF11(v463.message);
          }
          p22.sendText(p23.chat, " *Nama :* " + v463.message.nama + "\n *Lahir :* " + v463.message.tgl_lahir + "\n *Life Path :* " + v463.message.life_path + "\n *Destiny :* " + v463.message.destiny + "\n *Destiny Desire :* " + v463.message.destiny_desire + "\n *Personality :* " + v463.message.personality + "\n *Persentase :* " + v463.message.persentase_kecocokan, p23);
        }
        break;
      case "kecocokanpasangan":
      case "cocokpasangan":
      case "pasangan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika|Novia";
          }
          let [v464, v465] = v94.split`|`;
          let v466 = await v.kecocokan_nama_pasangan(v464, v465);
          if (v466.status == false) {
            return vF11(v466.message);
          }
          p22.sendImage(p23.chat, v466.message.gambar, " *Nama Anda :* " + v466.message.nama_anda + "\n *Nama Pasangan :* " + v466.message.nama_pasangan + "\n *Sisi Positif :* " + v466.message.sisi_positif + "\n *Sisi Negatif :* " + v466.message.sisi_negatif, p23);
        }
        break;
      case "jadianpernikahan":
      case "jadiannikah":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 6, 12, 2020";
          }
          let [v467, v468, v469] = v94.split`,`;
          let v470 = await v.tanggal_jadian_pernikahan(v467, v468, v469);
          if (v470.status == false) {
            return vF11(v470.message);
          }
          p22.sendText(p23.chat, " *Tanggal Pernikahan :* " + v470.message.tanggal + "\n *karakteristik :* " + v470.message.karakteristik, p23);
        }
        break;
      case "sifatusaha":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!ext) {
            throw "Contoh : " + (v86 + v87) + " 28, 12, 2021";
          }
          let [v471, v472, v473] = v94.split`,`;
          let v474 = await v.sifat_usaha_bisnis(v471, v472, v473);
          if (v474.status == false) {
            return vF11(v474.message);
          }
          p22.sendText(p23.chat, " *Lahir :* " + v474.message.hari_lahir + "\n *Usaha :* " + v474.message.usaha, p23);
        }
        break;
      case "rejeki":
      case "rezeki":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v475, v476, v477] = v94.split`,`;
          let v478 = await v.rejeki_hoki_weton(v475, v476, v477);
          if (v478.status == false) {
            return vF11(v478.message);
          }
          p22.sendText(p23.chat, " *Lahir :* " + v478.message.hari_lahir + "\n *Rezeki :* " + v478.message.rejeki + "\n *Catatan :* " + v478.message.catatan, p23);
        }
        break;
      case "pekerjaan":
      case "kerja":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v479, v480, v481] = v94.split`,`;
          let v482 = await v.pekerjaan_weton_lahir(v479, v480, v481);
          if (v482.status == false) {
            return vF11(v482.message);
          }
          p22.sendText(p23.chat, " *Lahir :* " + v482.message.hari_lahir + "\n *Pekerjaan :* " + v482.message.pekerjaan + "\n *Catatan :* " + v482.message.catatan, p23);
        }
        break;
      case "ramalannasib":
      case "ramalnasib":
      case "nasib":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : 7, 7, 2005";
          }
          let [v483, v484, v485] = v94.split`,`;
          let v486 = await v.ramalan_nasib(v483, v484, v485);
          if (v486.status == false) {
            return vF11(v486.message);
          }
          p22.sendText(p23.chat, " *Analisa :* " + v486.message.analisa + "\n *Angka Akar :* " + v486.message.angka_akar + "\n *Sifat :* " + v486.message.sifat + "\n *Elemen :* " + v486.message.elemen + "\n *Angka Keberuntungan :* " + v486.message.angka_keberuntungan, p23);
        }
        break;
      case "potensipenyakit":
      case "penyakit":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v487, v488, v489] = v94.split`,`;
          let v490 = await v.cek_potensi_penyakit(v487, v488, v489);
          if (v490.status == false) {
            return vF11(v490.message);
          }
          p22.sendText(p23.chat, " *Analisa :* " + v490.message.analisa + "\n *Sektor :* " + v490.message.sektor + "\n *Elemen :* " + v490.message.elemen + "\n *Catatan :* " + v490.message.catatan, p23);
        }
        break;
      case "artitarot":
      case "tarot":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v491, v492, v493] = v94.split`,`;
          let v494 = await v.arti_kartu_tarot(v491, v492, v493);
          if (v494.status == false) {
            return vF11(v494.message);
          }
          p22.sendImage(p23.chat, v494.message.image, " *Lahir :* " + v494.message.tgl_lahir + "\n *Simbol Tarot :* " + v494.message.simbol_tarot + "\n *Arti :* " + v494.message.arti + "\n *Catatan :* " + v494.message.catatan, p23);
        }
        break;
      case "fengshui":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 1, 2005\n\nNote : " + (v86 + v87) + " Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan";
          }
          let [v495, v496, v497] = v94.split`,`;
          let v498 = await v.perhitungan_feng_shui(v495, v496, v497);
          if (v498.status == false) {
            return vF11(v498.message);
          }
          p22.sendText(p23.chat, " *Nama :* " + v498.message.nama + "\n *Lahir :* " + v498.message.tahun_lahir + "\n *Gender :* " + v498.message.jenis_kelamin + "\n *Angka Kua :* " + v498.message.angka_kua + "\n *Kelompok :* " + v498.message.kelompok + "\n *Karakter :* " + v498.message.karakter + "\n *Sektor Baik :* " + v498.message.sektor_baik + "\n *Sektor Buruk :* " + v498.message.sektor_buruk, p23);
        }
        break;
      case "haribaik":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v499, v500, v501] = v94.split`,`;
          let v502 = await v.petung_hari_baik(v499, v500, v501);
          if (v502.status == false) {
            return vF11(v502.message);
          }
          p22.sendText(p23.chat, " *Lahir :* " + v502.message.tgl_lahir + "\n *Kala Tinantang :* " + v502.message.kala_tinantang + "\n *Info :* " + v502.message.info + "\n *Catatan :* " + v502.message.catatan, p23);
        }
        break;
      case "harisangar":
      case "taliwangke":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v503, v504, v505] = v94.split`,`;
          let v506 = await v.hari_sangar_taliwangke(v503, v504, v505);
          if (v506.status == false) {
            return vF11(v506.message);
          }
          p22.sendText(p23.chat, " *Lahir :* " + v506.message.tgl_lahir + "\n *Hasil :* " + v506.message.result + "\n *Info :* " + v506.message.info + "\n *Catatan :* " + v506.message.catatan, p23);
        }
        break;
      case "harinaas":
      case "harisial":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v507, v508, v509] = v94.split`,`;
          let v510 = await v.primbon_hari_naas(v507, v508, v509);
          if (v510.status == false) {
            return vF11(v510.message);
          }
          p22.sendText(p23.chat, " *Hari Lahir :* " + v510.message.hari_lahir + "\n *Tanggal Lahir :* " + v510.message.tgl_lahir + "\n *Hari Naas :* " + v510.message.hari_naas + "\n *Info :* " + v510.message.catatan + "\n *Catatan :* " + v510.message.info, p23);
        }
        break;
      case "nagahari":
      case "harinaga":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v511, v512, v513] = v94.split`,`;
          let v514 = await v.rahasia_naga_hari(v511, v512, v513);
          if (v514.status == false) {
            return vF11(v514.message);
          }
          p22.sendText(p23.chat, " *Hari Lahir :* " + v514.message.hari_lahir + "\n *Tanggal Lahir :* " + v514.message.tgl_lahir + "\n *Arah Naga Hari :* " + v514.message.arah_naga_hari + "\n *Catatan :* " + v514.message.catatan, p23);
        }
        break;
      case "arahrejeki":
      case "arahrezeki":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v515, v516, v517] = v94.split`,`;
          let v518 = await v.primbon_arah_rejeki(v515, v516, v517);
          if (v518.status == false) {
            return vF11(v518.message);
          }
          p22.sendText(p23.chat, " *Hari Lahir :* " + v518.message.hari_lahir + "\n *tanggal Lahir :* " + v518.message.tgl_lahir + "\n *Arah Rezeki :* " + v518.message.arah_rejeki + "\n *Catatan :* " + v518.message.catatan, p23);
        }
        break;
      case "peruntungan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " DIka, 7, 7, 2005, 2022\n\nNote : " + (v86 + v87) + " Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun";
          }
          let [v519, v520, v521, v522, v523] = v94.split`,`;
          let v524 = await v.ramalan_peruntungan(v519, v520, v521, v522, v523);
          if (v524.status == false) {
            return vF11(v524.message);
          }
          p22.sendText(p23.chat, " *Nama :* " + v524.message.nama + "\n *Lahir :* " + v524.message.tgl_lahir + "\n *Peruntungan Tahun :* " + v524.message.peruntungan_tahun + "\n *Hasil :* " + v524.message.result + "\n *Catatan :* " + v524.message.catatan, p23);
        }
        break;
      case "weton":
      case "wetonjawa":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 7, 7, 2005";
          }
          let [v525, v526, v527] = v94.split`,`;
          let v528 = await v.weton_jawa(v525, v526, v527);
          if (v528.status == false) {
            return vF11(v528.message);
          }
          p22.sendText(p23.chat, " *Tanggal :* " + v528.message.tanggal + "\n *Jumlah Neptu :* " + v528.message.jumlah_neptu + "\n *Watak Hari :* " + v528.message.watak_hari + "\n *Naga Hari :* " + v528.message.naga_hari + "\n *Jam Baik :* " + v528.message.jam_baik + "\n *Watak Kelahiran :* " + v528.message.watak_kelahiran, p23);
        }
        break;
      case "sifat":
      case "karakter":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005";
          }
          let [v529, v530, v531, v532] = v94.split`,`;
          let v533 = await v.sifat_karakter_tanggal_lahir(v529, v530, v531, v532);
          if (v533.status == false) {
            return vF11(v533.message);
          }
          p22.sendText(p23.chat, " *Nama :* " + v533.message.nama + "\n *Lahir :* " + v533.message.tgl_lahir + "\n *Garis Hidup :* " + v533.message.garis_hidup, p23);
        }
        break;
      case "keberuntungan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " Dika, 7, 7, 2005";
          }
          let [v534, v535, v536, v537] = v94.split`,`;
          let v538 = await v.potensi_keberuntungan(v534, v535, v536, v537);
          if (v538.status == false) {
            return vF11(v538.message);
          }
          p22.sendText(p23.chat, " *Nama :* " + v538.message.nama + "\n *Lahir :* " + v538.message.tgl_lahir + "\n *Hasil :* " + v538.message.result, p23);
        }
        break;
      case "memancing":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 12, 1, 2022";
          }
          let [v539, v540, v541] = v94.split`,`;
          let v542 = await v.primbon_memancing_ikan(v539, v540, v541);
          if (v542.status == false) {
            return vF11(v542.message);
          }
          p22.sendText(p23.chat, " *Tanggal :* " + v542.message.tgl_memancing + "\n *Hasil :* " + v542.message.result + "\n *Catatan :* " + v542.message.catatan, p23);
        }
        break;
      case "masasubur":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " 12, 1, 2022, 28\n\nNote : " + (v86 + v87) + " hari pertama menstruasi, siklus";
          }
          let [v543, v544, v545, v546] = v94.split`,`;
          let v547 = await v.masa_subur(v543, v544, v545, v546);
          if (v547.status == false) {
            return vF11(v547.message);
          }
          p22.sendText(p23.chat, " *Hasil :* " + v547.message.result + "\n *Catatan :* " + v547.message.catatan, p23);
        }
        break;
      case "shio":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " tikus\n\nNote : For Detail https://primbon.com/shio.htm";
          }
          let v548 = await v.shio(v94);
          if (v548.status == false) {
            return vF11(v548.message);
          }
          p22.sendText(p23.chat, " *Hasil :* " + v548.message, p23);
        }
        break;
      case "chika":
      case "rikagusriani":
      case "bocil":
      case "geayubi":
      case "santuy":
      case "ukhty":
      case "asupan":
      case "delvira":
      case "ayu":
      case "bunga":
      case "aura":
      case "nisa":
      case "ziva":
      case "yana":
      case "viona":
      case "syania":
      case "riri":
      case "syifa":
      case "mama-gina":
      case "alcakenya":
      case "mangayutri":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          let v549 = await nodeFetch(global.api("alfa", "/api/asupan/" + v87, {}, "apikey"));
          if (!v549.ok) {
            throw await v549.text();
          }
          let v550 = await v549.buffer();
          p22.sendFile(p23.chat, v550, "asupan.mp4", "*DONE*", p23);
        }
        break;
      case "setexif":
        {
          if (!v92 && !p23.key.fromMe) {
            return vF11("Fitur khusus owner!");
          }
          if (!v94) {
            throw "Contoh : " + (v86 + v87) + " packname|author";
          }
          global.packname = v94.split("|")[0];
          global.author = v94.split("|")[1];
          vF11("Exif berhasil diubah menjadi\n\nPackname : " + global.packname + "\nAuthor : " + global.author);
        }
        break;
      case "halah":
      case "hilih":
      case "huluh":
      case "heleh":
      case "holoh":
        if (!p23.quoted && !v94) {
          throw "Kirim/reply text dengan caption " + (v86 + v87);
        }
        ter = v87[1].toLowerCase();
        tex = p23.quoted ? p23.quoted.text ? p23.quoted.text : q ? q : p23.text : q ? q : p23.text;
        vF11(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()));
        break;
      case "memek":
      case "bego":
      case "goblok":
      case "janda":
      case "perawan":
      case "babi":
      case "tolol":
      case "pinter":
      case "pintar":
      case "asu":
      case "bodoh":
      case "gay":
      case "lesby":
      case "bajingan":
      case "jancok":
      case "anjing":
      case "ngentod":
      case "ngentot":
      case "monyet":
      case "mastah":
      case "newbie":
      case "bangsat":
      case "bangke":
      case "sange":
      case "sangean":
      case "dakjal":
      case "horny":
      case "wibu":
      case "puki":
      case "peak":
      case "pantex":
      case "pantek":
      case "setan":
      case "iblis":
      case "cacat":
      case "yatim":
      case "piatu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          let v551 = v100.map(p138 => p138.id);
          let v552 = v551[Math.floor(Math.random() * v551.length)];
          p22.sendMessage(v101, {
            text: "anak " + v87 + " di sini adalah @" + v552.split("@")[0],
            mentions: [v552]
          }, {
            quoted: p23
          });
        }
        break;
      case "pushkontakid":
      case "pushkontakidgc":
        if (!v92 && !p23.key.fromMe) {
          return vF11("Fitur khusus owner!");
        }
        if (!v94) {
          return vF11("Penggunaan Salah, Silahkan Gunakan Command Seperti Ini\n" + (v86 + v87) + " idgc|teksnya");
        }
        const v553 = await p22.groupMetadata(q.split("|")[0]);
        const v554 = v553.participants;
        for (let v555 of v554) {
          p22.sendMessage("" + v555.id.split("@")[0] + "@s.whatsapp.net", {
            text: q.split("|")[1]
          });
          await vF6(20000);
        }
        break;
      case "idgroup":
      case "groupid":
        {
          if (!v92) {
            return;
          }
          let v556 = await p22.groupFetchAllParticipating();
          let v557 = Object.entries(v556).slice(0).map(p139 => p139[1]);
          let v558 = v557.map(p140 => p140.id);
          let v559 = "⬣ *GROUP LIST BELOW*\n\nTotal Group : " + v558.length + " Group\n\n";
          for (let v560 of v558) {
            let v561 = await p22.groupMetadata(v560);
            v559 += "◉ Name : " + v561.subject + "\n◉ ID : " + v561.id + "\n◉ Member : " + v561.participants.length + "\n\n────────────────────────\n\n";
          }
          vF11(v559 + ("To Use Please Type Command " + v86 + "pushcontact idgroup|teks\n\nBefore using, please first copy the group id above"));
        }
        break;
      case "totag":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          if (!p23.quoted) {
            throw "Reply pesan dengan caption " + (v86 + v87);
          }
          p22.sendMessage(p23.chat, {
            forward: p23.quoted.fakeObj,
            mentions: v100.map(p141 => p141.id)
          });
        }
        break;
      case "addvn":
        {
          if (!v92 && !p23.key.fromMe) {
            return vF11("Fitur khusus owner!");
          }
          if (v89.length < 1) {
            return vF11("Nama audionya apa");
          }
          if (v47.includes(q)) {
            return vF11("Nama tersebut sudah di gunakan");
          }
          let v562 = await p22.downloadAndSaveMediaMessage(v96);
          v47.push(q);
          await fsExtra.copy(v562, "./database/Audio/" + q + ".mp3");
          fs2.writeFileSync("./database/vnadd.json", JSON.stringify(v47));
          fs2.unlinkSync(v562);
          vF11("Sukses Menambahkan Audio\nCek dengan cara " + v86 + "listvn");
        }
        break;
      case "delvn":
        {
          if (!v92 && !p23.key.fromMe) {
            return vF11("Fitur khusus owner!");
          }
          if (v89.length < 1) {
            return vF11("Masukan query");
          }
          if (!v47.includes(q)) {
            return vF11("Nama tersebut tidak ada di dalam data base");
          }
          let v563 = v47.indexOf(q);
          v47.splice(v563, 1);
          fs2.writeFileSync("./database/vnadd.json", JSON.stringify(v47));
          fs2.unlinkSync("./database/Audio/" + q + ".mp3");
          vF11("Sukses delete vn " + q);
        }
        break;
      case "listvn":
        {
          let v564 = "*LIST VN*\n";
          for (let v565 of v47) {
            v564 += v565 + "\n";
          }
          v564 += "\n\n*Total ada : " + v47.length + "*";
        }
        break;
      case "detectpromote":
      case "promotedetect":
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v108) {
          return vF11("Bot Bukan Admin");
        }
        if (!v109) {
          return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
        }
        if (v89[0] === "on") {
          if (isPromote) {
            return vF11("Berhasil Mengaktifkan Promote Detect");
          }
          _promote.push(p23.chat);
          fs2.writeFileSync("./database/promote.json", JSON.stringify(_promote, null, 2));
          vF11(lang.OkOn("Promote Detect"));
        } else if (v89[0] === "off") {
          if (!isPromote) {
            return vF11("Sudah Di Nonaktifkan Sebelumnya");
          }
          let v566 = _promote.indexOf(p23.chat);
          _promote.splice(v566, 1);
          fs2.writeFileSync("./database/promote.json", JSON.stringify(_promote, null, 2));
          vF11("Sukses Nonaktifkan Promote Detect"("Promote Detect"));
        } else {
          vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
        }
        break;
      case "cerpen-anak":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v567 = await cerpen("anak");
          vF11("⭔ _*Title :*_ " + v567.title + "\n⭔ _*Author :*_ " + v567.author + "\n⭔ _*Category :*_ " + v567.kategori + "\n⭔ _*Pass Moderation :*_ " + v567.lolos + "\n⭔ _*Story :*_\n" + v567.cerita);
        }
        break;
      case "cerpen-bahasadaerah":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v568 = await cerpen("bahasa daerah");
          vF11("⭔ _*Title :*_ " + v568.title + "\n⭔ _*Author :*_ " + v568.author + "\n⭔ _*Category :*_ " + v568.kategori + "\n⭔ _*Pass Moderation :*_ " + v568.lolos + "\n⭔ _*Story :*_\n" + v568.cerita);
        }
        break;
      case "cerpen-bahasainggris":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v569 = await cerpen("bahasa Inggris");
          vF11("⭔ _*Title :*_ " + v569.title + "\n⭔ _*Author :*_ " + v569.author + "\n⭔ _*Category :*_ " + v569.kategori + "\n⭔ _*Pass Moderation :*_ " + v569.lolos + "\n⭔ _*Story :*_\n" + v569.cerita);
        }
        break;
      case "cerpen-bahasajawa":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v570 = await cerpen("bahasa jawa");
          vF11("⭔ _*Title :*_ " + v570.title + "\n⭔ _*Author :*_ " + v570.author + "\n⭔ _*Category :*_ " + v570.kategori + "\n⭔ _*Pass Moderation :*_ " + v570.lolos + "\n⭔ _*Story :*_\n" + v570.cerita);
        }
        break;
      case "cerpen-bahasasunda":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v571 = await cerpen("bahasa sunda");
          vF11("⭔ _*Title :*_ " + v571.title + "\n⭔ _*Author :*_ " + v571.author + "\n⭔ _*Category :*_ " + v571.kategori + "\n⭔ _*Pass Moderation :*_ " + v571.lolos + "\n⭔ _*Story :*_\n" + v571.cerita);
        }
        break;
      case "cerpen-budaya":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v572 = await cerpen("budaya");
          vF11("⭔ _*Title :*_ " + v572.title + "\n⭔ _*Author :*_ " + v572.author + "\n⭔ _*Category :*_ " + v572.kategori + "\n⭔ _*Pass Moderation :*_ " + v572.lolos + "\n⭔ _*Story :*_\n" + v572.cerita);
        }
        break;
      case "cerpen-cinta":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v573 = await cerpen("cinta");
          vF11("⭔ _*Title :*_ " + v573.title + "\n⭔ _*Author :*_ " + v573.author + "\n⭔ _*Category :*_ " + v573.kategori + "\n⭔ _*Pass Moderation :*_ " + v573.lolos + "\n⭔ _*Story :*_\n" + v573.cerita);
        }
        break;
      case "cerpen-cintaislami":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v574 = await cerpen("cinta islami");
          vF11("⭔ _*Title :*_ " + v574.title + "\n⭔ _*Author :*_ " + v574.author + "\n⭔ _*Category :*_ " + v574.kategori + "\n⭔ _*Pass Moderation :*_ " + v574.lolos + "\n⭔ _*Story :*_\n" + v574.cerita);
        }
        break;
      case "cerpen-cintapertama":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v575 = await cerpen("cinta pertama");
          vF11("⭔ _*Title :*_ " + v575.title + "\n⭔ _*Author :*_ " + v575.author + "\n⭔ _*Category :*_ " + v575.kategori + "\n⭔ _*Pass Moderation :*_ " + v575.lolos + "\n⭔ _*Story :*_\n" + v575.cerita);
        }
        break;
      case "cerpen-cintaromantis":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v576 = await cerpen("cinta romantis");
          vF11("⭔ _*Title :*_ " + v576.title + "\n⭔ _*Author :*_ " + v576.author + "\n⭔ _*Category :*_ " + v576.kategori + "\n⭔ _*Pass Moderation :*_ " + v576.lolos + "\n⭔ _*Story :*_\n" + v576.cerita);
        }
        break;
      case "cerpen-cintasedih":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v577 = await cerpen("cinta sedih");
          vF11("⭔ _*Title :*_ " + v577.title + "\n⭔ _*Author :*_ " + v577.author + "\n⭔ _*Category :*_ " + v577.kategori + "\n⭔ _*Pass Moderation :*_ " + v577.lolos + "\n⭔ _*Story :*_\n" + v577.cerita);
        }
        break;
      case "cerpen-cintasegitiga":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v578 = await cerpen("Cinta segitiga");
          vF11("⭔ _*Title :*_ " + v578.title + "\n⭔ _*Author :*_ " + v578.author + "\n⭔ _*Category :*_ " + v578.kategori + "\n⭔ _*Pass Moderation :*_ " + v578.lolos + "\n⭔ _*Story :*_\n" + v578.cerita);
        }
        break;
      case "cerpen-cintasejati":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v579 = await cerpen("cinta sejati");
          vF11("⭔ _*Title :*_ " + v579.title + "\n⭔ _*Author :*_ " + v579.author + "\n⭔ _*Category :*_ " + v579.kategori + "\n⭔ _*Pass Moderation :*_ " + v579.lolos + "\n⭔ _*Story :*_\n" + v579.cerita);
        }
        break;
      case "cerpen-galau":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v580 = await cerpen("galau");
          vF11("⭔ _*Title :*_ " + v580.title + "\n⭔ _*Author :*_ " + v580.author + "\n⭔ _*Category :*_ " + v580.kategori + "\n⭔ _*Pass Moderation :*_ " + v580.lolos + "\n⭔ _*Story :*_\n" + v580.cerita);
        }
        break;
      case "cerpen-gokil":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v581 = await cerpen("gokil");
          vF11("⭔ _*Title :*_ " + v581.title + "\n⭔ _*Author :*_ " + v581.author + "\n⭔ _*Category :*_ " + v581.kategori + "\n⭔ _*Pass Moderation :*_ " + v581.lolos + "\n⭔ _*Story :*_\n" + v581.cerita);
        }
        break;
      case "cerpen-inspiratif":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v582 = await cerpen("inspiratif");
          vF11("⭔ _*Title :*_ " + v582.title + "\n⭔ _*Author :*_ " + v582.author + "\n⭔ _*Category :*_ " + v582.kategori + "\n⭔ _*Pass Moderation :*_ " + v582.lolos + "\n⭔ _*Story :*_\n" + v582.cerita);
        }
        break;
      case "cerpen-jepang":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v583 = await cerpen("jepang");
          vF11("⭔ _*Title :*_ " + v583.title + "\n⭔ _*Author :*_ " + v583.author + "\n⭔ _*Category :*_ " + v583.kategori + "\n⭔ _*Pass Moderation :*_ " + v583.lolos + "\n⭔ _*Story :*_\n" + v583.cerita);
        }
        break;
      case "cerpen-kehidupan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v584 = await cerpen("kehidupan");
          vF11("⭔ _*Title :*_ " + v584.title + "\n⭔ _*Author :*_ " + v584.author + "\n⭔ _*Category :*_ " + v584.kategori + "\n⭔ _*Pass Moderation :*_ " + v584.lolos + "\n⭔ _*Story :*_\n" + v584.cerita);
        }
        break;
      case "cerpen-keluarga":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v585 = await cerpen("keluarga");
          vF11("⭔ _*Title :*_ " + v585.title + "\n⭔ _*Author :*_ " + v585.author + "\n⭔ _*Category :*_ " + v585.kategori + "\n⭔ _*Pass Moderation :*_ " + v585.lolos + "\n⭔ _*Story :*_\n" + v585.cerita);
        }
        break;
      case "cerpen-kisahnyata":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v586 = await cerpen("kisah nyata");
          vF11("⭔ _*Title :*_ " + v586.title + "\n⭔ _*Author :*_ " + v586.author + "\n⭔ _*Category :*_ " + v586.kategori + "\n⭔ _*Pass Moderation :*_ " + v586.lolos + "\n⭔ _*Story :*_\n" + v586.cerita);
        }
        break;
      case "cerpen-korea":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v587 = await cerpen("korea");
          vF11("⭔ _*Title :*_ " + v587.title + "\n⭔ _*Author :*_ " + v587.author + "\n⭔ _*Category :*_ " + v587.kategori + "\n⭔ _*Pass Moderation :*_ " + v587.lolos + "\n⭔ _*Story :*_\n" + v587.cerita);
        }
        break;
      case "cerpen-kristen":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v588 = await cerpen("kristen");
          vF11("⭔ _*Title :*_ " + v588.title + "\n⭔ _*Author :*_ " + v588.author + "\n⭔ _*Category :*_ " + v588.kategori + "\n⭔ _*Pass Moderation :*_ " + v588.lolos + "\n⭔ _*Story :*_\n" + v588.cerita);
        }
        break;
      case "cerpen-liburan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v589 = await cerpen("liburan");
          vF11("⭔ _*Title :*_ " + v589.title + "\n⭔ _*Author :*_ " + v589.author + "\n⭔ _*Category :*_ " + v589.kategori + "\n⭔ _*Pass Moderation :*_ " + v589.lolos + "\n⭔ _*Story :*_\n" + v589.cerita);
        }
        break;
      case "cerpen-malaysia":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v590 = await cerpen("malaysia");
          vF11("⭔ _*Title :*_ " + v590.title + "\n⭔ _*Author :*_ " + v590.author + "\n⭔ _*Category :*_ " + v590.kategori + "\n⭔ _*Pass Moderation :*_ " + v590.lolos + "\n⭔ _*Story :*_\n" + v590.cerita);
        }
        break;
      case "cerpen-mengalphan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v591 = await cerpen("mengalphan");
          vF11("⭔ _*Title :*_ " + v591.title + "\n⭔ _*Author :*_ " + v591.author + "\n⭔ _*Category :*_ " + v591.kategori + "\n⭔ _*Pass Moderation :*_ " + v591.lolos + "\n⭔ _*Story :*_\n" + v591.cerita);
        }
        break;
      case "cerpen-misteri":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v592 = await cerpen("misteri");
          vF11("⭔ _*Title :*_ " + v592.title + "\n⭔ _*Author :*_ " + v592.author + "\n⭔ _*Category :*_ " + v592.kategori + "\n⭔ _*Pass Moderation :*_ " + v592.lolos + "\n⭔ _*Story :*_\n" + v592.cerita);
        }
        break;
      case "cerpen-motivasi":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v593 = await cerpen("motivasi");
          vF11("⭔ _*Title :*_ " + v593.title + "\n⭔ _*Author :*_ " + v593.author + "\n⭔ _*Category :*_ " + v593.kategori + "\n⭔ _*Pass Moderation :*_ " + v593.lolos + "\n⭔ _*Story :*_\n" + v593.cerita);
        }
        break;
      case "cerpen-nasihat":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v594 = await cerpen("nasihat");
          vF11("⭔ _*Title :*_ " + v594.title + "\n⭔ _*Author :*_ " + v594.author + "\n⭔ _*Category :*_ " + v594.kategori + "\n⭔ _*Pass Moderation :*_ " + v594.lolos + "\n⭔ _*Story :*_\n" + v594.cerita);
        }
        break;
      case "cerpen-nasionalisme":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v595 = await cerpen("nasionalisme");
          vF11("⭔ _*Title :*_ " + v595.title + "\n⭔ _*Author :*_ " + v595.author + "\n⭔ _*Category :*_ " + v595.kategori + "\n⭔ _*Pass Moderation :*_ " + v595.lolos + "\n⭔ _*Story :*_\n" + v595.cerita);
        }
        break;
      case "cerpen-olahraga":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v596 = await cerpen("olahraga");
          vF11("⭔ _*Title :*_ " + v596.title + "\n⭔ _*Author :*_ " + v596.author + "\n⭔ _*Category :*_ " + v596.kategori + "\n⭔ _*Pass Moderation :*_ " + v596.lolos + "\n⭔ _*Story :*_\n" + v596.cerita);
        }
        break;
      case "cerpen-patahhati":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v597 = await cerpen("patah hati");
          vF11("⭔ _*Title :*_ " + v597.title + "\n⭔ _*Author :*_ " + v597.author + "\n⭔ _*Category :*_ " + v597.kategori + "\n⭔ _*Pass Moderation :*_ " + v597.lolos + "\n⭔ _*Story :*_\n" + v597.cerita);
        }
        break;
      case "cerpen-penantian":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v598 = await cerpen("penantian");
          vF11("⭔ _*Title :*_ " + v598.title + "\n⭔ _*Author :*_ " + v598.author + "\n⭔ _*Category :*_ " + v598.kategori + "\n⭔ _*Pass Moderation :*_ " + v598.lolos + "\n⭔ _*Story :*_\n" + v598.cerita);
        }
        break;
      case "cerpen-pendidikan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v599 = await cerpen("pendidikan");
          vF11("⭔ _*Title :*_ " + v599.title + "\n⭔ _*Author :*_ " + v599.author + "\n⭔ _*Category :*_ " + v599.kategori + "\n⭔ _*Pass Moderation :*_ " + v599.lolos + "\n⭔ _*Story :*_\n" + v599.cerita);
        }
        break;
      case "cerpen-pengalaman":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v600 = await cerpen("pengalaman pribadi");
          vF11("⭔ _*Title :*_ " + v600.title + "\n⭔ _*Author :*_ " + v600.author + "\n⭔ _*Category :*_ " + v600.kategori + "\n⭔ _*Pass Moderation :*_ " + v600.lolos + "\n⭔ _*Story :*_\n" + v600.cerita);
        }
        break;
      case "cerpen-pengorbanan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v601 = await cerpen("pengorbanan");
          vF11("⭔ _*Title :*_ " + v601.title + "\n⭔ _*Author :*_ " + v601.author + "\n⭔ _*Category :*_ " + v601.kategori + "\n⭔ _*Pass Moderation :*_ " + v601.lolos + "\n⭔ _*Story :*_\n" + v601.cerita);
        }
        break;
      case "cerpen-penyesalan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v602 = await cerpen("penyesalan");
          vF11("⭔ _*Title :*_ " + v602.title + "\n⭔ _*Author :*_ " + v602.author + "\n⭔ _*Category :*_ " + v602.kategori + "\n⭔ _*Pass Moderation :*_ " + v602.lolos + "\n⭔ _*Story :*_\n" + v602.cerita);
        }
        break;
      case "cerpen-perjuangan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v603 = await cerpen("perjuangan");
          vF11("⭔ _*Title :*_ " + v603.title + "\n⭔ _*Author :*_ " + v603.author + "\n⭔ _*Category :*_ " + v603.kategori + "\n⭔ _*Pass Moderation :*_ " + v603.lolos + "\n⭔ _*Story :*_\n" + v603.cerita);
        }
        break;
      case "cerpen-perpisahan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v604 = await cerpen("perpisahan");
          vF11("⭔ _*Title :*_ " + v604.title + "\n⭔ _*Author :*_ " + v604.author + "\n⭔ _*Category :*_ " + v604.kategori + "\n⭔ _*Pass Moderation :*_ " + v604.lolos + "\n⭔ _*Story :*_\n" + v604.cerita);
        }
        break;
      case "cerpen-persahabatan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v605 = await cerpen("persahabatan");
          vF11("⭔ _*Title :*_ " + v605.title + "\n⭔ _*Author :*_ " + v605.author + "\n⭔ _*Category :*_ " + v605.kategori + "\n⭔ _*Pass Moderation :*_ " + v605.lolos + "\n⭔ _*Story :*_\n" + v605.cerita);
        }
        break;
      case "cerpen-petualangan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v606 = await cerpen("petualangan");
          vF11("⭔ _*Title :*_ " + v606.title + "\n⭔ _*Author :*_ " + v606.author + "\n⭔ _*Category :*_ " + v606.kategori + "\n⭔ _*Pass Moderation :*_ " + v606.lolos + "\n⭔ _*Story :*_\n" + v606.cerita);
        }
        break;
      case "cerpen-ramadhan":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v607 = await cerpen("ramadhan");
          vF11("⭔ _*Title :*_ " + v607.title + "\n⭔ _*Author :*_ " + v607.author + "\n⭔ _*Category :*_ " + v607.kategori + "\n⭔ _*Pass Moderation :*_ " + v607.lolos + "\n⭔ _*Story :*_\n" + v607.cerita);
        }
        break;
      case "cerpen-remaja":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v608 = await cerpen("remaja");
          vF11("⭔ _*Title :*_ " + v608.title + "\n⭔ _*Author :*_ " + v608.author + "\n⭔ _*Category :*_ " + v608.kategori + "\n⭔ _*Pass Moderation :*_ " + v608.lolos + "\n⭔ _*Story :*_\n" + v608.cerita);
        }
        break;
      case "cerpen-rindu":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v609 = await cerpen("rindu");
          vF11("⭔ _*Title :*_ " + v609.title + "\n⭔ _*Author :*_ " + v609.author + "\n⭔ _*Category :*_ " + v609.kategori + "\n⭔ _*Pass Moderation :*_ " + v609.lolos + "\n⭔ _*Story :*_\n" + v609.cerita);
        }
        break;
      case "cerpen-rohani":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v610 = await cerpen("rohani");
          vF11("⭔ _*Title :*_ " + v610.title + "\n⭔ _*Author :*_ " + v610.author + "\n⭔ _*Category :*_ " + v610.kategori + "\n⭔ _*Pass Moderation :*_ " + v610.lolos + "\n⭔ _*Story :*_\n" + v610.cerita);
        }
        break;
      case "cerpen-romantis":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v611 = await cerpen("romantis");
          vF11("⭔ _*Title :*_ " + v611.title + "\n⭔ _*Author :*_ " + v611.author + "\n⭔ _*Category :*_ " + v611.kategori + "\n⭔ _*Pass Moderation :*_ " + v611.lolos + "\n⭔ _*Story :*_\n" + v611.cerita);
        }
        break;
      case "cerpen-sastra":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v612 = await cerpen("sastra");
          vF11("⭔ _*Title :*_ " + v612.title + "\n⭔ _*Author :*_ " + v612.author + "\n⭔ _*Category :*_ " + v612.kategori + "\n⭔ _*Pass Moderation :*_ " + v612.lolos + "\n⭔ _*Story :*_\n" + v612.cerita);
        }
        break;
      case "cerpen-sedih":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v613 = await cerpen("sedih");
          vF11("⭔ _*Title :*_ " + v613.title + "\n⭔ _*Author :*_ " + v613.author + "\n⭔ _*Category :*_ " + v613.kategori + "\n⭔ _*Pass Moderation :*_ " + v613.lolos + "\n⭔ _*Story :*_\n" + v613.cerita);
        }
        break;
      case "cerpen-sejarah":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v614 = await cerpen("sejarah");
          vF11("⭔ _*Title :*_ " + v614.title + "\n⭔ _*Author :*_ " + v614.author + "\n⭔ _*Category :*_ " + v614.kategori + "\n⭔ _*Pass Moderation :*_ " + v614.lolos + "\n⭔ _*Story :*_\n" + v614.cerita);
        }
        break;
      case "cerpen-horror":
      case "cerpen-horor":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          let v615 = await cerpen("sejarah");
          vF11("⭔ _*Title :*_ " + v615.title + "\n⭔ _*Author :*_ " + v615.author + "\n⭔ _*Category :*_ " + v615.kategori + "\n⭔ _*Pass Moderation :*_ " + v615.lolos + "\n⭔ _*Story :*_\n" + v615.cerita);
        }
        break;
      case "cry":
      case "kill":
      case "hug":
      case "pat":
      case "lick":
      case "kiss":
      case "bite":
      case "yeet":
      case "neko":
      case "bully":
      case "bonk":
      case "wink":
      case "poke":
      case "nom":
      case "slap":
      case "smile":
      case "wave":
      case "awoo":
      case "blush":
      case "smug":
      case "glomp":
      case "happy":
      case "dance":
      case "cringe":
      case "cuddle":
      case "highfive":
      case "shinobu":
      case "megumin":
      case "handhold":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        axios2.get("https://api.waifu.pics/sfw/" + v87).then(({
          data: _0x1b1c55
        }) => {
          p22.sendImageAsSticker(p23.chat, _0x1b1c55.url, p23, {
            packname: global.packname,
            author: global.author
          });
        });
        break;
      case "loli-waifu":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        axios2.get("https://api.waifu.pics/sfw/waifu").then(({
          data: _0x3c8a49
        }) => {
          p22.sendImage(p23.chat, _0x3c8a49.url, mess.success, p23);
        });
        break;
      case "hentaivid":
      case "hentaivideo":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          if (!v103) {
            return vF11("Fitur NSFW Belum Di Aktifkan");
          }
          await f9();
          const {
            hentai: _0x266297
          } = require("./lib/scraper.js");
          vGetBalance = await _0x266297();
          result912 = vGetBalance[Math.floor(Math.random(), vGetBalance.length)];
          p22.sendMessage(p23.chat, {
            video: {
              url: result912.video_1
            },
            caption: " Title : " + result912.title + "\n Category : " + result912.category + "\n Mimetype : " + result912.type + "\n Views : " + result912.views_count + "\n Shares : " + result912.share_count + "\n Source : " + result912.link + "\n Media Url : " + result912.video_1
          }, {
            quoted: p23
          });
        }
        break;
      case "trap":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        waifudd = await axios2.get("https://waifu.pics/api/NSFW/" + v87);
        let v616 = {
          image: {
            url: waifudd.data.url
          },
          caption: "*DONE*",
          buttons: trapbot,
          headerType: 1
        };
        await p22.sendMessage(p23.chat, v616, {
          quoted: p23
        }).catch(p142 => {
          return "Error!";
        });
        break;
      case "hentai-neko":
      case "hneko":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        waifudd = await axios2.get("https://waifu.pics/api/NSFW/neko");
        let v617 = {
          image: {
            url: waifudd.data.url
          },
          caption: "Here you go!",
          buttons: hnekobot,
          headerType: 1
        };
        await p22.sendMessage(p23.chat, v617, {
          quoted: p23
        }).catch(p143 => {
          return "Error!";
        });
        break;
      case "hentai-waifu":
      case "nwaifu":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        waifudd = await axios2.get("https://waifu.pics/api/NSFW/waifu");
        let v618 = {
          image: {
            url: waifudd.data.url
          },
          caption: "Here you go!",
          buttons: nwaifubot,
          headerType: 1
        };
        await p22.sendMessage(p23.chat, v618, {
          quoted: p23
        }).catch(p144 => {
          return "Error!";
        });
        break;
      case "gasm":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        waifudd = await axios2.get("https://nekos.life/api/v2/img/" + v87);
        let v619 = {
          image: {
            url: waifudd.data.url
          },
          caption: "Here you go!",
          footer: "" + global.botname,
          buttons: wbuttsss,
          headerType: 4
        };
        await p22.sendMessage(p23.chat, v619, {
          quoted: p23
        }).catch(p145 => {
          return "Error!";
        });
        break;
      case "milf":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/milf.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "ahegao":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/ahegao.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "ass":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/ass.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "bdsm":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/bdsm.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "blowjob":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/blowjob.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "cuckold":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/cuckold.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "cum":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/cum.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "eba":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/eba.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "ero":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/ero.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "femdom":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/femdom.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "foot":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/foot.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "gangbang":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/gangbang.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "glasses":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/glasses.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "hentai":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/hentai.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "jahy":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/jahy.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "masturbation":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/masturbation.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "neko-hentai":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/neko.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "neko-hentai2":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/neko2.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "nsfwloli":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/NSFWloli.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "orgy":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/orgy.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "panties":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/panties.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "pussy":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/pussy.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "tentacles":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/tentacles.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "thights":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/thights.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "yuri":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/yuri.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "zettai":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/zettai.json"));
        var vF836 = f8(v649);
        p22.sendMessage(p23.chat, {
          caption: "*DONE*",
          image: {
            url: vF836.url
          },
          footer: namabot
        }, {
          quoted: p23
        });
        break;
      case "gifblowjob":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        let v646 = await axios2.get("https://api.waifu.pics/NSFW/blowjob");
        var v647 = await fetchBuffer(v646.data.url);
        var v648 = await buffergif(v647);
        await p22.sendMessage(p23.chat, {
          video: v648,
          gifPlayback: true
        }, {
          quoted: p23
        }).catch(p146 => {});
        break;
      case "gifhentai":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group!");
        }
        if (!v103) {
          return vF11("Fitur NSFW Belum Di Aktifkan");
        }
        await f9();
        var v649 = JSON.parse(fs2.readFileSync("./RANDOM/NSFW/gifs.json"));
        var vF837 = f8(v649);
        await p22.sendMessage(p23.chat, {
          video: vF837,
          gifPlayback: true
        }, {
          quoted: p23
        }).catch(p147 => {});
        break;
      case "nsfw":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (v89[0] === "on") {
            if (v103) {
              return vF11("Already activated");
            }
            v45.push(v101);
            fs2.writeFileSync("./database/NSFW.json", JSON.stringify(v45));
            vF11("Success in turning on NSFW in this group");
            var v650 = await p22.groupMetadata(v101);
            var v651 = v650.participants;
            var v652 = [];
            v651.map(async p148 => {
              v652.push(p148.id.replace("c.us", "s.whatsapp.net"));
            });
          } else if (v89[0] === "off") {
            if (!v103) {
              return vF11("Already deactivated");
            }
            let v653 = v45.indexOf(v101);
            v45.splice(v653, 1);
            fs2.writeFileSync("./database/nsfw.json", JSON.stringify(v45));
            vF11("Success in turning off NSFW in this group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "mute":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          if (v89[0] === "on") {
            if (v119) {
              return vF11("Sudah Di Mute Sebelumnya");
            }
            v46.push(p23.chat);
            fs2.writeFileSync("./database/mute.json", JSON.stringify(v46, null, 2));
            vF11("Berhasil Mengaktifkan Mute Di Grub Ini, Bot Tidak Akan Respon");
          } else if (v89[0] === "off") {
            if (!v119) {
              return vF11("Sudah Di Unmute Sebelumnya");
            }
            let v654 = v46.indexOf(p23.chat);
            v46.splice(v654, 1);
            fs2.writeFileSync("./database/mute.json", JSON.stringify(v46, null, 2));
            vF11("Berhasil Unmute Bot Di Grub Ini");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "onlygrub":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group!");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin");
          }
          if (!v109) {
            return vF11("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin");
          }
          if (v89[0] === "on") {
            if (v120) {
              return vF11("Sudah Di Mute Sebelumnya");
            }
            v52.push(p23.chat);
            fs2.writeFileSync("./database/onlygrub.json", JSON.stringify(v52, null, 2));
            vF11("Berhasil Mengaktifkan Mute Di Grub Ini, Bot Tidak Akan Respon");
          } else if (v89[0] === "off") {
            if (!v120) {
              return vF11("Sudah Di Unmute Sebelumnya");
            }
            let v655 = v52.indexOf(p23.chat);
            v52.splice(v655, 1);
            fs2.writeFileSync("./database/onlygrub.json", JSON.stringify(v52, null, 2));
            vF11("Berhasil Unmute Bot Di Grub Ini");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "aiimg2":
        try {
          if (global.keyopenai === "") {
            return vF11("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file settings.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!q) {
            return vF11("Chat dengan AI.\n\nContoh:\n" + comand + " Apa itu coding");
          }
          await f9();
          const v656 = new Configuration({
            apiKey: global.jeropenai
          });
          const v657 = new OpenAIApi(v656);
          const v658 = await v657.createImage({
            prompt: v94,
            n: 1,
            size: "512x512"
          });
          p22.sendImage(v101, v658.data.data[0].url, v94, p23);
        } catch (_0x250093) {
          console.log(_0x250093);
          vF11("Maaf, sepertinya ada yang error :" + _0x250093);
        }
        break;
      case "candy":
      case "christmas":
      case "3dchristmas":
      case "sparklechristmas":
      case "deepsea":
      case "scifi":
      case "rainbow":
      case "waterpipe":
      case "spooky":
      case "pencil":
      case "circuit":
      case "discovery":
      case "metalic":
      case "fiction":
      case "demon":
      case "transformer":
      case "berry":
      case "thunder":
      case "magma":
      case "3dstone":
      case "neonlight":
      case "glitch":
      case "harrypotter":
      case "brokenglass":
      case "papercut":
      case "watercolor":
      case "multicolor":
      case "neondevil":
      case "underwater":
      case "graffitibike":
      case "snow":
      case "cloud":
      case "honey":
      case "ice":
      case "fruitjuice":
      case "biscuit":
      case "wood":
      case "chocolate":
      case "strawberry":
      case "matrix":
      case "blood":
      case "dropwater":
      case "toxic":
      case "lava":
      case "rock":
      case "bloodglas":
      case "hallowen":
      case "darkgold":
      case "joker":
      case "wicker":
      case "firework":
      case "skeleton":
      case "blackpink":
      case "sand":
      case "glue":
      case "1917":
      case "leaves":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh : " + (v86 + v87) + " " + namabot);
          }
          await f9();
          let v659;
          if (/candy/.test(v87)) {
            v659 = "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html";
          }
          if (/christmas/.test(v87)) {
            v659 = "https://textpro.me/christmas-tree-text-effect-online-free-1057.html";
          }
          if (/3dchristmas/.test(v87)) {
            v659 = "https://textpro.me/3d-christmas-text-effect-by-name-1055.html";
          }
          if (/sparklechristmas/.test(v87)) {
            v659 = "https://textpro.me/sparkles-merry-christmas-text-effect-1054.html";
          }
          if (/deepsea/.test(v87)) {
            v659 = "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html";
          }
          if (/scifi/.test(v87)) {
            v659 = "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html";
          }
          if (/rainbow/.test(v87)) {
            v659 = "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html";
          }
          if (/waterpipe/.test(v87)) {
            v659 = "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html";
          }
          if (/spooky/.test(v87)) {
            v659 = "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html";
          }
          if (/pencil/.test(v87)) {
            v659 = "https://textpro.me/create-a-sketch-text-effect-online-1044.html";
          }
          if (/circuit/.test(v87)) {
            v659 = "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html";
          }
          if (/discovery/.test(v87)) {
            v659 = "https://textpro.me/create-space-text-effects-online-free-1042.html";
          }
          if (/metalic/.test(v87)) {
            v659 = "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html";
          }
          if (/fiction/.test(v87)) {
            v659 = "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html";
          }
          if (/demon/.test(v87)) {
            v659 = "https://textpro.me/create-green-horror-style-text-effect-online-1036.html";
          }
          if (/transformer/.test(v87)) {
            v659 = "https://textpro.me/create-a-transformer-text-effect-online-1035.html";
          }
          if (/berry/.test(v87)) {
            v659 = "https://textpro.me/create-berry-text-effect-online-free-1033.html";
          }
          if (/thunder/.test(v87)) {
            v659 = "https://textpro.me/online-thunder-text-effect-generator-1031.html";
          }
          if (/magma/.test(v87)) {
            v659 = "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html";
          }
          if (/3dstone/.test(v87)) {
            v659 = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html";
          }
          if (/neonlight/.test(v87)) {
            v659 = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html";
          }
          if (/glitch/.test(v87)) {
            v659 = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html";
          }
          if (/harrypotter/.test(v87)) {
            v659 = "https://textpro.me/create-harry-potter-text-effect-online-1025.html";
          }
          if (/brokenglass/.test(v87)) {
            v659 = "https://textpro.me/broken-glass-text-effect-free-online-1023.html";
          }
          if (/papercut/.test(v87)) {
            v659 = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html";
          }
          if (/watercolor/.test(v87)) {
            v659 = "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html";
          }
          if (/multicolor/.test(v87)) {
            v659 = "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html";
          }
          if (/neondevil/.test(v87)) {
            v659 = "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html";
          }
          if (/underwater/.test(v87)) {
            v659 = "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html";
          }
          if (/graffitibike/.test(v87)) {
            v659 = "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html";
          }
          if (/snow/.test(v87)) {
            v659 = "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html";
          }
          if (/cloud/.test(v87)) {
            v659 = "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html";
          }
          if (/honey/.test(v87)) {
            v659 = "https://textpro.me/honey-text-effect-868.html";
          }
          if (/ice/.test(v87)) {
            v659 = "https://textpro.me/ice-cold-text-effect-862.html";
          }
          if (/fruitjuice/.test(v87)) {
            v659 = "https://textpro.me/fruit-juice-text-effect-861.html";
          }
          if (/biscuit/.test(v87)) {
            v659 = "https://textpro.me/biscuit-text-effect-858.html";
          }
          if (/wood/.test(v87)) {
            v659 = "https://textpro.me/wood-text-effect-856.html";
          }
          if (/chocolate/.test(v87)) {
            v659 = "https://textpro.me/chocolate-cake-text-effect-890.html";
          }
          if (/strawberry/.test(v87)) {
            v659 = "https://textpro.me/strawberry-text-effect-online-889.html";
          }
          if (/matrix/.test(v87)) {
            v659 = "https://textpro.me/matrix-style-text-effect-online-884.html";
          }
          if (/blood/.test(v87)) {
            v659 = "https://textpro.me/horror-blood-text-effect-online-883.html";
          }
          if (/dropwater/.test(v87)) {
            v659 = "https://textpro.me/dropwater-text-effect-872.html";
          }
          if (/toxic/.test(v87)) {
            v659 = "https://textpro.me/toxic-text-effect-online-901.html";
          }
          if (/lava/.test(v87)) {
            v659 = "https://textpro.me/lava-text-effect-online-914.html";
          }
          if (/rock/.test(v87)) {
            v659 = "https://textpro.me/rock-text-effect-online-915.html";
          }
          if (/bloodglas/.test(v87)) {
            v659 = "https://textpro.me/blood-text-on-the-frosted-glass-941.html";
          }
          if (/hallowen/.test(v87)) {
            v659 = "https://textpro.me/halloween-fire-text-effect-940.html";
          }
          if (/darkgold/.test(v87)) {
            v659 = "https://textpro.me/metal-dark-gold-text-effect-online-939.html";
          }
          if (/joker/.test(v87)) {
            v659 = "https://textpro.me/create-logo-joker-online-934.html";
          }
          if (/wicker/.test(v87)) {
            v659 = "https://textpro.me/wicker-text-effect-online-932.html";
          }
          if (/firework/.test(v87)) {
            v659 = "https://textpro.me/firework-sparkle-text-effect-930.html";
          }
          if (/skeleton/.test(v87)) {
            v659 = "https://textpro.me/skeleton-text-effect-online-929.html";
          }
          if (/blackpink/.test(v87)) {
            v659 = "https://textpro.me/create-blackpink-logo-style-online-1001.html";
          }
          if (/sand/.test(v87)) {
            v659 = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html";
          }
          if (/glue/.test(v87)) {
            v659 = "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html";
          }
          if (/1917/.test(v87)) {
            v659 = "https://textpro.me/1917-style-text-effect-online-980.html";
          }
          if (/leaves/.test(v87)) {
            v659 = "https://textpro.me/natural-leaves-text-effect-931.html";
          }
          let v660 = await maker.textpro(v659, q);
          p22.sendMessage(v101, {
            image: {
              url: v660
            },
            caption: "*DONE*"
          }, {
            quoted: p23
          });
        }
        break;
      case "restartbot":
      case "restart":
        if (!v92) {
          return vF11("Fitur Ini Khusus Owner !");
        }
        await vF11("_Restarting " + packname + "_");
        try {
          await p22.sendMessage(v101, {
            text: "*_Succes Restart Bot_*"
          });
          await vF6(3000);
          exec("npm start");
        } catch (_0x19d3e3) {
          exec("node index.js");
          await vF6(540000);
          vF11("*_Sukses Restart Bot_*");
        }
        break;
      case "listjadibot":
        if (!v92) {
          return vF11("Fitur Ini Khusus Owner");
        }
        try {
          let v661 = [...new Set([...global.alphas.filter(p149 => p22.user).map(p150 => p22.user)])];
          te = "*List Jadibot*\n\n";
          for (let v662 of v661) {
            y = await p22.decodeJid(v662.id);
            te += " � User : @" + y.split("@")[0] + "\n";
            te += " � Name : " + v662.name + "\n\n";
          }
          p22.sendMessage(p23.chat, {
            text: te,
            mentions: [y]
          }, {
            quoted: p23
          });
        } catch (_0x340131) {
          vF11("Belum Ada User Yang Jadibot");
        }
        break;
      case "jadibot":
        {
          if (!v92) {
            return vF11("Fitur Khusus Owner");
          }
          jadibot(p22, p23, v101);
        }
        break;
      case "confess":
      case "menfes":
      case "menfess":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          var v663 = v89.join(" ");
          var v664 = v663.split("|")[0];
          let v665 = v664 + "@s.whatsapp.net";
          this.menfes = this.menfes ? this.menfes : {};
          roof = Object.values(this.menfes).find(p151 => [p151.a, p151.b].includes(p23.sender));
          if (roof) {
            return vF11("Kamu masih berada dalam sesi menfess");
          }
          if (p23.isGroup) {
            return vF11("Fitur Khusus Di private chat!");
          }
          if (!v94) {
            return vF11("Kirim Perintah " + (v86 + v87) + " nama|nomor|pesan\n\nContoh :\n" + (v86 + v87) + " " + v90 + "|6283136394680|Menfes nih\n");
          }
          if (!v94.includes("|")) {
            return vF11("Kirim Perintah " + (v86 + v87) + " nama|nomor|pesan\n\nContoh :\n" + (v86 + v87) + " " + v90 + "|6283136394680|Menfes nih\n");
          }
          let [v666, v667, v668] = v94.split`|`;
          if (v667.startsWith("0")) {
            return vF11("Kirim Perintah " + (v86 + v87) + " nama|nomor|pesan\n\nContoh :\n" + (v86 + v87) + " " + v90 + "|6283136394680|Menfes nih\n");
          }
          if (isNaN(v667)) {
            return vF11("Kirim Perintah " + (v86 + v87) + " nama|nomor|pesan\n\nContoh :\n" + (v86 + v87) + " " + v90 + "|6283136394680|Menfes nih\n");
          }
          var v669 = "Hi ada menfess nih buat kamu\n\nDari : " + v666 + "\nPesan : " + v668 + "\n\n" + v86 + "balasmenfess -- _terima menfess/confess\n" + v86 + "tolakmenfess -- _tolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja_";
          let v670 = await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU");
          const v671 = [{
            buttonId: ".balasmenfess " + p23.sender,
            buttonText: {
              displayText: " Balas"
            },
            type: 1
          }, {
            buttonId: ".tolakmenfess " + p23.sender,
            buttonText: {
              displayText: "Tolak "
            },
            type: 1
          }];
          let v672 = p23.sender;
          this.menfes[v672] = {
            id: v672,
            a: p23.sender,
            b: v667 + "@s.whatsapp.net",
            state: "WAITING"
          };
          await p22.sendMessage(v667 + "@s.whatsapp.net", {
            image: v670,
            caption: v669
          }, {});
          vF11("Pesan Telah Terkirim\nKe @" + v665.split("@")[0]);
        }
        break;
      case "balasmenfess":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          roof = Object.values(this.menfes).find(p152 => [p152.a, p152.b].includes(p23.sender));
          if (!roof) {
            return vF11("Belum ada sesi menfess");
          }
          find = Object.values(this.menfes).find(p153 => p153.state == "WAITING");
          let v673 = Object.values(this.menfes).find(p154 => [p154.a, p154.b].includes(p23.sender) && p154.state === "WAITING");
          let v674 = [v673.a, v673.b].find(p155 => p155 !== p23.sender);
          find.b = p23.sender;
          find.state = "CHATTING";
          this.menfes[find.id] = {
            ...find
          };
          await p22.sendMessage(v674, {
            text: "_@" + p23.sender.split("@")[0] + " telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess",
            mentions: [p23.sender]
          });
          p22.sendMessage(p23.chat, {
            text: "_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess"
          });
        }
        break;
      case "tolakmenfess":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          roof = Object.values(this.menfes).find(p156 => [p156.a, p156.b].includes(p23.sender));
          if (!roof) {
            return vF11("Belum ada sesi menfess");
          }
          let v675 = Object.values(this.menfes).find(p157 => [p157.a, p157.b].includes(p23.sender) && p157.state === "WAITING");
          let v676 = [v675.a, v675.b].find(p158 => p158 !== p23.sender);
          find = Object.values(this.menfes).find(p159 => p159.state == "WAITING");
          p22.sendMessage(v676, {
            text: "_Uppsss... @" + p23.sender.split("@")[0] + " Menolak menfess kamu_",
            mentions: [p23.sender]
          });
          vF11("Menfess berhasil di tolak ");
          delete this.menfes[roof.id];
        }
        break;
      case "stopconfess":
      case "stopmenfess":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          find = Object.values(this.menfes).find(p160 => [p160.a, p160.b].includes(p23.sender));
          if (!find) {
            return vF11("Belum ada sesi menfess");
          }
          const v677 = find.a == p23.sender ? find.b : find.a;
          p22.sendMessage(v677, {
            text: "_Teman chat telah menghentikan menfess ini_",
            mentions: [p23.sender]
          });
          await vF11("Okont");
          delete this.menfes[find.id];
        }
        break;
      case "translate":
      case "tr":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Contoh :\n1. Kirim perintah " + (v86 + v87) + " *kode bahasa* *teks*\n\tContoh : " + (v86 + v87) + " id KONTOL\n2. Reply chat dengan caption " + (v86 + v87) + " *kode bahasa*\n\tContoh : " + (v86 + v87) + " id KONTOL\nDaftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages");
          }
          const {
            translate: _0x5e4b6a
          } = require("@vitalets/google-translate-api");
          let v678 = p23.quoted ? v96.text : v96.text.split(v89[0])[1];
          _0x5e4b6a(v678, {
            to: v89[0]
          }).then(p161 => {
            p22.sendText(p23.chat, "" + p161.text, p23);
          });
        }
        break;
      case "stalkig":
      case "igstalk":
        {
          if (v126) {
            return f12();
          }
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " jerx_2");
          }
          await f9();
          let jerApi7 = require("jer-api");
          try {
            let v679 = await nodeFetch("https://forestapi.vercel.app/api/instagram/user/" + v89[0]);
            let v680 = await v679.json();
            let v681 = v680.username;
            let v682 = v680.name;
            let v683 = v680.posts;
            let v684 = v680.followers;
            let v685 = v680.following;
            let v686 = v680.image_url;
            let v687 = "https://www.instagram.com/" + v89[0];
            let v688 = ("\n╭─❒ 「 *STALK IG* 」 \n│\n│❒ Username: " + v681 + "\n│❒  Fullname: " + v682 + "\n│❒  Followers " + v684 + "\n│❒  Difollow: " + v685 + "\n│❒  Post : " + v683 + "\n│❒  Url : " + v687 + "\n│\n╰❒\n").trim();
            if (v686) {
              let v689 = await (await nodeFetch(v686)).buffer();
              p22.sendFile(p23.chat, v689, "profile.jpg", v688, p23);
            }
          } catch (_0x3d3ff6) {
            console.log(_0x3d3ff6);
            vF11("Eror: Mungkin Akun Tersebut Di Private !");
          }
        }
        ;
        break;
      case "grupwa":
      case "searchgrup":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!v94) {
          return vF11("Gunakan dengan cara " + (v86 + v87) + " *nama group*\n\n_Contoh_\n\n" + (v86 + v87) + " store");
        }
        await f9();
        hxzApi.linkwa(q).then(async p162 => {
          if (p162.length == 0) {
            return vF11("Grup " + q + " tidak ditemukan");
          }
          var v690 = "*Hasil Pencarian Dari " + q + "*\n\n";
          for (let v691 of p162) {
            v690 += "*Nama :* " + v691.nama + "\n*Link :* " + v691.link + "\n\n";
          }
          vF11(v690);
        }).catch(p163 => {
          console.log(color("[ ERROR ]", "red"), p163);
          vF11("Hasil pencarian dari " + q + " tidak ditemukan");
        });
        break;
      case "npmstalk":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " zeeone");
          }
          let jerApi8 = require("jer-api");
          await f9();
          eha = await jerApi8.npmstalk(q);
          vF11("*/ Stalking Npm \\*\n\nNama : " + eha.name + "\nVersion Latest : " + eha.versionLatest + "\nVersion Publish : " + eha.versionPublish + "\nVersion Update : " + eha.versionUpdate + "\nLatest Dependencies : " + eha.latestDependencies + "\nPublish Dependencies : " + eha.publishDependencies + "\nPublish Time : " + eha.publishTime + "\nLatest Publish Time : " + eha.latestPublishTime);
        }
        break;
      case "githubstalk":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " zeeone official");
          }
          let jerApi9 = require("jer-api");
          await f9();
          aj = await jerApi9.githubstalk("" + q);
          p22.sendMessage(p23.chat, {
            image: {
              url: aj.profile_pic
            },
            caption: "*/ Stalking Github \\*\n\nUsername : " + aj.username + "\nNickname : " + aj.nickname + "\nBio : " + aj.bio + "\nId : " + aj.id + "\nNodeid : " + aj.nodeId + "\nUrl Profile : " + aj.profile_pic + "\nUrl Github : " + aj.url + "\nType : " + aj.type + "\nAdmin : " + aj.admin + "\nCompany : " + aj.company + "\nBlog : " + aj.blog + "\nLocation : " + aj.location + "\nEmail : " + aj.email + "\nPublic Repo : " + aj.public_repo + "\nPublic Gists : " + aj.public_gists + "\nFollowers : " + aj.followers + "\nFollowing : " + aj.following + "\nCreated At : " + aj.ceated_at + "\nUpdated At : " + aj.updated_at
          }, {
            quoted: p23
          });
        }
        break;
      case "ss":
      case "ssweb":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " link");
          }
          await f9();
          let v692 = await RANDOMSCRAPERScraper.ssweb(q);
          p22.sendMessage(p23.chat, {
            image: v692.result,
            caption: "*DONE*"
          }, {
            quoted: p23
          });
        }
        break;
      case "happymod":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " Nama Apk Game");
          }
          await f9();
          let v693 = await RANDOMSCRAPERScraper.happymod(q);
          vF11(util2.format(v693));
        }
        break;
      case "apkmod":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " Nama Apk Nya");
          }
          await f9();
          let v694 = await RANDOMSCRAPERScraper.apkmody(q);
          vF11(util2.format(v694));
        }
        break;
      case "cariresep":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " ayam geprek");
          }
          await f9();
          let v695 = await RANDOMSCRAPERScraper.cariresep(q);
          vF11(util2.format(v695));
        }
        break;
      case "bacaresep":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Contoh " + (v86 + v87) + " https://resepkoki.id/resep/resep-ayam-geprek-keju/");
          }
          await f9();
          let v696 = await RANDOMSCRAPERScraper.bacaresep(q);
          let v697 = "Resep Di Bawah\nJudul : " + v696.judul_nya + "\nWaktu : " + v696.waktu_nya + "\nHasil : " + v696.hasil_nya + "\nTingkat Kesulitan : " + v696.tingkat_kesulitan + "\nBahan :\n" + v696.bahan_nya;
          p22.sendMessage(p23.chat, {
            image: {
              url: v696.thumb_nya
            },
            caption: v697,
            jpegThumbnail: ppnyauser
          }, {
            quoted: p23
          });
        }
        break;
      case "tts":
      case "gtts":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!q) {
          return vF11(" contoh : " + (v86 + v87) + " yamate kudasai");
        }
        await f9();
        const vRequire = require("./lib/gtts")("id", q);
        var v698 = v89.join(" ");
        ranm = vF7(".mp3");
        rano = vF7(".ogg");
        if (v698.length > 300) {
          vF11("Teks nya terlalu panjang kak");
        } else {
          vRequire.save(ranm, v698, function () {
            exec("ffmpeg -i " + ranm + " -ar 48000 -vn -c:a libopus " + rano, p164 => {
              fs2.unlinkSync(ranm);
              buff = fs2.readFileSync(rano);
              if (p164) {
                return vF11(mess.error);
              }
              p22.sendMessage(p23.chat, {
                audio: buff,
                mimetype: "audio/mp4",
                ptt: false
              }, {
                quoted: p23
              });
              fs2.unlinkSync(rano);
            });
          });
        }
        break;
      case "creategc":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (!v89.join(" ")) {
            return vF11("Penggunaan " + (v86 + v87) + " namagroup");
          }
          try {
            let v699 = await p22.groupCreate(v89.join(" "), []);
            let v700 = await p22.groupInviteCode(v699.id);
            v1123 = "Group Create Fitur\n\nName : " + v699.subject + "\nOwner : @" + v699.owner.split("@")[0] + "\nCreation : " + momentTimezone(v699.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss") + " WIB\n\nhttps://chat.whatsapp.com/" + v700 + "\n       ";
            p22.sendMessage(p23.chat, {
              text: v1123,
              mentions: await p22.parseMention(v1123)
            }, {
              quoted: p23
            });
          } catch (_0x486191) {
            console.log(_0x486191);
            vF11("" + _0x486191);
          }
        }
        break;
      case "quotechat":
      case "xquote":
      case "quotly":
      case "qc":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          if (v94 > 25) {
            return p23.reply("Contoh :\n\n1. Kirim perintah " + (v86 + v87) + " *teks*\n\t� Contoh : " + (v86 + v87) + " LU KONTOL\n2. Reply chat dengan caption " + (v86 + v87) + "\n\t� Contoh : " + (v86 + v87) + "\n\t\nMaksimal 25 karakter");
          }
          let v701 = p23.quoted ? v96.text : v94;
          try {
            try {
              pic = await p22.profilePictureUrl(p23.sender, "image");
            } catch {
              pic = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
            }
            const v702 = {
              type: "quote",
              format: "png",
              backgroundColor: "#FFFFFF",
              width: 512,
              height: 768,
              scale: 2,
              messages: [{
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: v90,
                  photo: {
                    url: pic
                  }
                },
                text: v701,
                replyMessage: {}
              }]
            };
            const v703 = await axios2.post("https://bot.lyo.su/quote/generate", v702, {
              headers: {
                "Content-Type": "application/json"
              }
            });
            const v704 = Buffer.from(v703.data.result.image, "base64");
            p22.sendImageAsSticker(p23.chat, v704, p23, {
              packname: global.packname,
              author: global.author
            });
          } catch (_0x28036c) {
            console.log(_0x28036c);
            vF11(_0x28036c + "\n\nServer sedang eror, coba lagi tahun depan");
          }
        }
        break;
      case "setppgroup":
      case "setgcpp":
      case "setgrouppp":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group Blok !");
          }
          if (!v109 && !v92) {
            return vF11("Fitur Ini Khusus Admin Blok !");
          }
          if (!v108) {
            return vF11("Bot Bukan Admin Lol !");
          }
          if (!v96) {
            return vF11("Where is the picture?");
          }
          if (!/image/.test(v97)) {
            return vF11("Send/Reply Image With Caption " + (v86 + v87));
          }
          if (/webp/.test(v97)) {
            return vF11("Send/Reply Image With Caption " + (v86 + v87));
          }
          var v705 = await p22.downloadAndSaveMediaMessage(v96, "ppgc.jpeg");
          if (v89[0] == "/panjang") {
            var {
              img: _0x512a52
            } = await generateProfilePicture(v705);
            await p22.query({
              tag: "iq",
              attrs: {
                to: p23.chat,
                type: "set",
                xmlns: "w:profile:picture"
              },
              content: [{
                tag: "picture",
                attrs: {
                  type: "image"
                },
                content: _0x512a52
              }]
            });
            fs2.unlinkSync(v705);
            vF11("Success");
          } else {
            var v709 = await p22.updateProfilePicture(p23.chat, {
              url: v705
            });
            fs2.unlinkSync(v705);
            vF11("Success");
          }
        }
        break;
      case "volume":
        {
          if (!v89.join(" ")) {
            return vF11("Example: " + (v86 + v87) + " 10");
          }
          media = await p22.downloadAndSaveMediaMessage(v96, "volume");
          if (isQuotedAudio) {
            rname = vF7(".mp3");
            exec("ffmpeg -i " + media + " -filter:a volume=" + v89[0] + " " + rname, (p165, p166, p167) => {
              fs2.unlinkSync(media);
              if (p165) {
                return vF11("Error!");
              }
              jadie = fs2.readFileSync(rname);
              p22.sendMessage(v101, {
                audio: jadie,
                mimetype: "audio/mp4",
                ptt: true
              }, {
                quoted: p23
              });
              fs2.unlinkSync(rname);
            });
          } else if (isQuotedVideo) {
            rname = vF7(".mp4");
            exec("ffmpeg -i " + media + " -filter:a volume=" + v89[0] + " " + rname, (p168, p169, p170) => {
              fs2.unlinkSync(media);
              if (p168) {
                return vF11("Error!");
              }
              jadie = fs2.readFileSync(rname);
              p22.sendMessage(v101, {
                video: jadie,
                mimetype: "video/mp4"
              }, {
                quoted: p23
              });
              fs2.unlinkSync(rname);
            });
          } else {
            vF11("Send video/audio");
          }
        }
        break;
      case "addowner":
        if (!v92) {
          return vF11("Fitur Ini Khusus Owner !");
        }
        if (!v89[0]) {
          return vF11("Use " + (v86 + v87) + " number\nExample " + (v86 + v87) + " " + owner);
        }
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let v707 = await p22.onWhatsApp(bnnd);
        if (v707.length == 0) {
          return vF11("Enter A Valid And Registered Number On WhatsApp!!!");
        }
        owner.push(bnnd);
        fs2.writeFileSync("./database/owner.json", JSON.stringify(owner));
        vF11("Number " + bnnd + " Has Become An Owner!!!");
        break;
      case "delowner":
        if (!v92) {
          return vF11("Fitur Ini Khusus Owner !");
        }
        if (!v89[0]) {
          return vF11("Use " + (v86 + v87) + " nomor\nExample " + (v86 + v87) + " 6283136394680");
        }
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs2.writeFileSync("./database/owner.json", JSON.stringify(owner));
        vF11("The Numbrr " + ya + " Has been deleted from owner list by the owner!!!");
        break;
      case "setppbot":
      case "setbotpp":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (!v96) {
            return vF11("Send/Reply Image With Caption " + (v86 + v87));
          }
          if (!/image/.test(v97)) {
            return vF11("Send/Reply Image With Caption " + (v86 + v87));
          }
          if (/webp/.test(v97)) {
            return vF11("Send/Reply Image With Caption " + (v86 + v87));
          }
          var v708 = await p22.downloadAndSaveMediaMessage(v96, "ppbot.jpeg");
          if (v89[0] == "/panjang") {
            var {
              img: _0x512a52
            } = await generateProfilePicture(v708);
            await p22.query({
              tag: "iq",
              attrs: {
                to: v91,
                type: "set",
                xmlns: "w:profile:picture"
              },
              content: [{
                tag: "picture",
                attrs: {
                  type: "image"
                },
                content: _0x512a52
              }]
            });
            fs2.unlinkSync(v708);
            vF11("Success");
          } else {
            var v709 = await p22.updateProfilePicture(v91, {
              url: v708
            });
            fs2.unlinkSync(v708);
            vF11("Success");
          }
        }
        break;
      case "facebookvid":
      case "fb":
      case "fbvid":
      case "fbvideo":
      case "fbdl":
      case "facebook":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Masukan Link Facebook Nya\n\nContoh :\n*" + (v86 + v87) + "* https://www.facebook.com/share/r/RYfwYCmzFYckTUAf/?mibextid=xCPwDs");
          }
          if (!v89[0].match(/facebook/gi)) {
            return vF11("Link Salah !");
          }
          try {
            await f9();
            const v710 = await axios2.get("https://fbdown-wine.vercel.app/api/get?url=" + v89[0]);
            let v711 = v710.data.hd;
            p22.sendMessage(p23.chat, {
              video: {
                url: v711
              },
              caption: "DONE"
            }, {
              quoted: p23
            });
          } catch (_0x1e911c) {
            console.log(_0x1e911c);
            vF11("EROR");
          }
        }
        break;
      case "fbb":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          ;
          if (!v89[0]) {
            return vF11("Masukan Link Facebook Nya\n\nContoh :\n*" + (v86 + v87) + "* https://www.facebook.com/share/r/RYfwYCmzFYckTUAf/?mibextid=xCPwDs");
          }
          await f9();
          const {
            facebookdl: _0x443844
          } = require("@bochilteam/scraper");
          let v712 = await _0x443844(v89[0]);
          for (let v713 of v712.video) {
            if (v713.quality === "720p (HD)") {
              let v714 = await v713.download();
              await p22.sendMessage(p23.chat, {
                video: {
                  url: v714
                },
                caption: "DONE"
              }, {
                quoted: p23
              });
              if (v712.audio[0].quality === "7kbps") {
                let v715 = await v712.audio[0].download();
                await p22.sendMessage(p23.chat, {
                  audio: {
                    url: v715
                  },
                  mimetype: "audio/mpeg",
                  ptt: true
                }, {
                  quoted: p23
                });
              }
              break;
            }
          }
        }
        break;
      case "nobg":
      case "removebg":
      case "snobg":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("Send/Reply Images/Videos/Gifs With Captions " + (v86 + v87) + "\nVideo Duration 1-9 Seconds");
          }
          try {
            if (/image/.test(v97)) {
              await f9();
              let v716 = await p22.downloadAndSaveMediaMessage(v96);
              let v717 = await uptotelegra(v716);
              let v718 = await axios2.get("https://api.shannmoderz.xyz/tools/removebg?url=" + v717);
              p22.sendMessage(p23.chat, {
                image: {
                  url: v718.data.result.image
                },
                caption: "DONE"
              }, {
                quoted: p23
              });
            } else {
              vF11("Send/Reply Images With Captions " + (v86 + v87));
            }
          } catch (_0x583ff1) {
            console.log(_0x583ff1);
            vF11("EROR KAK");
          }
        }
        break;
      case "shadow":
      case "write":
      case "romantic":
      case "burnpaper":
      case "smoke":
      case "narutobanner":
      case "love":
      case "undergrass":
      case "doublelove":
      case "coffecup":
      case "underwaterocean":
      case "smokyneon":
      case "starstext":
      case "rainboweffect":
      case "balloontext":
      case "metalliceffect":
      case "embroiderytext":
      case "flamingtext":
      case "stonetext":
      case "writeart":
      case "summertext":
      case "wolfmetaltext":
      case "nature3dtext":
      case "rosestext":
      case "naturetypography":
      case "quotesunder":
      case "shinetext":
      case "graffiti":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!q) {
            return vF11("Example : " + (v86 + v87) + " JerOfc");
          }
          await f9();
          let v719;
          if (/stonetext/.test(v87)) {
            v719 = "https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html";
          }
          if (/writeart/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html";
          }
          if (/summertext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html";
          }
          if (/wolfmetaltext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html";
          }
          if (/nature3dtext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
          }
          if (/rosestext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html";
          }
          if (/naturetypography/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html";
          }
          if (/quotesunder/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html";
          }
          if (/shinetext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html";
          }
          if (/shadow/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html";
          }
          if (/write/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html";
          }
          if (/romantic/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html";
          }
          if (/burnpaper/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html";
          }
          if (/smoke/.test(v87)) {
            v719 = "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html";
          }
          if (/narutobanner/.test(v87)) {
            v719 = "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html";
          }
          if (/love/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html";
          }
          if (/undergrass/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html";
          }
          if (/doublelove/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html";
          }
          if (/coffecup/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html";
          }
          if (/underwaterocean/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html";
          }
          if (/smokyneon/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html";
          }
          if (/starstext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html";
          }
          if (/rainboweffect/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html";
          }
          if (/balloontext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html";
          }
          if (/metalliceffect/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html";
          }
          if (/embroiderytext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html";
          }
          if (/flamingtext/.test(v87)) {
            v719 = "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html";
          }
          if (/graffiti/.test(v87)) {
            v719 = "https://photooxy.com/banner-cover/graffiti-text-cover-222.html";
          }
          let v720 = await RANDOMSCRAPERPhotooxy.photoOxy(v719, q);
          p22.sendMessage(p23.chat, {
            image: {
              url: v720
            },
            caption: "*DONE*"
          }, {
            quoted: p23
          });
        }
        break;
      case "closetime":
        if (!p23.isGroup) {
          return vF11(mess.group);
        }
        if (!v109 && !itsMealpha) {
          return vF11(mess.admin);
        }
        if (!v108) {
          return vF11(mess.botAdmin);
        }
        if (v89[1] == "detik") {
          var v730 = v89[0] * "1000";
        } else if (v89[1] == "menit") {
          var v730 = v89[0] * "60000";
        } else if (v89[1] == "jam") {
          var v730 = v89[0] * "3600000";
        } else if (v89[1] == "hari") {
          var v730 = v89[0] * "86400000";
        } else {
          return vF11("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        vF11("Close time " + q + " dimulai dari sekarang");
        fs2.writeFileSync("./database/opengc.json", JSON.stringify(p26));
        setTimeout(() => {
          var v725 = p23.participant;
          const v726 = "*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan";
          p22.groupSettingUpdate(v101, "announcement");
          vF11(v726);
        }, v730);
        break;
      case "opentime":
        if (!p23.isGroup) {
          return vF11(mess.group);
        }
        if (!v109 && !itsMealpha) {
          return vF11(mess.admin);
        }
        if (!v108) {
          return vF11(mess.botAdmin);
        }
        if (v89[1] == "detik") {
          var v730 = v89[0] * "1000";
        } else if (v89[1] == "menit") {
          var v730 = v89[0] * "60000";
        } else if (v89[1] == "jam") {
          var v730 = v89[0] * "3600000";
        } else if (v89[1] == "hari") {
          var v730 = v89[0] * "86400000";
        } else {
          return vF11("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        vF11("Open time " + q + " dimulai dari sekarang");
        fs2.writeFileSync("./database/opengc.json", JSON.stringify(p26));
        setTimeout(() => {
          var v731 = p23.participant;
          const v732 = "*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan";
          fs2.writeFileSync("./database/opengc.json", JSON.stringify(p26));
          p22.groupSettingUpdate(v101, "not_announcement");
          vF11(v732);
        }, v730);
        break;
      case "autoblok":
      case "autoblok212":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (v89[0] === "on") {
            if (global.autoblok212 === true) {
              return vF11("Udh on");
            }
            global.autoblok212 = true;
            vF11("Autoblok berhasil diaktifkan");
          } else if (v89[0] === "off") {
            if (global.autoblok212 === false) {
              return vF11("Udh off");
            }
            global.autoblok212 = false;
            vF11("Autoblok berhasil dinonaktifkan");
          } else {
            vF11(v86 + v87 + " on -- _mengaktifkan_\n" + (v86 + v87) + " off -- _Menonaktifkan_");
          }
        }
        break;
      case "autoread":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (v89[0] === "on") {
            if (global.autoread === true) {
              return vF11("Udh on");
            }
            global.autoread = true;
            vF11("Autoread berhasil diaktifkan");
          } else if (v89[0] === "off") {
            if (global.autoread === false) {
              return vF11("Udh off");
            }
            global.autoread = false;
            vF11("Autoread berhasil dinonaktifkan");
          } else {
            vF11(v86 + v87 + " on -- _mengaktifkan_\n" + (v86 + v87) + " off -- _Menonaktifkan_");
          }
        }
        break;
      case "autorespond":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (v89[0] === "on") {
            if (global.autorespon === true) {
              return vF11("Udh on");
            }
            global.autorespon = true;
            vF11("Autorespond berhasil diaktifkan");
          } else if (v89[0] === "off") {
            if (global.autorespon === false) {
              return vF11("Udh off");
            }
            global.autorespon = false;
            vF11("Autorespond berhasil dinonaktifkan");
          } else {
            vF11(v86 + v87 + " on -- _mengaktifkan_\n" + (v86 + v87) + " off -- _Menonaktifkan_");
          }
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("Reply Image");
          }
          if (!/webp/.test(v97)) {
            return vF11("reply sticker with caption *" + (v86 + v87) + "*");
          }
          await f9();
          let {
            webp2mp4File: _0xde8ca1
          } = require("./lib/uploader");
          let v733 = await p22.downloadAndSaveMediaMessage(v96);
          let v734 = await _0xde8ca1(v733);
          await p22.sendMessage(p23.chat, {
            video: {
              url: v734.result,
              caption: "Convert Webp To Video"
            }
          }, {
            quoted: p23
          });
          await fs2.unlinkSync(v733);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!/video/.test(v97) && !/audio/.test(v97)) {
            return vF11("Send/Reply Video/Audio You Want to Use as Audio With Caption " + (v86 + v87));
          }
          if (!v96) {
            return vF11("Send/Reply Video/Audio You Want to Use as Audio With Caption " + (v86 + v87));
          }
          await f9();
          let v735 = await v96.download();
          let {
            toAudio: _0x474768
          } = require("./lib/converter");
          let v736 = await _0x474768(v735, "mp4");
          p22.sendMessage(p23.chat, {
            audio: v736,
            mimetype: "audio/mpeg"
          }, {
            quoted: p23
          });
        }
        break;
      case "tomp3":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (/document/.test(v97)) {
            return vF11("Send/Reply Video/Audio You Want to Convert into MP3 With Caption " + (v86 + v87));
          }
          if (!/video/.test(v97) && !/audio/.test(v97)) {
            return vF11("Send/Reply Video/Audio You Want to Convert into MP3 With Caption " + (v86 + v87));
          }
          if (!v96) {
            return vF11("Send/Reply Video/Audio You Want to Convert into MP3 With Caption " + (v86 + v87));
          }
          await f9();
          let v737 = await v96.download();
          let {
            toAudio: _0x36e670
          } = require("./lib/converter");
          let v738 = await _0x36e670(v737, "mp4");
          p22.sendMessage(p23.chat, {
            document: v738,
            mimetype: "audio/mpeg",
            fileName: "Convert By " + p22.user.name + ".mp3"
          }, {
            quoted: p23
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!/video/.test(v97) && !/audio/.test(v97)) {
            return vF11("Reply Video/Audio That You Want To Be VN With Caption " + (v86 + v87));
          }
          if (!v96) {
            return vF11("Reply Video/Audio That You Want To Be VN With Caption " + (v86 + v87));
          }
          await f9();
          let v739 = await v96.download();
          let {
            toPTT: _0x266e81
          } = require("./lib/converter");
          let v740 = await _0x266e81(v739, "mp4");
          p22.sendMessage(p23.chat, {
            audio: v740,
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: p23
          });
        }
        break;
      case "togif":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("Reply video");
          }
          if (!/webp/.test(v97)) {
            return vF11("reply sticker with caption *" + (v86 + v87) + "*");
          }
          await f9();
          let {
            webp2mp4File: _0xc251f
          } = require("./lib/uploader");
          let v741 = await p22.downloadAndSaveMediaMessage(v96);
          let v742 = await _0xc251f(v741);
          await p22.sendMessage(p23.chat, {
            video: {
              url: v742.result,
              caption: "Convert Webp To Video"
            },
            gifPlayback: true
          }, {
            quoted: p23
          });
          await fs2.unlinkSync(v741);
        }
        break;
      case "afk":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!p23.isGroup) {
          return vF11("Fitur Ini Khusus Group Blok !");
        }
        if (v123) {
          return vF11("Afk sudah diaktifkan sebelumnya");
        }
        let v743 = v94 ? v94 : "Nothing.";
        libAfk.addAfkUser(p23.sender, Date.now(), v743, v2);
        p22.sendTextWithMentions(p23.chat, "@" + p23.sender.split("@")[0] + " sedang afk\nAlasan : " + v743, p23);
        break;
      case "listbahasa":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        var v744 = ["auto", "isSupported", "getCode"];
        var v1123 = "List Bahasa Yang Tersedia\n\n";
        const {
          translate: _0xf0f92c
        } = require("@vitalets/google-translate-api");
        for (let v746 in _0xf0f92c.languages) {
          if (!v744.includes(v746)) {
            v1123 += "*" + v746 + "* untuk " + _0xf0f92c.languages[v746] + "\n";
          }
        }
        vF11(v1123);
        break;
      case "ttc":
      case "ttt":
      case "tictactoe":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          let libTictactoe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (Object.values(this.game).find(p171 => p171.id.startsWith("tictactoe") && [p171.game.playerX, p171.game.playerO].includes(p23.sender))) {
            return vF11("Kamu masih didalam game");
          }
          let v747 = Object.values(this.game).find(p172 => p172.state === "WAITING" && (v94 ? p172.name === v94 : true));
          if (v747) {
            vF11("Partner ditemukan!");
            v747.o = p23.chat;
            v747.game.playerO = p23.sender;
            v747.state = "PLAYING";
            let v748 = v747.game.render().map(p173 => {
              return {
                X: "",
                O: "",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9"
              }[p173];
            });
            let v749 = "Room ID: " + v747.id + "\n\n" + v748.slice(0, 3).join("") + "\n" + v748.slice(3, 6).join("") + "\n" + v748.slice(6).join("") + "\n\nMenunggu @" + v747.game.currentTurn.split("@")[0] + "\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan";
            if (v747.x !== v747.o) {
              await p22.sendText(v747.x, v749, p23, {
                mentions: f6(v749)
              });
            }
            await p22.sendText(v747.o, v749, p23, {
              mentions: f6(v749)
            });
          } else {
            v747 = {
              id: "tictactoe-" + +new Date(),
              x: p23.chat,
              o: "",
              game: new libTictactoe(p23.sender, "o"),
              state: "WAITING"
            };
            if (v94) {
              v747.name = v94;
            }
            vF11("Menunggu partner" + (v94 ? " mengetik command dibawah ini " + v86 + (v86 + v87) + " " + v94 : ""));
            this.game[v747.id] = v747;
          }
        }
        break;
      case "delttc":
      case "delttt":
        {
          let v750 = Object.values(this.game).find(p174 => p174.id.startsWith("tictactoe") && [p174.game.playerX, p174.game.playerO].includes(p23.sender));
          if (!v750) {
            return vF11("Kamu sedang tidak berada di room tictactoe !");
          }
          delete this.game[v750.id];
          vF11("Berhasil delete session room tictactoe !");
        }
        break;
      case "casino":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          if (!v94) {
            return vF11("Kirim perintah *" + (v86 + v87) + "* @tag nominal");
          }
          let v751 = p23.mentionedJid[0] ? p23.mentionedJid[0] : p23.quoted ? p23.quoted.sender : v94.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (fs2.existsSync("./database/" + p23.chat + ".json")) {
            return vF11("Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *" + v86 + "delcasino*, untuk menghapus sesi");
          }
          if (!v89[1]) {
            return vF11("Masukan Nominal Nya");
          }
          if (v89[1].includes("-")) {
            return vF11("Jangan menggunakan -");
          }
          if (isNaN(parseInt(v89[1]))) {
            return vF11("Nominal Harus Berupa Angka!");
          }
          var vGetBalance = getBalance(p23.sender, balance);
          var vGetBalance2 = getBalance(p23.mentionedJid[0], balance);
          if (vGetBalance < v89[1] || vGetBalance == "undefined") {
            return vF11("Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik " + v86 + "balance, untuk mengecek Balance mu!");
          }
          if (vGetBalance2 < v89[1] || vGetBalance2 == "undefined") {
            return vF11("Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik " + v86 + "balance @tag untuk mengecek Balance lawanmu");
          }
          var vSetCasino2 = setCasino("" + p23.chat);
          vSetCasino2.Z = p23.sender.replace("@s.whatsapp.net", "");
          vSetCasino2.Y = v751;
          vSetCasino2.nominal = parseInt(v89[1]);
          fs2.writeFileSync("./database/casino/" + p23.chat + ".json", JSON.stringify(vSetCasino2, null, 2));
          var v752 = " Memulai Game Casino \n\n� @" + p23.sender.replace("@s.whatsapp.net", "") + " Menantang " + v94 + ", dengan Nominal: *$ " + parseInt(v89[1]) + "*\n� Ketik Y/N untuk menerima atau menolak Permainan!";
          p22.sendMessage(p23.chat, {
            text: v752,
            mentions: [p23.sender, v751]
          }, {
            quoted: p23
          });
        }
        break;
      case "delcasino":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (fs2.existsSync("./database/casino/" + p23.chat + ".json")) {
          var v753 = JSON.parse(fs2.readFileSync("./database/casino/" + p23.chat + ".json"));
          if (v753.Z.includes(p23.sender)) {
            deleteCasino(p23.chat);
            vF11("Berhasil Menghapus Sesi Casino");
          } else if (v753.Y.includes(p23.sender)) {
            deleteCasino(p23.chat);
            vF11("Berhasil Menghapus Sesi Casino");
          } else if (v109) {
            deleteCasino(p23.chat);
            vF11("Berhasil Menghapus Sesi Casino");
          } else if (v92) {
            deleteCasino(p23.chat);
            vF11("Berhasil Menghapus Sesi Casino");
          } else {
            vF11("Anda tidak bisa menghapus sesi casino, karena bukan pemain!");
          }
        } else {
          vF11("Tidak ada sesi yang berlangsung");
        }
        break;
      case "pppanjang":
      case "setppbot2":
        {
          if (!v92) {
            return vF11("Fitur Khusus owner!");
          }
          if (!v96) {
            return vF11("Reply foto dgn caption " + (v86 + v87));
          }
          if (!/image/.test(v97)) {
            return vF11("Reply foto dgn caption " + (v86 + v87));
          }
          if (/webp/.test(v97)) {
            return vF11("Reply foto dgn caption " + (v86 + v87));
          }
          let v754 = await p22.downloadAndSaveMediaMessage(v96);
          var {
            img: _0x512a52
          } = await generateProfilePicture(v754);
          await p22.query({
            tag: "iq",
            attrs: {
              to: v91,
              type: "set",
              xmlns: "w:profile:picture"
            },
            content: [{
              tag: "picture",
              attrs: {
                type: "image"
              },
              content: _0x512a52
            }]
          });
          fs2.unlinkSync(v754);
          vF11("Done!!!");
        }
        break;
      case "idgc2":
      case "id2":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Khusus Group!");
          }
          vF11(v101);
        }
        break;
      case "updatesetbot":
      case "setbot":
      case "changebot":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin & owner!");
          }
          if (!q) {
            return vF11("Gunakan dengan cara ." + v87 + " *teks_bot*\n\n_Contoh_\n\n" + v87 + " Halo saya adalah @bot\n\n@bot = nama bot\n@owner = nama owner\n@jam = jam\n@tanggal = tanggal");
          }
          if (isSetBot(p23.isGroup ? p23.chat : v91, v39)) {
            changeSetBot(q, p23.isGroup ? p23.chat : v91, v39);
            vF11("Sukses update set bot teks!");
          } else {
            addSetBot(q, p23.isGroup ? p23.chat : v91, v39);
            vF11("Sukses set teks bot!");
          }
        }
        break;
      case "delsetbot":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin & owner!");
          }
          if (!isSetBot(p23.isGroup ? p23.chat : v91, v39)) {
            return vF11("Belum ada set bot di chat ini");
          }
          removeSetBot(p23.isGroup ? p23.chat : v91, v39);
          vF11("Sukses delete set bot");
        }
        break;
      case "bot":
        {
          var v755 = "*APA WOI DAH ON AKU JANGAN KAU PANGGIL PANGGIL TERUS!!*";
          const vGetTextSetBot = getTextSetBot(p23.isGroup ? p23.chat : v91, v39);
          if (vGetTextSetBot !== undefined) {
            var v756 = vGetTextSetBot.replace("@bot", namabot).replace("@owner", namaowner).replace("@jam", v129).replace("@tanggal", vF10(new Date()));
            p22.sendMessage(p23.chat, {
              text: "" + v756
            }, {
              quoted: p23
            });
          } else {
            p22.sendMessage(p23.chat, {
              text: v755
            }, {
              quoted: p23
            });
          }
        }
        break;
      case "getpp":
      case "ppget":
      case "getprofile":
      case "getpic":
        {
          if (!v92) {
            return;
          }
          if (v124 === "true") {
            try {
              pporg = await p22.profilePictureUrl(p23.quoted.sender, "image");
            } catch {
              pporg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
            }
            p22.sendMessage(v101, {
              image: {
                url: pporg
              },
              caption: "*DONE*"
            }, {
              quoted: p23
            });
          } else if (v124 === "false") {
            try {
              pporgs = await p22.profilePictureUrl(v101, "image");
            } catch {
              pporgs = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
            }
            p22.sendMessage(v101, {
              image: {
                url: pporgs
              },
              caption: "*DONE*"
            }, {
              quoted: p23
            });
          }
        }
        break;
      case "juzamma":
        {
          await f9();
          if (v89[0] === "pdf") {
            await f9();
            p22.sendMessage(p23.chat, {
              document: {
                url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf"
              },
              mimetype: "application/pdf",
              fileName: "juz-amma-arab-latin-indonesia.pdf"
            }, {
              quoted: p23
            });
          } else if (v89[0] === "docx") {
            await f9();
            p22.sendMessage(p23.chat, {
              document: {
                url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx"
              },
              mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              fileName: "juz-amma-arab-latin-indonesia.docx"
            }, {
              quoted: p23
            });
          } else if (v89[0] === "pptx") {
            await f9();
            p22.sendMessage(p23.chat, {
              document: {
                url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx"
              },
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileName: "juz-amma-arab-latin-indonesia.pptx"
            }, {
              quoted: p23
            });
          } else if (v89[0] === "xlsx") {
            await f9();
            p22.sendMessage(p23.chat, {
              document: {
                url: "https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx"
              },
              mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              fileName: "juz-amma-arab-latin-indonesia.xlsx"
            }, {
              quoted: p23
            });
          } else {
            vF11("What Format Do You Want? ? Example : " + (v86 + v87) + " pdf\n\nAvailable Formats: pdf, docx, pptx, xlsx");
          }
        }
        break;
      case "anime":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!q) {
          return vF11("Which anime do you want to search?\nExample " + (v86 + v87) + " naruto");
        }
        await f9();
        const {
          Anime: _0x50ffc5
        } = require("@shineiichijo/marika");
        const v757 = new _0x50ffc5();
        let v758 = await v757.searchAnime(q);
        var v759 = v758.data[0];
        console.log(v759);
        let v760 = " *Title: " + v759.title + "*\n";
        v760 += " *Format: " + v759.type + "*\n";
        v760 += " *Status: " + v759.status.toUpperCase().replace(/\_/g, " ") + "*\n";
        v760 += " *Total episodes: " + v759.episodes + "*\n";
        v760 += " *Duration: " + v759.duration + "*\n";
        v760 += " *Genres:*\n";
        for (let v761 = 0; v761 < v759.genres.length; v761++) {
          v760 += "\t\t\t\t\t\t\t\t*" + v759.genres[v761].name + "*\n";
        }
        v760 += " *Based on: " + v759.source.toUpperCase() + "*\n";
        v760 += " *Studios:*\n";
        for (let v762 = 0; v762 < v759.studios.length; v762++) {
          v760 += "\t\t\t\t\t\t\t\t*" + v759.studios[v762].name + "*\n";
        }
        v760 += " *Producers:*\n";
        for (let v763 = 0; v763 < v759.producers.length; v763++) {
          v760 += "\t\t\t\t\t\t\t\t\t\t*" + v759.producers[v763].name + "*\n";
        }
        v760 += " *Premiered on: " + v759.aired.from + "*\n";
        v760 += " *Ended on: " + v759.aired.to + "*\n";
        v760 += " *Popularity: " + v759.popularity + "*\n";
        v760 += " *Favorites: " + v759.favorites + "*\n";
        v760 += " *Rating: " + v759.rating + "*\n";
        v760 += " *Rank: " + v759.rank + "*\n\n";
        if (v759.trailer.url !== null) {
          v760 += " *Trailer: " + v759.trailer.url + "*\n\n";
        }
        v760 += " *URL: " + v759.url + "*\n\n";
        if (v759.background !== null) {
          v760 += " *Background:* " + v759.background + "*\n\n";
        }
        v760 += " *Description:* " + v759.synopsis.replace(/\[Written by MAL Rewrite]/g, "");
        p22.sendMessage(p23.chat, {
          image: {
            url: v759.images.jpg.large_image_url
          },
          caption: v760
        }, {
          quoted: p23
        });
        break;
      case "manga":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        await f9();
        const {
          Manga: _0x1f41d0
        } = require("@shineiichijo/marika");
        const v764 = new _0x1f41d0();
        if (!q) {
          return vF11("Which manga do you want to search?\nExample " + v86 + "manga naruto");
        }
        let v765 = await v764.searchManga(q);
        let v766 = " *Title: " + v765.data[0].title + "*\n";
        v766 += " *Status: " + v765.data[0].status + "*\n";
        v766 += " *Total Volumes: " + v765.data[0].volumes + "*\n";
        v766 += " *Total Chapters: " + v765.data[0].chapters + "*\n";
        v766 += " *Genres:*\n";
        for (let v767 = 0; v767 < v765.data[0].genres.length; v767++) {
          v766 += "\t\t\t\t\t\t\t\t*" + v765.data[0].genres[v767].name + "*\n";
        }
        v766 += " *Published on: " + v765.data[0].published.from + "*\n";
        v766 += " *Score: " + v765.data[0].scored + "*\n";
        v766 += " *Popularity: " + v765.data[0].popularity + "*\n";
        v766 += " *Favorites: " + v765.data[0].favorites + "*\n";
        v766 += " *Authors:*\n";
        for (let v768 = 0; v768 < v765.data[0].authors.length; v768++) {
          v766 += "\t\t\t\t\t\t\t\t\t*" + v765.data[0].authors[v768].name + "* *(" + v765.data[0].authors[0].type + ")*\n";
        }
        v766 += "\n *URL: " + v765.data[0].url + "*\n\n";
        if (v765.data[0].background !== null) {
          v766 += " *Background:* " + v765.data[0].background;
        }
        v766 += " *Description:* " + v765.data[0].synopsis.replace(/\[Written by MAL Rewrite]/g, "");
        p22.sendMessage(p23.chat, {
          image: {
            url: v765.data[0].images.jpg.large_image_url
          },
          caption: v766
        }, {
          quoted: p23
        });
        break;
      case "fajar-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        FajarNews().then(async p175 => {
          console.log(p175);
          no = 0;
          v1123 = "";
          for (let v769 of p175) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v769.berita + "\n";
            v1123 += "Upload: " + v769.berita_diupload + "\n";
            v1123 += "Type: " + v769.berita_jenis + "\n";
            v1123 += "Link: " + v769.berita_url + "\n";
          }
          v1123 += "";
          vF11(v1123);
        });
        break;
      case "quotes":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        var v787 = await Quotes();
        v1123 = "";
        v1123 += "\nAuthor: " + v787.author + "\n";
        v1123 += "\nQuotes:\n";
        v1123 += v787.quotes + "\n";
        v1123 += "";
        vF11(v1123);
        break;
      case "darkjoke":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        var v787 = await Darkjokes();
        v1123 = "\nDarkjokes*";
        p22.sendMessage(p23.chat, {
          image: {
            url: v787
          },
          caption: v1123
        }, {
          quoted: p23
        });
        break;
      case "cnn-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        CNNNews().then(p176 => {
          no = 0;
          v1123 = "";
          for (let v772 of p176) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v772.berita + "\n";
            v1123 += "Link: " + v772.berita_url + "\n";
          }
          v1123 += "";
          vF11(v1123);
        });
        break;
      case "tvsearch":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        if (!q) {
          return vF11("Where is the title?");
        }
        LayarKaca21(q).then(async p177 => {
          no = 0;
          v1123 = "";
          for (let v773 of p177) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "Film: " + v773.film_title + "\n";
            v1123 += "Link: " + v773.film_link + "\n";
          }
          v1123 += "";
          vF11(v1123);
        });
        break;
      case "cnbc-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        CNBCNews().then(async p178 => {
          no = 0;
          v1123 = "";
          for (let v774 of p178) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v774.berita + "\n";
            v1123 += "Upload: " + v774.berita_diupload + "\n";
            v1123 += "Link: " + v774.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p178[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "tribun-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        TribunNews().then(async p179 => {
          no = 0;
          v1123 = "";
          for (let v775 of p179) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v775.berita + "\n";
            v1123 += "Upload: " + v775.berita_diupload + "\n";
            v1123 += "Type: " + v775.berita_jenis + "\n";
            v1123 += "Link: " + v775.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p179[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "indozone-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        IndozoneNews().then(async p180 => {
          no = 0;
          v1123 = "";
          for (let v776 of p180) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v776.berita + "\n";
            v1123 += "Upload: " + v776.berita_diupload + "\n";
            v1123 += "Type: " + v776.berita_jenis + "\n";
            v1123 += "Link: " + v776.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p180[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "kompas-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        KompasNews().then(async p181 => {
          no = 0;
          v1123 = "";
          for (let v777 of p181) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v777.berita + "\n";
            v1123 += "Upload: " + v777.berita_diupload + "\n";
            v1123 += "Type: " + v777.berita_jenis + "\n";
            v1123 += "Link: " + v777.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p181[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "detik-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        DetikNews().then(async p182 => {
          no = 0;
          v1123 = "";
          for (let v778 of p182) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v778.berita + "\n";
            v1123 += "Upload: " + v778.berita_diupload + "\n";
            v1123 += "Link: " + v778.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p182[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "daily-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        DailyNews().then(async p183 => {
          no = 0;
          v1123 = "";
          for (let v779 of p183) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v779.berita + "\n";
            v1123 += "Link: " + v779.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p183[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "inews-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        iNews().then(async p184 => {
          no = 0;
          v1123 = "";
          for (let v780 of p184) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v780.berita + "\n";
            v1123 += "Upload: " + v780.berita_diupload + "\n";
            v1123 += "Type: " + v780.berita_jenis + "\n";
            v1123 += "Link: " + v780.berita_url + "\n";
          }
          v1123 += "";
          vF11(v1123);
        });
        break;
      case "okezone-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        OkezoneNews().then(async p185 => {
          no = 0;
          v1123 = "";
          for (let v781 of p185) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v781.berita + "\n";
            v1123 += "Upload: " + v781.berita_diupload + "\n";
            v1123 += "Link: " + v781.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p185[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "sindo-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        SindoNews().then(async p186 => {
          no = 0;
          v1123 = "";
          for (let v782 of p186) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v782.berita + "\n";
            v1123 += "Type: " + v782.berita_jenis + "\n";
            v1123 += "Link: " + v782.berita_url + "\n";
          }
          v1123 += "";
          vF11(v1123);
        });
        break;
      case "tempo-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        TempoNews().then(async p187 => {
          no = 0;
          v1123 = "";
          for (let v783 of p187) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v783.berita + "\n";
            v1123 += "Upload: " + v783.berita_diupload + "\n";
            v1123 += "Link: " + v783.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p187[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "antara-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        AntaraNews().then(async p188 => {
          no = 0;
          v1123 = "";
          for (let v784 of p188) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v784.berita + "\n";
            v1123 += "Upload: " + v784.berita_diupload + "\n";
            v1123 += "Type: " + v784.berita_jenis + "\n";
            v1123 += "Link: " + v784.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p188[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "kontan-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        KontanNews().then(async p189 => {
          v1123 = "";
          no = 0;
          for (let v785 of p189) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v785.berita + "\n";
            v1123 += "Type: " + v785.berita_jenis + "\n";
            v1123 += "Upload: " + v785.berita_diupload + "\n";
            v1123 += "Link: " + v785.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p189[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "merdeka-news":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        MerdekaNews().then(async p190 => {
          v1123 = "";
          no = 0;
          for (let v786 of p190) {
            no += 1;
            v1123 += "\n� " + no.toString() + " �\n";
            v1123 += "News: " + v786.berita + "\n";
            v1123 += "Upload: " + v786.berita_diupload + "\n";
            v1123 += "Link: " + v786.berita_url + "\n";
          }
          v1123 += "";
          p22.sendMessage(p23.chat, {
            image: {
              url: p190[0].berita_thumb
            },
            caption: v1123
          }, {
            quoted: p23
          });
        });
        break;
      case "jalantikus-meme":
        if (vF18("id", p23.sender) == null && global.registered) {
          return await f11();
        }
        var v787 = await JalanTikusMeme();
        v1123 = "";
        v1123 += "\nLaughing out loud?\n";
        v1123 += "\nSource: " + v787 + "\n";
        v1123 += "";
        p22.sendMessage(p23.chat, {
          image: {
            url: v787
          },
          caption: v1123
        }, {
          quoted: p23
        });
        break;
      case "rename":
      case "renamelist":
        {
          if (!(p23.isGroup ? v109 : v92)) {
            return vF11("Fitur Khusus admin & owner!");
          }
          var v788 = q.split("|")[0].toLowerCase();
          var v789 = q.split("|")[1];
          if (!q.includes("|")) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *key|new key*\n\n_Contoh_\n\n" + (v86 + v87) + " list dm|list dm baru");
          }
          if (!isAlreadyResponList(p23.isGroup ? p23.chat : v91, v788, p40)) {
            return vF11("Maaf, untuk key *" + v788 + "* belum terdaftar di chat ini");
          }
          renameList(p23.isGroup ? p23.chat : v91, v788, v789, p40);
          vF11("Sukses Rename List!");
        }
        break;
      case "myip":
        {
          if (!v92) {
            return vF11("Khusus Owner!");
          }
          if (p23.isGroup) {
            return vF11("Khusus Private Chat!");
          }
          var http = require("http");
          http.get({
            host: "api.ipify.org",
            port: 80,
            path: "/"
          }, function (p191) {
            p191.on("data", function (p192) {
              vF11(" My public IP address is: " + p192);
            });
          });
        }
        break;
      case "gdrive":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89[0]) {
            return vF11("Enter the Google Drive link");
          }
          await f9();
          const apiDylux = require("api-dylux");
          try {
            let v790 = await apiDylux.GDriveDl(v89[0]);
            await vF11("*Google Drive DL*\n*Nama:* " + v790.fileName + "\n*Size:* " + v790.fileSize + "\n*Type:* " + v790.mimetype);
            p22.sendMessage(p23.chat, {
              document: {
                url: v790.downloadUrl
              },
              fileName: v790.fileName,
              mimetype: v790.mimetype
            }, {
              quoted: p23
            });
          } catch {
            vF11("Error: Check link or try another link");
          }
        }
        break;
      case "ringtone":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Example : " + (v86 + v87) + " black rover");
          }
          await f9();
          function f13(p193) {
            return new Promise((p194, p195) => {
              axios2.get("https://meloboom.com/en/search/" + p193).then(p196 => {
                let v791 = cheerio2.load(p196.data);
                let v792 = [];
                v791("#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li").each(function (p197, p198) {
                  v792.push({
                    title: v791(p198).find("h4").text(),
                    source: "https://meloboom.com/" + v791(p198).find("a").attr("href"),
                    audio: v791(p198).find("audio").attr("src")
                  });
                });
                p194(v792);
              });
            });
          }
          let v793 = await f13(v94);
          let v794 = v793[Math.floor(Math.random() * v793.length)];
          p22.sendMessage(p23.chat, {
            audio: {
              url: v794.audio
            },
            fileName: v794.title + ".mp3",
            mimetype: "audio/mpeg"
          }, {
            quoted: p23
          });
        }
        break;
      case "igs":
      case "igstory":
      case "igvideo":
      case "instavid":
      case "instagram":
      case "igreels":
      case "igtv":
      case "igphoto":
      case "igdl":
      case "ig":
      case "instafoto":
      case "igimg":
      case "igfoto":
      case "igvid":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Link ?\n\nContoh: " + (v86 + v87) + " https://www.instagram.com/reel/Cx9Y7YayR95/?igshid=ZWI2YzEzYmMxYg==");
          }
          if (!v89[0].match(/instagram/gi)) {
            return vF11("Link Salah !");
          }
          await f9();
          try {
            const {
              snapsave: _0x5a1dc2
            } = require("@bochilteam/scraper");
            let v795 = await _0x5a1dc2(v89[0]);
            for (let v796 of v795.results) {
              const v797 = v796.url;
              p22.sendFile(p23.chat, v797, null, "DONE", p23);
              await vF6(2000);
            }
          } catch (_0x3a04fb) {
            console.log(_0x3a04fb);
            vF11("EROR KAK");
          }
        }
        break;
        async function f14(p199) {
          let v798 = JSON.parse(fs2.readFileSync("./database/jadwaltv.json", "utf-8"));
          let v799 = v798.find(p200 => new RegExp(p199, "gi").test(p200.channel));
          let v800 = [];
          if (!v799) {
            throw "List Channel Yg Tersedia:\n\n" + v798.map(p201 => p201.channel).sort().join("\n");
          }
          let v801 = (await axios2.get("https://www.jadwaltv.net/" + (v799.isPay ? "jadwal-pay-tv/" : "") + v799.value)).data;
          let v802 = cheerio2.load(v801);
          v802("div > table.table").find("tbody > tr").slice(1).each(function () {
            let v803 = v802(this).find("td").eq(0).text();
            let v804 = v802(this).find("td").eq(1).text();
            if (!/Jadwal TV/gi.test(v804) && !/Acara/gi.test(v804)) {
              v800.push({
                jam: v803,
                acara: v804
              });
            }
          });
          return {
            channel: v799.channel.toUpperCase(),
            result: v800
          };
        }
      case "tvjadwal":
      case "jadwaltv":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Input Query");
          }
          await f9();
          try {
            let v805 = await f14(v94);
            let v806 = v805.result.map(p202 => "[" + p202.jam.replace("WIB", " WIB") + "] " + p202.acara).join`\n`;
            vF11("TV schedule " + v805.channel + "\n\n" + v806);
          } catch {
            vF11("EROR !, MUNGKIN SALURAN TV SALAH");
          }
        }
        break;
      case "gempa":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          await f9();
          try {
            let jerApi10 = require("jer-api");
            const v807 = await jerApi10.Gempa();
            const {
              Waktu: _0x199f86,
              Lintang: _0x22478e,
              Bujur: _0x2f050a,
              Magnitude: _0x5de020,
              Kedalaman: _0x809af,
              Wilayah: _0x37112d,
              Map: _0x1e1c7a
            } = v807.result;
            console.log(_0x1e1c7a);
            const v808 = "Time : " + _0x199f86 + "\nLatitude : " + _0x22478e + "\nLongitude : " + _0x2f050a + "\nRegion : " + _0x37112d;
            p22.sendMessage(v101, {
              image: {
                url: _0x1e1c7a
              },
              caption: v808
            }, {
              quoted: p23
            });
          } catch {
            vF11("EROR ! 404");
          }
        }
        break;
      case "stalktele":
      case "telestalk":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Masukan Usernamenya\n" + (v86 + v87) + " namakujer");
          }
          await f9();
          try {
            let v809 = await nodeFetch("https://forestapi.vercel.app/api/telegram/user/" + v94);
            let v810 = await v809.json();
            let v811 = "STALK TELE\n    \nUsername: " + v810.username + "\nName: " + v810.name + "\nBio: " + v810.bio + "\n";
            p22.sendFile(p23.chat, v810.image_url, "anu.jpg", v811, p23);
          } catch (_0x2ef4a9) {
            console.log(_0x2ef4a9);
            vF11("" + _0x2ef4a9);
          }
        }
        break;
        break;
      case "cuaca":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Pengunaan:\n" + (v86 + v87) + " <teks>\n\nContoh:\n" + (v86 + v87) + " Jakarta\n\nMasukan Kecamatan Atau Kota");
          }
          await f9();
          let v812 = await nodeFetch(api("https://api.openweathermap.org", "/data/2.5/weather", {
            q: v94,
            units: "metric",
            appid: "060a6bcfa19809c2cd4d97a212b19273"
          }));
          if (!v812.ok) {
            return vF11("lokasi tidak ditemukan");
          }
          let v813 = await v812.json();
          if (v813.cod != 200) {
            throw v813;
          }
          p23.reply(("\nLokasi: " + v813.name + "\nNegara: " + v813.sys.country + "\nCuaca: " + v813.weather[0].description + "\nSuhu saat ini: " + v813.main.temp + " °C\nSuhu tertinggi: " + v813.main.temp_max + " °C\nSuhu terendah: " + v813.main.temp_min + " °C\nKelembapan: " + v813.main.humidity + " %\nAngin: " + v813.wind.speed + " km/jam\n    ").trim());
        }
        break;
      case "gmaps":
      case "jarak":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          let [v814, v815] = v94.split`-`;
          if (!v814 || !v815) {
            return vF11("Contoh pemakaian: " + (v86 + v87) + " Tanggerang-Jakarta");
          }
          let jerApi11 = require("jer-api");
          await f9();
          let v816 = await jerApi11.jarak(v814, v815);
          if (v816.img) {
            return p22.sendMessage(p23.chat, {
              image: v816.img,
              caption: v816.desc
            }, {
              quoted: p23
            });
          }
        }
        break;
      case "jadwalsholat":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Use example " + (v86 + v87) + " Tanggerang");
          }
          const {
            jadwalsholat: _0x5b7aee
          } = require("@bochilteam/scraper");
          const v817 = await _0x5b7aee(v94);
          p23.reply(("\nJadwal Sholat *" + v94 + "*\n\n" + Object.entries(v817.today).map(([v818, v819]) => "*Sholat " + v818 + ":* " + v819).join("\n").trim() + "\n").trim());
        }
        break;
      case "session":
        if (!v92) {
          return vF11("FITUR KHUSUS OWNER !");
        }
        await f9();
        let v820 = await fs2.readFileSync("./session/creds.json");
        p22.sendMessage(p23.chat, {
          document: v820,
          mimetype: "application/json",
          fileName: "creds.json"
        }, {
          quoted: p23
        });
        break;
      case "delete":
      case "del":
        {
          if (!p23.isGroup) {
            if (!p23.key.fromMe && !v92) {
              return vF11("Fitur Khusus Owner");
            }
            if (!p23.quoted) {
              throw false;
            }
            let {
              chat: _0x3de5de,
              fromMe: _0xe72d4,
              id: _0x3ae8a9,
              isBaileys: _0x55e109
            } = p23.quoted;
            if (!_0x55e109) {
              return vF11("Pesan Tersebut Bukan Di Kirim Oleh Bot");
            }
            p22.sendMessage(p23.chat, {
              delete: {
                remoteJid: p23.chat,
                id: p23.quoted.id,
                participant: p23.quoted.sender
              }
            });
          } else {
            if (!v109 && !v92) {
              return vF11("Fitur Khusus Admin !");
            }
            if (!v108) {
              return vF11("Bot Bukan Admin :)");
            }
            if (!p23.quoted) {
              throw false;
            }
            let {
              chat: _0x48aa5f,
              fromMe: _0xb9f502,
              id: _0x10d71b,
              isBaileys: _0x1a69aa
            } = p23.quoted;
            p22.sendMessage(p23.chat, {
              delete: {
                remoteJid: p23.chat,
                id: p23.quoted.id,
                participant: p23.quoted.sender
              }
            });
          }
        }
        break;
      case "spy":
      case "spotifysearch":
      case "sposearch":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("*Contoh:* " + (v86 + v87) + " Karena Kamu");
          }
          let v821 = "";
          await f9();
          let jerApi12 = require("jer-api");
          try {
            let v822 = await jerApi12.sposearch(v94);
            let v823 = v822.data;
            for (let v824 in v823) {
              v821 += "*" + (parseInt(v824) + 1) + ".* *Title:* " + v823[v824].title + "\n";
              v821 += "*Duration:* " + v823[v824].duration + "\n";
              v821 += "*Popularity:* " + v823[v824].popularity + "\n";
              v821 += "*Link:* " + v823[v824].url + "\n\n";
            }
            await p22.relayMessage(p23.chat, {
              extendedTextMessage: {
                text: v821,
                contextInfo: {
                  externalAdReply: {
                    title: "V.S.L",
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: "https://www.scdn.co/i/_global/open-graph-default.png",
                    sourceUrl: "" + linkgcnya
                  }
                },
                mentions: [p23.sender]
              }
            }, {});
          } catch (_0x35e383) {
            console.log(_0x35e383);
            return vF11(_0x35e383 + "\n\n*MUSIK TIDAK DO TEMUKAN !*");
          }
        }
        ;
        break;
      case "tiktokstalk":
      case "ttstalk":
      case "stalktt":
      case "stalktiktok":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("*Example:* " + (v86 + v87) + " jerxxx_2");
          }
          await f9();
          let jerApi13 = require("jer-api");
          try {
            const v825 = await jerApi13.tiktokstalk2(v94);
            if (v825) {
              let v826 = "[ *T I K T O K - S T A L K* ]\n\n";
              v826 += "*Username* : " + v825.username + "\n";
              v826 += "*Description* : " + v825.description + "\n";
              v826 += "*Likes* : " + v825.likes + "\n";
              v826 += "*Followers* : " + v825.followers + "\n";
              v826 += "*Following* : " + v825.following + "\n";
              v826 += "*Totalposts* : " + v825.totalPosts + "\n\n";
              p22.sendFile(p23.chat, v825.profile, "tiktokstalk.jpg", v826, p23);
            }
          } catch (_0x3fa4e0) {
            vF11("Error: USERNAME TIDAK DI TEMUKAN !");
          }
        }
        break;
      case "ttstalk1":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("*Example:* " + (v86 + v87) + " jerxxx_2");
          }
          await f9();
          let jerApi14 = require("jer-api");
          try {
            const v827 = await jerApi14.tiktokstalk(v94);
            if (v827.data) {
              const {
                avatarMedium: _0x1c4808,
                avatarLarger: _0x58e9c1,
                id: _0x5108b7,
                shortId: _0x4929ce,
                uniqueId: _0x67b377,
                nickname: _0xf8c875,
                signature: _0x289666,
                createTime: _0x478420,
                verified: _0x37758f,
                secUid: _0x3def8,
                ftc: _0x4668c0,
                relation: _0x538aa5,
                openFavorite: _0x341306,
                commentSetting: _0x5241b4,
                region: _0x3fab09,
                ttSeller: _0x5bc165,
                privateAccount: _0x443316
              } = v827.data.user;
              const {
                followerCount: _0x2c24ea,
                followingCount: _0x19c044,
                heart: _0x5dcd2e,
                heartCount: _0x49ebd7,
                videoCount: _0xdc1572,
                diggCount: _0x15f58c,
                friendCount: _0x1dcf4d
              } = v827.data.stats;
              let v828 = "\n╭─❒ 「 *TIKTOK STALK* 」 \n│\n│ *NICKNAME:* " + _0xf8c875 + "\n│ *USERNAME:* " + _0x67b377 + "\n│ *FOLLOWERS:* " + _0x2c24ea + "\n│ *FOLLOW:* " + _0x19c044 + "\n│ *LIKE:* " + _0x5dcd2e + "\n│ *VIDEO POST:* " + _0xdc1572 + "\n│ *TEMAN:* " + _0x1dcf4d + "\n│ *BIO:* " + _0x289666 + "\n│ *PRIVATE:* " + _0x443316 + "\n│ *CREATE:* " + _0x478420 + "\n│ *VERIFIED:* " + _0x37758f + "\n│ *SELLER:* " + _0x5bc165 + "\n│ *REGION:* " + _0x3fab09 + "\n│\n╰❒\n";
              p22.sendFile(p23.chat, _0x1c4808, null, v828, p23);
            }
          } catch (_0x2521fb) {
            vF11("" + _0x2521fb);
          }
        }
        break;
      case "pptiktok":
      case "getpptiktok":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("*Example:* " + (v86 + v87) + " jerxxx_2");
          }
          await f9();
          try {
            let jerApi15 = require("jer-api");
            const v829 = await jerApi15.tiktokstalk2(v94);
            if (v829) {
              p22.sendFile(p23.chat, v829.profile, "tiktokstalk.jpg", "DONE", p23);
            }
          } catch (_0x8e02c5) {
            vF11("Error: USERNAME TIDAK DI TEMUKAN !");
          }
        }
        break;
      case "threads":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Masukkan URL!\n\ncontoh:\n" + (v86 + v87) + " https://www.threads.net/@cicididnteat/post/CytDET4R8S2/?igshid=NTc4MTIwNjQ2YQ==");
          }
          if (!v89[0].match(/threads/gi)) {
            return vF11("URL Tidak Ditemukan!");
          }
          await f9();
          let jerApi16 = require("jer-api");
          try {
            const v830 = await jerApi16.threads(v89[0]);
            const v831 = v830.image_urls[0] || null;
            const v832 = v830.video_urls[0] || null;
            if (v832) {
              try {
                p22.sendFile(p23.chat, v832.download_url, "threads.mp4", "*THREADS DOWNLOADER*", p23);
              } catch (_0x2089e3) {
                console.log(_0x2089e3);
                vF11(_0x2089e3 + "\n\n*VIDEO TERSEBUT TIDAK BISA DI DOWNLOAD !*");
              }
            } else if (v831) {
              try {
                p22.sendFile(p23.chat, v831, "threads.jpeg", "*THREADS DOWNLOADER*", p23);
              } catch (_0x550af5) {
                console.log(_0x550af5);
                vF11(_0x550af5 + "\n\n*FOTO TERSEBUT TIDAK BISA DI DOWNLOAD !*");
              }
            } else {
              vF11("Konten tidak ditemukan!");
            }
          } catch (_0x2aa8a5) {
            console.log(_0x2aa8a5);
            vF11("EROR : " + _0x2aa8a5 + "\n\n*SERVER SEDANG EROR*");
          }
        }
        break;
      case "toanime":
      case "jadianime":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("Send/Reply Foto Dengan Caption " + (v86 + v87));
          }
          if (!/image/.test(v97)) {
            return vF11("Send/Reply Foto Dengan Caption " + (v86 + v87));
          }
          await f9();
          try {
            let v833 = await v96.download();
            let v834 = await UploadImg(v833);
            let v835 = await axios2.get("https://api.betabotz.eu.org/api/maker/jadianime?url=" + v834 + "&apikey=" + btz);
            p22.sendMessage(p23.chat, {
              image: {
                url: v835.data.result.img_crop_single
              },
              caption: "DONE"
            }, {
              quoted: p23
            });
          } catch (_0x5e1b73) {
            console.log(_0x5e1b73);
            vF11("EROR KAK");
          }
        }
        break;
      case "wastalk":
      case "stalkwa":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          let v836 = p23.quoted?.sender || p23.mentionedJid?.[0] || v94;
          if (!v836) {
            return vF11("Ex: " + (v86 + v87) + " @tag / 628xxx\n\n" + (v86 + v87) + " 6283136394680");
          }
          v836 = v836.replace(/\D/g, "") + "@s.whatsapp.net";
          if (!(await p22.onWhatsApp(v836))[0]?.exists) {
            return vF11("User not exists");
          }
          let v837 = await p22.profilePictureUrl(v836, "image").catch(p203 => "https://btch.pages.dev/file/70e8de9b1879568954f09.jpg");
          let v838 = await p22.fetchStatus(v836).catch(p204 => {});
          let v839 = await p22.getName(v836);
          let v840 = await p22.getBusinessProfile(v836);
          let vAwesomePhonenumber = awesomePhonenumber("+" + v836.split("@")[0]);
          let v841 = v169.of(vAwesomePhonenumber.getRegionCode("international"));
          let v842 = "\t\t\t\t*[ WHATSAPP ]*\n\nCountry :* " + v841.toUpperCase() + "\n*Name :* " + (v839 ? v839 : "-") + "\n*Format Number :* " + vAwesomePhonenumber.getNumber("international") + "\n*Url Api :* wa.me/" + v836.split("@")[0] + "\n*Mentions :* @" + v836.split("@")[0] + "\n*Status :* " + (v838?.status || "-") + "\n*Date Status :* " + (v838?.setAt ? momentTimezone(v838.setAt.toDateString()).locale("id").format("LL") : "-") + "\n\n" + (v840 ? "\t\t\t\t*[ INFO BUSINESS ]*\n\n*BusinessId :* " + v840.wid + "\n*Website :* " + (v840.website ? v840.website : "-") + "\n*Email :* " + (v840.email ? v840.email : "-") + "\n*Category :* " + v840.category + "\n*Address :* " + (v840.address ? v840.address : "-") + "\n*Timeone :* " + (v840.business_hours.timezone ? v840.business_hours.timezone : "-") + "\n*Descripcion* : " + (v840.description ? v840.description : "-") : "*Standard WhatsApp Account*");
          if (v837) {
            await p22.sendMessage(p23.chat, {
              image: {
                url: v837
              },
              caption: v842,
              mentions: [v836]
            }, {
              quoted: p23
            });
          } else {
            p23.reply(v842);
          }
        }
        break;
      case "cekapi":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Masukan key kamu yang terdaftar dari website api.betabotz.eu.org");
          }
          await f9();
          try {
            ;
            let v843 = await nodeFetch("https://api.betabotz.eu.org/api/checkkey?apikey=" + v94);
            let v844 = await v843.text();
            p23.reply(v844);
          } catch (_0x13311a) {
            console.log(_0x13311a);
            vF11("Maaf Apikey tidak di temukan sepertinya kamu bukan user api dari web api.betabotz.eu.org");
          }
        }
        break;
        function f15(p205 = "") {
          return new Promise((p206, p207) => {
            let v845 = path2.join(aesthetic, f8(fs2.readdirSync(aesthetic)));
            let v846 = path2.join(_font, "Roboto-Black.ttf");
            let v847 = 1024;
            let vV847 = v847;
            let v848 = v847 + "x" + vV847;
            let v849 = "(" + noise("X", 2, v847, 1) + "+" + noise("Y", 1, vV847, 1) + ")/2+128";
            let v850 = "((" + f8(["", "-"]) + v847 * 45 / 2048 + "*" + f8(["sin", "cos"]) + "(X/" + v847 + "*4*PI))+" + noise("X", 5, v847, 0.8) + "+" + noise("Y", 2, vV847, 1) + ")/1.7+128";
            let v851 = 320 / 2048 * v847;
            let v852 = 1.5;
            let v853 = ",format=rgb24";
            let v854 = ["[v:0]scale=" + v848 + v853 + "[im]", textArgs("HARTA", "black", "white", v851, v846, "(w-text_w)/2", "(h-text_h)/2-(text_h*" + v852 + ")", v847, vV847) + v853 + "[top]", textArgs("TAHTA", "black", "white", v851, v846, "(w-text_w)/2", "(h-text_h)/2", v847, vV847) + v853 + "[mid]", textArgs(p205, "black", "white", v851, v846, "(w-text_w)/2", "(h-text_h)/2+(text_h*" + v852 + ")", v847, vV847) + v853 + "[bot]", "[top][mid]blend=all_mode=addition[con]", "[con][bot]blend=all_mode=addition[txt]", "nullsrc=s=" + v848 + ",geq='r=" + v849 + ":g=" + v849 + ":b=" + v849 + "'[dx]", "nullsrc=s=" + v848 + ",geq='r=" + v850 + ":g=" + v850 + ":b=" + v850 + "'[dy]", "[txt][dx][dy]displace[wa]", "[im][wa]blend=all_mode=multiply:all_opacity=1"];
            let v855 = new Date() * 1 + "_harta_tahta.png";
            v855 = path2.join(tmp, v855);
            let v856 = ["-y", "-i", v845, "-filter_complex", v854.join(";"), "-frames:v", "1", v855];
            console.log(v854);
            console.log("ffmpeg", ...v856);
            spawn("ffmpeg", v856).on("error", p207).on("close", () => {
              try {
                p206(fs2.readFileSync(v855));
              } catch (_0x7e2bb3) {
                p207(_0x7e2bb3);
              }
            });
          });
        }
      case "tahta":
        {
          p22.hartatahta = p22.hartatahta ? p22.hartatahta : {};
          if (p23.chat in p22.hartatahta) {
            throw "Masih ada yang sedang membuat\nTeks Harta Tahta\ndi chat ini... tunggu sampai selesai";
          } else {
            p22.hartatahta[p23.chat] = true;
          }
          await f9();
          try {
            let v857 = await f15(v94 ? v94 : "your title");
            p22.sendFile(p23.chat, v857, "Harta Tahta.png", "*DONE*", p23);
            setTimeout(() => {
              fs2.unlinkSync(v857);
            }, 5000);
          } finally {
            delete p22.hartatahta[p23.chat];
          }
        }
        break;
      case "douyin":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Masukkan URL!\n\ncontoh:\n" + (v86 + v87) + " https://v.douyin.com/ikq8axJ/");
          }
          if (!v89[0].match(/douyin/gi)) {
            return vF11("URL INVALID !");
          }
          await f9();
          try {
            const v858 = await axios2.get("https://jerofc.xyz/api/douyin?url=" + v89[0]);
            if (v858.data) {
              const {
                nowm: _0x5158f0,
                nowm_hd: _0x6033fd,
                audio: _0xe1765c
              } = v858.data.data;
              await p22.sendFile(p23.chat, _0x6033fd, null, "*DONE*", p23);
              p22.sendMessage(p23.chat, {
                audio: {
                  url: _0xe1765c
                }
              }, {
                quoted: p23
              });
            }
          } catch (_0x595c44) {
            console.log(_0x595c44);
            return vF11(_0x595c44 + "\n\nTerjadi kesalahan!");
          }
        }
        break;
      case "douyinimg":
      case "douyinfoto":
      case "douyinslide":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Masukkan URL!\n\ncontoh:\n" + (v86 + v87) + " https://v.douyin.com/ieWfMQA1/");
          }
          if (!v89[0].match(/douyin/gi)) {
            return vF11("URL INVALID !");
          }
          let v859 = await axios2.get("https://jerofc.xyz/api/douyinslide?url=" + v89[0]);
          await f9();
          try {
            for (let v860 of v859.data.result.images) {
              p22.sendFile(p23.chat, v860, "douyin.jpg", "", p23);
            }
          } catch (_0x11f36a) {
            console.log(_0x11f36a);
            vF11(_0x11f36a + "\n\nEROR !");
          }
        }
        break;
      case "douyinasupan":
      case "asupandouyin":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          await f9();
          let v861 = await nodeFetch("https://api.betabotz.eu.org/api/asupan/douyin?apikey=" + btz);
          if (!v861.ok) {
            throw await v861.text();
          }
          let v862 = await v861.buffer();
          p22.sendFile(p23.chat, v862, "asupandouyin.mp4", "*DONE*", p23);
        }
        break;
      case "umaru":
      case "keneki":
      case "megumin":
      case "yotsuba":
      case "shinomiya":
      case "yumeko":
      case "Tejina":
      case "chiho":
      case "touka-chan":
      case "akira":
      case "Itori":
      case "kurumi":
      case "sagiri":
      case "eba":
      case "deidara":
      case "itachi":
      case "madara":
      case "asuna":
      case "ayuzawa":
      case "chitoge":
      case "emilia":
      case "hestia":
      case "inori":
      case "ana":
      case "miku":
      case "kaori":
      case "shizuka":
      case "doraemon":
      case "pokemon":
      case "kaga":
      case "koturi":
      case "mikasa":
      case "akiyama":
      case "gremory":
      case "isuzu":
      case "shina":
      case "kagura":
      case "shinka":
      case "tsunade":
      case "sasuke":
      case "sakura":
      case "rize":
      case "one-piece":
      case "nezuko":
      case "boruto":
      case "naruto":
      case "erza":
      case "kakasih":
      case "minato":
      case "elaina":
      case "yuri":
      case "shota":
      case "waifu":
      case "waifu-2":
      case "loli":
      case "hinata":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92) {
            return await f10();
          }
          await f9();
          let v863 = await nodeFetch(global.api("btz", "/api/anime/" + v87, {}, "apikey"));
          if (!v863.ok) {
            throw await v863.text();
          }
          let v864 = await v863.buffer();
          p22.sendFile(p23.chat, v864, "cogan.jpg", "DONE", p23);
        }
        break;
      case "cekreso":
      case "cekresolusi":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          const libUploadImage = require("./lib/uploadImage");
          let v865 = p23.quoted ? p23.quoted : p23;
          if (!v97) {
            return vF11("where the media?");
          }
          let v866 = await v865.download();
          let v867 = /image\/(png|jpe?g|gif)|video\/mp4/.test(v97);
          let v868 = await (v867 ? libUploadImage : libUploadImage)(v866);
          let v869 = await jimp2.read(await v868);
          let v870 = await v869.getHeight();
          let v871 = await v869.getWidth();
          vF11("*_RESOLUSI:_* " + v871 + " x " + v870 + "\n\n*> Lebar :* " + v871 + "\n*> Tinggi :* " + v870 + "\n\n*> Link :* " + v868);
        }
        break;
      case "cekwr":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          let v872 = q.split(" ")[0];
          let v873 = q.split(" ")[1];
          let v874 = q.split(" ")[2];
          if (!v872) {
            return vF11("Contoh penggunaan:\nCekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>\n\n*Cekwr 500 50 70*");
          }
          if (!v873) {
            return vF11("Contoh penggunaan:\nCekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>\n\n*Cekwr 500 50 70*");
          }
          if (!v874) {
            return vF11("Contoh penggunaan:\nCekwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>\n\n*Cekwr 500 50 70*");
          }
          if (isNaN(v872) || isNaN(v873) || isNaN(v874)) {
            return vF11("Input tidak valid. Pastikan semua input berupa angka.");
          }
          ;
          function f16(p208, p209, p210) {
            let v875 = Math.round(p208 * (100 - p209) / 100);
            let v876 = Math.round(v875 * (100 / (100 - p210)));
            let v877 = v876 - p208;
            return Math.round(v877);
          }
          const vF162 = f16(v872, v873, v874);
          const v878 = "     *[ CALCULATOR WIN RATE ]*\n  \nAnda memerlukan sekitar *" + vF162 + "* win tanpa lose untuk mendapatkan win rate *" + v874 + "%*";
          vF11(v878);
        }
        break;
      case "sampah":
        {
          if (!v92) {
            return vF11("Fitur Khusus Owner");
          }
          let v879 = await fs2.readdirSync("./RANDOM/database/media");
          var v1123 = "JUMLAH SAMPAH SYSTEM\n\n";
          v1123 += "Total : " + v879.filter(p211 => p211.endsWith("gif") || p211.endsWith("bin") || p211.endsWith("png") || p211.endsWith("mp3") || p211.endsWith("mp4") || p211.endsWith("jpg") || p211.endsWith("jpeg") || p211.endsWith("webp") || p211.endsWith("webm")).map(p212 => p212).length + " Sampah\n\n";
          v1123 += v879.filter(p213 => p213.endsWith("gif") || p213.endsWith("bin") || p213.endsWith("png") || p213.endsWith("mp3") || p213.endsWith("mp4") || p213.endsWith("jpg") || p213.endsWith("jpeg") || p213.endsWith("webp") || p213.endsWith("webm")).map(p214 => p214 + "\n").join("");
          vF11(v1123);
        }
        break;
      case "delsampah":
        {
          if (!v92) {
            return vF11("Fitur Khusus Owner");
          }
          let v881 = path2.join("./RANDOM/database/media");
          fs2.readdir(v881, async function (p215, p216) {
            if (p215) {
              return vF11("Tidak dapat memindai direktori: " + p215);
            }
            let v882 = await p216.filter(p217 => p217.endsWith("gif") || p217.endsWith("bin") || p217.endsWith("png") || p217.endsWith("mp3") || p217.endsWith("mp4") || p217.endsWith("jpg") || p217.endsWith("jpeg") || p217.endsWith("webp") || p217.endsWith("webm"));
            var v883 = "Terdeteksi " + v882.length + " file sampah\n\n";
            if (v882.length == 0) {
              return vF11(v883);
            }
            v882.map(function (p218, p219) {
              v883 += p219 + 1 + (". " + p218 + "\n");
            });
            vF11(v883);
            await vF6(2000);
            vF11("Menghapus file sampah...");
            await v882.forEach(function (p220) {
              if (fs2.unlinkSync("./RANDOM/database/media/" + p220)) {
                "./RANDOM/JERMEDIA/audio/" + p220;
              }
            });
            await vF6(2000);
            vF11("Berhasil menghapus semua sampah");
          });
        }
        let v884 = path2.join("./RANDOM/JERMEDIA/audio");
        fs2.readdir(v884, async function (p221, p222) {
          if (p221) {
            return vF11("Tidak dapat memindai direktori: " + p221);
          }
          let v885 = await p222.filter(p223 => p223.endsWith("gif") || p223.endsWith("bin") || p223.endsWith("png") || p223.endsWith("mp3") || p223.endsWith("mp4") || p223.endsWith("jpg") || p223.endsWith("jpeg") || p223.endsWith("webp") || p223.endsWith("webm"));
          v885.map(function (p224, p225) {
            v1123 += p225 + 1 + (". " + p224 + "\n");
          });
          await v885.forEach(function (p226) {
            fs2.unlinkSync("./RANDOM/JERMEDIA/audio/" + p226);
          });
          await vF6(2000);
        });
        break;
      case "paptt":
        if (!v105 && !v92 && global.onlyprem) {
          return await f10();
        }
        if (!q) {
          return vF11("Example \n" + v87 + " foto/video");
        }
        await f9();
        let v886 = JSON.parse(fs2.readFileSync("./database/paptt-foto.json"));
        let v887 = JSON.parse(fs2.readFileSync("./database/paptt-video.json"));
        let vF838 = f8(v886);
        let vF839 = f8(v887);
        if (q == "foto") {
          vF11("Foto Akan Dikirim Lewat Private Chat ( *PC* )");
          p22.sendMessage(p23.sender, {
            image: {
              url: vF838
            },
            caption: "Mana Tahan"
          }, {
            quoted: v127
          });
        } else if (q == "video") {
          vF11("Video Akan Dikirim Lewat Private Chat ( *PC* )");
          p22.sendMessage(p23.sender, {
            video: {
              url: vF839
            },
            caption: "Mana Tahan"
          }, {
            quoted: v127
          });
        }
        break;
      case "tiktoksearch":
      case "searchtiktok":
      case "searchtt":
      case "ttsearch":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v94) {
            return vF11("*Example:* " + (v86 + v87) + " Meme");
          }
          await f9();
          let jerApi17 = require("jer-api");
          try {
            let v888 = await jerApi17.ttsearch("" + v94);
            let v889 = "乂  *TIKTOK - SEARCH*\n\n";
            v889 += "\t◦\t*Title :* " + v888.title + "\n\n";
            await p22.sendFile(p23.chat, v888.no_watermark, "tiktoks.mp4", v889, p23);
            p22.sendMessage(p23.chat, {
              audio: {
                url: v888.music
              },
              mimetype: "audio/mpeg"
            }, {
              quoted: p23
            });
          } catch (_0x4e3d6d) {
            console.log(_0x4e3d6d);
            vF11("*" + _0x4e3d6d + "*\n\n*Video Tidak Ditemukan!*");
          }
        }
        break;
      case "fetch":
      case "get":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!/^https?:\/\//.test(v94)) {
            return vF11("Awali *URL* dengan http:// atau https://");
          }
          await f9();
          let v890 = new URL(v94);
          let v891 = global.api(v890.origin, v890.pathname, Object.fromEntries(v890.searchParams.entries()), "apikey");
          let v892 = await nodeFetch(v891);
          if (v892.headers.get("content-length") > 107374182400) {
            throw "Content-Length: " + v892.headers.get("content-length");
          }
          if (!/text|json/.test(v892.headers.get("content-type"))) {
            return p22.sendFile(p23.chat, v891, "file", "DONE", p23);
          }
          let v893 = await v892.buffer();
          try {
            v893 = util2.format(JSON.parse(v893 + ""));
          } catch (_0x3fdb34) {
            v893 = v893 + "";
          } finally {
            vF11(v893.slice(0, 65536) + "");
          }
        }
        break;
        function f17() {}
        function f18(p227) {
          const v894 = ["Bytes", "KB", "MB", "GB", "TB"];
          if (p227 === 0) {
            return "0 Bytes";
          }
          const vParseInt = parseInt(Math.floor(Math.log(p227) / Math.log(1024)), 10);
          return Math.round(p227 / Math.pow(1024, vParseInt), 2) + " " + v894[vParseInt];
        }
        function f19(p228) {
          return p228.replace(/\b\w/g, function (p229) {
            return p229.toUpperCase();
          });
        }
        function f20(p230) {
          const v895 = Math.floor(p230 / 1000);
          const v896 = Math.floor(v895 / 60);
          const v897 = Math.floor(v896 / 60);
          const v898 = Math.floor(v897 / 24);
          return v898 + " days, " + v897 % 24 + " hours, " + v896 % 60 + " minutes, " + v895 % 60 + " seconds";
        }
      case "server":
      case "infoserver":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          let v899 = await nodeFetch("https://ip-json.vercel.app/").then(p231 => p231.json()).then(p232 => {
            delete p232.status;
            let v900 = "乂  *S E R V E R*\n\n";
            v900 += "┌  ◦  OS : " + os2.type() + " (" + os2.arch() + " / " + os2.release() + ")\n";
            v900 += "│  ◦  Ram : " + f18(os2.totalmem() - os2.freemem()) + " / " + f18(os2.totalmem()) + "\n";
            for (let v901 in p232.result) {
              v900 += "│  ◦  " + f19(v901) + " : " + p232.result[v901] + "\n";
            }
            v900 += "│  ◦  Uptime : " + f20(os2.uptime() * 1000) + "\n";
            v900 += "└  ◦  Processor : " + os2.cpus()[0].model + "\n\n";
            p22.relayMessage(p23.chat, {
              extendedTextMessage: {
                text: v900,
                contextInfo: {
                  externalAdReply: {
                    title: "" + f20(os2.uptime() * 1000),
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: "https://telegra.ph/file/cf4f28ed3b9ebdfb30adc.png",
                    sourceUrl: "" + linkgcnya
                  }
                },
                mentions: [p23.sender]
              }
            }, {});
            f17();
          }).catch(p233 => {
            console.log(p233);
            f17();
          });
        }
        ;
        break;
      case "simi":
        {
          if (!v94) {
            return vF11("Masukan Text Nya !");
          }
          await f9();
          try {
            let jerApi18 = require("jer-api");
            let v902 = await jerApi18.simisimi(v94, "id");
            vF11(v902);
          } catch (_0x235a89) {
            vF11("Maaf aku tidak mengerti");
          }
        }
        break;
      case "cekrekening":
      case "cekrek":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (p23.isGroup) {
            return vF11("Fitur Ini Khusus Di Private Chat Saja! Demi Melindungi Nomor Rekening Kamu");
          }
          let v903 = "\nANZ Indonesia = anz\nATMB LSB (BPR LSB) = atmb_lsb\nATMB PLUS = atmb_plus\nAllo Bank/Bank Harda Internasional = harda\nBANK MANTAP (Mandiri Taspen) = mantap\nBCA = bca\nBCA (Bank Central Asia) Syariah = bca_syr\nBJB = bjb\nBJB Syariah = bjb_syr\nBNI = bni\nBNI CC = bni_cc\nBNP Paribas Indonesia = bnp_paribas\nBPD Bali = bali\nBPD Banten = banten\nBPD DIY = daerah_istimewa\nBPD DIY Syariah = daerah_istimewa_syr\nBPR EKA (Bank Eka) = eka\nBRI = bri\nBRI (Bank Rakyat Indonesia) Syariah = bri_syr\nBRI Agroniaga = agroniaga\nBRI CC = bri_cc\nBSI (Bank Syariah Indonesia) = bsm\nBTN = btn\nBTN Syariah = btn_syr\nBTPN / Jenius / BTPN Wow! = tabungan_pensiunan_nasional\nBank Aceh Syariah = aceh\nBank Aladin Syariah = aladin\nBank Amar Indonesia = amar\nBank Antardaerah = antardaerah\nBank Artha Graha Internasional = artha\nBank BTPN Syariah = btpn_syr\nBank Bengkulu = bengkulu\nBank Bukopin Syariah = bukopin_syr\nBank Bumi Arta = bumi_arta\nBank CNB (Centratama Nasional Bank) = cnb\nBank Capital Indonesia = capital\nBank China Construction Bank Indonesia = ccb\nBank DKI Jakarta = dki\nBank DKI Syariah = dki_syr\nBank Danamon Syariah = danamon_syr\nBank Dinar Indonesia = dinar\nBank Ganesha = ganesha\nBank IBK Indonesia = agris\nBank Ina Perdana = ina_perdana\nBank Index Selindo = index_selindo\nBank Jago Syariah = artos_syr\nBank Jambi = jambi\nBank Jambi Syariah = jambi_syr\nBank Jasa Jakarta = jasa_jakarta\nBank Jateng = jawa_tengah\nBank Jateng Syariah = jawa_tengah_syr\nBank Jatim = jawa_timur\nBank Jatim Syariah = jawa_timur_syr\nBank Kalbar = kalimantan_barat\nBank Kalbar Syariah = kalimantan_barat_syr\nBank Kalsel = kalimantan_selatan\nBank Kalsel Syariah = kalimantan_selatan_syr\nBank Kalteng = kalimantan_tengah\nBank Kaltimtara = kalimantan_timur\nBank Kaltimtara Syariah = kalimantan_timur_syr\nBank Lampung = lampung\nBank Maluku = maluku\nBank Maspion Indonesia = maspion\nBank Mayapada = mayapada\nBank Mayora Indonesia = mayora\nBank Mega = mega\nBank Mega Syariah = mega_syr\nBank Mestika Dharma = mestika_dharma\nBank Mizuho Indonesia = mizuho\nBank Multi Arta Sentosa (Bank MAS) = mas\nBank Mutiara = mutiara\nBank NTB Syariah = nusa_tenggara_barat\nBank NTT = nusa_tenggara_timur\nBank Nagari Syariah = sumatera_barat_syr\nBank Nusantara Parahyangan = nusantara_parahyangan\nBank Papua = papua\nBank Permata = permata\nBank Prima Master = prima\nBank Resona Perdania = resona_perdania\nBank Riau Kepri = riau_dan_kepri\nBank Sahabat Sampoerna = sahabat_sampoerna\nBank Shinhan Indonesia = shinhan\nBank Sinarmas = sinarmas\nBank Sinarmas Syariah = sinarmas_syr\nBank Sulselbar = sulselbar\nBank Sulselbar Syariah = sulselbar_syr\nBank Sulteng = sulawesi\nBank Sultra = sulawesi_tenggara\nBank SulutGo = sulut\nBank Sumbar (Bank Nagari) = sumatera_barat\nBank Sumsel Babel = sumsel_dan_babel\nBank Sumsel Babel Syariah = sumsel_dan_babel_syr\nBank Sumut = sumut\nBank Sumut Syariah = sumut_syr\nBank Victoria International = victoria_internasional\nBank Victoria Syariah = victoria_syr\nBank Woori Saudara = woori\nBank of America NA = america_na\nBank of China (Hong Kong) Limited = boc\nBank of India Indonesia = india\nBank of Tokyo Mitsubishi UFJ = tokyo\nBillfazz = billfazz\nBlu/BCA Digital = royal\nCIMB CC = cimb_cc\nCIMB Niaga/CIMB Niaga Syariah = cimb\nCTBC (Chinatrust) Indonesia = chinatrust\nCitibank = citibank\nCommonwealth Bank = commonwealth\nDANA = dana\nDBS Indonesia = dbs\nDOKU = doku\nDUTAMONEY = dutamoney\nDanamon / Danamon Syariah = danamon\nDanamon CC = danamon_cc\nDompetku = dompetku\nE2Pay = e2pay\nFINNET = finnet\nGoPay = gopay\nGojek Driver = gopay_driver\nGudang Voucher = gv\nHSBC CC = hsbc_cc\nHSBC Indonesia = hsbc\nICBC Indonesia = icbc\nJago/Artos = artos\nKC JPMorgan Chase Bank = jpmorgan_chase\nLINE Bank/KEB Hana = hana\nLinkAja = linkaja\nMandiri = mandiri\nMandiri CC = mandiri_cc\nMaybank CC = maybank_cc\nMaybank Indonesia = bii\nMaybank Indonesia Syariah = bii_syr\nMega CC = mega_cc\nMidtrans = midtrans\nMotion/MNC Bank = mnc_internasional\nMuamalat = muamalat\nNeo Commerce/Yudha Bhakti = yudha_bakti\nNobu (Nationalnobu) Bank = nationalnobu\nOCBC CC = ocbc_cc\nOCBC NISP = ocbc\nOCBC NISP Syariah = ocbc_syr\nOVO = ovo\nPanin Bank = panin\nPanin Dubai Syariah = panin_syr\nPermata CC = permata_cc\nPermata Syariah = permata_syr\nQNB Indonesia = qnb_kesawan\nRabobank International Indonesia = rabobank\nSAKUKU = sakuku\nSBI Indonesia = sbi_indonesia\nSaldo Flip = saldo_flip\nSeabank/Bank BKE = kesejahteraan_ekonomi\nShopeePay = shopeepay\nStandard Chartered Bank = standard_chartered\nTMRW/UOB = uob\nTokopedia = tokopedia\nUOB/CITI CC = uob_cc\nWokee/Bukopin = bukopin\n";
          const vF19 = p234 => {
            const v904 = p234.replace(/[-\s]/g, "");
            if (v904.startsWith("+62")) {
              return v904;
            }
            if (v904.startsWith("0") || v904.startsWith("8") || v904.length === 10) {
              return "+62" + v904.substring(1);
            }
            if (v904.startsWith("62")) {
              return "+62" + v904.substring(2);
            }
            return p234;
          };
          if (!v89[0]) {
            return vF11("*BERIKUT BEBERAPA CEK REKENING YANG TERSEDIA SAAT INI*\n\n" + v903);
          }
          if (v89.length < 2) {
            throw "*_Masukan Kode Bank dan Nomor Rekening!_*\nContoh: *cekrek dana 0813xxx*\nContoh: *" + (v86 + v87) + " kode bank - no rekening \n\n" + v903;
          }
          let vVF19 = vF19(v89.slice(1).join(" "));
          await f9();
          let v905 = await nodeFetch("https://cek-rekening-two.vercel.app/api/cek-rekening?bank_code=" + v89[0] + "&number=" + vVF19);
          if (!v905.ok) {
            throw "Tidak dapat menemukan informasi rekening.";
          }
          let v906 = await v905.json();
          if (!v906.status || !v906.data) {
            throw "Data tidak ditemukan Mungkin Nomor Rekening Salah";
          }
          let {
            norek: _0x14cd9d,
            nama: _0x3c8ccb,
            bank: _0x24abcc
          } = v906.data;
          vF11("No. Rekening: " + _0x14cd9d + "\nNama: " + _0x3c8ccb + "\nBank: " + _0x24abcc);
        }
        break;
      case "gemini":
      case "aigemini":
      case "geminiai":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          try {
            if (!v94) {
              return vF11("Silakan coba lagi, teks jangan kosong.\n*Ex: " + (v86 + v87) + " berikan saya kodingan python kalkulator!*");
            }
            await f9();
            let v907 = await axios2.get("https://jerofc.my.id/api/gemini?text=" + v94);
            vF11(v907.data.data.message);
          } catch (_0x567da7) {
            console.error("Error:", _0x567da7);
            vF11("Terjadi kesalahan saat memproses permintaan Anda.");
          }
        }
        break;
      case "harilibur":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          try {
            await f9();
            let jerApi19 = require("jer-api");
            const {
              libnas_content: _0x40d4ef,
              nextLibur: _0x516d64
            } = await jerApi19.NextLibur();
            let v908 = 1;
            const v909 = String.fromCharCode(8206);
            const v910 = v909.repeat(4001);
            let v911 = "*" + _0x516d64 + "*\n\n" + v910;
            for (let v912 of _0x40d4ef) {
              v911 += v908++ + ". Ringkasan: " + v912.summary + "\nHari: " + v912.days + "\nBulan: " + v912.dateMonth + "\n\n";
            }
            vF11(v911);
          } catch (_0x1190bd) {
            console.log(_0x1190bd);
            vF11("" + _0x1190bd);
          }
        }
        break;
      case "spamwa":
        {
          if (!v92) {
            return vF11("Fitur Khusus Owner");
          }
          let [v913, v914, v915] = v94.split("|");
          if (!v913) {
            throw "- Format: *#spamwa nomor|teks|jumlah*\n- Contoh: *.spamwa 5219999999999|Apa coba|50*";
          }
          if (!v914) {
            throw "- Format: *#spamwa nomor|teks|jumlah*\n- Contoh: *.spamwa 5219999999999|Apa coba|50*";
          }
          if (v915 && isNaN(v915)) {
            throw "- Format: *.spamwa nomor|teks|jumlah*\n- Contoh: *.spamwa 5219999999999|Apa coba|50*";
          }
          let v916 = v913.replace(/[-+<>@]/g, "").replace(/ +/g, "").replace(/^[0]/g, "62") + "@s.whatsapp.net";
          let v917 = v915 ? v915 * 1 : 10;
          if (v917 > 50) {
            throw "*Maks 50 Pesan*";
          }
          await p23.reply("*Spam Success To That Number*\nEstimated Sent All *" + v917 + "*");
          for (let v918 = 0; v918 < v917; v918++) {
            let v919 = "" + v914.trim();
            await p22.relayMessage(v916, {
              text: v919,
              extendedTextMessage: {
                text: v919
              }
            }, {});
          }
        }
        break;
      case "snackvideo":
      case "snack":
      case "snackvid":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Masukan Url Nya\n\nContoh : " + (v86 + v87) + " https://s.snackvideo.com/p/hM5jSV6J");
          }
          if (!v89[0].match(/snackvideo.com/gi)) {
            return vF11("Link Salah !");
          }
          await f9();
          let v920 = await axios2.get("https://jerofc.xyz/api/snackvid?url=" + v89[0]);
          try {
            p22.sendFile(p23.chat, v920.data.result.media, null, "*DONE*", p23);
          } catch (_0x190d19) {
            vF11("" + _0x190d19);
          }
        }
        break;
      case "likee":
      case "like":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Masukkan URL!\n\ncontoh:\n" + (v86 + v87) + " https://l.likee.video/v/o4Uc8p");
          }
          if (!v89[0].match(/likee/gi)) {
            return vF11("Link Salah !");
          }
          await f9();
          try {
            const v921 = await axios2.get("https://jerofc.xyz/api/likee?url=" + v89[0]);
            const {
              title: _0x45969c,
              nowm: _0x4d0fd7
            } = v921.data.result;
            let v922 = "╭─❒ 「 *LIKE DOWN* 」 \n│\n│ *TITLE:* " + _0x45969c + "\n│\n╰❒\n";
            p22.sendMessage(p23.chat, {
              video: {
                url: _0x4d0fd7
              },
              caption: v922
            }, {
              quoted: p23
            });
          } catch (_0xc3084b) {
            console.log(_0xc3084b);
            vF11(_0xc3084b + "\n\nTerjadi kesalahan!");
          }
        }
        break;
      case "getmusic":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            throw "Example : " + (v86 + v87) + " 1";
          }
          await f9();
          if (!p23.quoted) {
            return p23.reply("Reply Pesan");
          }
          if (!p23.quoted.isBaileys) {
            throw "Hanya Bisa Membalas Pesan Dari Bot";
          }
          let v923 = v96.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, "gi"));
          if (!v923) {
            throw "Mungkin pesan yang anda reply tidak mengandung result ytsearch";
          }
          await f9();
          vF16(v923[v94 - 1]);
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!p23.quoted) {
            return vF11("Reply image");
          }
          if (!/image\/webp/.test(v97)) {
            return vF11("Reply image");
          }
          try {
            const v924 = await v96.download();
            const sharp = require("sharp");
            const v925 = await sharp(v924).toFormat("png").toBuffer();
            if (v925.length > 0) {
              await p22.sendFile(p23.chat, v925, "out.png", "*DONE*", p23);
            } else {
              throw "Gagal mengonversi stiker menjadi gambar.";
            }
          } catch (_0x527db0) {
            console.error(_0x527db0);
            if (_0x527db0.message === "Timeout of 10000ms exceeded") {
              p23.reply("Proses konversi terlalu lama. Silakan coba lagi.");
            } else {
              p23.reply("Terjadi kesalahan: " + _0x527db0.message);
            }
          }
        }
        break;
      case "kuncigitar":
        {
          if (!v94) {
            return vF11("_Masukan Format Dengan Benar!_\n\n_Contoh_\n" + (v86 + v87) + " Pesan Terakhir");
          }
          await f9();
          try {
            const {
              chord: _0x2dba72
            } = require("@bochilteam/scraper");
            let v926 = await _0x2dba72(v94);
            let v927 = "_* Title:*_ " + v926.title + "\n_* Artist:*_ " + v926.artist + "\n_* Artist Url:*_ " + v926.artistUrl + "\n\n_* Chord:*_ \n" + v926.chord + "\n";
            vF11(v927);
          } catch (_0x3bcf9f) {
            console.log(_0x3bcf9f);
            vF11("" + _0x3bcf9f);
          }
        }
        break;
      case "carbon":
      case "carboon":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return p23.reply("Masukan Text Yang Ingin Dibuat\n\nContoh:\n" + (v86 + v87) + " NAMA KU JER BANG");
          }
          await f9();
          let v928 = await axios2({
            url: "https://carbonara.solopov.dev/api/cook",
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              code: v94
            },
            responseType: "arraybuffer"
          });
          p22.sendFile(p23.chat, v928?.data, null, null, p23, null);
        }
        break;
      case "daftar":
      case "register":
      case "verify":
        {
          if (vF18("id", p23.sender) !== null) {
            return vF11("Kamu sudah terdaftar Didalam Database Bot !");
          }
          let v929 = "" + makeid(10);
          let v930 = "" + (v54.length + 1);
          let v931 = "" + v930;
          let v932 = {
            id: p23.sender,
            pushname: v90,
            seri: v929,
            premium: false
          };
          p22.sendMessage(p23.chat, {
            text: "*PERMINTAAN DAFTAR KAMU SEDANG DI PROSES KAK @" + p23.sender.split("@")[0] + "*",
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          await vF6(1500);
          let v933 = "\n───「 𝐒𝐔𝐊𝐒𝐄𝐒 𝐕𝐄𝐑𝐈𝐅𝐈𝐊𝐀𝐒𝐈 」────\n\n 🆔 ID : @" + p23.sender.split("@")[0] + "\n 📃 Name : " + v90 + "\n  ✉️ Seri : " + v929 + "\n ⚪ Premium : " + (v105 ? "✅" : "❌") + "\n ⏱️ Jam : " + v129 + "\n 📆 Tanggal : " + v132 + "\n \n@" + p23.sender.split("@")[0] + " PERMINTAAN DAFTAR KAMU SUKSES\n\n*SEKARANG KAMU DAPAT MENGGUNAKAN BOT*\n";
          p22.sendMessage(v101, {
            text: "" + v933,
            mentions: [p23.sender],
            contextInfo: {
              isForwarded: true,
              mentionedJid: [p23.sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: "REGISTER SUKSES",
                body: "SEKARANG KAMU DAPAT MENGGUNAKAN BOT",
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: v133,
                mediaUrl: "" + linkgcnya,
                sourceUrl: "" + linkgcnya
              }
            }
          });
          v54.push(v932);
          fs2.writeFileSync("./database/registered.json", JSON.stringify(v54));
        }
        break;
      case "deldb":
      case "resetdb":
        {
          if (!v92) {
            return vF11("Khusus Owner !");
          }
          let v934 = "[]";
          v54.splice(v934);
          fs2.writeFileSync("./database/registered.json", JSON.stringify(v54, null, 1));
          vF11("Sukses Menghapus Semua Database Registered");
        }
        break;
      case "1gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v935 = v94.split(",");
          if (v935.length < 2) {
            return vF11("> *Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " user,nomer");
          }
          let v936 = v935[0];
          let v937 = p23.quoted ? p23.quoted.sender : v935[1] ? v935[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV936 = v936;
          let v938 = "15";
          let v939 = "1";
          let v940 = "1024";
          let v941 = "25";
          let v942 = "1024";
          let v943 = v936 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v937) {
            return;
          }
          let v944 = (await p22.onWhatsApp(v937.split`@`[0]))[0] || {};
          let v945 = v944.exists ? crypto2.randomBytes(5).toString("hex") : v935[3];
          let v946 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v943,
              username: v936,
              first_name: v936,
              last_name: v936,
              language: "en",
              password: v945.toString()
            })
          });
          let v947 = await v946.json();
          if (v947.errors) {
            return vF11(JSON.stringify(v947.errors[0], null, 2));
          }
          let v948 = v947.attributes;
          let v949 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v938, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n                \nUsername : " + v948.username + "\nPassword : " + v945.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v937, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v950 = await v949.json();
          let v951 = v950.attributes.startup;
          let v952 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV936,
              description: " ",
              user: v948.id,
              egg: parseInt(v938),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v951,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                JS_FILE: "index.js",
                NODE_ARGS: "npm start"
              },
              limits: {
                memory: v940,
                swap: 0,
                disk: v942,
                io: 500,
                cpu: v941
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v939)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v953 = await v952.json();
          if (v953.errors) {
            return vF11(JSON.stringify(v953.errors[0], null, 2));
          }
          let v954 = v953.attributes;
          let v955 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v948.id + "\nID SERVER : " + v954.id + "\nRAM : 1024\nDISK : 1024\nCPU 25%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*\n");
        }
        break;
      case "2gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v956 = v94.split(",");
          if (v956.length < 2) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " user,nomer");
          }
          let v957 = v956[0];
          let v958 = p23.quoted ? p23.quoted.sender : v956[1] ? v956[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV957 = v957;
          let v959 = "15";
          let v960 = "1";
          let v961 = "2048";
          let v962 = "50";
          let v963 = "2048";
          let v964 = v957 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v958) {
            return;
          }
          let v965 = (await p22.onWhatsApp(v958.split`@`[0]))[0] || {};
          let v966 = v965.exists ? crypto2.randomBytes(5).toString("hex") : v956[3];
          let v967 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v964,
              username: v957,
              first_name: v957,
              last_name: v957,
              language: "en",
              password: v966.toString()
            })
          });
          let v968 = await v967.json();
          if (v968.errors) {
            return vF11(JSON.stringify(v968.errors[0], null, 2));
          }
          let v969 = v968.attributes;
          let v970 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v959, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n\nUsername : " + v969.username + "\nPassword : " + v966.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v958, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v971 = await v970.json();
          let v972 = v971.attributes.startup;
          let v973 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV957,
              description: " ",
              user: v969.id,
              egg: parseInt(v959),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v972,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v961,
                swap: 0,
                disk: v963,
                io: 500,
                cpu: v962
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v960)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v974 = await v973.json();
          if (v974.errors) {
            return vF11(JSON.stringify(v974.errors[0], null, 2));
          }
          let v975 = v974.attributes;
          let v976 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v969.id + "\nID SERVER : " + v975.id + "\nRAM : 2048\nDISK : 2048\nCPU 50%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "3gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v977 = v94.split(",");
          if (v977.length < 2) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " user,nomer");
          }
          let v978 = v977[0];
          let v979 = p23.quoted ? p23.quoted.sender : v977[1] ? v977[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV978 = v978;
          let v980 = "15";
          let v981 = "1";
          let v982 = "3072";
          let v983 = "75";
          let v984 = "3072";
          let v985 = v978 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v979) {
            return;
          }
          let v986 = (await p22.onWhatsApp(v979.split`@`[0]))[0] || {};
          let v987 = v986.exists ? crypto2.randomBytes(5).toString("hex") : v977[3];
          let v988 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v985,
              username: v978,
              first_name: v978,
              last_name: v978,
              language: "en",
              password: v987.toString()
            })
          });
          let v989 = await v988.json();
          if (v989.errors) {
            return vF11(JSON.stringify(v989.errors[0], null, 2));
          }
          let v990 = v989.attributes;
          let v991 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v980, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n\nUsername : " + v990.username + "\nPassword : " + v987.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v979, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v992 = await v991.json();
          let v993 = v992.attributes.startup;
          let v994 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV978,
              description: " ",
              user: v990.id,
              egg: parseInt(v980),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v993,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v982,
                swap: 0,
                disk: v984,
                io: 500,
                cpu: v983
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v981)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v995 = await v994.json();
          if (v995.errors) {
            return vF11(JSON.stringify(v995.errors[0], null, 2));
          }
          let v996 = v995.attributes;
          let v997 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v990.id + "\nID SERVER : " + v996.id + "\nRAM : 3072\nDISK : 3072\nCPU 75%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "4gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v998 = v94.split(",");
          if (v998.length < 2) {
            return vF11("*Format salah!*\n\n                    Penggunaan:\n                    " + (v86 + v87) + " user,nomer");
          }
          let v999 = v998[0];
          let v1000 = p23.quoted ? p23.quoted.sender : v998[1] ? v998[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV999 = v999;
          let v1001 = "15";
          let v1002 = "1";
          let v1003 = "4096";
          let v1004 = "100";
          let v1005 = "4096";
          let v1006 = v999 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v1000) {
            return;
          }
          let v1007 = (await p22.onWhatsApp(v1000.split`@`[0]))[0] || {};
          let v1008 = v1007.exists ? crypto2.randomBytes(5).toString("hex") : v998[3];
          let v1009 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1006,
              username: v999,
              first_name: v999,
              last_name: v999,
              language: "en",
              password: v1008.toString()
            })
          });
          let v1010 = await v1009.json();
          if (v1010.errors) {
            return vF11(JSON.stringify(v1010.errors[0], null, 2));
          }
          let v1011 = v1010.attributes;
          let v1012 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v1001, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n                \nUsername : " + v1011.username + "\nPassword : " + v1008.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v1000, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v1013 = await v1012.json();
          let v1014 = v1013.attributes.startup;
          let v1015 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV999,
              description: " ",
              user: v1011.id,
              egg: parseInt(v1001),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v1014,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v1003,
                swap: 0,
                disk: v1005,
                io: 500,
                cpu: v1004
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v1002)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v1016 = await v1015.json();
          if (v1016.errors) {
            return vF11(JSON.stringify(v1016.errors[0], null, 2));
          }
          let v1017 = v1016.attributes;
          let v1018 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v1011.id + "\nID SERVER : " + v1017.id + "\nRAM : 4096\nDISK : 4096\nCPU 100%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "5gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1019 = v94.split(",");
          if (v1019.length < 2) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " user,nomer");
          }
          let v1020 = v1019[0];
          let v1021 = p23.quoted ? p23.quoted.sender : v1019[1] ? v1019[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV1020 = v1020;
          let v1022 = "15";
          let v1023 = "1";
          let v1024 = "5120";
          let v1025 = "125";
          let v1026 = "5120";
          let v1027 = v1020 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v1021) {
            return;
          }
          let v1028 = (await p22.onWhatsApp(v1021.split`@`[0]))[0] || {};
          let v1029 = v1028.exists ? crypto2.randomBytes(5).toString("hex") : v1019[3];
          let v1030 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1027,
              username: v1020,
              first_name: v1020,
              last_name: v1020,
              language: "en",
              password: v1029.toString()
            })
          });
          let v1031 = await v1030.json();
          if (v1031.errors) {
            return vF11(JSON.stringify(v1031.errors[0], null, 2));
          }
          let v1032 = v1031.attributes;
          let v1033 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v1022, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n                \nUsername : " + v1032.username + "\nPassword : " + v1029.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v1021, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v1034 = await v1033.json();
          let v1035 = v1034.attributes.startup;
          let v1036 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV1020,
              description: " ",
              user: v1032.id,
              egg: parseInt(v1022),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v1035,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v1024,
                swap: 0,
                disk: v1026,
                io: 500,
                cpu: v1025
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v1023)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v1037 = await v1036.json();
          if (v1037.errors) {
            return vF11(JSON.stringify(v1037.errors[0], null, 2));
          }
          let v1038 = v1037.attributes;
          let v1039 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v1032.id + "\nID SERVER : " + v1038.id + "\nRAM : 5120\nDISK : 5120\nCPU 125%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "6gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1040 = v94.split(",");
          if (v1040.length < 2) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " user,nomer");
          }
          let v1041 = v1040[0];
          let v1042 = p23.quoted ? p23.quoted.sender : v1040[1] ? v1040[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV1041 = v1041;
          let v1043 = "15";
          let v1044 = "1";
          let v1045 = "6144";
          let v1046 = "150";
          let v1047 = "6144";
          let v1048 = v1041 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v1042) {
            return;
          }
          let v1049 = (await p22.onWhatsApp(v1042.split`@`[0]))[0] || {};
          let v1050 = v1049.exists ? crypto2.randomBytes(5).toString("hex") : v1040[3];
          let v1051 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1048,
              username: v1041,
              first_name: v1041,
              last_name: v1041,
              language: "en",
              password: v1050.toString()
            })
          });
          let v1052 = await v1051.json();
          if (v1052.errors) {
            return vF11(JSON.stringify(v1052.errors[0], null, 2));
          }
          let v1053 = v1052.attributes;
          let v1054 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v1043, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n                \nUsername : " + v1053.username + "\nPassword : " + v1050.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v1042, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v1055 = await v1054.json();
          let v1056 = v1055.attributes.startup;
          let v1057 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV1041,
              description: " ",
              user: v1053.id,
              egg: parseInt(v1043),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v1056,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v1045,
                swap: 0,
                disk: v1047,
                io: 500,
                cpu: v1046
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v1044)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v1058 = await v1057.json();
          if (v1058.errors) {
            return vF11(JSON.stringify(v1058.errors[0], null, 2));
          }
          let v1059 = v1058.attributes;
          let v1060 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v1053.id + "\nID SERVER : " + v1059.id + "\nRAM : 6144\nDISK : 6144\nCPU 150%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "7gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1061 = v94.split(",");
          if (v1061.length < 2) {
            return vF11("*Format salah!*\n\n                    Penggunaan:\n                    " + (v86 + v87) + " user,nomer");
          }
          let v1062 = v1061[0];
          let v1063 = p23.quoted ? p23.quoted.sender : v1061[1] ? v1061[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV1062 = v1062;
          let v1064 = "15";
          let v1065 = "1";
          let v1066 = "7186";
          let v1067 = "175";
          let v1068 = "7186";
          let v1069 = v1062 + "@gmail.com";
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v1063) {
            return;
          }
          let v1070 = (await p22.onWhatsApp(v1063.split`@`[0]))[0] || {};
          let v1071 = v1070.exists ? crypto2.randomBytes(5).toString("hex") : v1061[3];
          let v1072 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1069,
              username: v1062,
              first_name: v1062,
              last_name: v1062,
              language: "en",
              password: v1071.toString()
            })
          });
          let v1073 = await v1072.json();
          if (v1073.errors) {
            return vF11(JSON.stringify(v1073.errors[0], null, 2));
          }
          let v1074 = v1073.attributes;
          let v1075 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v1064, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n                \nUsername : " + v1074.username + "\nPassword : " + v1071.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v1063, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v1076 = await v1075.json();
          let v1077 = v1076.attributes.startup;
          let v1078 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV1062,
              description: " ",
              user: v1074.id,
              egg: parseInt(v1064),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v1077,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v1066,
                swap: 0,
                disk: v1068,
                io: 500,
                cpu: v1067
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v1065)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v1079 = await v1078.json();
          if (v1079.errors) {
            return vF11(JSON.stringify(v1079.errors[0], null, 2));
          }
          let v1080 = v1079.attributes;
          let v1081 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v1074.id + "\nID SERVER : " + v1080.id + "\nRAM : 7186\nDISK : 7186\nCPU : 175%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "8gb":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1082 = v94.split(",");
          if (v1082.length < 3) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " user,email,nomer");
          }
          let v1083 = v1082[0];
          let v1084 = v1082[2];
          let v1085 = p23.quoted ? p23.quoted.sender : v1082[1] ? v1082[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          let vV1083 = v1083;
          let v1086 = "15";
          let v1087 = "1";
          let v1088 = "8192";
          let v1089 = "0";
          let v1090 = "8192";
          v1084 = v1084;
          akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg";
          if (!v1085) {
            return;
          }
          let v1091 = (await p22.onWhatsApp(v1085.split`@`[0]))[0] || {};
          let v1092 = v1091.exists ? crypto2.randomBytes(5).toString("hex") : v1082[3];
          let v1093 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1084,
              username: v1083,
              first_name: v1083,
              last_name: v1083,
              language: "en",
              password: v1092.toString()
            })
          });
          let v1094 = await v1093.json();
          if (v1094.errors) {
            return vF11(JSON.stringify(v1094.errors[0], null, 2));
          }
          let v1095 = v1094.attributes;
          let v1096 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + v1086, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          vF11("*Sedang Membuat Server....*");
          ctf = "*[ YOUR ACCOUNT ]*\n      \nUsername : " + v1095.username + "\nPassword : " + v1092.toString() + "\nWeb : " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat.\n";
          p22.sendMessage(v1085, {
            image: {
              url: "https://telegra.ph/file/1955914379a836adc60c1.jpg"
            },
            caption: ctf,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
          let v1097 = await v1096.json();
          let v1098 = v1097.attributes.startup;
          let v1099 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: vV1083,
              description: " ",
              user: v1095.id,
              egg: parseInt(v1086),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: v1098,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start",
                JS_FILE: "index.js"
              },
              limits: {
                memory: v1088,
                swap: 0,
                disk: v1090,
                io: 500,
                cpu: v1089
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(v1087)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v1100 = await v1099.json();
          if (v1100.errors) {
            return vF11(JSON.stringify(v1100.errors[0], null, 2));
          }
          let v1101 = v1100.attributes;
          let v1102 = await vF11("*SERVER TELAH DI BUAT ✅*\n\nID USER : " + v1095.id + "\nID SERVER : " + v1101.id + "\nRAM : 8192\nDISK : 8192\nCPU 180%\n\n*DATA PANEL TELAH TERKIRIM KE @" + num.split("@")[0] + "*");
        }
        break;
      case "addadmin":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1103 = v94.split(",");
          if (v1103.length < 3) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " email,username,name,number/tag");
          }
          let v1104 = v1103[0];
          let v1105 = v1103[1];
          let v1106 = v1103[2];
          let v1107 = p23.quoted ? p23.quoted.sender : v1103[3] ? v1103[3].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          if (!v1107) {
            return vF11("*Format salah!*\n\nPenggunaan:\n" + (v86 + v87) + " email,username,name,number/tag");
          }
          let v1108 = (await p22.onWhatsApp(v1107.split`@`[0]))[0] || {};
          let v1109 = v1108.exists ? crypto2.randomBytes(5).toString("hex") : v1103[3];
          let v1110 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1104,
              username: v1105,
              first_name: v1106,
              last_name: "Memb",
              root_admin: true,
              language: "en",
              password: v1109.toString()
            })
          });
          let v1111 = await v1110.json();
          if (v1111.errors) {
            return vF11(JSON.stringify(v1111.errors[0], null, 2));
          }
          let v1112 = v1111.attributes;
          let vVF11 = vF11("\n- *SUCCESSFULLY ADD USER*\n\n- TYPE: Admin\n\n- ID : " + v1112.id + "\n- UUID : " + v1112.uuid + "\n- USERNAME: " + v1112.username + "\n- EMAIL : " + v1112.email + "\n- NAME : " + v1112.first_name + " " + v1112.last_name + "\n- LANGUAGE : " + v1112.language + "\n- ADMIN : " + v1112.root_admin + "\n- CREATED AT : " + v1112.created_at + "\n\n*Password Telah Dikirim Di Private Chat @" + v1107.split`@`[0] + "*");
          p22.sendMessage(v1107, {
            text: "Hai Kak " + v90 + " \n\n- ID : " + v1112.id + "\n- EMAIL : " + v1112.email + "\n- USERNAME : " + v1112.username + "\n- PASSWORD : " + v1109.toString() + "\n- LOGIN : " + domain + "\n\n*NOTE :*\n- MOHON DI SIMPAN ,KARENA BOT BIKIN\nAKUN ADMIN PANEL HANYA 1�"
          }, {
            quoted: p23
          });
        }
        break;
      case "addusr":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1113 = v94.split(",");
          if (v1113.length < 3) {
            return vF11("Masukkan email,username,name,nomernya!\n\nExample: " + (v86 + v87) + " V.S.V.S.V.S.Lbusisnes@gmail.com,V.S.L,namaku V.S.L,62838xxx");
          }
          let v1114 = v1113[0];
          let v1115 = v1113[1];
          let v1116 = v1113[2];
          let v1117 = p23.quoted ? p23.quoted.sender : v1113[3] ? v1113[3].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : p23.mentionedJid[0];
          if (!v1117) {
            return p23.reply("Masukkan email,username,name,nomernya!\n\nExample: " + (v86 + v87) + " junn@gmail.com,junn," + botName + ",62858xxx");
          }
          let v1118 = (await p22.onWhatsApp(v1117.split`@`[0]))[0] || {};
          let v1119 = v1118.exists ? crypto2.randomBytes(3).toString("hex") : v1113[3];
          let v1120 = await nodeFetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: v1114,
              username: v1115,
              first_name: v1116,
              last_name: v1116,
              language: "en",
              password: v1119.toString()
            })
          });
          let v1121 = await v1120.json();
          if (v1121.errors) {
            return p23.reply(JSON.stringify(v1121.errors[0], null, 2));
          }
          let v1122 = v1121.attributes;
          var v1123 = "Sukses " + v87 + " dengan nama " + v1122.username + " dan detail account sudah dikirimkan ke @" + v1117.split("@")[0] + " dengan Nomor ID " + v1122.id + ".";
          p22.sendMessage(p23.chat, {
            text: v1123,
            mentions: f6(v1123)
          }, {
            quoted: p23
          });
          await p22.sendMessage(v1117, {
            text: "*── 「 YOUR ACCOUNT 」 ──*\n\n*ID :* " + v1122.id + "\n*Admin :* " + v1122.root_admin + "\n*Email :* " + v1122.email + "\n*Username :* " + v1122.username + "\n*Password :* " + v1119.toString() + "\n*Website :* " + domain + "\n\n*Catatan :*\nBot Ini Tidak Akan Mengirimkan Dua Kali. Jadi Harap Simpan Baik-Baik, Atau Ubah Data Akun Kamu Yang Mudah Di Ingat."
          });
        }
        break;
      case "listusr":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1124 = v89[0] ? v89[0] : "1";
          let v1125 = await nodeFetch(domain + "/api/application/users?page=" + v1124, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1126 = await v1125.json();
          let v1127 = v1126.data;
          let vStorepanel = storepanel;
          for (let v1128 of v1127) {
            let v1129 = v1128.attributes;
            vStorepanel += "\n\n" + v1129.id + ". " + v1129.username + "\nName: " + v1129.first_name + " " + v1129.last_name;
          }
          vF11(vStorepanel);
        }
        break;
      case "cekusr":
      case "detusr":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          if (!v94) {
            return vF11("Type ID User");
          }
          let v1130 = v89[0];
          let v1131 = await nodeFetch(domain + "/api/application/users/" + v1130, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1132 = await v1131.json();
          if (v1132.errors) {
            return vF11("*USER NOT FOUND*");
          }
          let v1133 = v1132.attributes;
          vF11("*" + v1133.username.toUpperCase() + " USER DETAILS*\n\n```ID: " + v1133.id + "\nUUID: " + v1133.uuid + "\nUSERNAME: " + v1133.username + "\nEMAIL: " + v1133.email + "\nNAME: " + v1133.first_name + " " + v1133.last_name + "\nLANGUAGE: " + v1133.language + "\nADMIN: " + v1133.root_admin + "\nCREATED AT: " + v1133.created_at + "```");
        }
        break;
      case "delusr":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1134 = v89[0];
          if (!v1134) {
            return vF11("ID nya mana?");
          }
          let v1135 = await nodeFetch(domain + "/api/application/users/" + v1134, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1136 = v1135.ok ? {
            errors: null
          } : await v1135.json();
          if (v1136.errors) {
            return vF11("*USER NOT FOUND*");
          }
          vF11("*SUCCESS DELETE AKUN USER*");
        }
        break;
      case "addsrv":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1137 = q.split(",");
          if (v1137.length < 5) {
            return vF11(v86 + v87 + " name,desc,userId,memory/disk,cpu");
          }
          let v1138 = v1137[0];
          let v1139 = v1137[1] || "";
          let v1140 = v1137[2];
          let v1141 = v1137[3].split`/`;
          let v1142 = v1137[4];
          let v1143 = await nodeFetch(domain + "/api/application/nests/5/eggs/" + eggsnya, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1144 = await v1143.json();
          let v1145 = v1144.attributes.startup;
          let v1146 = await nodeFetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: v1138,
              description: v1139,
              user: v1140,
              egg: parseInt(eggsnya),
              docker_image: docker,
              startup: v1145,
              environment: {
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
                NODE_ARGS: "npm start"
              },
              limits: {
                memory: v1141[0],
                swap: 0,
                disk: v1141[1],
                io: 500,
                cpu: v1142
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(location)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let v1147 = await v1146.json();
          if (v1147.errors) {
            return vF11(JSON.stringify(v1147.errors[0], null, 2));
          }
          let v1148 = v1147.attributes;
          vF11("*SUCCESS MEMBUAT AKUN USER SERVER*\n\nTYPE: " + v1147.object + "\n\nID: " + v1148.id + "\nUUID: " + v1148.uuid + "\nNAME: " + v1148.name + "\nDESCRIPTION: " + v1148.description + "\nMEMORY: " + (v1148.limits.memory === 0 ? "Unlimited" : v1148.limits.memory) + " MB\nDISK: " + (v1148.limits.disk === 0 ? "Unlimited" : v1148.limits.disk) + " MB\nCPU: " + v1148.limits.cpu + "%\n\nCREATED AT: " + v1148.created_at);
        }
        break;
      case "listsrv":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1149 = v89[0] ? v89[0] : "1";
          let v1150 = await nodeFetch(domain + "/api/application/servers?page=" + v1149, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1151 = await v1150.json();
          let v1152 = v1151.data;
          let vStorepanel2 = storepanel;
          for (let v1153 of v1152) {
            let v1154 = v1153.attributes;
            let v1155 = await nodeFetch(domain + "/api/client/servers/" + v1154.uuid.split`-`[0] + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikey
              }
            });
            let v1156 = await v1155.json();
            vStorepanel2 += "\n\n" + v1154.id + ". " + v1154.name + "\nStatus: " + (v1156.attributes ? v1156.attributes.current_state : v1154.status);
          }
          vF11(vStorepanel2);
        }
        break;
      case "ceksrv":
      case "detsrv":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1157 = v89[0];
          let v1158 = await nodeFetch(domain + "/api/application/servers/" + v1157, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "!application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1159 = await v1158.json();
          if (v1159.errors) {
            return vF11("*SERVER NOT FOUND*");
          }
          let v1160 = v1159.attributes;
          let v1161 = await nodeFetch(domain + "/api/client/servers/" + v1160.uuid.split`-`[0] + "/resources", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + capikey
            }
          });
          let v1162 = await v1161.json();
          let v1163 = v1162.attributes;
          vF11("*" + v1160.name.toUpperCase() + " SERVER DETAILS*\n\n```STATUS: " + (v1162.attributes ? v1162.attributes.current_state : v1160.status) + "\n\nID: " + v1160.id + "\nUUID: " + v1160.uuid + "\nNAME: " + v1160.name + "\nDESCRIPTION: " + v1160.description + "\nMEMORY: " + (v1160.limits.memory === 0 ? "Unlimited" : v1160.limits.memory) + " MB\nDISK: " + (v1160.limits.disk === 0 ? "Unlimited" : v1160.limits.disk) + " MB\nCPU:  " + v1160.limits.cpu + "%\nCREATED AT: " + v1160.created_at + "```");
        }
        break;
      case "delsrv":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1164 = v89[0];
          if (!v1164) {
            return vF11("ID nya mana?");
          }
          let v1165 = await nodeFetch(domain + "/api/application/servers/" + v1164, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1166 = v1165.ok ? {
            errors: null
          } : await v1165.json();
          if (v1166.errors) {
            return vF11("*SERVER NOT FOUND*");
          }
          vF11("*SUCCESS MENGHAPUS SERVER USER*");
        }
        break;
      case "reinstall":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1167 = v89[0];
          if (!v1167) {
            return vF11("ID nya mana?");
          }
          let v1168 = await nodeFetch(domain + "/api/application/servers/" + v1167 + "/reinstall", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1169 = v1168.ok ? {
            errors: null
          } : await v1168.json();
          if (!v1169.errors) {
            return vF11("*SERVER NOT FOUND*");
          }
          vF11("*REINSTALLING THE SERVER..*");
        }
        break;
      case "addsuspend":
      case "addsuspen":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1170 = v89[0];
          if (!v1170) {
            return p23.reply("ID nya mana?");
          }
          let v1171 = await nodeFetch(domain + "/api/application/servers/" + v1170 + "/suspend", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1172 = v1171.ok ? {
            errors: null
          } : await v1171.json();
          if (v1172.errors) {
            return p23.reply("*SERVER NOT FOUND*");
          }
          p23.reply("*SUCCES SUSPENDED THE SERVER..*");
        }
        break;
      case "delsuspend":
      case "delsuspen":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1173 = v89[0];
          if (!v1173) {
            return p23.reply("ID nya mana?");
          }
          let v1174 = await nodeFetch(domain + "/api/application/servers/" + v1173 + "/unsuspend", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1175 = v1174.ok ? {
            errors: null
          } : await v1174.json();
          if (v1175.errors) {
            return p23.reply("*SERVER NOT FOUND*");
          }
          p23.reply("*SUCCES UNSUSPENED THE SERVER..*");
        }
        break;
      case "updatesrv":
        {
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1176 = v94.split(",");
          if (v1176.length < 4) {
            return p23.reply("*Format salah*\n\nPenggunaan:\n" + (v86 + v87) + " srvId,locId,memory/disk,cpu");
          }
          let v1177 = v1176[0];
          let v1178 = v1176[1];
          let v1179 = v1176[2].split`/`;
          let v1180 = v1176[3];
          let v1181 = await nodeFetch(domain + "/api/application/servers/" + v1177, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let v1182 = await v1181.json();
          let v1183 = await nodeFetch(domain + "/api/application/servers/" + v1177 + "/build", {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              allocation: parseInt(v1178) || v1182.attributes.allocation,
              memory: v1179[0] || v1182.attributes.limits.memory,
              swap: v1182.attributes.limits.swap || 0,
              disk: v1179[1] || v1182.attributes.limits.disk,
              io: 500,
              cpu: v1180 || v1182.attributes.limits.cpu,
              threads: null,
              feature_limits: {
                databases: 5,
                allocations: 5,
                backups: 5
              }
            })
          });
          let v1184 = await v1183.json();
          if (v1184.errors) {
            return p23.reply(JSON.stringify(v1184.errors[0], null, 2));
          }
          let v1185 = v1184.attributes;
          p23.reply("*SUCCESSFULLY UPDATED THE SERVER*\n\nTYPE: " + v1184.object + "\n\nID: " + v1185.id + "\nUUID: " + v1185.uuid + "\nNAME: " + v1185.name + "\nDESCRIPTION: " + v1185.description + "\nMEMORY: " + (v1185.limits.memory === 0 ? "Unlimited" : v1185.limits.memory) + " MB\nDISK: " + (v1185.limits.disk === 0 ? "Unlimited" : v1185.limits.disk) + " MB\nCPU: " + v1185.limits.cpu + "%\nCREATED AT: " + v1185.created_at + "\nUPDATED AT: " + v1185.updated_at);
        }
        break;
      case "startsrv":
      case "stopsrv":
      case "restartsrv":
        {
          let v1186 = v87.replace("srv", "");
          if (!v93) {
            return vF11("Fitur Ini Khusus Owner !");
          }
          let v1187 = v89[0];
          if (!v1187) {
            return p23.reply("ID nya mana?");
          }
          let v1188 = await nodeFetch(domain + "/api/client/servers/" + v1187 + "/power", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + c_apikey
            },
            body: JSON.stringify({
              signal: v1186
            })
          });
          let v1189 = v1188.ok ? {
            errors: null
          } : await v1188.json();
          if (v1189.errors) {
            return p23.reply(JSON.stringify(v1189.errors[0], null, 2));
          }
          p23.reply("*SUCCESSFULLY " + v1186.toUpperCase() + " THE SERVER*");
        }
        break;
      case "soundcloud":
        {
          if (!v89[0]) {
            return vF11("Input Url Nya Kak\n\n" + (v86 + v87) + " url");
          }
          await f9();
          let v1190 = await axios2.get("https://jerofc.xyz/api/soundcloud?url=" + v89[0]);
          const {
            title: _0xeee3a9,
            downloadUrl: _0x424446
          } = v1190.data.data;
          p22.sendMessage(p23.chat, {
            audio: {
              url: _0x424446
            },
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: p23
          });
        }
        break;
      case "totalfeature":
      case "totalfitur":
      case "totalcmd":
      case "totalcommand":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          vF11("Total Fitur Saat Ini Adalah : " + vF9() + " Fitur\n\nSCRIPT BY V.S.L\n\nV.S.L");
        }
        break;
      case "ytstalk":
      case "stalkyt":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89[0]) {
            return vF11("Masukan Username Yang Terdaftar Di Youtube\n\nexample : " + (v86 + v87) + " V.S.L");
          }
          await f9();
          try {
            let v1191 = await nodeFetch("https://api.betabotz.eu.org/api/stalk/yt?username=@" + v89[0] + "&apikey=" + btz);
            let v1192 = await v1191.json();
            for (let v1193 of v1192.result.data) {
              console.log(v1193);
              let v1194 = "";
              v1194 += "*╭─❒ 「 YOUTUBE STALK 」*\n";
              v1194 += "│\n";
              v1194 += "│○ *NAME :* " + v1193.channelName + "\n";
              v1194 += "│○ *TOTAL SUBS :* " + v1193.subscriber + "\n";
              v1194 += "│○ *URL :* " + v1193.url + "\n";
              v1194 += "│○ *CHANNEL ID :* " + v1193.channelId + "\n";
              v1194 += "│○ *IMAGE :* " + v1193.avatar + "}\n";
              v1194 += "│○ *DESC :* " + v1193.description + "\n";
              v1194 += "│\n";
              v1194 += "╰❒\n";
              p22.sendMessage(p23.chat, {
                image: {
                  url: v1193.avatar
                },
                caption: v1194,
                mentions: [p23.sender]
              }, {
                quoted: p23
              });
            }
          } catch (_0x59755d) {
            console.log(_0x59755d);
            vF11("TERJADI KESALAHAN DALAM MENGAMBIL DATA");
          }
        }
        break;
      case "download":
      case "down":
      case "dl":
        {
          if (!v89[0]) {
            return vF11("Masukan Url Dari, tiktok, youtube, ig, twiter, facebook, likee, snackvideo, dll\n\nexample : " + (v86 + v87) + " https://vt.tiktok.com/ZSYS43UoK/");
          }
          await f9();
          try {
            let v1195 = await axios2.get("https://jerofc.my.id/api/alldownload?url=" + v89[0]);
            let v1196 = v1195.data.medias.map(({
              url: _0x5d002a
            }) => _0x5d002a);
            const v1197 = v1196.length;
            if (v1197 > 0) {
              for (let v1198 = 0; v1198 > v1197; v1198++) {
                p22.sendFile(p23.chat, v1196[v1198], null, "DONE", p23);
              }
            }
          } catch (_0x3e919f) {
            console.log(_0x3e919f);
            vF11("TERJADI KESALAHAN");
          }
        }
        break;
      case "pindl":
      case "pinterestdl":
        {
          if (!v89[0]) {
            return vF11("Input Parameter Url Dari " + v87 + "\n\nExample : " + (v86 + v87) + " https://pin.it/4CVodSq");
          }
          await f9();
          try {
            let v1199 = await nodeFetch("https://jerofc.xyz/api/pindl?url=" + v89[0]);
            let v1200 = await v1199.json();
            p22.sendFile(p23.chat, v1200.data.media, null, "DONE", p23);
          } catch (_0x35a565) {
            console.log(_0x35a565);
            vF11("TERJADI KESALAHAN SAAT MENGUNDUH DATA");
          }
        }
        break;
      case "bingimg":
        {
          if (!v89[0]) {
            return vF11("Input Text\n\nExample : " + (v86 + v87) + " Buatkan Saya Logo Bernama JER Logo Tersebut Terdapat Seperti Lagi Coding");
          }
          await f9();
          let v1201 = "https://aemt.uk.to/bingimg?text=" + v89[0];
          let v1202 = await axios2.get(v1201);
          try {
            for (let v1203 = 0; v1203 < 3; v1203++) {
              let v1204 = v1202.data.result[v1203];
              p22.sendFile(p23.chat, v1204, null, "DONE", p23);
            }
          } catch (_0x31aff6) {
            console.log(_0x31aff6);
            vF11("TERJADI KESALAHAN");
          }
        }
        break;
      case "tt2":
      case "tiktokvideo2":
      case "ttvid2":
      case "ttvideo2":
      case "ttnowm2":
      case "tiktoknowm2":
      case "tiktok2":
        {
          if (!v89[0]) {
            return vF11("Input Parameter Url\n\nExample : " + (v86 + v87) + " https://vt.tiktok.com/ZSYmCr4XU/");
          }
          if (!v89[0].match(/tiktok/gi)) {
            return vF11("URL INVALID");
          }
          await f9();
          const {
            tiktokdl: _0x2f18d9
          } = require("@bochilteam/scraper");
          let v1205 = await _0x2f18d9(v89[0]);
          try {
            let v1206 = "*[ TIKTOK V2 ]*\n\n";
            v1206 += "*NICKNAME :* " + v1205.nickname + "\n";
            v1206 += "*USERNAME :* " + v1205.username + "\n";
            v1206 += "*TITLE :* " + v1205.description + "\n";
            v1206 += "*VIEWS :* " + v1205.played + "\n";
            v1206 += "*COMENT :* " + v1205.commented + "\n";
            v1206 += "*SAVE :* " + v1205.saved + "\n";
            v1206 += "*SHARE :* " + v1205.shared + "\n\n";
            v1206 += "*NAME SONG :* " + v1205.song + "\n";
            await p22.sendMessage(p23.chat, {
              video: {
                url: v1205.video.noWatermark
              },
              caption: v1206
            }, {
              quoted: p23
            });
            p22.sendMessage(p23.chat, {
              audio: {
                url: v1205.audio
              },
              mimetype: "audio/mpeg",
              ptt: true
            }, {
              quoted: p23
            });
          } catch (_0x39e670) {
            console.log(_0x39e670);
            vF11("TERJADI KESALAHAN");
          }
        }
        break;
      case "kodepos":
        {
          if (!v89[0]) {
            return vF11("Masukan Wilayah Atau Kota / Kecamatan Kamu");
          }
          await f9();
          try {
            let v1207 = "https://www.jerofc.xyz/api/kodepos?text=" + v89[0];
            let v1208 = await axios2(v1207);
            let v1209 = v1208.data.data;
            let v1210 = "";
            v1209.forEach(function (p235) {
              v1210 += "\n\n*[ KODE POS ]*\n\n";
              v1210 += "*PROVINSI :* " + p235.province + "\n";
              v1210 += "*KOTA :* " + p235.regency + "\n";
              v1210 += "*DAERAH :* " + p235.district + "\n";
              v1210 += "*TEMPAT :* " + p235.village + "\n";
              v1210 += ("*WAKTU :* " + p235.timezone + "\n").trim();
            });
            vF11(v1210);
          } catch (_0x9039b3) {
            console.log(_0x9039b3);
          }
        }
        break;
      case "namapahlawan":
        {
          if (!v89[0]) {
            return vF11("Masukan Nama Pahlawan Indonesia !\n\n" + (v86 + v87) + " Ahmad Yani");
          }
          await f9();
          try {
            let v1211 = "https://indonesia-public-static-api.vercel.app/api/heroes?name=" + v89[0];
            let v1212 = await axios2(v1211);
            let v1213 = v1212.data;
            let v1214 = "";
            v1213.forEach(p236 => {
              v1214 += "\n\n*[ PAHLAWAN ]*\n\n";
              v1214 += "*NAME :* " + p236.name + "\n";
              v1214 += "*LAHIR :* " + p236.birth_year + "\n";
              v1214 += "*DEATH :* " + p236.death_year + "\n";
              v1214 += ("*DESC :* " + p236.description + "\n").trim();
            });
            vF11(v1214);
          } catch (_0x478581) {
            console.log(_0x478581);
          }
        }
        break;
      case "snapsave":
        {
          if (!v89[0]) {
            return vF11("Masukan Url Dari IG / TT / FB\n\n" + (v86 + v87) + " https://vt.tiktok.com/ZSYEnWD5P/");
          }
          await f9();
          try {
            const {
              snapsave: _0x45d77a
            } = require("@bochilteam/scraper");
            let v1215 = await _0x45d77a(v89[0]);
            p22.sendFile(p23.chat, v1215.results[0].url, null, "DONE", p23);
          } catch (_0x1f57d5) {
            console.log(_0x1f57d5);
            vF11("GAGAL MENDAPATKAN DATA VIDEO");
          }
        }
        break;
      case "getcase":
        {
          if (!v92) {
            return vF11(" Khusus Owner saja!");
          }
          if (!q) {
            return vF11("Masukkan Fitur Yang Ingin Diambil:\n\nContoh: " + (v86 + v87) + " tiktok");
          }
          try {
            const vF20 = p237 => {
              const v1216 = fs2.readFileSync("./jerofc.js").toString().split("case '" + p237 + "'")[1].split("break")[0];
              return "case '" + p237 + "'" + v1216 + "break";
            };
            const vVF20 = vF20(q);
            vF11("" + vVF20);
          } catch (_0x229735) {
            console.error(_0x229735);
            vF11("Fitur '" + q + "' tidak ditemukan! Pastikan ejaannya benar.");
          }
        }
        break;
      case "playmp3":
        {
          if (!v89[0]) {
            return vF11("Masukan Text nya\n\nBawa dia kembali");
          }
          await f9();
          let v1217 = await axios2.get("https://api.agatz.xyz/api/ytplay?message=" + v89[0]);
          p22.sendMessage(p23.chat, {
            audio: {
              url: v1217.data.data.url.url
            },
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: p23
          });
        }
        break;
      case "bingai":
      case "aibing":
        {
          if (!v89[0]) {
            return vF11("Masukan text yang ingin di tanyakan\n\nExample : " + (v86 + v87) + " Hello Ai");
          }
          await f9();
          try {
            const v1218 = await axios2.get("https://aemt.uk.to/bingai?text=" + v89[0]).then(p238 => {
              vF11(p238.data.result);
            });
          } catch (_0x4ff495) {
            console.log(_0x4ff495);
            vF11("Terjadi kesalahan saat menjawab pertanyaan");
          }
        }
        break;
      case "clearsession":
      case "clearsesi":
        {
          const {
            readdirSync: _0x447860,
            statSync: _0x509656,
            unlinkSync: _0x3aa932
          } = require("fs");
          const {
            join: _0x2d0ead
          } = require("path");
          const v1219 = ["./session"];
          const v1220 = [];
          v1219.forEach(p239 => {
            _0x447860(p239).forEach(p240 => {
              if (p240 !== "creds.json") {
                v1220.push(_0x2d0ead(p239, p240));
              }
            });
          });
          const v1221 = [];
          v1220.forEach(p241 => {
            const v_0x509656 = _0x509656(p241);
            if (v_0x509656.isDirectory()) {
              console.log("Skipping directory: " + p241);
            } else {
              _0x3aa932(p241);
              v1221.push(p241);
            }
          });
          vF11("Succes Deleted");
          if (v1221.length > 0) {
            console.log("Deleted files:", v1221);
            console.log("Deleted files:\n" + v1221.join("\n"));
          }
          if (v1221.length == 0) {
            vF11("tidak ada file yang tersisa di folder sessions");
          }
        }
        ;
        break;
      case "status":
        {
          let {
            performance: _0x2cfd5b
          } = require("perf_hooks");
          let nodeOsUtils = require("node-os-utils");
          try {
            let v1222 = "Not Detect";
            let v1223 = _0x2cfd5b.now();
            let v1224 = nodeOsUtils.cpu;
            let v1225 = v1224.count();
            let v1226 = nodeOsUtils.drive;
            let v1227 = nodeOsUtils.mem;
            let v1228 = nodeOsUtils.netstat;
            let v1229 = nodeOsUtils.os.platform();
            let v1230 = v1224.model();
            let v1231;
            let v1232 = v1224.usage().then(p242 => {
              v1231 = p242;
            }).catch(() => {
              v1231 = v1222;
            });
            let v1233;
            let v1234;
            let v1235;
            let v1236 = v1226.info().then(p243 => {
              v1233 = p243.totalGb + " GB";
              v1234 = p243.usedGb;
              v1235 = p243.usedPercentage + "%";
            }).catch(() => {
              v1233 = v1222;
              v1234 = v1222;
              v1235 = v1222;
            });
            let v1237;
            let v1238;
            let v1239 = v1227.info().then(p244 => {
              v1237 = p244.totalMemMb;
              v1238 = p244.usedMemMb;
            }).catch(() => {
              v1237 = v1222;
              v1238 = v1222;
            });
            let v1240;
            let v1241;
            let v1242 = v1228.inOut().then(p245 => {
              v1240 = p245.total.inputMb + " MB";
              v1241 = p245.total.outputMb + " MB";
            }).catch(() => {
              v1240 = v1222;
              v1241 = v1222;
            });
            await Promise.all([v1232, v1236, v1239, v1242]);
            await vF11("_Testing " + v87 + "..._");
            let v1243 = v1237 + " MB";
            let v1244 = _0x2cfd5b.now();
            var v1245 = "\n* Status *\nOS : *" + v1229 + "*\nCPU Model : *" + v1230 + "*\nCPU Core : *" + v1225 + " Core*\nCPU : *" + v1231 + "%*\nRam : *" + v1238 + " / " + v1243 + "(" + (/[0-9.+/]/g.test(v1238) && /[0-9.+/]/g.test(v1237) ? Math.round(v1238 / v1237 * 100) + "%" : v1222) + ")*\nDrive : *" + v1234 + " / " + v1233 + " (" + v1235 + ")*\nPing : *" + Math.round(v1244 - v1223) + " ms*\nInternet IN : *" + v1240 + "*\nInternet OUT : *" + v1241 + "*\n";
            p22.relayMessage(p23.chat, {
              extendedTextMessage: {
                text: v1245,
                contextInfo: {
                  externalAdReply: {
                    title: v1238 + " / " + v1243 + "(" + (/[0-9.+/]/g.test(v1238) && /[0-9.+/]/g.test(v1237) ? Math.round(v1238 / v1237 * 100) + "%" : v1222) + ")",
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: "https://telegra.ph/file/ec8cf04e3a2890d3dce9c.jpg",
                    sourceUrl: ""
                  }
                },
                mentions: [p23.sender]
              }
            }, {});
            console.log(v1229);
          } catch (_0x593f3a) {
            console.log(_0x593f3a);
          }
        }
        break;
      case "antilinkallv2":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot harus menjadi admin");
          }
          if (v89[0] === "on") {
            if (v113) {
              return vF11("Udah aktif");
            }
            v55.push(p23.chat);
            fs2.writeFileSync("./database/antilinkallv2.json", JSON.stringify(v55, null, 2));
            vF11("Successfully Activate antilink2 In This Group");
          } else if (v89[0] === "off") {
            if (!v113) {
              return vF11("Udah nonaktif");
            }
            let v1246 = v55.indexOf(p23.chat);
            v55.splice(v1246, 1);
            fs2.writeFileSync("./database/antilinkallv2.json", JSON.stringify(v55, null, 2));
            vF11("Successfully Disabling antilink2 In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "antilinkch":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot harus menjadi admin");
          }
          if (v89[0] === "on") {
            if (v114) {
              return vF11("Udah aktif");
            }
            v56.push(p23.chat);
            fs2.writeFileSync("./database/antilinkch.json", JSON.stringify(v56, null, 2));
            vF11("Successfully Activate antilink2 In This Group");
          } else if (v89[0] === "off") {
            if (!v114) {
              return vF11("Udah nonaktif");
            }
            let v1247 = v56.indexOf(p23.chat);
            v56.splice(v1247, 1);
            fs2.writeFileSync("./database/antilinkch.json", JSON.stringify(v56, null, 2));
            vF11("Successfully Disabling antilink2 In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "antilinkch2":
        {
          if (!p23.isGroup) {
            return vF11("Fitur Ini Khusus Group");
          }
          if (!v109) {
            return vF11("Fitur Khusus admin!");
          }
          if (!v108) {
            return vF11("Bot harus menjadi admin");
          }
          if (v89[0] === "on") {
            if (v115) {
              return vF11("Udah aktif");
            }
            v57.push(p23.chat);
            fs2.writeFileSync("./database/antilinkch2.json", JSON.stringify(v57, null, 2));
            vF11("Successfully Activate antilink2 In This Group");
          } else if (v89[0] === "off") {
            if (!v115) {
              return vF11("Udah nonaktif");
            }
            let v1248 = v57.indexOf(p23.chat);
            v57.splice(v1248, 1);
            fs2.writeFileSync("./database/antilinkch2.json", JSON.stringify(v57, null, 2));
            vF11("Successfully Disabling antilink2 In This Group");
          } else {
            vF11("Kirim perintah " + (v86 + v87) + " on/off\n\nContoh: " + (v86 + v87) + " on");
          }
        }
        break;
      case "ocr":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("Fotonya mana?");
          }
          if (!/image/.test(v97)) {
            return vF11("Send/Reply Foto Dengan Caption " + (v86 + v87));
          }
          await f9();
          let v1249 = await v96.download();
          let v1250 = await UploadImg(v1249);
          try {
            let v1251 = await axios2.get("https://itzpire.com/tools/ocr?url=" + v1250);
            p22.sendMessage(p23.chat, {
              text: v1251.data.data.ParsedText
            }, {
              quoted: p23
            });
          } catch (_0x338a29) {
            console.log(_0x338a29);
            vF11("EROR");
          }
        }
        break;
      case "listban":
      case "listbanned":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner!");
          }
          const v1252 = await getBannedData();
          if (v1252.length === 0) {
            return vF11("Tidak ada pengguna yang di-ban.");
          }
          let v1253 = "*[ LIST BANNED ]*\n\n";
          v1252.forEach(p246 => {
            const v1254 = p246.id.split("@")[0];
            const vGetRemainingTime2 = getRemainingTime(p246.bannedAt);
            v1253 += "=> @" + v1254 + " - Sisa waktu: " + vGetRemainingTime2 + "\n";
          });
          v1253 += "\n*Total User Di Banned: " + v1252.length + "*";
          p22.sendMessage(p23.chat, {
            text: v1253.trim(),
            mentions: v1252.map(p247 => p247.id)
          }, {
            quoted: p23
          });
        }
        break;
      case "ban":
      case "banned":
        {
          if (!v92) {
            return vF11("Fitur Ini Khusus Owner!");
          }
          if (!v89[0]) {
            return vF11("Masukan Nomor Nya!");
          }
          let v1255 = p23.quoted?.sender || p23.mentionedJid?.[0] || v89[0];
          if (!v1255) {
            return vF11("Ex: " + (v86 + v87) + " @tag / 628xxx\n\n" + (v86 + v87) + " 6283136394680");
          }
          v1255 = v1255.replace(/\D/g, "") + "@s.whatsapp.net";
          banUser(v1255);
          p22.sendMessage(p23.chat, {
            text: "SUCCESS BANNED NUMBER : @" + v1255.split("@")[0],
            mentions: [v1255]
          }, {
            quoted: p23
          });
        }
        break;
      case "unban":
      case "unbanned":
        {
          if (!v92) {
            return vF11("Khusus Owner!");
          }
          if (!v89[0]) {
            return vF11("Masukan Nomor Nya!");
          }
          let v1256 = p23.quoted?.sender || p23.mentionedJid?.[0] || v89[0];
          if (!v1256) {
            return vF11("Ex: " + (v86 + v87) + " @tag / 628xxx\n\n" + (v86 + v87) + " 6283136394680");
          }
          v1256 = v1256.replace(/\D/g, "") + "@s.whatsapp.net";
          unbanUser(v1256);
          p22.sendMessage(p23.chat, {
            text: "SUCCESS UNBANNED NUMBER : @" + v1256.split("@")[0],
            mentions: [v1256]
          }, {
            quoted: p23
          });
        }
        break;
      case "poop":
      case "poopdown":
      case "poophd":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89[0]) {
            return vF11("Please enter url\n\nExample: " + (v86 + v87) + " https://poop.locker/d/2u2vtdvu0dxx?top=1");
          }
          await f9();
          if (p23.isGroup) {
            vF11("Media akan di kirim di pribadi chat");
          }
          try {
            let v1257 = await axios2.get("https://jerofc.xyz/api/poopdown?url=" + v89[0]);
            let v1258 = v1257.data.data.downloadLink;
            p22.sendFile(p23.sender, v1258, null, "SUCCESS", p23);
          } catch (_0x1dcbc8) {
            console.log(_0x1dcbc8);
            vF11("INVALID DOWNLOAD");
          }
        }
        break;
      case "spotify":
      case "spotifydl":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v89[0]) {
            return vF11("Please enter url\n\nExample: " + (v86 + v87) + " https://open.spotify.com/track/5hkQFKFRrr5gKdbbxsg6Lj?si=NFLcQBr7RAiOgZPO92hg6g");
          }
          await f9();
          try {
            let v1259 = await axios2.get("https://www.jerofc.xyz/api/spotifydl?url=" + v89[0]);
            let v1260 = v1259.data.data;
            const {
              artists: _0x1a0f7d,
              title: _0x56d9c2,
              duration: _0x125658,
              cover: _0x3064a4,
              type: _0x436923,
              downloadLink: _0xd3667a
            } = v1260;
            let v1261 = "*[ SPOTIFY DL ]*\n\n";
            v1261 += "Artist : " + _0x1a0f7d + "\n";
            v1261 += "Title : " + _0x56d9c2 + "\n";
            v1261 += "Duration : " + _0x125658 + "\n";
            v1261 += "Type : " + _0x436923 + "\n";
            await p22.sendMessage(p23.chat, {
              image: {
                url: _0x3064a4
              },
              caption: v1261
            }, {
              quoted: p23
            });
            await p22.sendMessage(p23.chat, {
              audio: {
                url: _0xd3667a
              },
              mimetype: "audio/mpeg",
              ptt: true
            }, {
              quoted: p23
            });
          } catch (_0x180dae) {
            console.log(_0x180dae);
            vF11("EROR");
          }
        }
        break;
      case "remini":
      case "hd":
      case "hdr":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v96) {
            return vF11("Fotonya mana?");
          }
          if (!/image/.test(v97)) {
            return vF11("Send/Reply Foto Dengan Caption " + (v86 + v87));
          }
          await f9();
          try {
            const {
              remini: _0x2cf7f6
            } = require("jer-api");
            let v1262 = await v96.download();
            let v1263 = await _0x2cf7f6(v1262, "enhance");
            p22.sendMessage(p23.chat, {
              image: v1263,
              caption: "DONE"
            }, {
              quoted: p23
            });
          } catch (_0x19a3f6) {
            console.log(_0x19a3f6);
            vF11("ERROR");
          }
        }
        break;
      case "ttimg":
      case "ttfoto":
      case "tiktokfoto":
      case "tiktokslide":
      case "tiktokimage":
      case "tiktokimg":
      case "tt":
      case "tiktokvideo":
      case "ttvideo":
      case "ttnowm":
      case "tiktoknowm":
      case "tiktok":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Url Nya Mana Kak?\n\nContoh : " + (v86 + v87) + " https://vt.tiktok.com/ZSF8Cowr3/");
          }
          if (!v89[0].match(/tiktok/gi)) {
            return vF11("URL INVALID");
          }
          try {
            await f9();
            const v1264 = "https://jerofc.xyz/api/tiktokslide?url=" + v89[0];
            let v1265 = await axios2.get(v1264);
            const v1266 = v1265.data.data;
            const {
              region: _0xf1a068,
              title: _0x5886ab,
              cover: _0x3ba8d9,
              play: _0x43666e,
              duration: _0x37c1f8,
              play_count: _0x3fe240,
              comment_count: _0x1bafc1,
              share_count: _0x2e08d3,
              download_count: _0x45e8a2,
              images: _0x5ceac7
            } = v1266;
            const {
              unique_id: _0x395f44,
              nickname: _0x38aef5
            } = v1266.author;
            let v1267 = "*[ TIKTOK DOWNLOAD ]*\n\n";
            v1267 += "*USERNAME :* " + _0x395f44 + "\n";
            v1267 += "*NICKNAME :* " + _0x38aef5 + "\n";
            v1267 += "*DURATION :* " + _0x37c1f8 + "\n";
            v1267 += "*REGION :* " + _0xf1a068 + "\n";
            v1267 += "*VIEWS :* " + _0x3fe240 + "\n";
            v1267 += "*TOTAL COMMENT :* " + _0x1bafc1 + "\n";
            v1267 += "*TOTAL SHARE :* " + _0x2e08d3 + "\n";
            v1267 += "*TOTAL DOWNLOAD :* " + _0x45e8a2 + "\n";
            v1267 += "*TITLE :* " + _0x5886ab + "\n\n";
            v1267 += "*[ MUSIC INFO ]*\n\n";
            v1267 += "*TITLE :* " + v1266.music_info.title + "\n";
            v1267 += "*ALBUM :* " + v1266.music_info.album + "\n";
            v1267 += "*DURATION :* " + v1266.music_info.duration;
            await p22.sendMessage(p23.chat, {
              text: v1267,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  renderLargerThumbnail: true,
                  title: v1266.author.nickname,
                  containsAutoReply: true,
                  mediaType: 1,
                  thumbnailUrl: _0x3ba8d9,
                  mediaUrl: "" + v89[0],
                  sourceUrl: "" + v89[0]
                }
              }
            }, {
              quoted: p23
            });
            if (_0x5ceac7 && _0x5ceac7.length > 0) {
              if (p23.isGroup) {
                vF11("Media Akan Di Kirim Di Pribadi Chat");
              }
              for (let v1268 of v1266.images) {
                await p22.sendFile(p23.sender, v1268, null, null, p23);
                await vF6(2000);
              }
              await p22.sendMessage(p23.sender, {
                audio: {
                  url: v1265.data.data.music_info.play
                },
                mimetype: "audio/mpeg"
              }, {
                quoted: p23
              });
            } else if (_0x43666e) {
              await p22.sendFile(p23.chat, _0x43666e, null, "DONE", p23);
              await p22.sendMessage(p23.chat, {
                audio: {
                  url: v1265.data.data.music_info.play
                },
                mimetype: "audio/mpeg"
              }, {
                quoted: p23
              });
            } else {
              vF11("Media Not Found");
            }
          } catch (_0x1d3f6a) {
            console.log(_0x1d3f6a);
            vF11("EROR KAK");
          }
        }
        break;
      case "addlist":
        {
          if (!p23.isGroup) {
            return p23.reply("Fitur Khusus Group!");
          }
          if (!v109) {
            return p23.reply("Fitur Khusus admin!");
          }
          let v1269 = q.split("|");
          if (v1269.length !== 2) {
            return p23.reply("Gunakan dengan cara " + (v86 + v87) + " *key|response*\n\n_Contoh_\n\n" + (v86 + v87) + " tes|apa");
          }
          let v1270 = v1269[0].toLowerCase().replace(/\s+/g, "");
          let v1271 = v1269[1];
          if (isAlreadyResponList(p23.chat, v1270, p40)) {
            return p23.reply("List respon dengan key : *" + v1270 + "* sudah ada di group ini.");
          }
          if (/image/.test(v97)) {
            let v1272 = await v96.download();
            const v1273 = await UploadImg(v1272);
            addResponList(p23.chat, v1270, v1271, true, "" + v1273, p40);
            vF11("Sukses set list message dengan key : *" + v1270 + "*");
            if (fs2.existsSync(v1272)) {
              fs2.unlinkSync(v1272);
            }
          } else {
            addResponList(p23.chat, v1270, v1271, false, "-", p40);
            vF11("Sukses set list message dengan key : *" + v1270 + "*");
          }
        }
        break;
      case "list":
      case "store":
        {
          if (p40.length === 0) {
            return vF11("Belum ada list message di database");
          }
          if (!isAlreadyResponListGroup(p23.isGroup ? p23.chat : v91, p40)) {
            return vF11("Belum ada list message yang terdaftar di group/chat ini");
          }
          let v1274 = await p22.groupMetadata(p23.chat);
          let v1275 = "*[ LIST YANG TERSEDIA ]*\n\n";
          let v1276 = new Date().toLocaleString();
          v1275 += "📛 GROUP NAME : " + v1274.subject + "\n";
          v1275 += "⌛ TIME : " + v1276 + "\n\n";
          for (let v1277 of p40) {
            if (v1277.id === (p23.isGroup ? p23.chat : v91)) {
              v1275 += "➡️ " + v1277.key + "\n";
            }
          }
          p22.sendMessage(p23.chat, {
            text: v1275,
            mentions: [p23.sender]
          }, {
            quoted: p23
          });
        }
        break;
      case "lirik":
      case "liriklagu":
      case "lyrics":
        {
          if (!v89[0]) {
            return vF11("Example : " + (v86 + v87) + " Bawa dia kembali");
          }
          await f9();
          const v1278 = "https://itzpire.com/search/lyrics?query=" + v89[0];
          let v1279 = await axios2.get(v1278);
          const v1280 = v1279.data.data;
          const {
            title: _0xf751f4,
            album: _0x3ab982,
            thumb: _0x50aef,
            lyrics: _0x5ebd0a
          } = v1280;
          try {
            let v1281 = "*[ LYRICS LAGU ]*\n\n";
            v1281 += "TITLE : " + _0xf751f4 + "\n";
            v1281 += "ALBUM : " + _0x3ab982 + "\n";
            v1281 += "LYRICS : " + _0x5ebd0a;
            p22.sendMessage(p23.chat, {
              image: {
                url: _0x50aef
              },
              caption: v1281
            }, {
              quoted: p23
            });
          } catch (_0x100e8f) {
            console.log(_0x100e8f);
            vF11("EROR");
          }
        }
        break;
      case "tourl":
        {
          if (!v96) {
            return vF11("Silahkan kirim foto dengan caption : " + (v86 + v87));
          }
          await f9();
          if (!/image/.test(v97) && !/video/.test(v97)) {
            return vF11("Send/Reply Foto/Video Dengan Caption " + (v86 + v87));
          }
          try {
            const libUploadImage2 = require("./lib/uploadImage");
            let v1282 = await v96.download();
            let v1283 = await UploadImg(v1282);
            let v1284 = "*[ UPLOADER ]*\n\n";
            v1284 += "*HASIL :* " + v1283 + "\n";
            v1284 += "*" + (v97 ? "(Tidak Ada Tanggal Kedaluwarsa)" : "(Expired 24 hours)") + "*";
            vF11(v1284);
          } catch (_0x3f5b02) {
            console.log(_0x3f5b02);
            vF11("EROR PLEASE CONTACT MY OWNER");
          }
        }
        break;
      case "shortlink":
        {
          if (!v94) {
            return vF11("Masukan url nya\n\nExample : " + (v86 + v87) + " jerofc.xyz");
          }
          try {
            let v1285 = await axios2.get("https://jerofc.xyz/api/shortlink/?text=" + v94);
            vF11("" + v1285.data);
          } catch (_0x50ab9c) {
            console.log(_0x50ab9c);
            vF11("ERROR");
          }
        }
        break;
      case "twitervideo":
      case "twitervid":
      case "twiterphoto":
      case "twitvid":
      case "twi":
      case "twitter":
      case "twiter":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v105 && !v92 && global.onlyprem) {
            return await f10();
          }
          if (!v89[0]) {
            return vF11("Contoh : \n*" + (v86 + v87) + "* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19");
          }
          await f9();
          try {
            let v1286 = await axios2.get("https://jerofc.xyz/api/twitter?url=" + v89[0]).then(p248 => {
              for (let v1287 of p248.data.mediaURLs) {
                p22.sendFile(p23.chat, v1287, null, "SUCCESS", p23);
              }
            });
          } catch (_0x40bb0a) {
            console.log(_0x40bb0a);
            vF11("Server erorr !");
          }
        }
        break;
      case "imgai":
      case "aiimg":
        {
          if (!v94) {
            return vF11("Penggunaan Salah !\n\nExample : " + (v86 + v87) + " kucing");
          }
          try {
            await f9();
            const v1288 = "https://aemt.uk.to/ai/text2img?text=" + v94;
            let v1289 = await getBuffer(v1288);
            p22.sendMessage(p23.chat, {
              image: v1289,
              caption: "SUCCESS"
            }, {
              quoted: p23
            });
          } catch (_0x2cee25) {
            console.log(_0x2cee25);
            vF11("EROR");
          }
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!v94) {
            return vF11("Masukan Yang Ingin Di Cari !\n\n" + (v86 + v87) + " Bot WhatsApp");
          }
          await f9();
          const ytSearch = require("yt-search");
          let v1290 = await ytSearch(v94);
          let v1291 = v1290.videos;
          let v1292 = 1;
          let v1293 = "*[ YOUTUBE SEARCH ]*\n\n";
          v1291.forEach(p249 => {
            v1293 += "*No :* " + v1292++ + "\n";
            v1293 += "*Type :* " + p249.type + "\n";
            v1293 += "*Video ID :* " + p249.videoId + "\n";
            v1293 += "*Title :* " + p249.title + "\n";
            v1293 += "*Views :* " + p249.views + "\n";
            v1293 += "*Duration :* " + p249.timestamp + "\n";
            v1293 += "*Uploaded :* " + p249.ago + "\n";
            v1293 += "*Url :* " + p249.url + "\n\n";
          });
          vF11(v1293);
        }
        break;
      case "mediafire":
        {
          if (vF18("id", p23.sender) == null && global.registered) {
            return await f11();
          }
          if (!v94) {
            return vF11("Mana Link Nya ?");
          }
          if (!vF5(v89[0]) && !v89[0].includes("mediafire.com")) {
            return vF11("The link you provided is invalid");
          }
          await f9();
          const v1294 = await axios2.get("https://www.jerofc.xyz/api/mediafire?url=" + v94);
          const v1295 = v1294.data.data;
          if (v1295.size.split("MB")[0] >= 999) {
            return vF11("*File Over Limit* " + util2.format(v1295));
          }
          let v1296 = "*[ MEDIAFIRE DOWNLOADER* ]\n\n";
          v1296 += "*Name* : " + v1295.name + "\n";
          v1296 += "*Type* : " + v1295.type + "\n";
          v1296 += "*Mime* : " + v1295.mime + "\n";
          v1296 += "*Upload* : " + v1295.uploaded + "\n";
          v1296 += "*Size* : " + v1295.size + "\n";
          v1296 += "*Download :* " + v1295.downloadLink + "\n";
          v1296 += "*Alternatif:* " + v1295.alternativeUrl + "\n\n";
          v1296 += "`JIKA MEDIA TIDAK TERKIRIM SILAHKAN DOWNLOAD DI SALAH SATU LINK BERIKUT`";
          vF11(v1296);
          p22.sendMessage(p23.chat, {
            document: {
              url: v1295.downloadLink || v1295.alternativeUrl
            },
            mimetype: v1295.mime + "/" + v1295.type,
            fileName: v1295.name,
            caption: "SUCCESS"
          }, {
            quoted: p23
          });
        }
        break;
      case "addsewa":
        {
          if (!v92) {
            return vF11("Fitur khusus owner!");
          }
          if (v94 < 2) {
            return vF11("Gunakan dengan cara " + (v86 + v87) + " *linkgc waktu*\n\nContoh : " + v87 + " https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs 30d\n\n*CATATAN:*\nd = hari (day)\nm = menit(minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)");
          }
          if (!vF5(v89[0])) {
            return vF11("Link grup WhatsApp tidak valid.");
          }
          let v1297 = v89[0].split("https://chat.whatsapp.com/")[1];
          if (!v89[1]) {
            return vF11("Waktunya?");
          }
          try {
            let v1298 = await p22.groupAcceptInvite(v1297);
            let vCheckSewaGroup2 = checkSewaGroup(v1298, p37);
            if (vCheckSewaGroup2) {
              extendSewaGroup(v1298, v89[1], p37);
              vF11("Waktu sewa grup berhasil ditambahkan!");
            } else {
              addSewaGroup(v1298, v89[1], p37);
              vF11("Sewa grup berhasil ditambahkan!");
            }
          } catch (_0x273948) {
            console.error(_0x273948);
            vF11("Terjadi kesalahan saat memproses permintaan Anda.");
          }
        }
        break;
      case "capcut":
        {
          if (!v94) {
            return vF11("Silahkan input url\n\nExample: " + (v86 + v87) + " https://www.capcut.com/t/Zs8MEkP7r/");
          }
          await f9();
          try {
            let v1299 = await axios2.get("https://www.jerofc.xyz/api/capcut?url=" + v94);
            let v1300 = v1299.data.data;
            p22.sendFile(p23.chat, v1300.video, null, v1300.description, p23);
          } catch (_0x2b0fc7) {
            console.log(_0x2b0fc7);
            vF11("Gagal download");
          }
        }
        break;
      case "ai":
      case "openai":
        {
          if (!v94) {
            return vF11("Contoh penggunaan : " + (v86 + v87) + " Hello");
          }
          try {
            await f9();
            let v1301 = await axios2.get("https://jerofc.my.id/api/openai?text=" + v94);
            let v1302 = v1301.data.data.message;
            p22.sendMessage(p23.chat, {
              text: v1302
            }, {
              quoted: p23
            });
          } catch (_0x94f56) {
            console.log(_0x94f56);
            vF11("Terjadi kesalahan dalam menjawab pertanyaan");
          }
        }
        break;
      default:
        break;
    }
    switch (v88) {
      case "ppjbot":
      case "sewa":
      case "sewabot":
        {
          if (p23.isGroup) {
            return vF11("Fitur hanya dapat di gunakan di private chat");
          }
          if (v94.length < 2) {
            return vF11("Gunakan dengan cara " + (v86 + v88) + " *linkgc waktu*\n\nContoh : " + (v86 + v88) + " https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs 30d\n\n*CATATAN:*\nd = hari (day)");
          }
          this.sewabot = this.sewabot ? this.sewabot : {};
          sesisewa = Object.values(this.sewabot).find(p250 => [p250.user].includes(p23.sender));
          let v1303 = "INV-" + makeid(6);
          if (!vF5(v89[0])) {
            return vF11("Link grup wa gk gitu modelnya cuy");
          }
          try {
            const v1304 = v89[1];
            let vParseInt2 = parseInt(v89[1]);
            let v1305 = vParseInt2 / 30 * 5000;
            let v1306;
            if (sesisewa) {
              return vF11("Masih ada transaksi yang belum terselesaikan, mohon menyelesaikan pembayaran sebelumnya untuk membuat transaksi lagi");
            }
            if (!v89[1]) {
              return vF11("Waktunya?");
            }
            let v1307 = v89[1].slice(-1);
            if (isNaN(vParseInt2) || v1307 !== "d" || vParseInt2 % 30 !== 0) {
              return vF11("Durasi sewa harus dalam kelipatan 30 hari, misalnya 30d, 60d, 90d, dst.");
            }
            await vF6(300);
            let v1308;
            let vF21 = async () => {
              const v1309 = this.sewabot[p23.sender]?.invoice;
              let v1310 = "*[ SEWABOT ]*\n\n";
              v1310 += "*PRICE :* " + v1305 + "\n";
              v1310 += "*WAKTU SEWA :* " + vParseInt2 + "D / HARI\n";
              v1310 += "*INVOICE :* " + v1309 + "\n\n";
              v1310 += "*HALO KAK @" + p23.sender.split("@")[0] + ", MOHON MENYELESAIKAN PEMBAYARAN DENGAN HARGA YANG SUDAH DI TENTUKAN AGAR DAPAT DI PROSES !, QRIS BERLAKU 15 MENIT*\n\n";
              v1310 += "> KETIK " + v86 + "bukti AGAR STATUS SEWA KAMU DAPAT DI PROSES OLEH KAMI";
              const v1311 = await p22.sendMessage(p23.chat, {
                image: fs2.readFileSync("./image/qris.jpg"),
                caption: v1310,
                mentions: [p23.sender]
              }, {
                quoted: p23
              });
              v1308 = v1311.key;
              clearInterval(v1306);
              return;
            };
            this.sewabot[p23.sender] = {
              user: p23.sender,
              price: v1305,
              linkgc: v89[0],
              durasi: vParseInt2,
              invoice: v1303,
              status: "PENDING"
            };
            v1306 = setInterval(vF21, 5000);
            const v1312 = 9000000;
            setTimeout(async () => {
              if (this.sewabot[p23.sender]) {
                if (v1308) {
                  p22.sendMessage(p23.chat, {
                    delete: v1308
                  });
                }
                delete this.sewabot[p23.sender];
                clearInterval(v1306);
              }
            }, v1312);
          } catch (_0x15edcd) {
            console.log(_0x15edcd);
            vF11("Terjadi kesalahan saat memproses permintaan Anda.");
            delete this.sewabot[p23.sender];
            clearInterval(intervalId);
          }
        }
        break;
      case "cancel":
      case "cancelsewa":
        {
          sesisewa = Object.values(this.sewabot).find(p251 => [p251.user].includes(p23.sender));
          if (!sesisewa) {
            return vF11("Tidak ada transaksi yang sedang pending");
          }
          delete this.sewabot[p23.sender];
          vF11("Sukses membatalkan transaksi");
        }
        break;
      case "bukti":
        {
          sesisewa = Object.values(this.sewabot).find(p252 => [p252.user].includes(p23.sender));
          if (!sesisewa) {
            return vF11("Transaksi tidak di temukan !");
          }
          if (!v96) {
            return vF11("Kirim/Reply Gambar Dengan Caption *" + (v86 + v87) + "*");
          }
          if (/image/.test(v97)) {
            let v1313 = await v96.download();
            vF11("Mohon tunggu ya kak, bukti sudah di kirim ke owner, dan sekarang sedang dalam pengecekan oleh owner kami");
            await vF6(1000);
            const v1314 = this.sewabot[p23.sender]?.linkgc;
            const v1315 = this.sewabot[p23.sender]?.price;
            const v1316 = this.sewabot[p23.sender]?.durasi;
            const v1317 = this.sewabot[p23.sender]?.invoice;
            let v1318 = "\t\t*[ BUKTI TRANSFER ]*\n\n";
            v1318 += "*GRUB TUJUAN : " + v1314 + "*\n";
            v1318 += "*PRICE :* " + v1315 + "\n";
            v1318 += "*DURASI :* " + v1316 + "\n";
            v1318 += "*INVOICE :* " + v1317 + "\n\n";
            v1318 += "UNTUK KONFIRMASI SILAHKAN KETIK .accsewa " + p23.sender.split("@")[0] + " " + v1314 + " " + v1316 + "d";
            p22.sendMessage(global.owner2 + "@s.whatsapp.net", {
              image: v1313,
              caption: v1318
            }, {
              quoted: p23
            });
          } else {
            vF11("Kirim/Reply Gambar Dengan Caption *" + (v86 + v87) + "*");
          }
        }
        break;
      case "accsewa":
      case "sewaacc":
        {
          if (!v92) {
            return vF11("Fitur ini hanya dapat di akses oleh owner");
          }
          const v1319 = v94.split(" ");
          if (v1319.length < 3) {
            return vF11("Contoh penggunaan: " + (v86 + v87) + " 6283136394680 https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs 30d");
          }
          const v1320 = v1319[0];
          const v1321 = v1319[1].split("https://chat.whatsapp.com/")[1];
          const v1322 = v1319[2];
          if (!v1321) {
            return vF11("URL grup WhatsApp tidak valid!");
          }
          if (!v1322 || isNaN(parseInt(v1322))) {
            return vF11("Durasi sewa tidak valid! Gunakan format seperti '30d'.");
          }
          try {
            let v1323 = await p22.groupAcceptInvite(v1321);
            let vCheckSewaGroup3 = checkSewaGroup(v1323, p37);
            if (vCheckSewaGroup3) {
              extendSewaGroup(v1323, v1322, p37);
              vF11("Waktu sewa grup berhasil ditambahkan!");
            } else {
              addSewaGroup(v1323, v1322, p37);
              vF11("Sukses menambahkan ke daftar sewa");
            }
            let v1324 = "*[ SEWABOT SUKSES ]*\n\n";
            v1324 += "*GRUB INFO BOT :* https://chat.whatsapp.com/Kh1kOsK33GCEohpf7ezrVs\n\n";
            v1324 += "`JOIN GRUB INFO BOT AGAR MENDAPATKAN INFORMASI TENTANG BOT, SAYA HANYA INFORMASIKAN TENTANG BOT ON/OFF/ERROR DI DALAM GRUB TERSEBUT`";
            p22.sendMessage(v1320 + "@s.whatsapp.net", {
              text: v1324,
              mentions: [p23.sender]
            });
          } catch (_0x1ee3c6) {
            if (_0x1ee3c6.message.includes("expired")) {
              return vF11("Link undangan grup telah kedaluwarsa!");
            }
            console.error(_0x1ee3c6);
            vF11("Terjadi kesalahan saat memproses permintaan Anda.");
          }
        }
        break;
      default:
    }
    if (!p23.key.fromMe && !p23.isGroup && global.firstchat) {
      let v1325 = global.db.data.users[p23.sender];
      if (new Date() - v1325 < 86400000) {
        return;
      }
      let v1326 = "Hallo @" + p23.sender.split("@")[0] + ", Selamat " + v95 + ". Ada yang bisa " + namabot + " bantu?";
      p22.sendMessage(p23.chat, {
        text: v1326,
        mentions: [p23.sender]
      }, {
        quoted: p23
      });
      global.db.data.users[p23.sender] = new Date() * 1;
    }
    if (v84.startsWith("=> ")) {
      if (!p23.key.fromMe && !v92) {
        return;
      }
      function f21(p253) {
        sat = JSON.stringify(p253, null, 2);
        bang = util2.format(sat);
        if (sat == undefined) {
          bang = util2.format(p253);
        }
        return vF11(bang);
      }
      try {
        vF11(util2.format(eval("(async () => { return " + v84.slice(3) + " })()")));
      } catch (_0x4871b9) {
        vF11(util2.format(_0x4871b9));
      }
    }
    if (v84.startsWith("> ")) {
      if (!p23.key.fromMe && !v92) {
        return;
      }
      try {
        let v1327 = await eval(v84.slice(2));
        if (typeof v1327 !== "string") {
          v1327 = require("util").inspect(v1327);
        }
        await vF11(v1327);
      } catch (_0xecc126) {
        await vF11(util2.format(_0xecc126));
      }
    }
    if (v84.startsWith("< ")) {
      if (!p23.key.fromMe && !v92) {
        return;
      }
      try {
        return vF11(JSON.stringify(eval("" + v89.join(" ")), null, "\t"));
      } catch (_0x4b9c49) {
        vF11(util2.format(_0x4b9c49));
      }
    }
    if (v84.startsWith("$ ")) {
      if (!p23.key.fromMe && !v92) {
        return;
      }
      mengtermuk = v84.slice(2);
      exec(mengtermuk, (p254, p255) => {
        if (p254) {
          return vF11(p254);
        }
        if (p255) {
          return vF11("*" + namaowner + "*\nEXEC: " + mengtermuk + "\n\n" + p255);
        }
      });
    }
    if (v84 && ["bot", "Bot"].includes(v84) && !v85 && !p23.key.fromMe) {
      vF11("Bot Activated \" " + p23.pushName + " \"");
    }
    if (v84 && ["p", "proses", "Proses", "P"].includes(v84) && !v85 && !p23.key.fromMe) {
      if (!p23.isGroup) {
        return;
      }
      if (!v109 && !v92) {
        return;
      }
      if (!p23.quoted) {
        return vF11("Reply pesanan yang akan proses");
      }
      let v1328 = p23.quoted ? v96.text : v96.text.split(v89[0])[1];
      const vGetTextSetProses2 = getTextSetProses(p23.chat, p33);
      let v1329 = (vGetTextSetProses2 || " *TRANSAKSI PENDING* \n\n``` TANGGAL : @tanggal\n JAM     : @jam\n STATUS  : Pending```\n\n Catatan :\n@catatan\n\nPesanan @user sedang di proses!").replace("@tanggal", "" + vF10(new Date())).replace("@jam", v129).replace("@catatan", "" + (v1328 ? v1328 : "-")).replace("@user", "@" + p23.quoted.sender.split("@")[0]);
      p22.sendTextWithMentions(p23.chat, v1329, p23);
    }
    if (v84 && ["d", "done", "DONE", "D"].includes(v84) && !v85 && !p23.key.fromMe) {
      if (!p23.isGroup) {
        return;
      }
      if (!(p23.isGroup ? v109 : v92)) {
        return;
      }
      if (!p23.quoted) {
        return vF11("Reply pesanan yang telah di proses");
      }
      let v1330 = p23.quoted ? v96.text : v96.text.split(v89[0])[1];
      let v1331 = "「 *TRANSAKSI BERHASIL* 」\n\n```📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil```\n\nTerimakasih @user Next Order ya🙏";
      const vGetTextSetDone2 = getTextSetDone(p23.isGroup ? p23.chat : v91, p34);
      if (vGetTextSetDone2 !== undefined) {
        var v1332 = vGetTextSetDone2.replace("@pesanan", v1330 ? v1330 : "-").replace("@user", "@" + p23.quoted.sender.split("@")[0]).replace("@jam", v129).replace("@tanggal", vF10(new Date())).replace("@user", "@" + p23.quoted.sender.split("@")[0]);
        p22.sendTextWithMentions(p23.chat, v1332, p23);
      } else {
        p22.sendTextWithMentions(p23.chat, v1331.replace("@pesanan", v1330 ? v1330 : "-").replace("@user", "@" + p23.quoted.sender.split("@")[0]).replace("@jam", v129).replace("@tanggal", vF10(new Date())).replace("@user", "@" + p23.quoted.sender.split("@")[0]), p23);
      }
    }
    if (p23.chat.endsWith("@s.whatsapp.net") && !v85) {
      this.menfes = this.menfes ? this.menfes : {};
      let v1333 = Object.values(this.menfes).find(p256 => [p256.a, p256.b].includes(p23.sender) && p256.state === "CHATTING");
      if (v1333) {
        if (/^.*(next|leave|start)/.test(p23.text)) {
          return;
        }
        if ([".next", ".leave", ".stop", ".start", "Cari Partner", "Keluar", "Lanjut", "Stop"].includes(p23.text)) {
          return;
        }
        find = Object.values(this.menfes).find(p257 => [p257.a, p257.b].includes(p23.sender));
        let v1334 = find.a == p23.sender ? find.b : find.a;
        await p23.copyNForward(v1334, true, p23.quoted && p23.quoted.fromMe ? {
          contextInfo: {
            ...p23.msg.contextInfo,
            participant: v1334
          }
        } : {});
      }
    }
  } catch (_0x3e617b) {
    console.log(util2.format(_0x3e617b));
    let vString = String(_0x3e617b);
    if (vString.includes("conflict")) {
      return;
    }
    if (vString.includes("not-authorized")) {
      return;
    }
    if (vString.includes("already-exists")) {
      return;
    }
    if (vString.includes("rate-overlimit")) {
      return;
    }
    if (vString.includes("Connection Closed")) {
      return;
    }
    if (vString.includes("Timed Out")) {
      return;
    }
    if (vString.includes("Value not found")) {
      return;
    }
    if (vString.includes("Socket connection timeout")) {
      return;
    }
  }
};
let v1335 = require.resolve(__filename);
fs2.watchFile(v1335, () => {
  fs2.unwatchFile(v1335);
  console.log(chalk2.redBright("Update " + __filename));
  delete require.cache[v1335];
  require(v1335);
});
