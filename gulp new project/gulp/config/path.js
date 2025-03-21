import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());



const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js:`${buildFolder}/js/`,
        css:`${buildFolder}/css/`,
        html :`${buildFolder}/`,
        images:`${buildFolder}/img`,
        fonts:`${buildFolder}/fonts`,
        files: `${buildFolder}/files/`
    },
    src:{ 
        js:`${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        scss:`${srcFolder}/scss/style.scss`,
        html :`${srcFolder}/*.html`,
        files : `${srcFolder}/files/**/*.*`,
        
    },

    watch: {
        js:`${srcFolder}/js/**/*.js`,
        scss:`${srcFolder}/scss/**/*`,
        html : `${srcFolder}/**/*.html`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,svg,webp}`,
        files : `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}