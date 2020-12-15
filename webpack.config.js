const path = require('path')                                                //1
const HtmlWebpackPlugin = require('html-webpack-plugin')                    //2
const CopyWebpackPlugin = require('copy-webpack-plugin')
              
module.exports = {                                                          //3
    entry: './src/index.js',                                                //4
    output: {                                                               //5
        path: path.resolve(__dirname, 'dist'),                              //6
        filename: 'main.js'                                                 //7
    },
    resolve: {
        extensions: ['.js'],                                                //8
    },
    module: {                                                               //9
        rules: [                                                            //10
            {                                                               //11
                test: /\.js?$/,                                             //12
                exclude: /node_modules/,                                    //13
                use: {
                    loader: 'babel-loader',                                 //14

                }
            }
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin(
          {
            inject: true,
            template: './public/index.html',
            filename: './index.html',
          }
        ),
        new CopyWebpackPlugin({
          patterns: [
          { from: './src/styles/styles.css', to: ''},
        ]}),
      ],
    devtool: 'eval-cheap-source-map',
}


//1. Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
//2. Archivo necesario para trabajar con HTML.
//3. Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
//4. Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
//5. Donde se envía el proyecto estructurado y compilado listo para producción.
//6. Creamos el lugar dónde se exportará el proyecto.
//7. Este es el nombre del archivo final para producción.
//8. Extensiones que vamos a utilizar.
//9. Se crea un modulo con las reglas necesarias que vamos a utilizar.
//10. Reglas
//11. Estructura de Babel
//12. Nos permite identificar los archivos según se encuentran en nuestro entorno.
//13. Excluimos la carpeta de node modules
//14. Utilizar un loader como configuración establecida.
//15. Establecemos los plugins que vamos a utilizar
//16. Permite trabajar con los archivos HTML
//17. Cómo vamos a inyectar un valor a un archivo HTML.
//18. Dirección donde se encuentra el template principal
//19. El nombre que tendrá el archivo


// new CopyWebpackPlugin({
//   patterns: [
//     { from: './src/styles/styles.css', to: ''},
//   ],
// }),