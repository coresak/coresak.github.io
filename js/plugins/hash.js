$(document).ready(function () {

    // Получаем адресную строку
    var urlString = window.location.href;

    // Делаем проверку, что у нас в строке есть знак диеза
    if (urlString.indexOf('#') !== -1) {

        // Разбиваем строку разделителем, получаем массив строки
        var arr = urlString.split('#');

        // Получаем значение после хеша (диеза)
        var hash = arr[1];

        // выбираем элементы на странице по селектору, это наши табы идем циклом по каждому
        $('.nav-tabs li').each(function () {

            // находим дочерний элемент ссылку
            link = $(this).find('a');

            // Провереям у нее аттрибут href, если он совпадает
            if (link.attr('href') == '#' + hash) {

                // Получаем индекс табы
                var index = $(this).index();

                // По индексу элемента дергаем апи табов,
                console.log('tab', index, $('.nav-tabs li:eq(' + index + ') a'));

                $('.nav-tabs li:eq(' + index + ') a').tab('show');
            }
        });

    } else {

        // действие если в строке не обнаружен хеш
        $('#graphs').addClass('active show');
        $('[href*="#graphs"]').addClass('active');
    }
});

// табы
$('.filter-tabs').children('li').first().children('a').addClass('select').next().addClass('is-open').show();

$('.filter-tabs').on('click', 'li > a', function (event) {
    if (!$(this).hasClass('select')) {
        event.preventDefault();
        $('.filter-tabs .is-open').removeClass('is-open').hide();
        $(this).next().addClass('is-open').toggle();
        $('.filter-tabs').find('.select').removeClass('select');
        $(this).addClass('select');
    } else {
        event.preventDefault();
    }
});
