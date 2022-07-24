const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = parseInt(totalmem() / 1024 / 1024);
    const fRam = parseInt(freemem() / 1024 / 1024);
    const usage = ((fRam / tRam) * 100).toFixed(2);
    
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRam: `${tRam} MB`,
        FreeMan: `${fRam} MB`,
        UsageRam: `${usage} %`
    };
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);
