Feature: Test realizados para registro e inicio de sesion en blazedemo con API

@API @signupSuccess
Scenario: Se realiza proceso de registro de usuario nuevo
    Given El usuario envía una solicitud de registro con datos válidos
    When La API responde con un código de estado 200
    Then Se valida el mensaje de confirmación "OK"
    And Se valida ausencia de data en la respuesta

@API @signupFail
Scenario: Se realiza proceso de registro de usuario existente
    Given El usuario envía una solicitud de registro con datos existentes
    When La API responde con un código de estado 200
    Then Se valida el mensaje de error "This user already exist."

@API @loginSuccess
Scenario: Se realiza proceso de login con usuario correcto
    Given El usuario envía una solicitud de login con credenciales válidas
    When La API responde con un código de estado 200
    Then Se valida generación de token de autenticación

@API @loginFail
Scenario: Se realiza proceso de login con usuario incorrecto
    Given El usuario envía una solicitud de login con credenciales incorrectas
    When La API responde con un código de estado 200
    Then Se valida el mensaje de error "User does not exist."

