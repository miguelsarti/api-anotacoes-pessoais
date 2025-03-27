import notaModel from "../models/notasModel.js";

class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar notas" });
    }
  }; 

  getAllById = async (req, res) => {
    const { id } = req.body;
      try {
        const notas = await notaModel.getAllById(id);
        res.json(notas);
      } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao buscar nota"})
      }
  };

  create = async (req, res) => {
    const { titulo, conteudo, favorita, cor } = req.body;

    try {
      if (!titulo) {
        return res.status(400).json({ erro: "O título, o conteúdo, a favorita e a cor são obrigatórios" });
      }

      const novaNota = await notaModel.create(titulo, conteudo, favorita, cor);
      res.status(201).json(novaNota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar uma nota" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, favorita, cor } = req.body;
    try {
      const notaAtualizada = await notaModel.update(
        Number(id),
        titulo,
        conteudo,
        favorita,
        cor
      );
      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }
      res.json(notaAtualizada);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao atualizar nota" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = notaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }

      res.status(200).send({ message: "Nota deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir nota" });
    }
  };
}
export default new NotaController();
