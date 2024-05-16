import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // сжатие css файла
import webpcss from 'gulp-webpcss' ; //вывод webp изображений
import autoprefixer from 'gulp-autoprefixer'; //добавление вендорных  префиксов для кросбраузерной верстки
import groupCssMediaqueries from 'gulp-group-css-media-queries'; //группировка медиа запросов

const sass = gulpSass(dartSass)


export const scss = () => {
    return app.gulp.src(app.path.src.scss,{sourcemaps:app.isDev})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title:"SCSS",
            message:"Error :<%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g,'../img/'))
    .pipe(sass({
        outputStyle:'expanded'
    }))
    .pipe(groupCssMediaqueries())
    .pipe(webpcss({
        webpClass:".webp",
        noWebpClass:".no-webp"
    }))
    .pipe(autoprefixer({
        grid:true,
        overrideBrowserlist : ["last 3 versions"],
        cascade: true
    }))

    //раскомеентировать если нужен НЕ СЖАТЫЙ дубль файла стилей

    // .pipe(app.gulp.dest(app.path.build.css))

    .pipe(cleanCss())
    .pipe(rename({
        extname:".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
} 
