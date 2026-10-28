import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
const files = {
 hero: 'SaveClip.App_833333529_17971290072176356_4935330247229659918_n.jpg',
 about: '670474032_17943637305176356_1048211106630434417_n..jpg',
 living: 'SaveClip.App_847953249_17972931609176356_8762598899725789267_n.jpg',
 kitchen: 'SaveClip.App_833936059_17971284819176356_2880269448165869940_n.jpg',
 pool: 'SaveClip.App_848412105_17972931651176356_8991046400812987513_n.jpg',
 structure: '670349119_17943774135176356_3325617911823682095_n..jpg',
 house: '670303931_17943774126176356_3146966377942558402_n..jpg',
};
await mkdir('public/media', {recursive:true});
for (const [name, file] of Object.entries(files)) {
 for (const width of [640,1080]) await sharp(`assets/${file}`).resize({width,withoutEnlargement:false}).webp({quality:84}).toFile(`public/media/${name}-${width}.webp`);
}
console.log('Responsive WebP assets generated. Originals preserved.');
