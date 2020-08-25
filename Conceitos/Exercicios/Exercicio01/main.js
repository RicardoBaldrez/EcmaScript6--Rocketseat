class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        
        this.admin = true;
    }
}

var user = new Usuario('teste@teste.com.br', '123');
var admin = new Admin('teste@teste.com.br', '123');

console.log(user.isAdmin());
console.log(admin.isAdmin());