/**
 * Builds square app/icon.png + app/apple-icon.png from public/new-logo.png
 * so browser tabs don't show extra empty space beside the title.
 */
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const src = path.join(root, 'public', 'new-logo.png')
const outIcon = path.join(root, 'app', 'icon.png')
const outApple = path.join(root, 'app', 'apple-icon.png')

async function main() {
  if (!fs.existsSync(src)) {
    console.error('Missing:', src)
    process.exit(1)
  }
  const buf = fs.readFileSync(src)
  const size = 512
  const square = await sharp(buf)
    .resize(size, size, {
      fit: 'contain',
      position: 'centre',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer()

  await sharp(square).toFile(outIcon)
  await sharp(square).toFile(outApple)
  console.log('Wrote', outIcon, outApple)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
