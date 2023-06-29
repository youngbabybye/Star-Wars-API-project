# Цели

Star wars project APP основан на открытом API https://swapi.dev/api/ и был частью тестового задания одной компании.

## Суть тестового задания

Есть ресурс, предоставляющий API для получения различных данных по вселенной фильмов Star Wars - https://swapi.dev/ Документация к нему: https://swapi.dev/documentation

Запросы возвращают данные из шести разделов: персонажи, планеты, фильмы и т.п. Например, запрос https://swapi.dev/api/people/1/ возвращает данные о персонаже под номером 1:

{
"name": "Luke Skywalker",
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",
"homeworld": "https://swapi.dev/api/planets/1/"
.....
}

Необходимо реализовать приложение, которое будет отображать все эти данные.

Например, на главной странице - кнопки перехода к этим шести разделам, а дальше постраничное отображение соответствующих элементов раздела и при выборе там какого-то конкретного элемента - отображение информации о нем.

Дизайн, шрифты, цвета и т.п. на ваше усмотрение. Главное в задаче реализация получения данных через http запросы и их отображение. Реализовывать можно как с помощью React, так и на чистом JS, по желанию, но если знакомы с React или есть желание попробовать, думаю, удобнее будет скорее с ним, чем без него.

## О проекте

Это мой ПЕРВЫЙ проект на React. На нём я учился использовать возможности фреймворка и стороннего API. В проекте были использованы: HTML, CSS, JavaScript, Material UI, React.
