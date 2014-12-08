angular.module('sampleNgFrontendApp')
    .constant('BACKEND_URL','http://localhost:8080/sample/res/') //FIXME: futuramente utilizar url relativa
    .constant('LOGIN_URL','http://localhost:8080/cas/login?service=http://localhost:8080/sample/j_spring_cas_security_check') //FIXME: futuramente utilizar url relativa
    .constant('LOGOUT_URL', 'http://localhost:8080/cas/logout'); //FIXME: futuramente utilizar url relativa
