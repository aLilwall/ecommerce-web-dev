function sucesso(res, dados, status) {
    const codigo = status || 200;

    res.status(codigo).json({
        mensagem: mensagem,
        dados: dados
    });
}