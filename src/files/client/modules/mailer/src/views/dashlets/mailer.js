Espo.define('mailer:views/dashlets/mailer', 'views/dashlets/abstract/base', function (Dep) {

    return Dep.extend({
        template: 'mailer:dashlets/mailer',
        
        events: {
            'click .js-send-test-email': function () {
                this.send(this.$el.find('.js-test-email').val());
            }
        },
        
        send: function(email) {
            $('.js-test-email-success').html('');
            $('.js-test-email-error').html('');
            $.ajax({
                url: 'Mailer/action/sendEmail',
                type: 'POST',
                data: JSON.stringify({email: email}),
                success: function(data) {
                    if (data.success) {
                        $('.js-test-email-success').html('Письмо успешно отправлено');
                    } else {
                        $('.js-test-email-error').html('Возникли ошибки при отправке письма');
                    }
                },
                error: function (xhr, status) {
                    $('.js-test-email-error').html('Ошибка сервера');
                }.bind(this)
            });
        }
    });
});