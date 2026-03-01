// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            // Opcional: limpiar el formulario después de enviar
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
    let isValid = true;
    
    // ==========================================
    // VALIDACIÓN DE EJEMPLO: Campo Nombre
    // ==========================================
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '') {
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2) {
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        nombre.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Apellido Paterno
    // ==========================================
    const ApellidoPaterno = document.getElementById('ApellidoPaterno');
    const valorApellidoPaterno = ApellidoPaterno.value.trim();
    
    if (valorApellidoPaterno === '') {
        ApellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellidoPaterno.length < 2) {
        ApellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else {
        ApellidoPaterno.classList.remove('no-valid');
    }

    // ==========================================
    // TODO: Validar Apellido Materno
    // ==========================================
    const ApellidoMaterno = document.getElementById('ApellidoMaterno');
    const valorApellidoMaterno = ApellidoMaterno.value.trim();
    
    if (valorApellidoMaterno === '') {
        ApellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellidoMaterno.length < 2) {
        ApellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else {
        ApellidoMaterno.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Cédula
    // ==========================================
    const cedula = document.getElementById('cedula');
    const valorcedula = cedula.value.trim();
    const regex = /^\d{10}$/;

    if (valorcedula === '') {
        isValid = false;
        cedula.classList.add('no-valid');
    } else if (!regex.test(valorcedula)){
        isValid = false;
        cedula.classList.add('no-valid');
    } else {
        cedula.classList.remove('no-valid');
    }

    // ==========================================
    // TODO: Validar Motivo
    // ==========================================
    const Motivo = document.getElementById('Motivo');
    const valorMotivo = Motivo.value.trim();
    
    if (valorMotivo === '') {
        Motivo.classList.add('no-valid');
        isValid = false;
    } else if (valorMotivo.length < 10) {
        Motivo.classList.add('no-valid');
        isValid = false;
    } else {
        Motivo.classList.remove('no-valid');
    }

    // ==========================================
    // TODO: Validar Tipo de Cuenta
    // ==========================================
    const tipoCuenta = document.getElementById('tipoCuenta');
    const valorTipoCuenta = tipoCuenta.value;

    if (valorTipoCuenta === '') {
        tipoCuenta.classList.add('no-valid');
        isValid = false;
    } else {
        tipoCuenta.classList.remove('no-valid');
    }

    // ==========================================
    // TODO: Validar Calle
    // ==========================================
    const calle = document.getElementById('calle');
    const valorCalle = calle.value.trim();

    if (valorCalle === '') {
        calle.classList.add('no-valid');
        isValid = false;
    } else if (valorCalle.length < 3) {
        calle.classList.add('no-valid');
        isValid = false;
    } else {
        calle.classList.remove('no-valid');
    }

    // ==========================================
    // TODO: Validar Número
    // ==========================================
    const numero = document.getElementById('numero');
    const valorNumero = numero.value.trim();

    if (valorNumero === '') {
        numero.classList.add('no-valid');
        isValid = false;
    } else {
        numero.classList.remove('no-valid');
    }

    // ==========================================
    // TODO: Validar Intersección
    // ==========================================
    const interseccion = document.getElementById('interseccion');
    const valorInterseccion = interseccion.value.trim();

    if (valorInterseccion === '') {
        interseccion.classList.add('no-valid');
        isValid = false;
    } else if (valorInterseccion.length < 3) {
        interseccion.classList.add('no-valid');
        isValid = false;
    } else {
        interseccion.classList.remove('no-valid');
    }

    // Retornar el resultado final de la validación
    return isValid;
}


// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================

function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}

// Ejemplo de uso de la función auxiliar:
// if (!validarCampoTexto(nombre, 2)) {
//     isValid = false;
// }