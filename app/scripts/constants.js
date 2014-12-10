angular.module('sampleNgFrontendApp')
    .constant('BACKEND_URL','http://192.168.33.10/sample/res/') //FIXME: futuramente utilizar url relativa
    .constant('LOGIN_URL','http://192.168.33.10/cas/login?service=http://192.168.33.10:8080/sample/j_spring_cas_security_check') //FIXME: futuramente utilizar url relativa
    .constant('LOGOUT_URL', 'http://192.168.33.10/cas/logout'); //FIXME: futuramente utilizar url relativa
