const fs = require("fs");
const sewaFile = "./database/sewa.json";

// Membaca database
const readSewaDB = () => {
    if (!fs.existsSync(sewaFile)) fs.writeFileSync(sewaFile, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(sewaFile));
};

// Menulis database
const writeSewaDB = (data) => {
    fs.writeFileSync(sewaFile, JSON.stringify(data, null, 2));
};

module.exports = {
	readSewaDB,
	writeSewaDB
}
