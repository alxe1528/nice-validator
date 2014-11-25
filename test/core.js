before(function(){
    $('form').find(':input[data-rule]')
    .attr('data-cacherule', function(){
        return $(this).attr('data-rule');
    });
});

afterEach(function(){
    $('form').each(function(){
        var $form = $(this),
            data = $form.data('validator');
        if (data) {
            data.destroy();
            $form.find(':input[data-cacherule]').attr('data-rule', function(){
                return $(this).attr('data-cacherule');
            });
        }
    }); 
});

describe('Core', function(){

    describe('Initialization', function(){
        var $dom_way = $('#dom_way'),
            $js_way = $('#js_way'),
            data;

        it('Automatic initialization when the form input focusin', function(){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.find('input[name="email"]').trigger('focusin');
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('Automatic initialization when the form been submiting', function(){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.trigger('submit');
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('One line code initialization', function(){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.validator();
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('Initialization by js way', function(){
            data = $js_way.data('validator');
            assert.ok(!data);
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            data = $js_way.data('validator');
            assert.ok(data && data.fields.email);
        });
    });

    describe('Options', function(){

    });

});