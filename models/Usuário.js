module.exports = (sequelize, DataTypes)=>{
    const Usuario = sequelize.define('Usuario', {
        id_usuario:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        senha:DataTypes.STRING
    },{
        tableName:'usuario',
        timestamps:false
    })

    return Usuario
}