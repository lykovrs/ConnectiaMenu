This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)


## TODO
 1. Доработать клик по чекбоксу
 2. Доработать выбор всех элементов
 3. Оптимизировать

## Задача
Необходимо создать компонент, реализующий функционал в соответствии с макетом, представленным ниже:


Описание необходимого функционала:
Компонент представляет из себя выпадающее (вправо) и сворачивающееся меню.
Меню должно содержать список элементов, с возможностью выбрать один или несколько из них.
Элементы должны загружаться интерактивно, посредством REST запроса к backend. Протокол взаимодействия с backend будет описан ниже.
В верхней части компонента расположена строка поиска, при вводе в которую, компонент должен делать новый запрос к backend с указанием фильтруемого значения и получать новый список с учетом фильтра.
Отдельный статичный пункт меню “Все” при выделении, должен осуществлять выбор всех элементов динамического меню, либо снимать выделение, соответственно.

Особое пожелание:
Осуществить возможность отображения максимального количества элементов меню, с учетом того что пользовательская рабочая машине не отличается высокой производительностью, а работа с компонентом должна быть комфортной без видимых притормаживаний. Хорошим результатом будет отображение 10000 элементов, еще лучшим 100000 и идеальным, максимально возможные 1000000.

REST протокол общения с backend:
Запрос данных на http://homework.connectia.com/api/product/list
доступные параметры:
filter = String (для поиска по вхождению подстроки в строке)
offset = Integer (смещения постраничной выдачи)
limit = Integer (ограничение постраничной выдачи)
в ответ приходит JSON, с максимальным количеством элементов в списке равным 1000000 (один миллион)

Формат ответа JSON:
[
  {
    "id":Int,
    "name":"String"
  },
  ..
]

id - 		идентификатор элемента
name -	наименование элемента (для отображения в списке), так же по нему осуществляется фильтрация. Перед фильтрацией, подстрока и строка переводятся в нижний регистр.

Пример запроса:
http://homework.connectia.com/api/product/list?offset=10&limit=10
вернет десять элементов с индексом 10-19

[
  {"id":10,"name":"Product_10"},
  {"id":11,"name":"Product_11"},
  {"id":12,"name":"Product_12"},
  {"id":13,"name":"Product_13"},
  {"id":14,"name":"Product_14"},
  {"id":15,"name":"Product_15"},
  {"id":16,"name":"Product_16"},
  {"id":17,"name":"Product_17"},
  {"id":18,"name":"Product_18"},
  {"id":19,"name":"Product_19"}
]
