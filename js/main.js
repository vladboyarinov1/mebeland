'use strict';

class MenuCard {
    constructor(title, src, alt,key, value, price, parentSelector) {
        this.title = title;
        this.src =src;
        this.alt = alt;
        this.key = key;
        this.value = value;
        this.price = price;
        this.parent =  document.querySelector(parentSelector);//DOM элемент
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('project-gallery__item-js');
        element.innerHTML = `
        <div class="project-gallery__cards__item">
            <span class="project-gallery__cards__item__title">${this.title}</span>
            <img class="project-gallery__cards__item__img" src=${this.src} alt=${this.alt}>
            <div class="project-gallery__cards__item__parameters">
                <div class="project-gallery__cards__item__parameters__key">
                    <span class="project-gallery__cards__item__parameters__key__item">${this.key}</span>
                    </span>
                </div>
                <div class="project-gallery__cards__item__parameters__value">
                    <span class="project-gallery__cards__item__parameters__value__item">${this.value}</span>
                </div>
        </div>
        <div class="project-gallery__cards__item__bottom">
            <span class="project-gallery__cards__item__bottom__price">${this.price}<p>руб</p></span>
            <a class="project-gallery__cards__item__bottom__arrow-pink" href="#"></a>
        </div>
        `;
        this.parent.append(element);
    }
}
new MenuCard(
    "Диван FURNITURE-06",
    "img/sofa.png",
    "Диван",
    `Каркас:<br>
    Механизм:<br>
    Наполнение:<br>
    Материал <br> ножек:`,
    `фанера, ДВП,ДСП<br>
    МТД<br>
    ППУ стандартный<br>
    дерево`,
    "2500",
    ".project-gallery .project-gallery__cards"
    
).render();

new MenuCard(
    "Стол APTORE LUX",
    "img/table.png",
    "Стол",
    `Ширина:<br>
    Высота:<br>
    Глубина:<br>
    Материал <br> ножек:`,
    `100 см<br>
    75 см<br>
    100 см<br>
    массив, МДФ,шпон`,
    "1860",
    ".project-gallery .project-gallery__cards"
    
).render();
new MenuCard(
    "Кресло OFFICE CHAIR",
    "img/chair2.png",
    "Кресло",
    `Каркас:<br>
    Механизм:<br>
    Наполнение:<br>
    Материал <br> ножек:`,
    `фане<br>
    без мезанизма<br>
    ППУ стандартный<br>
    массив`,
    "980",
    ".project-gallery .project-gallery__cards"
    
).render();
new MenuCard(
    "Кровать TWINBED",
    "img/bed.png",
    "Кровать",
    `Каркас:<br>
    Механизм:<br>
    Наполнение:<br>
    Материал <br> ножек:`,
    `фанера,ДВП,ДСП<br>
    МТД<br>
    ППУ<br>
    дерево,массив`,
    "3015",
    ".project-gallery .project-gallery__cards"
    
).render();


