var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '18990008000',
            address: {
                postalcode: '04530001',
                street: 'Rua Doutor Renato Paes de Barros',
                number: '1017',
                details: '4º andar',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}