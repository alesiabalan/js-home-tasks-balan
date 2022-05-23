"use strict";

let ajaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
let wrapper = document.getElementById('wrapper');
let articlesList = '';
let articles;
let articleID;
let password = null;
window.onhashchange = renderNewState;
let pHash = {};

/*let pHash = [
    { title: "Арктур", id: "arctur" },
    { title: "Бетельгейзе", id: "betelgeize" },
    { title: "Капелла", id: "capella" },
    { title: "Поллукс", id: "pollucs" },
    { title: "Процион", id: "procion" },
    { title: "Сириус", id: "sirius" },
    { title: "Солнце", id: "sun" }
];


function insertAjaxString() {
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        data: {
            f: 'INSERT',
            n: 'BALAN_ENCYCLOPEDIA',
            v: JSON.stringify(pHash),
        },
        cache: false,
        error: errorHandler,
        success: function (ResultH) {
            if (ResultH.error != undefined) {
                alert(ResultH.error);
            } else {
                alert('success');
            }
        }
    });
}
function lockgetAjaxString() {
    password = Math.random();
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        data: {
            f: 'LOCKGET',
            n: 'BALAN_ENCYCLOPEDIA',
            p: password,
        },
        cache: false,
        success: () => {
            updateAjaxString();
        },
        error: errorHandler
    });
}
function updateAjaxString() {
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        data: {
            f: 'UPDATE',
            n: 'BALAN_ENCYCLOPEDIA',
            v: JSON.stringify(pHash),
            p: password,
        },
        cache: false,
        error: errorHandler,
        success: function (ResultH) {
            if (ResultH.error != undefined) {
                alert(ResultH.error);
            } else {
                console.log(ResultH);
            }
        }
    });
}

insertAjaxString();
lockgetAjaxString();
*/


function getArticles() {
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: {
            f: 'READ',
            n: 'BALAN_ENCYCLOPEDIA'
        },
        success: readReady,
        error: errorHandler
    });

    function readReady(data) {
        if (data.error !== undefined) {
            alert(data.error);
        } else if (data.result !== "") {
            articles = JSON.parse(data.result).sort(sortTitle);
            console.log(articles);
            articlesList += `<ul id="menu">`;
            for (let i = 0; i < articles.length; i++) {
                articlesList += `<li><span id="${articles[i].id}" onclick="switchToDescription()">${articles[i].title}</span></li>`;

            }
            console.log(articlesList);
            articlesList += `</ul>`;
            function sortTitle(a, b) {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            }
        }
    }

};
getArticles();



console.log(articlesList);

function renderNewState() {
    const hash = window.location.hash;
    let state = decodeURIComponent(hash.substr(1));
    if (state !== "") {
        state = JSON.parse(state);
    } else {
        state = { page: 'main' };
    }
    let page = "";
    switch (state.page) {
        case 'main':
            page += `<h1 class="title" id="title"> Звёзды </h1>
                    <div><p class="contents" id="contents" onclick="switchToDescription()"> Список звёзд </p><div>`;
            break;
        case 'content':
            page += `<h1 class="content" id="content"> Содержание </h1>`;
            page += articlesList;
            break;
        case 'article':
            page += `<ul id="menu" class="menu articles">`;
            for (let article of articles) {
                articlesList += `<li><span id="${article.id}" onclick="switchToDescription()">${article.title}</span></li>`;
            }
            page += `</ul>`;
            $.ajax(`articlesList/${articleID}.html`,
                {
                    type: 'GET',
                    dataType: 'html',
                    success: dataLoaded,
                    error: errorHandler
                });
            function dataLoaded(data) {
                let div = document.createElement('div');
                wrapper.appendChild('div');
                div.id = 'articleDiscription';
                document.getElementById('articleDescription').innerHTML = data;
            }
            break;
    }
    wrapper.innerHTML = page;
}

function switchToState(state) {
    location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToContents() {
    switchToState({ page: 'content' });
}

function switchToDescription() {
    articleID = event.target.id;
    switchToState({ page: `${articleID}` });
}

renderNewState();

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}