const textData = [
  {
    basicRu: `Basic. Главное в целом:`,
    basicEn: ``,
    basicUa: ``,

    appSampleRu: `Приложение примера укомплектованного многофункционального журнала с возможностью ведения и развития любой производственной деятельности или же служащее для поиска информации, развлечения, беззаботного времяпрепровождения.`,
    appSampleEn: ``,
    appSampleUa: ``,

    possibilitiesTitleRu: `Возможности:`,
    possibilitiesTitleEn: ``,
    possibilitiesTitleUa: ``,

    possibilitiesStarRu: [
      `Социальная сеть, ведения фото/видео/текстового микроблогинга`,
      `Онлайн кинотеатр/видеохостинг`,
      `Видеостриминг`,
    ],
    possibilitiesRu: `Имиджборд и анонимный веб-форум`,
    possibilitiesStarEn: [``, ``, ``],
    possibilitiesStarUa: [``, ``, ``],

    branchDescRu: `Ветвь имеет свою производственную деятельность: Журналистика. Кино/мульт производство. Создание компьютерных игр.`,
    branchDescEn: ``,
    branchDescUa: ``,

    designRu: `Для представления примера главной страницы входа в приложение служат яркие/провокационные/сильные обложки журналов: Time, The New Yorker, National Geographic, etc. Будут создаваться и меняться в зависимости от текущего инфоповода для массового обсуждения.`,
    designEn: ``,
    designUa: ``,

    conceptTitleRu: `Main Concepts. Идеи к рубрикам:`,
    conceptTitleEn: ``,
    conceptTitleUa: ``,

    journalistRu: `Журналистика:`,
    journalistEn: ``,
    journalistUa: ``,

    journalistInfoRu: [
      `Новое повествование современного дыхания, разнообразные мнения, правда и грязный реализм. Своеобразная подача информации без цензуры, с характером стиля письменности Хантера Томпсона, Буковски, Паланика, etc.`,
      `Рассмотреть обзоры на: реклама, политика, бюрократия, вопрос цензуры, насилие, воспитание поколений, проблемы глобализма, развитие, перенаселение планеты, религия, эффект массы, состояние общества, etc.`,
      `Гонзо журналистика (разобрать суть, реинкарнировать). Ведение повествования от первого лица (группы лиц) - текст/видео-дневников. Нырять в самое пекло идиотизма проблемы изучая её изнутри или создавать определенные условия для её появления (смесь психологических экспериментов поведения, внедрения в секты, церемония аяуаски, посещение burning man, etc).`,
    ],
    journalistInfoEn: [``, ``, ``],
    journalistInfoUa: [``, ``, ``],

    filmTitleRu: `Игры/кино/мульт производство:`,
    filmTitleEn: ``,
    filmTitleUa: ``,

    filmInfoRu: [
      `Поднимаем киноиндустрию и геймдев с колен. Пустить в ход множество собственных идей/сценариев/недоработок. Собрать воедино крутых, безгранично понимающих, критически мыслящих специалистов и начать творить новую историю культуры, искусства и технологического развития в стране.`,
      `Дополнительно: студию правильного перевода (рус, укр, eng, “смешной перевод” - гоблин).`,
    ],
    filmInfoEn: ``,
    filmInfoUa: ``,

    excursusTitleRu: `Excursus. Начальное производство.`,
    excursusTitleEn: ``,
    excursusTitleUa: ``,

    excursusInfoRu: `Первичный запуск задействует рубрику Журналистика и рабочий имиджборд с идеями, рекламой и продвижением остального, что должно способствовать начальному толчку, набору аудитории и дальнейшему развитию.`,
    excursusInfoEn: ``,
    excursusInfoUa: ``,

    whyTitleRu: `Почему(?):`,
    whyTitleEn: ``,
    whyTitleUa: ``,

    whyInfoRu: [
      `Все текущие социальные сети превратились или превращаются в “телевизоры былой эпохи”, где вокруг сплошная цензура и поток нескончаемой рекламы. Выбор просматриваемого контента всё реже остается за пользователем. Поэтому и нужна новая свободная площадка, свежий воздух.`,
      `Для Украины это будет первое, своего рода, место для раскрытия творческого потенциала, создании и реализации личности, открытости и совершенно нового виденья. Здесь и будут собраны лучшие возможности воедино, без лишней мишуры и ненужных функций, с умопомрачительным минималистически-модернистским дизайном, футуристическим ответвлением и максимальной отзывчивостью к потребителю.`,
      `На фоне текущей войны в стране и после очевидной победы Украины такое место идеально займет свою нишу производства всего выше перечисленного.`,
    ],
    whyInfoEn: [``, ``, ``],
    whyInfoUa: [``, ``, ``],

    featuresTitleRu: `Misc features. Наработки деталей ресурса:`,
    featuresTitleEn: ``,
    featuresTitleUa: ``,

    featuresItemRu: [
      `Возможность постов совмещать воедино: картинка/текст/музыка/видео, etc.`,
      `Возможность под/над/в песню прикреплять/обозначать официальный клип если таков существует.`,
      `Удобная рубрика для знакомств с возможностью выбора поиска для чего любовь/друзей/секс/etc.`,
      `Сжатие (качество) картинок. Рассмотреть возможности меньшие со всех зол. Лучше без потери качества.`,
      `Сторис/короткие повестки дня.`,
      `Попробовать переработать/видоизменить лайки, репости, комменты, etc.`,
      `Индивидуальный конструктор эмодзи/метаверс персонажа с неограниченными возможностями добавлять любые детали к чему и куда угодно. Детально обдумать расширение под метавселенную.`,
      `Рассмотреть возможность бесплатного онлайн стриминга вседоступных при этом фильмов. Выбор разного качества видео, наилучшее в приоритете.`,
      `Различные доступные озвучки (наилучшие выбраны логичными экспертами) и оригинал с субтитрами. Правильный перевод озвучки – не цензурировать выражения с лучше всего подобранными словосочетаниями и голосами которые имеют идеальное сходство с героями.`,
      `Добавить возможность к постам создавать платную подписку для юзеров или отдельно выводимый платный контент. Для деталей рассмотреть патреон, бусти, онли фанс, etc.`,
      `Простейшая система донатов в различной валюте/криптовалюте. Кнопка должна быть в простой и постоянной доступности для каждого аккаунта.`,
      `Рассмотреть возможность расширения рубрик, добавка новых страниц/отраслей под каждый аккаунт. Таким образом каждый пользователь сможет рекламировать свою производственную деятельность. Рассмотреть возможность создавать/добавлять интернет магазин под созданный из несколько популярных стандартных шаблонов с возможностью простой кастомизации сайта под нужды клиента – идет как отдельная страница приложения(как бы приложение в приложении).`,
    ],
    featuresItemEn: [],
    featuresItemUa: [],
  },
];

export default textData;