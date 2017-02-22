// Хелпер шаблона
window.template = function (id) {
    return _.template( $('#' + id).html() );
};

// Модель человека
var Person = Backbone.Model.extend();

// Список людей
var PeopleCollection = Backbone.Collection.extend({
    model: Person,
    filterM: function() {
        var len = _.groupBy(this.models, function (obj) {
            if (obj.name.title === 'mr') {
                return 'mr';
            } else  if (obj.name.title === 'ms') {
                return 'ms';
            } else {
                return 'mrs';
            }
        });
        $('.st-mr').text(len.mr.length);
        $('.st-ms').text(len.ms.length);
        $('.st-mrs').text(len.mrs.length);
    },
    set: function (res) {
        this.models = res.results;
    },
    url: 'https://api.randomuser.me/?results=10'
});

var person = new Person();

// Вид всех людей
var PeopleView = Backbone.View.extend({
    tagName: 'ul',
    className: 'suki-list',
    initialize: function () {
    },
    render: function () {
        this.collection.each(function (person) {
            var personView = new PersonView({
                model: person
            });
            this.$el.append(personView.el);

        }, this);
    }
});

// Вид одного человека
var PersonView = Backbone.View.extend({
    tagName: 'li',
    className: 'suki-list__item',
    template: template('person'),
    initialize: function () {
        this.render();
        $('.tab-one').append(peopleView.el);
    },
    render: function () {
        this.$el.html( this.template(this.model) );
    }
});

var peopleColl = new PeopleCollection();
var peopleView = new PeopleView({
    collection: peopleColl
});

peopleColl.fetch({
    success: function () {
        peopleView.render();
    }
});

var btnAll = $('.js-all');
var btnList = $('.js-list');

var tabAll = $('.js-tab-all');
var tabList = $('.js-tab-list');

tabList.slideUp(200);
btnAll.on('click', function () {
    tabAll.slideDown(200);
    tabList.slideUp(200);
    peopleColl.fetch({
    });
});

btnList.on('click', function () {
    tabList.slideDown(200);
    tabAll.slideUp(200);
    peopleColl.filterM();
});


