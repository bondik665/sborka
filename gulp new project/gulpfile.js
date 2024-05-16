//основной модуль
import gulp from 'gulp';
//импорт путей
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';


//передаем значение в глобальную  переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path:path,
    gulp:gulp,
    plugins:plugins
}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf,ttfToWoff,fontsStyle } from './gulp/tasks/fonts.js';
import { zip } from "./gulp/tasks/zip.js";






//наблюдатель  за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.files,copy);
    gulp.watch(path.watch.html,html);
    gulp.watch(path.watch.scss,scss);
    gulp.watch(path.watch.js,js);
    gulp.watch(path.watch.images,images);
}




//последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf,ttfToWoff,fontsStyle);

//главная html  задача ---ОСНОВНАЯ
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images));


//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks,gulp.parallel(watcher,server) );
const build = gulp.series(reset,mainTasks);
const deployZIP = gulp.series(reset,mainTasks,zip);

//экспорт сценариев
export { dev }
export { build }
export { deployZIP }

//выполнение сценария по умолчпанию 
gulp.task('default',dev);
