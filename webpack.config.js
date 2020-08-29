module.exports = {
    // entry -> Dizendo qual é o arquivo principal
    entry: ["@babel/polyfill", "./src/main.js"],
    // Dizendo para qual arquivo a conversão do ES6+ vai
    output: {
        // Pegando a raiz do nosso projeto
        path: __dirname + "/public/",
        filename: "bundle.js",
    },
    devServer: {
        // Caminho que utilizará para levantar o servidor
        contentBase: __dirname + "/public/",
    },
    module: {
        // Propriedade obrigatória, que mostra como o webpack deve se comportar quando o usuário estiver tentando importar outros arquivos js
        rules: [
            {
                // Toda vez então que tiver um novo arquivo js importado, o babel será executado automaticamente
                // Expressão Regular verificando se o arquivo terminar com .js
                test: /\.js$/,
                // Retirando a pasta node_modules da conversão
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};