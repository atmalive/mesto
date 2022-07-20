function loadImage(imageUrl) {
    // создаём элемент изображения
    const img = document.createElement('img');
    img.src = imageUrl; // указываем путь к картинке

    return img;
}

// Теперь можно вставить картинку в разметку
const img = loadImage('https://yastatic.net/q/logoaas/v1/Практикум.svg');

document.body.append(img);



// колбэк, который нужно выполнить после того
// как изображение загрузится
function imageLoadCallback(evt) {
    // после загрузки добавим элемент изображения в DOM
    document.body.append(evt.target);
}

// Функция для создания изображения
function loadImage(imageUrl, loadCallback) {
    const img = document.createElement('img');
    img.src = imageUrl;

    // Функция, которая записана в onload
    // будет вызвана после загрузки изображения
    img.onload = loadCallback;
}

// Теперь картинка появится в разметке только после загрузки
loadImage(
    'https://yastatic.net/q/logoaas/v1/Практикум.svg',
    imageLoadCallback
);




function handleLoadError() {
    console.log('Всё идёт не по плану')
}

function handleImageLoad(evt) {
    // после загрузки добавим элемент изображения в DOM
    document.body.append(evt.target);
}

// дополните код функции
function loadImage(imageUrl, loadCallback, errorCallback) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.onload = loadCallback;
    img.onerror = errorCallback;
}

loadImage(
    'https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg',
    handleImageLoad,
    handleLoadError
);





const newPromise = new Promise(function (resolve, reject) {
    resolve('Раз'); // Сразу получим обработанный промис
});

function firstAction(value) {
    /* Значением value станет то, что мы передали
    функции resolve при создании промиса.
    То есть строка "Раз". */

    return `${value}, два`;
}

function secondAction(value) {
    /* Тут значение value — это то, что вернёт
    предыдущий метод then, то есть строка "Раз, два" */

    return `${value}, три`;
}

function thirdAction(value) {
    console.log(value);
}

newPromise.then(firstAction).then(secondAction).then(thirdAction);

/* В консоли окажется: "Раз, два, три" */





fetch('https://example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'ivan'
    })
});


fetch('https://example.com')
    .then((res) => {
        console.log(res); // если всё хорошо, получили ответ
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
    });





fetch('https://praktikum.yandex.ru')
    .then((res) => {
        return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
    .then((data) => {
        console.log(data.user.name); // если мы попали в этот then, data — это объект
    })
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
    });





const container = document.querySelector('.container');

// создаёт разметку для поста
function createPostMarkup(post) {
    return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
    container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((posts) => {
            posts.forEach((post) => {
                addPostToDOM(container, createPostMarkup(post))
            });
        });
}

getPosts();








const dom = document.querySelector('.container');
function createPostMarkup(post) {
    return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
    container.insertAdjacentHTML('afterbegin', markup);
}



function createPost(newPost) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // нужно указать метод запроса
        // тело запроса
        body: JSON.stringify({
            title: newPost.title,
            body: newPost.body
        }),
        // и заголовки
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }

    })
        .then(res => res.json())
        .then((post) => {
            addPostToDOM(document.querySelector('.container'), createPostMarkup(post)
            );
        });
}

// обработчик сабмита формы
document.forms.post.addEventListener('submit', function (event) {
    event.preventDefault();

    const { title, text } = event.currentTarget.elements;

    createPost({
        title: title.value,
        body: text.value
    });
});










const quoteElement = document.querySelector('div.quote');

fetch('https://api.kanye.rest')
    .then((res) => {
        if (res.ok) {
            return res.json();
        }

        /* отклоняем промис, чтобы перейти
        в блок catch, если сервер вернул ошибку */
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((data) => {
        quoteElement.textContent = data.quote;
    })
    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });











const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');

function search(entity, entityId) {
    return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`, {


    })
}

function renderLoading(isLoading) {
    if (isLoading) {
        spinner.classList.add('spinner_visible');
        content.classList.add('content_hidden');
    } else {
        spinner.classList.remove('spinner_visible');
        content.classList.remove('content_hidden');
    }
}

function renderResult(text) {
    result.textContent = text;
    error.textContent = '';
}

function renderError(err) {
    error.textContent = err;
    result.textContent = '';
}

form.addEventListener('submit', function submit(e) {
    e.preventDefault();
    renderLoading(true)
    search(form.elements.entity.value, form.elements.entityId.value)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(res.status)
            }
        })
        .then((res) => {
            renderResult(res.name)
        })
        .catch((err) => {
            renderError(`Ошибка: ${err}`)
        })
        .finally(() => {
            renderLoading(false)
        });
});