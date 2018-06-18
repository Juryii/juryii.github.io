перед сборкой проекта убедитесь что у вас установлены все npm пакеты ипользуемые в проекте,
если что то не установленно то после названия пакета написанна команда для установки(предполагаетсся что npm и nodeJS уже установлены)
 после установки всех пакетов перейдите в корневую директорию проекта
откройте консоль, и в введите команду для исполнения gulp инструкций предворительно ознокомившись с командой!

gulp sass - преобразование sass в css с добовлением автопрефиксов
gulp browser-sync - поднимаем локальных сервер для нашего сайта
gulp scripts добавление библиотек, объединяем их в 1 файл и сжимаем, + сжимаем наши js файлы
gulp css-libs минификация css и добавление в app/css
gulp watch авторелоад при изменении в файлах sass js html
gulp clean удаление папки dist перед сборкой
gulp img сжатие всех фоток
gulp build сборка проекта в продакшн
gulp clear чиста кэша
gulp default рабочий таск для подготовки проекта


ннеобходимые npm пакеты сдля сборки проекта

    "browser-sync": ------ npm i browser-sync --save-dev
    "del": --------------- npm i del --save-dev
    "gulp": -------------- npm i gulp -g
    "gulp-autoprefixer":-- npm i --save-dev gulp-autoprefixer
    "gulp-cache": -------- npm i gulp-cache --save-dev
    "gulp-concat": ------- npm i gulp-concat --save-dev
    "gulp-cssnano": ------ npm i gulp-cssnano --save-dev
    "gulp-imagemin": ----- npm i gulp-imagemin --save-dev
    "gulp-rename":  ------ npm i gulp-rename --save-dev
    "gulp-sass": --------- npm i gulp-sass --save-dev
    "gulp-uglifyjs": ----- npm i gulp-uglifyjs --save-dev
    "imagemin-pngquant" -- npm i imagemin-pngquant --save-dev

