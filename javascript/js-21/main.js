$(function(){
    $('#fontForm input').each(function(ind, elem){
        let check = true
        $(elem).click(function(){
            if($(elem).val() == 'bold'){
                if(check){
                    $('.lorem').css('font-weight', `${$(this).val()}`)
                    check = false
                } else{
                    $('.lorem').css('font-weight', '')
                    check = true
                }   
            }
            if($(elem).val() == 'italic'){
                if(check){
                    $('.lorem').css('font-style', `${$(this).val()}`)
                    check = false
                } else{
                    $('.lorem').css('font-style', '')
                    check = true
                } 
            }
            if(ind > 1){
                if(check){
                    $('.lorem').css('text-decoration', `${$(this).val()}`)
                    check = false
                } else{
                    $('.lorem').css('text-decoration', '')
                    check = true
                } 
            }
        })
    })

    $('#alingForm input').each(function(ind,elem){
        $(elem).click(function(){
            let data = $(this).val()
            $('.lorem').css('text-align', `${data}`)
        })
    })
    $('#fontFamily a, #fontSize a').each(function(ind,elem){
        $(elem).click(function(){
            let data = $(this).text()
            $('.lorem').css({
                fontFamily: data,
                fontSize: data
            })
        })
    })

    let randColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    let palitra = []
    for(let i = 0; i<=$('.color').length; i++){
        palitra.push(randColor)
        randColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        $('.color').eq(i).css('background-color', `${palitra[i]}`)
        $('.colorText').eq(i).css('background-color', `${palitra[i]}`)
    }
    $('#textColor').click(function(){
        $('.colorPanel, .colorBox').show()
        $('.colorBlock, .imageBlock, .fileBlock, .signIn, .signOut').hide()
    })
    $('.close').click(function(){
        $('.colorPanel, .colorBox, .tabBox, .tabBox, .olBox, .ulBox').hide()
    })
    $('.colorText').each(function(ind, elem){
        $(elem).click(function(){
            let data = $(this).css('background-color')
            $('.lorem').css('color', `${data}`)
        })
    })

    let img = [1,2,3,4,5,6,7,8,9]
    for(let i = 0; i<=$('.img').length; i++){
        $('.img').eq(i).css('background-image', `url(images/${img[i]}.jpg)`)
    }
    $('#back').click(function(){
        $('.colorPanel, .colorBlock, .navBar').show()
        $('.colorBox, .signIn, .signOut').hide()
        $('.color').each(function(ind, elem){
            $(elem).click(function(){
                $('body,html').css('background-image', '')
                let data = $(this).css('background-color')
                $('body,html').css('background-color', `${data}`)
            })
        })
    })
    $('#home-tab').click(function(){
        $('.colorBlock').show()
        $('.imageBlock, .fileBlock').hide()
    })
    $('#profile-tab').click(function(){
        $('.imageBlock').show()
        $('.fileBlock, .colorBlock').hide()
        $('.img').each(function(ind, elem){
            $(elem).click(function(){
                let data = $(this).css('background-image')
                $('body, html').css('background-image', `${data}`)
            })
        })
    })
    $('#contact-tab').click(function(){
        $('.fileBlock').show()
        $('.imageBlock, .colorBlock').hide()
        $('#customFile').change(function () {
            let file = this.files[0];
            let reader = new FileReader();
            reader.onloadend = function () {
               $('body,html').css('background-image', 'url("' + reader.result + '")');
            }
            if (file) {
                reader.readAsDataURL(file);
            } 
        });
    })

    $('#lock').click(function(){
        $('.colorPanel').hide()
        if($('.is-valid').length != 2){
            $('.signIn').show()
            $('#login, #password').removeClass('is-valid')
        } else $('.signOut').show()
    })

    $('#signInButton').click(function(){
        if($('#login').val() == 'admin'){
            $('#login').addClass('is-valid')
            $('#login').removeClass('is-invalid')
        } else{
            $('#login').addClass('is-invalid')
            $('#login').removeClass('is-valid')
        } 
        if($('#password').val() == '12345'){
            $('#password').addClass('is-valid')
            $('#password').removeClass('is-invalid')
        } else{
            $('#password').addClass('is-invalid')
            $('#password').removeClass('is-valid')
        }
        if($('#singInForm .is-valid').length == 2){
            $('.signIn').hide()
            $('#lockSvg').hide()
            $('#unlockSvg').show()
            $('#singInForm').trigger("reset")
            $('#htmlInp').removeAttr('disabled')
            $('#htmlLab').removeClass('disabled')
        } 
    })
    $('#cancel, #singOut').click(function(){
        $('.signOut').hide()
    })
    $('#singOut').click(function(){
        $('.colorPanel').hide()
        $('#lockSvg').show()
        $('#unlockSvg').hide()
        $('#login, #password').removeClass('is-valid')
        $('#htmlInp').attr('disabled', 'true')
        $('#htmlLab').addClass('disabled')
    })
    $('#htmlInp').click(function(){
        $('.mainTools').hide()
        $('main').hide()
        $('.editTools').show()
        $('.editCode').show()
        $('#editCodeBlock').val(`${$('.lorem').html()}`)
        $('body,html').css({
            backgroundColor: '',
            backgroundImage: ''
        })
    })

    $('#save').click(function(){
        $('.mainTools').show()
        $('main').show()
        $('.editTools').hide()
        $('.editCode').hide()
        $('.lorem').html(`${$('#editCodeBlock').val()}`)
    })

    $('#table').click(function(){
        $('.tabBox').show()
    })

    $('#resetTab').click(function(){
        $('#tableForm').trigger('reset')
    })

    $('#createTab').click(function(){
        $('#tableForm input, #tableForm select').each(function(ind,elem){
            if($(elem).val() != '' && $(elem).val() != null){
                $(elem).addClass('is-valid')
                $(elem).removeClass('is-invalid')
            } else{
                $(elem).addClass('is-invalid')
                $(elem).removeClass('is-valid')
            }
            if($('#tableForm .is-valid').length == 7){
                $('.tabBox').hide()
                let divTab = $('.lorem').append('<div class="divTab"></div>')
                $('.divTab:last').append('<table><thead></thead><tbody></tbody></table>')
                for(let i = 0; i<$('#countTr').val(); i++){
                    $('tbody:last').append('<tr></tr>')
                }
                let countTd = 0
                for(let j = 0; j < $('#countTd').val(); j++){
                    $('tbody:last tr').append(`<td style="border: ${$('#widthBorder').val()}px ${$('#styleBorder').val()} ${$('#colorBorder').val()}; width:${$('#widthTd').val()}px; height:${$('#heightTd').val()}px;">TD</td>`)
                }
                $('#editCodeBlock').val(`${$(divTab).html()}`)
                $('#tableForm input, #tableForm select').removeClass('is-valid')
            }
        })
        $('#tableForm').trigger("reset")
    })

    $('#olList').click(function(){
        $('.olBox').show()
    })
    $('#resetOl').click(function(){
        $('#olForm').trigger('reset')
    })
    $('#createOl').click(function(){
        $('#olForm input, #olForm select').each(function(ind,elem){
            if($(elem).val() != '' && $(elem).val() != null){
                $(elem).addClass('is-valid')
                $(elem).removeClass('is-invalid')
            } else{
                $(elem).addClass('is-invalid')
                $(elem).removeClass('is-valid')
            }
            if($('#olForm .is-valid').length == 2){
                $('.olBox').hide()
                let divOl = $('.lorem').append('<div class="divOl"></div>')
                $('.divOl:last').append('<ol></ol>')
                for(let i = 0; i<$('#countLiOl').val(); i++){
                    $('ol:last').append(`<li style="list-style: ${$('#markLiOl').val()}">Item${i+1}</li>`)
                }
                $('#editCodeBlock').val(`${$(divOl).html()}`)
                $('#olForm input, #olForm select').removeClass('is-valid')
            }
        })
        $('#olForm').trigger("reset")
    })
    $('#ulList').click(function(){
        $('.ulBox').show()
    })
    $('#resetUl').click(function(){
        $('#ulForm').trigger('reset')
    })
    $('#createUl').click(function(){
        $('#ulForm input, #ulForm select').each(function(ind,elem){
            if($(elem).val() != '' && $(elem).val() != null){
                $(elem).addClass('is-valid')
                $(elem).removeClass('is-invalid')
            } else{
                $(elem).addClass('is-invalid')
                $(elem).removeClass('is-valid')
            }
            if($('#ulForm .is-valid').length == 2){
                $('.ulBox').hide()
                let divTagUl = $('.lorem').append('<div class="divUl"></div>')
                $('.divUl:last').append('<ul></ul>')
                for(let i = 0; i<$('#countLiUl').val(); i++){
                    $('.divUl:last ul').append(`<li style="list-style: ${$('#markLiUl').val()}">Item${i+1}</li>`)
                }
                $('#editCodeBlock').val(`${$(divTagUl).html()}`)
                $('#ulForm input, #ulForm select').removeClass('is-valid')
            }
        })
        $('#ulForm').trigger("reset")
    })

})