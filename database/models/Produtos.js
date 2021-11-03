//module.exports = (sequelize,Datatypes) = {
    const Produto = sequelize.define('Produtos', {
    
    })
//};

//Produtos.associate = models => {
    Produtos.belongsToMany(models.Produtos
        )
//}