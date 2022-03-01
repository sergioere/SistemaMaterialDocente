$(document).ready(function () {
   /*
    function listarMateriales() {
            $.ajax({
                url:"/material_docente/",
                type:"get",
                dataType:"json",
                success: function (response) {
                    console.log(response);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }

             listarMateriales() ;*/
/*
 $(".navbar-brand").click(function (e) {
        e.preventDefault();
        alert("Holaaaaa");
    });*/
    /**propiedad active de bootstrap */
   /*
    let URLactual = window.location.pathname;
    URLactual = URLactual.split('/').pop();
    URLactual = URLactual.split('.');
    $('.' + URLactual[0]).addClass('active');
*/

    //LOGIN
    //esta majasansia se puede hacer mejor
   // $("input").val("");
    window.setTimeout(function () {
        $(".alert").fadeTo(1500, 0).slideDown(1000, function () {
            $(this).remove();
        });
        }, 3000);



    //Expresion regular para validar una password
    $.validator.addMethod("pw", function (value) {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/.test(value);
    });


    $("#form-login").validate({
        rules: {

            user: {
                required: true,
                minlength: 4
            },
            password: {
                required: true,
                /*minlength: 6,*/
                pw: true
            },

        },
        messages: {
            user: {
                required: "Por favor, entre usuario",
                minlength: "Tu usuario debe tener al menos 4 caracteres"
            },
            password: {
                required: "Por favor, entre contraseña",
                /*minlength: "Tu contraseña debe tener al menos 6 caracteres",*/
                pw: "Debe tener al menos 6 caracteres, 1 número, 1 letra mayúscula y 1 minúscula"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-tooltip position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });



    /** Gestionar Material Docente **/
    //INSERT
    $("#form-material-docente-insert").validate({
        rules: {

            nombre: {
                required: true
                /*validar que sea letras */
            },
            cantidad: {
                required: true,
                number: true,
                /*digits:true,*/
                min: 1
            },
            categoria: {
                required: true

            }
        },
        messages: {
            nombre: {
                required: "Por favor, entre nombre del material"
            },
            cantidad: {
                required: "Por favor, entre la cantidad",
                number: "Por favor, escribe un número válido",
                /*digits: "Por favor, escribe sólo dígitos",*/
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")

            },
            categoria: {
                required: "Por favor, seleccione una categoría"

            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-feedback position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    //EDIT
    // noinspection DuplicatedCode
    $("#form-material-docente-edit").validate({
        rules: {


            cantidad: {
                required: true,
                number: true,
                /*digits:true,*/
                min: 1
            },
            categoria: {
                required: true

            }
        },
        messages: {
            
            cantidad: {
                required: "Por favor, entre la cantidad",
                number: "Por favor, escribe un número válido",
                /*digits: "Por favor, escribe sólo dígitos",*/
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")

            },
            categoria: {
                required: "Por favor, seleccione una categoría"

            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-feedback position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });




    /*** Gestionar Usuarios ***/
    //INSERT    
    $("#form-usuario-insert").validate({
        rules: {

            usuario: {
                required: true,
                minlength: 4
            },
            nombre: {
                required: true

            },
            apellidos: {
                required: true

            },
            rol: {
                required: true

            },
            password: {
                required: true,
                /*minlength: 6,*/
                pw: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }

        },
        messages: {
            usuario: {
                required: "Por favor, entre usuario",
                minlength: "Tu usuario debe tener al menos 4 caracteres"
            },
            nombre: {
                required: "Por favor, entre nombre(s)"

            },
            apellidos: {
                required: "Por favor, entre apellidos"

            },
            rol: {
                required: "Por favor, seleccione un rol"

            },
            password: {
                required: "Por favor, entre contraseña",
                /*minlength: "Tu contraseña debe tener al menos 6 caracteres",*/
                pw: "Debe tener al menos 6 caracteres, 1 número, 1 letra mayúscula y 1 minúscula"
            },
            confirmPassword: {
                required: "Confirme su contraseña",
                equalTo: "Por favor, escribe el mismo valor de nuevo"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-feedback position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    //EDIT
    $("#form-usuario-edit").validate({
        rules: {

            usuario: {
                required: true,
                minlength: 4
            },
            password: {
                required: true,
                /*minlength: 6,*/
                pw: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }

        },
        messages: {
            usuario: {
                required: "Por favor, entre usuario",
                minlength: "Tu usuario debe tener al menos 4 caracteres"
            },
            password: {
                required: "Por favor, entre contraseña",
                /*minlength: "Tu contraseña debe tener al menos 6 caracteres",*/
                pw: "Debe tener al menos 6 caracteres, 1 número, 1 letra mayúscula y 1 minúscula"
            },
            confirmPassword: {
                required: "Confirme su contraseña",
                equalTo: "Por favor, escribe el mismo valor de nuevo"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-feedback position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });


    /*** Gestionar modelo de solicitud de recursos ***/
    const maxField = 10; //Input fields increment limitation
    const addButton = $('.add_button'); //Add button selector
    const wrapper = $('.field_wrapper'); //Input field wrapper
    let fieldHTML = `<div class="row mt-1">
    <div class="col-5">

        <input id="material"  type="text" name="material"
            value="" class="form-control" />
    </div>
    <div class="col-5">

        <input id="cantidad" type="number"
            name="cantidad" value="" class="form-control" />
    </div>
    
    <a href="javascript:void(0);" class="remove_button col btn btn-outline-danger"
    title="Eliminar campos"><i class="bi bi-trash-fill"></i>
    </a>
   
    </div>`; //New input field html 
    let x = 1; //Initial field counter is 1
    $(addButton).click(function () { //Once add button is clicked
        if (x < maxField) { //Check maximum number of input fields
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); // Add field html
        }
    });
    $(wrapper).on('click', '.remove_button', function (e) { //Once remove button is clicked
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });

    //INSERT
    $("#form-modelo-insert").validate({
        rules: {

            codigo: {
                required: true,
                number: true,
                min: 1
            },
            fecha:{
                required: true,
               /* date:true*/
            },
            material: {
                required: true,
                
            },
            cantidad: {
                required: true,
                number: true,
                min: 1
            },
            numero_solicitud : {
                required: true,
                number: true,
                min: 1

            },
            unidad_medida :{
                required: true

            }
        },
        messages: {
            codigo: {
                required: "Por favor, entre el número del modelo",
                number: "Por favor, escribe un número válido",
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")
            },
            fecha:{
                required: "Por favor, entre la fecha",
               /* date:"Por favor, escribe una fecha válida"*/
            },
            material: {
                required: "Por favor, entre nombre del material",
                
            },
            cantidad: {
                required: "Por favor, entre la cantidad",
                number: "Por favor, escribe un número válido",
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")

            },
            numero_solicitud: {
                required: "Por favor, entre el número de solicitud del modelo",
                number: "Por favor, escribe un número válido",
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")
            },
            unidad_medida: {
                required: "Por favor, entre una unidad de medida"

            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-feedback position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });

    //EDIT
    $("#form-modelo-edit").validate({
        rules: {

            No: {
                required: true,
                number: true,
                min: 1
            },
            fecha:{
                required: true,
                date:true
            },
            material: {
                required: true,
                
            },
            cantidad: {
                required: true,
                number: true,
                min: 1
            },
            noSoli: {
                required: true,
                number: true,
                min: 1

            },
            medida: {
                required: true

            }
        },
        messages: {
            No: {
                required: "Por favor, entre el número del modelo",
                number: "Por favor, escribe un número válido",
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")
            },
            fecha:{
                required: "Por favor, entre la fecha",
                date:"Por favor, escribe una fecha válida"
            },
            material: {
                required: "Por favor, entre nombre del material",
                
            },
            cantidad: {
                required: "Por favor, entre la cantidad",
                number: "Por favor, escribe un número válido",
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")

            },
            noSoli: {
                required: "Por favor, entre el número de solicitud del modelo",
                number: "Por favor, escribe un número válido",
                min: $.validator.format("Por favor, escribe un valor mayor o igual a {0}")
            },
            medida: {
                required: "Por favor, entre una unidad de medida"

            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `invalid-feedback` class to the error element
            /* error.addClass("invalid-feedback "); */
            error.addClass("invalid-feedback position-static");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    });


    /*** Gestionar ENTREGA DE MATERIAL DOCENTE***/
    
    
});