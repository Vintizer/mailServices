// Привет, я заметил Q&A — http://habrahabr.ru/qa/16856/, у самого меня только ридонли акк, ибо я никакими сведениями особо не располагаю, которые на статью тянут)) Email ТС'а я не нашел, может будет полезно решение через гугл: есть одна возможность отправлять им запросы на translate.google.com и получать перевод нормальный.
//
// 	http://translate.google.ru/translate_a/t?client=x&text={textToTranslate}&hl=en&sl=en&tl=ru
// 	{textToTranslate}, собственно и есть то, что нам надо перевести (длинные очень вещи не пробовал, но с предложениями справлялось)
// Ответ приходит в виде строки json, который нужно распарсить и получить translatedText = myJSON.sentences[0].trans;
//
// Надеюсь, пригодится))