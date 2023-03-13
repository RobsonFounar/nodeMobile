Feature('login');
//quando TAP precisa só passar o elemento
// quando fillfield passa o elemento e depois o dado que precisa passar
//quando Waitfor precisa só passar o elemento

// Quando for ID basta colocar a # antes do elemento
// Quando for accessibility ID ~ antes do elemento
// Quando NAME pode colocar o emelento sem nenhum caracter antes


Scenario('test something', ({ I }) => {

    // tap sou cadastrado button
    I.wait('10')
    I.tap('#welcome_login')

    // fill cpf field
    I.wait('5')
    I.fillField('#login_cpf', '31788925831')

    // fill password field
    I.seeElement('#login_password','5')
    I.fillField('#login_password', "1994")

    //tap enter button
    I.tap('Entrar')

    //check login OK
    I.seeElement('Megamania Cap (Homol)', '.content')

});
