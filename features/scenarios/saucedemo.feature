Feature: Compra en saucedemo

    @Compra
    Scenario: Compra de dos productos en saucedemo
    Given el usuario ingresa a la login page de saucedemo
    And se autentica con usuario "standard_user" y contraseña "secret_sauce"
    When el usuario agrega 2 productos al carrito
    And visualiza los productos agregados en el carrito
    Then diligencia los datos en el formulario de Compra
    And finaliza la compra y valida la confirmación "Thank you for your order!"