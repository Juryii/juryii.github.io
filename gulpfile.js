var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
 
gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/2018/toe_examen_4s/sass/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/2018/toe_examen_4s/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
 
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app/2018/toe_examen_4s' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
 
gulp.task('scripts', function() {
    return gulp.src('/app/2018/toe_examen_4s/js/*.js') // Выбираем файл для минификации
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(rename({suffix: '.min'}))  // Добавляем суффикс .min
        .pipe(gulp.dest('app/2018/toe_examen_4s/js')); // Выгружаем в папку app/js
});
 
gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/2018/toe_examen_4s/css/*.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем файлы
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/2018/toe_examen_4s/css')); // Выгружаем в папку app/css
});
 
gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/2018/toe_examen_4s/sass/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/2018/toe_examen_4s/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/2018/toe_examen_4s/js/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});
 
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});
 
gulp.task('img', function() {
    return gulp.src('app/2018/task/img/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/task/img')); // Выгружаем на продакшен
});
 
gulp.task('build', ['clean', 'img', 'css-libs', 'scripts'], function() {
 
    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/css/*.min.css',
        ])
    .pipe(gulp.dest('dist/css'))
 
    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))
 
    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты js в продакшен
    .pipe(gulp.dest('dist/js'))
 
    var buildHtml = gulp.src('app/**/.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));
 
}); 
 
gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);