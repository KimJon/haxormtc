const fs = require('fs');
const path = require('path');
const { ZipArchive, TarArchive } = require('archiver');

/**
 * HAXOR MTC - CPANEL PRODUCTION PACKAGER
 * =====================================
 * Generates standards-compliant, Linux-compatible deployment archives:
 * 1. `haxormtc-cpanel-upload.zip` (Standard Zip 2.0 with POSIX forward-slashes & clean directory records)
 * 2. `haxormtc-cpanel-upload.tar.gz` (Native Linux tar.gz for 100% permission preservation)
 */

async function createZip(outputPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const zip = new ZipArchive({
      zlib: { level: 9 },
      forceLocalTime: true,
      forceZip64: false
    });

    output.on('close', () => {
      console.log(`[SUCCESS] ${path.basename(outputPath)} created (${(zip.pointer() / 1024).toFixed(1)} KB)`);
      resolve();
    });

    zip.on('warning', (err) => {
      if (err.code === 'ENOENT') console.warn(err);
      else reject(err);
    });

    zip.on('error', (err) => reject(err));

    zip.pipe(output);

    // Add dist contents with clean relative root
    zip.directory('dist', false);
    zip.finalize();
  });
}

async function createTarGz(outputPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const tar = new TarArchive({
      gzip: true,
      gzipOptions: { level: 9 }
    });

    output.on('close', () => {
      console.log(`[SUCCESS] ${path.basename(outputPath)} created (${(tar.pointer() / 1024).toFixed(1)} KB)`);
      resolve();
    });

    tar.on('warning', (err) => {
      if (err.code === 'ENOENT') console.warn(err);
      else reject(err);
    });

    tar.on('error', (err) => reject(err));

    tar.pipe(output);

    // Add dist contents with clean relative root
    tar.directory('dist', false);
    tar.finalize();
  });
}

async function main() {
  console.log('Packaging production distribution for cPanel...');
  
  const zipPath = path.resolve(__dirname, 'haxormtc-cpanel-upload.zip');
  const tarPath = path.resolve(__dirname, 'haxormtc-cpanel-upload.tar.gz');

  const distHtaccess = path.resolve(__dirname, 'dist', '.htaccess');
  const distHtaccessTxt = path.resolve(__dirname, 'dist', 'htaccess.txt');
  if (fs.existsSync(distHtaccess)) {
    fs.copyFileSync(distHtaccess, distHtaccessTxt);
    console.log('[INFO] Created htaccess.txt fallback in dist');
  }

  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  if (fs.existsSync(tarPath)) fs.unlinkSync(tarPath);

  await createZip(zipPath);
  await createTarGz(tarPath);

  console.log('--- ALL PACKAGES READY FOR CPANEL ---');
  console.log('1. ' + zipPath);
  console.log('2. ' + tarPath);
}

main().catch(err => {
  console.error('Packaging failed:', err);
  process.exit(1);
});
