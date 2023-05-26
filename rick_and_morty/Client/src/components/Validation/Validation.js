const validation = (userData) => {
    const errors = {};

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(userData.email)){
        errors.email = "El email ingresado no es valido";
    }
    if(!userData.email){
        errors.email = "Debe ingresar un email"
    }
    if(userData.email.length > 35){
        errors.email = "El email no debe superar los 35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La contraseña debe contener al menos un numero"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener un tamaño de 6 a 10 caracteres"
    }
    return errors;
}
export default validation;
